module.exports = (sequelize, dataTypes) => {
    let alias = 'brand';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING,
        },
    };
    let config = {
        timestamps: false
    };

    const Brand = sequelize.define(alias, cols, config);

    Brand.associate = function (models) {
        Brand.hasMany(models.product, {
            as: 'products',
            foreignKey: 'brand_id',
        })
    }

    return Brand;
}