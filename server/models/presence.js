'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Presence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Presence.belongsTo(models.Couple)
    }
  }
  Presence.init({
    CoupleId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    totalPerson: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Presence',
  });
  return Presence;
};