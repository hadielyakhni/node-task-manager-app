const mongoose = require('mongoose')

const connectionURL = process.env.MONGODB_URL

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

mongoose.connect(connectionURL, options)

console.log('mongoose connected')