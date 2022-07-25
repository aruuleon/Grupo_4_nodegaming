const express = require('express');
const router = express.Router();

// Requerir los controladores.
const productsController = require('../controllers/products');

const upload = require('../middlewares/products/multerMiddleware');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.products);

router.get('/category', productsController.category);

router.get('/category/:categoryName', productsController.productsXCategory);

/*** PRODUCTS CART ***/ 
router.get('/cart', productsController.cart);

/*** DETAIL ONE PRODUCT ***/
router.get('/detail/:id', productsController.detail);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create);
router.post('/create', upload.array('image'), productsController.store);

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', upload.array('image'), productsController.update);

/*** DELETE ONE PRODUCT ***/ 
router.delete('/delete/:id', productsController.delete);

module.exports = router;