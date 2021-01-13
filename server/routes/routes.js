const express = require('express')
const router = express.Router()
const userContoller = require('../controllers/user.controller')

router.post('/login', userContoller.login)

router.post('/register', userContoller.register)

router.get('/secured-data', userContoller.authenticateToken, (req, res) => res.send('Secured data'))

module.exports = router
