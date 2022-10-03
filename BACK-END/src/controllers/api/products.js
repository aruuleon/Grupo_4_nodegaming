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
                const url = 'http://localhost:3000/api/products/detail/';
                let countByCategory = {}
                categories.forEach(c => { countByCategory[c.type] = c.products.length })
                let productsDetail = products.map(p => (
                    {
                        id: p.id,
                        name: p.name,
                        description: p.description,
                        relations: [p.category.type, p.brand.name],
                        image: `http://localhost:3000/img/products/${p.image_primary}`,
                        detail: `${url}${p.id}`
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
                const url = 'http://localhost:3000/img/products/';
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