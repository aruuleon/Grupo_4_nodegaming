module.exports = (sequelize, DataTypes) => {
    let alias = 'user';
    cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        firstname: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        avatar: {
            type: DataTypes.STRING
        },
        role_id: {
            type: DataTypes.INTEGER
        }
    };
    let config = {
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsTo(models.role, {
            as: 'role',
            foreignKey: 'role_id'
        }),
        User.hasMany(models.order, {
            as: 'orders',
            foreignKey: 'user_id'
        })
    }

    return User;
}