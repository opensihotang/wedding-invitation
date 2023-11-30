'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Couple extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Couple.hasMany(models.Gallery)
      Couple.hasMany(models.Info)
      Couple.hasMany(models.Presence)
      Couple.hasMany(models.Story)

      // define association here
    }
  }
  Couple.init({
    namaPria: DataTypes.STRING,
    namaWanita: DataTypes.STRING,
    imageProfilPria: DataTypes.STRING,
    imageProfilWanita: DataTypes.STRING,
    infoPria: DataTypes.STRING,
    infoWanita: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Couple',
  });
  return Couple;
};