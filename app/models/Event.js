const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Event extends Model {}

Event.init(
  {
    title: DataTypes.STRING(64),
    date: DataTypes.DATE,
    description: DataTypes.TEXT,
    adresse: DataTypes.STRING(64),
    image: DataTypes.STRING(80),
  },
  {
    sequelize,
    tableName: 'event',
  }
);

module.exports = Event;
