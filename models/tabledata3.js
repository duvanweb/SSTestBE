'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TableData3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TableData3.init({
    T3C1: DataTypes.INTEGER,
    T3C2: DataTypes.STRING,
    T2C3: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'TableData3',
    tableName: 'TableData3'
  });
  return TableData3;
};