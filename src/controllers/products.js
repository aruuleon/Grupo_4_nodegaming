const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const categoriesFilePath = path.join(__dirname, '../data/categoriesDataBase.json');
let categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));

const controller = {
	buscarProducto: (id) => {
		let productoEncontrado;
		for (const product of products) {
			if (id == product.id) {
				productoEncontrado = product;
			}
		}
		return productoEncontrado;
	},
	guardarEnArchivo: () => {
		let productoJSON = JSON.stringify(products);
		fs.writeFileSync(productsFilePath, productoJSON);
	},
    products: function (req, res) {
		products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./users/products', { products, name: 'products', title: 'PRODUCTOS' });
    },
	category: function (req, res) {
		products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./users/categories', { categories, name: 'categories', title: 'CATEGORIAS' });
    },
	productsXCategory: function (req, res) {
		let category = (req.params.categoryName).toUpperCase();
		products = products.filter(function (product) {
			return (product.category).toUpperCase() == category;
		})
        res.render('./users/products', { products, name: 'products', title: category });
    },
    cart: function (req, res) {
        res.render('./users/productCar', { name: 'cart', title: 'CARRITO' });
    },
    detail: function (req, res) {
		let productoEncontrado = controller.buscarProducto(req.params.id);
        res.render('./users/productDetail', { productoEncontrado, name: 'detail', title: 'DETALLE' });
    },
    create: function (req, res) {
        res.render('./admin/productCreation', { name: 'create', title: 'AGREGAR' });
    },
    store: function (req, res) {
        let productoAgregado = req.body;
		let unArchivo = req.file;
		let variosArchivos = req.files;
		productoAgregado.id = products.length + 1;
		if (unArchivo) {
			productoAgregado.image = [unArchivo.filename];
		} else if (variosArchivos) {
			productoAgregado.image = [];
			for (const archivo of variosArchivos) {
				productoAgregado.image.unshift(archivo.filename);
			}
		}
		products.push(productoAgregado);
		controller.guardarEnArchivo();
		res.redirect('/');
    },
    edit: function (req, res) {
        let productoEncontrado = controller.buscarProducto(req.params.id);
        res.render('./admin/productEdition', { productoEncontrado, name: 'edit', title: 'EDITAR' });
    },
    update: function (req, res) {
        let productoEditado = controller.buscarProducto(req.params.id);
		let unArchivo = req.file;
		let variosArchivos = req.files;
		productoEditado.name = req.body.name;
		productoEditado.brand = req.body.brand;
		productoEditado.category = req.body.category;
		productoEditado.description = req.body.description;
		productoEditado.price = req.body.price;
		productoEditado.discount = req.body.discount;
		productoEditado.stock = req.body.stock;
		productoEditado.image = [];
		if (unArchivo) {
			productoEditado.image = [unArchivo.filename];
		} else if (variosArchivos) {
			for (const archivo of variosArchivos) {
				productoEditado.image.unshift(archivo.filename);
			}
		}
		controller.guardarEnArchivo();
		res.redirect('/');
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