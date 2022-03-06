'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TableStructures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tableTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'TableTypes', key: 'id' }
      },
      header: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      dataType: {
        type: Sequelize.STRING(10),
        allowNull: false,
        validate: { isIn: [['Date', 'Int', 'String']] }
      },
      format: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      required: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TableStructures');
  }
};