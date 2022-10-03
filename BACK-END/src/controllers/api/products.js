const db = require('../../database/models');
const Products = db.product;
const Categories = db.category;
const Brands = db.brand;

const controller = {

    list: (req, res) => {
        let categories = Categories.findAll({ include: 'products' });
        let products = Products.findAll({ include: [{ association: 'category' }, { association: 'brand' }] });

        Promise.all([categories, products])
            .then(function ([categories, products]) {
                let countByCategory = {}
                categories.forEach(c => { countByCategory[c.type] = c.products.length })
                let productsDetail = products.map(p => (
                    {
                        id: p.id,
                        name: p.name,
                        description: p.description,
                        relations: [p.category.type, p.brand.name],
                        detail: `http://localhost:3000/api/products/detail/${p.id}`
                    }
                ))
                return res.status(200).json(
                    {
                        category: {
                            countByCategory,
                        },
                        products: productsDetail,
                    }
                )
            })
    },

    detail: (req, res) => {
        Products.findByPk(req.params.id, { include: [{ association: 'category' }, { association: 'brand' }] })
            .then(product => {
                const url = '/img/products/';
                return res.status(200).json(
                    {
                    product,
                    relations: [product.category.type, product.brand.name],
                    images: {
                        image_primary: `${url}${product.image_primary}`,
                        image_secondary: `${url}${product.image_secondary}`,
                        image_tertiary: `${url}${product.image_tertiary}`,
                    }
                    }
                    )
            })
    }
}
module.exports = controller;