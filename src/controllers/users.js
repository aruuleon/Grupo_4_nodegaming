const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs')

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const categoriesFilePath = path.join(__dirname, '../data/categoriesDataBase.json');
let categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));

const controller = {
    buscarUsuario: (id) => {
		let usuarioEncontrado;
		for (const user of users) {
			if (id == user.id) {
				usuarioEncontrado = user;
			}
		}
		return usuarioEncontrado;
	},
    guardarEnArchivo: () => {
		let userJSON = JSON.stringify(users);
		fs.writeFileSync(usersFilePath, userJSON);
	},
    login: function (req, res) {
        res.render('./users/login', { name: 'login', title : 'LOGIN' });
    },
    procesoLogin: function (req, res){
        let emailEncontrado = req.body.email;
		for (const user of users) {
			if (emailEncontrado == user.email) {
                let comparar = bcryptjs.compareSync(req.body.password, user.password);
                if (comparar) {
                    res.render('./users/categories', { categories, name: 'categories', title: 'CATEGORIAS' });
                } else {
                    res.render('./users/login', { name: 'login', title: 'LOGIN' });
                }
            }
		}
    },
    index: function (req, res) {
        res.render('./users/login', { name: '', title : '' });
    },
    detail: function (req, res) {
        res.render('./users/login', { name: '', title : '' });
    },
    register: function (req, res) {
        res.render('./users/register', { name: 'register', title : 'REGISTRARSE' });
    },
    store: function (req, res) {
        let usuarioAgregado = req.body;
        usuarioAgregado.password = bcryptjs.hashSync(req.body.password, 10);
		usuarioAgregado.id = users.length + 1;
        usuarioAgregado.image = req.file.filename;
        users.push(usuarioAgregado);
		controller.guardarEnArchivo();
		res.redirect('/');
    },
    edit: function (req, res) {
        res.render('./users/login', { name: '', title : '' });
    },
    update: function (req, res) {
        let usuarioEditado = controller.buscarUsuario(req.params.id);
		let unArchivo = req.file;
		let variosArchivos = req.files;
		usuarioEditado.firstname = req.body.firstname;
		usuarioEditado.lastname = req.body.lastname;
		usuarioEditado.phone = req.body.phone;
		usuarioEditado.image = req.file.filename;
	
        res.render('./users/register', { name: '', title : '' });
    },
    delete: function (req, res) {
        res.render('./users/login', { name: '', title : '' });
    },
};


module.exports = controller;