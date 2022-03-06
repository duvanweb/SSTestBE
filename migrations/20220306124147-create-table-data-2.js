'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TableData2', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      T2C1: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      T2C2: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      T2C3: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      T2C4: {
        type: Sequelize.DATE,
        allowNull: false
      },
      T2C5: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TableData2');
  }
};