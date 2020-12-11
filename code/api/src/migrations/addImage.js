module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'image',
      {
        type: Sequelize.TEXT
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'description');
  }
}
