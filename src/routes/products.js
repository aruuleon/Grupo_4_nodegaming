const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/img/products'));
    },

    filename : (req, file, cb) => {
        let date = Date.now();
        let random = Math.round(Math.random() * 1E9);
        let extname = path.extname(file.originalname);
        const newFileName = `img-${date}${random}${extname}`;
        cb(null, newFileName);
    },
});

const upload = multer({ storage });

const productsController = require('../controllers/products');

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