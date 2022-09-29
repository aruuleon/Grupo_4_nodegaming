const express = require('express');
const router = express.Router();

const categoriesController = require('../../controllers/api/categories');

router.get('/', categoriesController.list);
// router.get('/detail/:id', brandsController.detail);
// router.post('/create', brandsController.create);
// router.put('/update/:id', brandsController.update);
// router.delete('/destroy/:id', brandsController.destroy);

module.exports = router;