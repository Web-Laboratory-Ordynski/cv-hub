const express = require('express')
const router = express.Router()
const userContoller = require('../controllers/user.controller')

router.post('/login', userContoller.login)

router.post('/register', userContoller.register)

router.post('/get-new-token', userContoller.getNewTokenByRefreshToken)

router.get('/secured-data', userContoller.authenticateToken, (req, res) => res.send('Secured data'))

router.put('/edit-cv', userContoller.authenticateToken, userContoller.editCV)

module.exports = router
