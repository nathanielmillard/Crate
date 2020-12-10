'use strict'

// User
//This is where the user attributes are stated and what data type they're defined as
module.exports = function(sequelize, DataTypes) {
//Sequelize makes sure we can access all of these attributes in our database through GraphQL
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
