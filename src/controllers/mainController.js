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
        res.render('./products/productEdition', { nombre: 'productEdition', productos: productos });
    },
    register: function (req, res) {
        res.render('./users/register', { nombre: 'register' });
    },
};

const productos = {
    nombre : 'Placa de Video MSI GeForce RTX 2060 6GB GDDR6 VENTUS GP OC',
    categoria : 'Placa de video',
    caracteristicas : 'Caracteristicas ..',
    imagen : '/img/productDetail/placa1.jpg',
    id: 01,
    precio: 99000,
    stock: 15,
}

module.exports = mainController;