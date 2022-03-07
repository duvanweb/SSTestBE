'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('TableStructure', [
      {
        "tableTypeId": 1,
        "header": "T1C1",
        "dataType": "numeric",
        "required": true
      },
      {
        "tableTypeId": 1,
        "header": "T1C2",
        "dataType": "text",
        "required": true
      },
      {
        "tableTypeId": 1,
        "header": "T1C3",
        "dataType": "numeric",
        "required": false
      },
      {
        "tableTypeId": 1,
        "header": "T1C4",
        "dataType": "Date",
        "format": "YYYY-MM-DD",
        "required": false
      },
      {
        "tableTypeId": 2,
        "header": "T2C1",
        "dataType": "text",
        "required": true
      },
      {
        "tableTypeId": 2,
        "header": "T2C2",
        "dataType": "text",
        "required": false
      },
      {
        "tableTypeId": 2,
        "header": "T2C3",
        "dataType": "numeric",
        "required": false
      },
      {
        "tableTypeId": 2,
        "header": "T2C4",
        "dataType": "Date",
        "format": "YYYY-DD-MM HH:mm:ss",
        "required": true
      },
      {
        "tableTypeId": 2,
        "header": "T2C5",
        "dataType": "Number",
        "required": true
      },
      {
        "tableTypeId": 3,
        "header": "T3C1",
        "dataType": "numeric",
        "required": true
      },
      {
        "tableTypeId": 3,
        "header": "T3C2",
        "dataType": "text",
        "required": true
      },
      {
        "tableTypeId": 3,
        "header": "T3C3",
        "dataType": "Date",
        "format": "HH:mm:ss",
        "required": true
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('TableStructure', null, {});
  }
};
