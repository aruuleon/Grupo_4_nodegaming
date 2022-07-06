const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    login: function (req, res) {
        res.render('./users/login', { name: 'login', title : 'LOGIN' });
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
        res.render('./users/login', { name: '', title : '' });
    },
    edit: function (req, res) {
        res.render('./users/login', { name: '', title : '' });
    },
    update: function (req, res) {
        res.render('./users/register', { name: '', title : '' });
    },
    delete: function (req, res) {
        res.render('./users/login', { name: '', title : '' });
    },
};

module.exports = controller;