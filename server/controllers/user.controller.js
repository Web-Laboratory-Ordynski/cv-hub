const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const userModel = require('../models/user.model')
const refreshTokenModel = require('../models/refresh-token.model')
const { cvModelEducation } = require('../models/cv.model')

const getProjectsIDs = async (projects) => {
  projects.reduce(async (ids, currentObj) => {
    try {
      const obj = new cvModelEducation({
        ...currentObj
      })

      const res = await obj.save()

      return [...ids, res]
    } catch (err) {
      throw new Error(err)
    }
  }, [])
}

const getEducationsIDs = async (educations) => {
  educations.reduce(async (ids, currentObj) => {
    try {
      const obj = new cvModelEducation({
        currentObj
      })

      const res = await obj.save()

      return [...ids, res]
    } catch (err) {
      throw new Error(err)
    }
  }, [])
}

exports.register = async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  if (!username || username.length < 4) {
    return res.status(401).json({success: false, msg: 'Username length must be at least 4'})
  }

  if (!password || password.length < 8) {
    return res.status(401).json({success: false, msg: 'Password length must be at least 8'})
  }

  const isUsernameExist = await userModel.findOne({username})

  if (isUsernameExist) return res.status(403).json({success: false, msg: 'User with this username already exists'})

  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10)

    const user = new userModel({
      username,
      password: hashedPass
    })

    const createdUser = await user.save()
    const userToSend = { ...createdUser._doc }
    delete userToSend.password
    res.status(201).json({success: true, user: { ...userToSend }})
  } catch(err) {
    res.status(400).json({success: false, msg: err})
    throw err
  }
}

exports.login = async (req, res) => {
  const password = req.body.password

  if (!password || password.length < 8) {
    return res.status(403).json({success: false, msg: 'Password length must be at least 8'})
  }

  const user = await userModel.findOne({username: req.body.username})

  if (!user) {
    return res.status(403).send({success: false, msg: 'User with this username not found'})
  }

  const isPasswordRight = await bcrypt.compare(password, user.password)

  const date = new Date()

  if (isPasswordRight) {
    const accessToken = generateAccessToken({...user._doc, cv: null}, date)
    const refreshToken = await generateRefreshToken({...user._doc, cv: null}, date)
    
    const userToSend = { ...user._doc }
    delete userToSend.password

    return res.status(200).json({success: true, accessToken, refreshToken, user: { ...userToSend }})
  } else {
    return res.status(403).send({success: false, msg: 'Password is not valid'})
  }
}

exports.getNewTokenByRefreshToken = async (req, res) => {
  const refreshToken = req.body.refreshToken
  if (!refreshToken) return res.sendStatus(401)

  const isTokenExists = await refreshTokenModel.findOne({refreshToken})
  if (!isTokenExists) return res.sendStatus(403)

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, data) => {
    if (err) return res.sendStatus(403)
    const user = await userModel.findOne({_id: data.user._id})
    const accessToken = generateAccessToken(user, new Date())
    res.status(200).json({accessToken, user})
  })
}

exports.logout = async (req, res) => {
  await refreshTokenModel.deleteOne({refreshToken: req.body.refreshToken})

  res.sendStatus(204)
}

exports.editCV = async (req, res) => {
  const user = await userModel.findOne({_id: req.user._id})
  const cv = req.body.cv

  if (user) {
    
    user.cv.position = cv.position
    user.cv.jobDesc = cv.jobDesc
    user.cv.userInfo = cv.userInfo

    const projectsIds = await getProjectsIDs(cv.projects)
    const educationsIds = await getEducationsIDs(cv.education)

    try {
      console.log(projectsIds)
      console.log(educationsIds)
      user.education = educationsIds
      await user.save()
      res.status(200).json({success: true, user: await userModel.findOne({_id: req.user._id}).populate('education')})
    } catch (err) {
      console.log(err)
      res.status(400).json({success: false})
    }
  }
}

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
    if (err) return res.sendStatus(403)
    req.user = data.user
    next()
  })
}

function generateAccessToken(user, date) {
  return jwt.sign({user, createdAt: date}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}

async function generateRefreshToken(user, date) {
  const refreshToken = jwt.sign({user, createdAt: date},process.env.REFRESH_TOKEN_SECRET)
  await new refreshTokenModel({refreshToken}).save()
  return refreshToken
}