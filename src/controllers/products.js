const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    // Buscador de productos
	buscarProducto: (id) => {
		let productoEncontrado;
		for (const product of products) {
			if (id == product.id) {
				productoEncontrado = product;
			}
		}
		return productoEncontrado;
	},

	// Encargado de guardar archivos
	guardarEnArchivo: () => {
		let productoJSON = JSON.stringify(products);
		fs.writeFileSync(productsFilePath, productoJSON);
	},
    products: function (req, res) {
        res.render('./users/products', { name: 'products' });
    },
    cart: function (req, res) {
        res.render('./users/productCar', { name: 'cart', title : 'Carrito' });
    },
    detail: function (req, res) {
		let productoEncontrado = controller.buscarProducto(req.params.id);
        res.render('./users/productDetail', { productoEncontrado, name: 'detail', title : 'Detalle producto' });
    },
    create: function (req, res) {
        res.render('./admin/productCreation', { name: 'create', title : 'Agregar producto' });
    },
    store: function (req, res) {
        let productoAgregado = req.body;
		productoAgregado.id = products.length + 1;
		if (req.file) {
			productoAgregado.image = req.file.filename;
		} else {
			productoAgregado.image = 'default-image.png';
		}
		products.push(productoAgregado);
		controller.guardarEnArchivo();
		res.redirect('/');
    },
    edit: function (req, res) {
        productoEncontrado = controller.buscarProducto(req.params.id);
        res.render('./admin/productEdition', { productoEncontrado, name: 'edit', title : 'Editar producto' });
    },
    update: function (req, res) {
        let productoEditado = controller.buscarProducto(req.params.id);
		productoEditado.name = req.body.name;
		productoEditado.price = req.body.price;
		productoEditado.discount = req.body.discount;
		productoEditado.category = req.body.category;
		productoEditado.description = req.body.description;
		productoEditado.image = req.file.filename;
		controller.guardarEnArchivo();
		res.redirect('/products');
    },
    delete: function (req, res) {
        let productoEncontrado = controller.buscarProducto(req.params.id);
		products = products.filter(function (product) {
			return product.id != productoEncontrado.id;
		})
		controller.guardarEnArchivo();
		res.redirect('/products');
    },
};

module.exports = controller;