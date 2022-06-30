const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/img/products'));
    },

    filename : (req, file, cb) => {
        const newFileName = 'img-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    },
});

const upload = multer({ storage });

const productsController = require('../controllers/products');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.products);

/*** PRODUCTS CART ***/ 
router.get('/cart', productsController.cart);

/*** DETAIL ONE PRODUCT ***/
router.get('/detail/:id', productsController.detail);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create);
router.post('/create', upload.array('image'), productsController.store);

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit', productsController.edit);
router.put('/edit/:id', productsController.update);

/*** DELETE ONE PRODUCT ***/ 
router.delete('/:id', productsController.delete); 

module.exports = router;