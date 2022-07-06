const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    index: function (req, res) {
        res.render('./users/index', { name: 'index', title: 'HOME' });
    },
    search: function (req, res) {
        let palabraClave = req.query.keyword;
		let productsFound = [];
		for (let product of products) {
			if (product.name.toUpperCase().includes(palabraClave.toUpperCase())) {
				productsFound.push(product);
			}
		}
		res.render('./users/search', { palabraClave, products: productsFound, name: 'products', title: 'RESULTADOS' });
    },

};
module.exports = controller;