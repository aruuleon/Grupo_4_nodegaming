const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main');

router.get('/', mainController.index);
router.get('/search', mainController.search);

module.exports = router;