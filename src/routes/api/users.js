const express = require('express');
const router = express.Router();

const userRoutes = require('../../controllers/api/users');

router.get('/', userRoutes.list);
router.get('/detail/:id', userRoutes.detail);

module.exports = router