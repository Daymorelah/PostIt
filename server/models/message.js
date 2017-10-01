
export default (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
    },
    priority:{
      type: DataTypes.TEXT,
      values: ['Normal', 'Urgent', 'Critical'],
      defaultValue: 'Normal',
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