const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    login: function (req, res) {
        res.render('./users/login', { name: 'login', title : 'Login' });
    },
    index: function (req, res) {
        res.render('./users/login', { nombre: 'login' });
    },
    detail: function (req, res) {
        res.render('./users/login', { name: 'productDetail', title : 'Detalle del producto' });
    },
    register: function (req, res) {
        res.render('./users/register', { name: 'register', title : 'Registrarse' });
    },
    store: function (req, res) {
        res.render('./users/login', { nombre: 'login' });
    },
    edit: function (req, res) {
        res.render('./users/login', { nombre: 'login' });
    },
    update: function (req, res) {
        res.render('./users/register', { nombre: 'register' });
    },
    delete: function (req, res) {
        res.render('./users/login', { nombre: 'login' });
    },
};

module.exports = controller;