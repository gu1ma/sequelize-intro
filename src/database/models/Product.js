module.exports = (sequelize, dataTypes) => {

    const Product = sequelize.define(
        'Product', 
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
          }, 
          product_type: {
            type: dataTypes.INTEGER
          },
          preco: {
            type: dataTypes.FLOAT
          }
        }, 
        {
            tableName: 'products',
            timestamps: false
        }
    )

    Product.associate = (models) => {
      Product.belongsTo(models.ProductType, {
        as: 'category',
        foreignKey: 'product_type'
      })
    }

    Product.associate = (models) => {
      Product.belongsToMany(models.Store, {
        through: 'stores_products',
        as: 'stores',
        foreignKey: 'id_product',
        otherKey: 'id_store',
        timestamps: false
      })
    }

    return Product
}