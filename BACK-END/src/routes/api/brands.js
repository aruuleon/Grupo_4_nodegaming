const express = require('express');
const router = express.Router();

const brandsController = require('../../controllers/api/brands');

router.get('/', brandsController.list);
// router.get('/detail/:id', brandsController.detail);
// router.post('/create', brandsController.create);
// router.put('/update/:id', brandsController.update);
// router.delete('/destroy/:id', brandsController.destroy);

module.exports = router;