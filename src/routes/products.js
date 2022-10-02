const express = require('express');
const router = express.Router();

// Requerir los controladores.
const productsController = require('../controllers/products');

const upload = require('../middlewares/products/multerMiddleware');
const validationStore = require('../middlewares/products/validateStoreMiddleware')

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.products);

router.get('/category', productsController.category);

router.get('/category/:id', productsController.productsXCategory);

/*** PRODUCTS CART ***/ 
router.get('/cart', productsController.cart);

/*** DETAIL ONE PRODUCT ***/
router.get('/detail/:id', productsController.detail);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create);
router.post('/create', upload.fields([{name:'image_primary'}, {name: 'image_secondary'}, {name:'image_tertiary'}]), validationStore, productsController.store);

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', upload.fields([{name:'image_primary'}, {name: 'image_secondary'}, {name:'image_tertiary'}]), validationStore, productsController.update);

/*** DELETE ONE PRODUCT ***/ 
router.delete('/delete/:id', productsController.delete);

module.exports = router;