const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
},
{
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('users', userSchema)
