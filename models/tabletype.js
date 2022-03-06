'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TableType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.TableType.hasMany(models.TableStructure, {as: 'columns', foreignKey: 'tableTypeId'})
    }
  }
  TableType.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TableType',
    tableName: 'TableType'
  });
  return TableType;
};