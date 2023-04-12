const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {}

User.init(
  {
    lastname: DataTypes.STRING(64),
    firstname: DataTypes.STRING(64),
    mail: DataTypes.STRING(64),
    password: DataTypes.STRING(255),
  },
  {
    sequelize,
    tableName: 'user',
  }
);

module.exports = User;
