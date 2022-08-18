module.exports = (sequelize, DataTypes) => {
    let alias = 'order';
    cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        total: {
            type: DataTypes.DECIMAL
        },
        user_id: {
            type: DataTypes.INTEGER
        }
    };
    let config = {
        timestamps: false
    };

    const Order = sequelize.define(alias, cols, config);

    Order.associate = function (models) {
        Order.belongsToMany(models.product, {
            as: 'products',
            through: 'orders_products',
            foreignKey: 'order_id',
            otherKey: 'product_id',
            timestamps: false
        }),
        Order.belongsTo(models.user, {
            as: 'user',
            foreignKey: 'user_id'
        })
    }

    return Order;
}