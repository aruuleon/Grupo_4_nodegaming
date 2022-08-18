module.exports = (sequelize, DataTypes) => {
    let alias = 'product';
    cols = {
        id: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.DECIMAL
        },
        discount: {
            type: DataTypes.INTEGER
        },
        stock: {
            type: DataTypes.INTEGER
        },
        image_primary: {
            type: DataTypes.STRING
        },
        image_secondary: {
            type: DataTypes.STRING
        },
        image_tertiary: {
            type: DataTypes.STRING
        },
        category_id: {
            type: DataTypes.INTEGER
        },
        brand_id: {
            type: DataTypes.INTEGER
        }
    };
    let config = {
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.brand, {
            as: 'brand',
            foreignKey: 'brand_id'
        }),
        Product.belongsTo(models.category, {
            as: 'category',
            foreignKey: 'category_id'
        }),
        Product.belongsToMany(models.order, {
            as: 'orders',
            through: 'orders_products',
            foreignKey: 'product_id',
            otherKey: 'order_id',
            timestamps: false
        })
    }

    return Product;
}