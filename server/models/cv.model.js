const mongoose = require('mongoose')

const cvModelUserInfo = mongoose.Schema({
  name: {
    type: String
  },
  surname: {
    type: String
  },
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

const cvModelTechnologiesGroups = mongoose.Schema({
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
  siteUrl: {
    type: String
  },
  // for example github repository url
  codeUrl: { 
    type: String
  },
  technologiesGroups: [
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

const cvModelExperience = mongoose.Schema({
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
  technologiesGroups: [cvModelTechnologiesGroups],
  experience: [cvModelExperience],
  education: [cvModelEducation],
})

module.exports = mongoose.model('CV', cvModel)