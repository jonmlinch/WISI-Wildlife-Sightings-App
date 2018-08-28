'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [ queryInterface.addColumn(
              'wildlife',
              'userId',
               Sequelize.INTEGER
             ),];
  },

  down: (queryInterface, Sequelize) => {
    return [ queryInterface.removeColumn(
              'wildlife',
              'userId',
               Sequelize.INTEGER
             ),];
  }
};
