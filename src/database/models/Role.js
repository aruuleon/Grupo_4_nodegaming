module.exports = (sequelize, dataTypes) => {
    let alias = 'role';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        type: {
            type: dataTypes.STRING,
        },
    };
    let config = {
        timestamps: false
    };

    const Role = sequelize.define(alias, cols, config);

    Role.associate = function (models) {
        Role.hasMany(models.user, {
            as: 'users',
            foreignKey: 'role_id',
        })
    }

    return Role;
}