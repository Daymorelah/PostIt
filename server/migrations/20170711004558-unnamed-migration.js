

module.exports = {
  up:  (queryInterface, Sequelize) => [queryInterface.addColumn(
    'messages',
    'messagAuthor', {
      type: Sequelize.STRING,
      allowNull: false
    }),
  queryInterface.addColumn(
      'messages',
      'priority',{
        type: Sequelize.STRING,
        allowNull: false
      })
    ],
 
  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
