const db = require('../../database/models');

const Brands = db.brand;

const controller = {
    list: function (req, res) {
        Brands.findAll({ include: 'products' })
        .then(function (brands) {
            res.status(200).json({
                total: brands.length,
                status: 200,
                brands,
            })
        })
    },
    detail: function (req, res) {
        Brands.findByPk(req.params.id)
        .then(function (product) {
            res.status(200).json({
                status: 200,
                data: product,
            })
        })
    },
};

module.exports = controller;