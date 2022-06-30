const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    index: function (req, res) {
        res.render('./users/index', { name: 'index', title : 'Home' });
    },
    search: function (req, res) {
        
    },

};
module.exports = controller;