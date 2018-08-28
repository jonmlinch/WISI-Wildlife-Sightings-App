'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wildlife', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      time: {
        type: Sequelize.TIME
      },
      species: {
        type: Sequelize.STRING
      },
      animal_count: {
        type: Sequelize.INTEGER
      },
      sex: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      general_location: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.TEXT
      },
      group_size: {
        type: Sequelize.INTEGER
      },
      activity: {
        type: Sequelize.STRING
      },
      effort_time: {
        type: Sequelize.INTEGER
      },
      effort_distance: {
        type: Sequelize.INTEGER
      },
      start_point: {
        type: Sequelize.STRING
      },
      end_point: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('wildlife');
  }
};