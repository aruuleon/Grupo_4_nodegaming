module.exports = (sequelize, DataTypes) => {
    let alias = 'category';
    cols = {
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

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        Category.hasMany(models.product, {
            as: 'product',
            foreignKey: 'category_id'
        })
    }

    return Category;
}