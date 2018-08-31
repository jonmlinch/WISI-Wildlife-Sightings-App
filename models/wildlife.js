'use strict';
module.exports = (sequelize, DataTypes) => {
  var wildlife = sequelize.define('wildlife', {
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    species: DataTypes.STRING,
    animal_count: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    age: DataTypes.STRING,
    general_location: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    comments: DataTypes.TEXT,
    group_size: DataTypes.INTEGER,
    activity: DataTypes.STRING,
    effort_time: DataTypes.INTEGER,
    effort_distance: DataTypes.INTEGER,
    start_point: DataTypes.STRING,
    end_point: DataTypes.STRING
  }, {});
  wildlife.associate = function(models) {
    models.wildlife.belongsTo(models.user)
  };
  return wildlife;
};