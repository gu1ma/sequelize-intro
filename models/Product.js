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


    return Product
}