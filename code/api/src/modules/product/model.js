'use strict'

// Product
//This is where the product attributes are stated and what data type they're defined as
module.exports = function(sequelize, DataTypes) {
//Sequelize makes sure we can access all of these attributes in our database through GraphQL
  return sequelize.define('products', {
    name: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    }
  })
}
