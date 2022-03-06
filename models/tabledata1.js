'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TableData1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TableData1.init({
    T1C1: DataTypes.INTEGER,
    T1C2: DataTypes.STRING,
    T1C3: DataTypes.INTEGER,
    T1C4: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'TableData1',
  });
  return TableData1;
};