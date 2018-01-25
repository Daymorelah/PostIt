'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'username already exists'
      },
      validate: {
        notEmpty: {
          msg: 'field must not be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'field must not be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'email already exists'
      },
      validate: {
        notEmpty: {
          msg: 'field must not be empty'
        },
        isEmail: {
          args: true,
          msg: 'Please enter a valid email'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: function beforeCreate(user) {
        var salt = _bcrypt2.default.genSaltSync();
        user.password = _bcrypt2.default.hashSync(user.password, salt);
      },
      beforeUpdate: function beforeUpdate(user) {
        if (user.password) {
          var salt = _bcrypt2.default.genSaltSync();
          user.password = _bcrypt2.default.hashSync(user.password, salt);
          user.updateAt = Date.now();
        }
      }
    }
  }); //end fo define method

  User.associate = function (models) {
    User.belongsToMany(models.Group, {
      through: 'groupUsers',
      as: 'groupsForThisUser',
      foreignKey: 'userId'
    }); //end of belongsToMany association definition    
  }; //end of arrow function definition

  User.prototype.verifyPassword = function (userPassword, basepassword) {
    return _bcrypt2.default.compareSync(userPassword, basepassword);
  }; //end of model method veifyuser

  User.prototype.filterUserDetails = function () {
    var details = undefined.get();
    delete details.password;
    delete details.updateAt;
    return details;
  }; //end of model method filterUserDetails

  return User;
};