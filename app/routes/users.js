const express = require('express')
const router = express.Router()
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/users')

router.post('/', createUser)
router.get('/', getUsers)
router.get('/:id', getUserById)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router
