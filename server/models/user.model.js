const mongoose = require('mongoose')
const cvModel = require('./cv.model')

const userSchema = new mongoose.Schema({
  username: {
    required: true,
    unique: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  email: {
    type: String
  },
  userImg: {
    type: String,
    default: ''
  },
  cv: cvModel.schema
}, { timestamps: true, collection: 'users' })


module.exports = mongoose.model('User', userSchema)