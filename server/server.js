require('dotenv').config()
const PORT = 5000
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/routes')

const app = express()

app.use(morgan('common'))

app.use(express.json())
app.use(cors())
app.use('/api', routes)

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.futoz.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) {
      throw new err
    }
    console.log('db connected')
  }
)

app.listen(PORT, () => console.log('Server started'))
