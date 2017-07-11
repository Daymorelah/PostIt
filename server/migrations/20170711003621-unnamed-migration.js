

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'groups',
    'groupOwner',{
      type: Sequelize.STRING,
      allowNull: false
    }),

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
