'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.Studio)
      Movie.belongsTo(models.Genre)
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    image: DataTypes.TEXT,
    description: DataTypes.TEXT,
    GenreId: DataTypes.INTEGER,
    StudioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};