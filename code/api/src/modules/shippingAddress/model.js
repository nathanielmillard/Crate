'use strict'

// Shipping Address
module.exports = function(sequelize, DataTypes) {
  let ShippingAddress = sequelize.define('shipping address', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })
  ShippingAddress.associate = function(models) {
    ShippingAddress.belongsTo(models.User)
  }

  return ShippingAddress
}
