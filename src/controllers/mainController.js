const mainController = {
    index: function (req, res) {
        res.render('./users/index', { nombre: 'index' });
    },
    login: function (req, res) {
        res.render('./users/login', { nombre: 'login' });
    },
    productCar: function (req, res) {
        res.render('./users/productCar', { nombre: 'productCar' });
    },
    productCreation: function (req, res) {
        res.render('./products/productCreation', { nombre: 'productCreation' });
    },
    productDetail: function (req, res) {
        res.render('./users/productDetail', { nombre: 'productDetail' });
    },
    productEdition: function (req, res) {
        res.render('./products/productEdition', { nombre: 'productEdition' });
    },
    register: function (req, res) {
        res.render('./users/register', { nombre: 'register' });
    },
};

module.exports = mainController;