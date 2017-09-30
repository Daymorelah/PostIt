
export default (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    groupName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }); 
    
  Group.associate = (models) =>{
    Group.belongsToMany(models.User, {
      through: 'groupUsers',
      as: 'groupMembers',
      foreignKey: 'groupId'
    }); //end of belongsToMany association definition
  }; //end of arrow function definition
    
  Group.associate = (models) => {
    Group.hasMany(models.Message, {
      foreignKey: 'groupId',
      as: 'messagesForThisGroup'
    }); //end of hasMany association definition
  }; //end of arrow function definition
  
  return Group;
};
