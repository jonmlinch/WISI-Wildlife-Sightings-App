'use strict';
var bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING, 
      validate: { 
        isEmail: {
          msg: 'Valid email address needed!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: { 
          args:[8,16],
          msg: 'Password should be between 8 and 16 characters long'
        }
      }
    },
    dob: DataTypes.DATE,
    admin: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function(pendingUser){ 
        if(pendingUser && pendingUser.password){
          var hash = bcrypt.hashSync(pendingUser.password, 10); 
          pendingUser.password = hash;
        }
      }
    }
  });


  user.associate = function(models) {
    models.user.hasMany(models.wildlife); 
  };

  user.prototype.isValidPassword = function(typedPassword){
    return bcrypt.compareSync(typedPassword, this.password);  stored password
  }

  return user;
};