'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Studio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Studio.hasMany(models.Movie)
    }
  }
  Studio.init({
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    city: DataTypes.STRING,
    total_employees: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Studio',
  });
  return Studio;
};