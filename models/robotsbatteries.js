'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class robotsBatteries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  robotsBatteries.init({
    robotId: DataTypes.INTEGER,
    batteryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'robotsBatteries',
  });
  return robotsBatteries;
};