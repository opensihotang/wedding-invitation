'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Guest.belongsTo(models.Couple)
      // define association here
    }
  }
  Guest.init({
    name: DataTypes.STRING,
    totalGuest: DataTypes.INTEGER,
    email: DataTypes.STRING,
    CoupleId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Guest',
  });
  return Guest;
};