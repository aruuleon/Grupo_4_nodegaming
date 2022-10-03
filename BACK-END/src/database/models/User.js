module.exports = (sequelize, dataTypes) => {
    let alias = 'user';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        firstname: {
            type: dataTypes.STRING,
        },
        lastname: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        phone: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,
        },
        avatar: {
            type: dataTypes.STRING,
        },
        role_id: {
            type: dataTypes.INTEGER,
        },
    };
    let config = {
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsTo(models.role, {
            as: 'role',
            foreignKey: 'role_id',
        }),
        User.hasMany(models.order, {
            as: 'orders',
            foreignKey: 'user_id',
        })
    }

    return User;
}