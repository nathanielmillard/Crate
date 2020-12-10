//This file creates our User table in the database
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('shipping address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      addressLineOne: {
        type: Sequelize.STRING
      },
      addressLineTwo: {
        type: Sequelize.TEXT
      },
      city: {
        type: Sequelize.TEXT
      },
      state: {
        type: Sequelize.TEXT
      },
      zipCode: {
        allowNull: false,
        type: Sequelize.DATE
      },
      country: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
//The 'down' tells us what we would like our User migration to look like if we decide to 'roll back' aka make a change to our migration.
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('shipping address');
  }
}
