const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const Products = db.product;

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    index: function (req, res) {
        res.render('./users/index', { name: 'index', title: 'HOME' });
    },
    search: function (req, res) {
		Products.findAll()
		.then(function (products) {
			let palabraClave = req.query.keyword;
			let productsFound = [];
			for (let product of products) {
				if (product.name.toUpperCase().includes(palabraClave.toUpperCase())) {
					productsFound.push(product);
				}
			}
			res.render('./users/search', { palabraClave, products: productsFound, name: 'products', title: 'RESULTADOS' });
		})
        
    },
};

module.exports = controller;