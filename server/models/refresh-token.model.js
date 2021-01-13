const mongoose = require('mongoose')

const refreshTokenSchema = mongoose.Schema({
  refreshToken: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('RefreshToken', refreshTokenSchema)