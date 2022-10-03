const db = require('../../database/models');

const Categories = db.category;

const controller = {
    list: function (req, res) {
        Categories.findAll({ include: 'products' })
        .then(function (categories) {
            res.status(200).json({
                total: categories.length,
                categories,
            })
        })
    },
    detail: function (req, res) {
        Categories.findByPk(req.params.id)
        .then(function (product) {
            res.status(200).json({
                status: 200,
                data: product,
            })
        })
    },
};

module.exports = controller;