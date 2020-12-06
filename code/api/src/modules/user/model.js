'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  // sequlize.define starts a SQL command to create a table
  let User = sequelize.define('users', {
    name: {
      // the 'name' is an attribute, the 'type:' defines what kind of attribute it is, which is followed by it's type, .STRING. The difference between .STRING and .TEXT is .TEXT allows for a larger character limit
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
  // the User.associate below is where the relationship between Subscription and User is defined. User 'has many' Subscriptions
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
