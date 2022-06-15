module.exports = (sequelize, dataTypes) => {

    const Store = sequelize.define(
        'Store', 
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
            tableName: 'stores',
            timestamps: false
        }
    )

    return Store
}