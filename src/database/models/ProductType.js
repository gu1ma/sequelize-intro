module.exports = (sequelize, dataTypes) => {

    const ProductType = sequelize.define(
        'ProductType', 
        {
            // Model attributes are defined here
          id: {
            type: dataTypes.INTEGER,
            primaryKey: true
          },
          name: {
            type: dataTypes.STRING
          },
          description: {
            type: dataTypes.STRING
          }
        }, 
        {
            tableName: 'product_types',
            timestamps: false
        }
    )

    ProductType.associate = (models) => {
        ProductType.hasMany(models.Product, {
          as: 'products',
          foreignKey: 'product_type'
        })
    }

    return ProductType
}