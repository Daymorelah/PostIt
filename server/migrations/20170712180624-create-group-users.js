
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('groupUsers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model: 'users',
        as: 'groupsForThisUser'
      }
    },
    groupId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model: 'groups',
        as: 'groupMemebers'
      }
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('groupUsers')
};
