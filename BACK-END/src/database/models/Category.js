module.exports = (sequelize, dataTypes) => {
    let alias = 'category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        type: {
            type: dataTypes.STRING,
        },
        image: {
            type: dataTypes.STRING,
        },
    };
    let config = {
        timestamps: false
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        Category.hasMany(models.product, {
            as: 'products',
            foreignKey: 'category_id',
        })
    }

    return Category;
}