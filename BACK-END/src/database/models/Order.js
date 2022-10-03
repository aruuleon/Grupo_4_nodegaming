module.exports = (sequelize, dataTypes) => {
    let alias = 'order';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        total: {
            type: dataTypes.DECIMAL,
        },
        user_id: {
            type: dataTypes.INTEGER,
        },
    };
    let config = {
        timestamps: false
    };

    const Order = sequelize.define(alias, cols, config);

    Order.associate = function (models) {
        Order.belongsTo(models.user, {
            as: 'user',
            foreignkey: 'user_id',
        }),
        Order.belongsToMany(models.product, {
            as: 'products',
            through: 'orders_products',
            foreignkey: 'order_id',
            otherKey: 'product_id',
            timestamps: false,
        })
    }

    return Order;
}