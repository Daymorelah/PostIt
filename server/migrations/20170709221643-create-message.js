
module.exports = {
  up: (queryInterface, Sequelize) => [queryInterface.createTable('messages', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    messageBody: {
      allowNull: false,
      type: Sequelize.STRING
    },
    messagAuthor: {
      allowNull: false,
      type: Sequelize.STRING
    },
    priority: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    groupId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'group',
        key: 'id',
        as: 'groupId',
      },
    },
  }),
  ],
  down: (queryInterface, Sequelize) => queryInterface.dropTable('messages')
};
