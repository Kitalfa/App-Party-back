const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Category extends Model {}

Category.init(
  {
    drink: DataTypes.STRING(64),
    food: DataTypes.STRING(64),
    instrument: DataTypes.STRING(64),
    gift: DataTypes.STRING(64),
    other: DataTypes.STRING(64),
  },
  {
    sequelize,
    tableName: 'category',
  }
);

module.exports = Category;
