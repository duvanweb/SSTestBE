'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TableStructure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TableStructure.init({
    tableTypeId: DataTypes.INTEGER,
    header: DataTypes.STRING,
    dataType: DataTypes.STRING,
    format: DataTypes.STRING,
    required: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TableStructure',
  });
  return TableStructure;
};