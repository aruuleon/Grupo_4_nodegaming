const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const Products = db.product;
const Categories = db.category;
const Brands = db.brand;

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const categoriesFilePath = path.join(__dirname, '../data/categories.json');
let categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));

const controller = {
	
	// buscarProducto: (id) => {
	// 	let productoEncontrado;
	// 	for (const product of products) {
	// 		if (id == product.id) {
	// 			productoEncontrado = product;
	// 		}
	// 	}
	// 	return productoEncontrado;
	// },
	// guardarEnArchivo: () => {
	// 	let productoJSON = JSON.stringify(products);
	// 	fs.writeFileSync(productsFilePath, productoJSON);
	// },

    products: function (req, res) {
		Products.findAll()
		.then(function(products){
			res.render('./users/products', { products, name: 'products', title: 'PRODUCTOS' });
		})
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
		Products.findByPk(req.params.id)
		.then((product)=>{
			res.render('./users/productDetail', { product, name: 'detail', title: 'DETALLE' });
		})
    },
    create: function (req, res) {
		let categories = Categories.findAll();
		let brands = Brands.findAll();

		Promise.all([categories, brands])
		.then(function ([categories, brands]) {
			res.render('./admin/productCreation', { categories, brands, name: 'create', title: 'AGREGAR' });
		})
    },
    store: function (req, res) {
        let productToCreate = {
			...req.body,
			image_primary: req.files.image_primary[0].filename,
			image_secondary: req.files.image_secondary[0].filename,
			image_tertiary: req.files.image_tertiary[0].filename,
		}
		Products.create(productToCreate)
		.then(function () {
			res.redirect('/');
		})
    },
    edit: function (req, res) {
        let product = Products.findByPk(req.params.id);
		let categories = Categories.findAll();
		let brands = Brands.findAll();

		Promise.all([product, categories, brands])
		.then(function ([product, categories, brands]) {
			res.render('./admin/productEdition', { product, categories, brands, name: 'edit', title: 'EDITAR' });
		});
    },
    update: function (req, res) {
		Products.update(req.body, {
			where: {
				id: req.params.id
			}
		})
		.then(function () {
			res.redirect('/products/detail/' + req.params.id);
		})
    },
    delete: function (req, res) {
		Products.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(()=>{
			res.redirect('/');
		})
		
	},
};

module.exports = controller;

// 		   let unArchivo = req.file;
		// let variosArchivos = req.files;
		// productoAgregado.id = products.length + 1;
		// if (unArchivo) {
		// 	productoAgregado.image = [unArchivo.filename];
		// } else if (variosArchivos) {
		// 	productoAgregado.image = [];
		// 	for (const archivo of variosArchivos) {
		// 		productoAgregado.image.unshift(archivo.filename);
		// 	}
		// }
		// products.push(productoAgregado);
		// controller.guardarEnArchivo();
		// res.redirect('/');