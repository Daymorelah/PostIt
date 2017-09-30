
export default (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    body: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
    },
    priority:{
      type: DataTypes.TEXT,
      values: ['Normal', 'Urgent', 'Critical']
    },
  }); //end of define method
    
  Message.associate = (models) => {
    Message.belongsTo(models.Group,{
      foreignKey: 'groupId',
      as: 'group',
      onDelete: 'CASCADE'
    }); //end of association definition
  }; //end of arrow function definition
    
  return Message;
}; //end of export default