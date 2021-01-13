const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
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
    unique: true,
    type: String,
    default: ''
  },
  userImg: {
    type: String,
    default: ''
  }
}, { timestamps: true, collection: 'users' })

module.exports = mongoose.model('User', userSchema)