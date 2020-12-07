//This file creates our User table in the database
module.exports = {
//The 'up' tells us what attributes our table is going to include after we run the migration
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
//The 'down' tells us what we would like our User migration to look like if we decide to 'roll back' aka make a change to our migration.
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
}
