const { tracksModel } = require('../models')

const getItems = async (req, res) => {
  const data = await tracksModel.find({})
  res.send({ data })
}
const postItem = async (req, res) => {
  const { body } = req
  const data = await tracksModel.create(body)
  res.send({ data })
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
