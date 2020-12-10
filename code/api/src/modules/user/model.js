'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  // sequlize.define starts a SQL command to create a table
  let User = sequelize.define('users', {
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
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
