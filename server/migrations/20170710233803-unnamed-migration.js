

module.exports = {
  up: (queryInterface, Sequelize) => [queryInterface.addColumn(
    'users',
    'password', {
      type: Sequelize.STRING,
      allowNull: false
    }),
  queryInterface.addColumn(
    'users',
    'email', {
      type: Sequelize.STRING,
      allowNull: false
    })
  ],

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
