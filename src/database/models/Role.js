module.exports = (sequelize, DataTypes) => {
    let alias = 'role';
    let cols = {
        id: {
            type: DataTypes.INTEGER
        },
        type: {
            type: DataTypes.STRING
        }
    };
    let config = {
        timestamps: false
    };

    const Role = sequelize.define(alias, cols, config);

    Role.associate = function (models) {
        Role.hasMany(models.user, {
            as: 'users',
            foreignKey: 'role_id'
        })
    }

    return Role;
}