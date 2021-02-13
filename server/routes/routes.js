const express = require('express')
const router = express.Router()
const userContoller = require('../controllers/user.controller')
const pdfController = require('../controllers/pdf.controller')

router.post('/login', userContoller.login)

router.post('/register', userContoller.register)

router.post('/get-new-token', userContoller.getNewTokenByRefreshToken)

router.put('/edit-cv', userContoller.authenticateToken, userContoller.editCV)

router.post('/pdf-gen', pdfController.generatePdf)

module.exports = router