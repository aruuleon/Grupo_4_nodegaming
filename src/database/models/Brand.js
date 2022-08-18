module.exports = (sequelize, DataTypes) => {
    let alias = 'brand';
    let cols = {
        id: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        
    };
    let config = {
        timestamps: false
    };

    const Brand = sequelize.define(alias, cols, config);

    Brand.associate = function (models) {
        Brand.hasMany(models.product, {
            as: 'product',
            foreignKey: 'brand_id'
        })
    }

    return Brand;
}