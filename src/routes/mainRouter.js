const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/productCar', mainController.productCar);
router.get('/productCreation', mainController.productCreation);
router.get('/productDetail', mainController.productDetail);
router.get('/productEdition', mainController.productEdition);
router.get('/register', mainController.register);

module.exports = router