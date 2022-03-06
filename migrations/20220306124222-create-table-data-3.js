'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TableData3', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      T3C1: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      T3C2: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      T3C3: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TableData3');
  }
};