require('dotenv').config()
const PORT = 5000
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongodb = require('mongodb')

const baseRoutes = require('./routes/base-routes')

const app = express()

app.use(morgan('common'))

app.use(bodyParser.json())

app.use('/api', baseRoutes)

mongodb.connect(
  `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.futoz.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`,
  {
    useUnifiedTopology: true
  },
  (err) => {
    if (err) {
      throw new err
    }
    console.log('db connected')
    app.listen(PORT, () => console.log('Server started'))
  }
)

