const db = require('../../database/models');
const Products = db.product;
const Categories = db.category;
const Brands = db.brand;

const constroller = {
    products: (req, res) => {
        Products.findAll()
            .then(products => {
                return res.status(200).json({
                    
                })
            })
    }
}
module.exports = controller;