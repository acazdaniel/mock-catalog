const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemController')
router.get('/12345/items/search', controller.get)
module.exports = router;