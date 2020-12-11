'use strict'

// Address
module.exports = function(sequelize, DataTypes) {
  let Address = sequelize.define('address', {
    userId: {
      type: DataTypes.INTEGER
    },
    addressLineOne: {
      type: DataTypes.STRING
    },
    addressLineTwo: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zipCode: {
      type: DataTypes.INTEGER
    },
    country: {
      type: DataTypes.STRING
    }
  })
  Address.associate = function(models) {
    Address.belongsTo(models.User)
  }

  return Address
}
