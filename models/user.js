'use strict';
var bcrypt = require('bcrypt'); //Used in this model because this is the one that needs to be hashed
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING, //Specify data type as a string
      validate: { //says we want to validate something
        isEmail: { //we want to validate that it is an email address
          msg: 'Valid email address needed!' //Message to send if not an email
        }
      }
    },
    password: {
      type: DataTypes.STRING, //Specify data type as a string
      validate: { //Says we want to validate something
        len: { //We want to validate the length of the password
          args:[8,16], //We want the password to be between 8 and 16 characters long
          msg: 'Password should be between 8 and 16 characters long' //Message to send if too long or not long enough
        }
      }
    },
    dob: DataTypes.DATE,
    admin: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function(pendingUser){ //This hook runs the function(pendingUser) before creation of a new user in the data base
        if(pendingUser && pendingUser.password){ //Checks if they are a potential new user and that they have a password
          var hash = bcrypt.hashSync(pendingUser.password, 10); //Hashes thier password, 10 times? 10 reprents either number or length of salts
          pendingUser.password = hash; //Sets the user's password equal to their new hashed password to be stored in the model
        }
      }
    }
  });


  user.associate = function(models) {
    models.user.hasMany(models.wildlife); //Connects this model to the wildlife model
  };

  user.prototype.isValidPassword = function(typedPassword){ //Creates a call 'isValidPassword' that runs function(typedPassword)
    return bcrypt.compareSync(typedPassword, this.password); //Uses bcyprt to compare the password that was typed to the user's stored password
  }


  return user;
};