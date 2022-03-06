'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TableData2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TableData2.init({
    T2C1: DataTypes.INTEGER,
    T2C2: DataTypes.STRING,
    T2C3: DataTypes.INTEGER,
    T2C4: DataTypes.DATE,
    T2C5: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TableData2',
  });
  return TableData2;
};