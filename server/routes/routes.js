const express = require('express')
const router = express.Router()
const userContoller = require('../controllers/user.controller')

router.post('/login', userContoller.login)

router.post('/register', userContoller.register)

module.exports = router
