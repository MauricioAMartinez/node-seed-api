const { httpError } = require('../helpers/handleError')
const userModel = require('../models/nosql/users')

const getUsers = async (req, res) => {
  try {
    const listUsers = await userModel.find({})
    res.status(200).send(listUsers)
  } catch (error) {
    httpError(res, error)
  }
}
const getUserById = (req, res) => {

}
const createUser = async (req, res) => {
  try {
    const { name, age, email } = req.body
    const resDetail = await userModel.create({ name, age, email })
    res.status(201).send(resDetail)
  } catch (error) {
    httpError(res, error)
  }
}
const updateUser = (req, res) => {

}
const deleteUser = (req, res) => {

}

module.exports = { getUserById, getUsers, createUser, updateUser, deleteUser }
