const PORT = 5000
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const baseRoutes = require('./routes/base-routes')

const app = express()

app.use(morgan('common'))

app.use(bodyParser.json())

app.use('/api', baseRoutes)

app.listen(PORT, () => console.log('Server started'))
