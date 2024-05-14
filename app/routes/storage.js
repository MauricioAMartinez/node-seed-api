const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/hundleStorage')
const { getItems, postItem, updateItem, deleteItem } = require('../controllers/storage')




router.post('/', uploadMiddleware,postItem)


 module.exports = router;