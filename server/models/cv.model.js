const mongoose = require('mongoose')

const cvModelUserInfo = mongoose.Schema({
  adress: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  social: [
    mongoose.Schema({
      name: {
        type: String
      },
      url: {
        type: String
      },
      desc: {
        type: String
      }
    })
  ]
})

const cvModelTechnologies = mongoose.Schema({
  groupName: {
    type: String
  },
  technologies: [
    mongoose.Schema({
      name: {
        type: String
      },
      level: {
        type: Number
      },
    })
  ]
})

const cvModelProjects = mongoose.Schema({
  creator: {
    type: String
  }, 
  name: {
    type: String
  },
  desc: {
    type: String
  },
  position: {
    type: String
  },
  technologies: [
    mongoose.Schema({
      groupName: {
        type: String
      },
      technologies: {
        type: [String]
      },
    })
  ]
})

const cvModelExprerience = mongoose.Schema({
  name: {
    type: String
  },
  position: {
    type: String
  },
  startedWork: {
    type: String
  },
  areYouCurentlyWorking: {
    type: Boolean
  },
  endWork: {
    type: String
  },
})

const cvModelEducation = mongoose.Schema({
  name: {
    type: String
  },
  startedWork: {
    type: String
  },
  areYouCurentlyStuding: {
    type: Boolean
  },
  endWork: {
    type: String
  },
})


const cvModel = mongoose.Schema({
  userId: {
    type: String
  },
  position: {
    type: String
  },
  jobDesc: {
    type: String
  },
  projects: [cvModelProjects],
  userInfo: cvModelUserInfo,
  technologies: [cvModelTechnologies],
  exprerience: [cvModelExprerience],
  education: [cvModelEducation],
})

module.exports = mongoose.model('CV', cvModel)