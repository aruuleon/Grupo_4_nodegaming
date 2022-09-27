const express = require('express');
const router = express.Router();

const productsRoutes = require('../../controllers/api/products');

router.get('/', productsRoutes.list);
router.get('/detail/:id', productsRoutes.detail);

module.exports = router