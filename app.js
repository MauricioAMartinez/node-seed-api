require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { dbConnect } = require('./config/mongo')
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/api/v1', require('./app/routes'))

dbConnect()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
