const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const dbConnect = async () => {
  try {
    const DB_URI = process.env.DB_URI
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connected to the database')
  } catch (err) {
    console.error('Error connecting to the database:', err)
  }
}

module.exports = { dbConnect }
