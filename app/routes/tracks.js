const express = require('express')
const { getItems, postItem, updateItem, deleteItem } = require('../controllers/tracks')
const router = express.Router()

router.get('/', getItems)
router.post('/', postItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

module.exports = router
