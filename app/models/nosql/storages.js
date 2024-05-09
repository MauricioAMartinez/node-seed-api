const mongoose = require('mongoose')

const storageSchema = new mongoose.Schema({
  url: {
    type: String
  },
  fileName: {
    type: Number
  }
},
{
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('storages', storageSchema)
