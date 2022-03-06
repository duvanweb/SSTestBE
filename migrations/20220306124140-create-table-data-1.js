'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TableData1', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      T1C1: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      T1C2: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      T1C3: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      T1C4: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TableData1');
  }
};