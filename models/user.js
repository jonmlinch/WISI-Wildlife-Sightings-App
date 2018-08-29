'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    dob: DataTypes.DATE,
    admin: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    models.user.hasMany(models.wildlife);
  };
  return user;
};