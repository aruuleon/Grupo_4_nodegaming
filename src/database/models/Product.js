module.exports = (sequelize, dataTypes) => {
    let alias = 'product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING,
        },
        description: {
            type: dataTypes.TEXT,
        },
        price: {
            type: dataTypes.DECIMAL,
        },
        discount: {
            type: dataTypes.INTEGER,
        },
        stock: {
            type: dataTypes.INTEGER,
        },
        image_primary: {
            type: dataTypes.STRING,
        },
        image_secondary: {
            type: dataTypes.STRING,
        },
        image_tertiary: {
            type: dataTypes.STRING,
        },
        category_id: {
            type: dataTypes.INTEGER,
        },
        brand_id: {
            type: dataTypes.INTEGER,
        },
    };
    let config = {
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.category, {
            as: 'category',
            foreignKey: 'category_id',
        }),
        Product.belongsTo(models.brand, {
            as: 'brand',
            foreignKey: 'brand_id',
        }),
        Product.belongsToMany(models.order, {
            as: 'orders',
            through: 'orders_products',
            foreignKey: 'product_id',
            otherKey: 'order_id',
            timestamps: false,
        })
    }

    return Product;
}