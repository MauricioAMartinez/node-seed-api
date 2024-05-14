const { storagesModel } = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL || 'http://localhost:3000'

const getItems = async (req, res) => {
  const data = await storagesModel.find({})
  res.send({ data })
}
const postItem = async (req, res) => {
  const { body, file } = req
  const fileData = {
    name: file.filename,
    url: `${PUBLIC_URL}/storage/${file.filename}`
    path: file.path
  }
}
const updateItem = async (req, res) => {

}
const deleteItem = async (req, res) => {

}

module.exports = {
  getItems,
  postItem,
  updateItem,
  deleteItem
}
