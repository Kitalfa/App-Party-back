const Event = require('./Event');
const Item = require('./Item');
const Category = require('./Category');
const User = require('./User');

/* Associations */

// One-to-One : hasOne + belongsTo
// One-to-Many : hasMany + belongsTo
// Many-to-Many : belongsToMany (through) + belongsToMany (through)

// User <-> Event (One-To-Many)
User.hasMany(Event, {
  foreignKey: 'user_mail',
  as: 'events',
});

Event.belongsTo(User, {
  foreignKey: 'user_mail',
  as: 'user',
});

// Event <-> Item (One-To-Many)
Event.hasMany(Item, {
  foreignKey: 'event_id',
  as: 'items',
});

Item.belongsTo(Event, {
  foreignKey: 'event_id',
  as: 'event',
});

// User <-> Item (One-To-Many)
User.hasMany(Item, {
  foreignKey: 'user_mail',
  as: 'items',
});

Item.belongsTo(User, {
  foreignKey: 'user_mail',
  as: 'user',
});

// Category <-> Item (One-To-Many)
Category.hasMany(Item, {
  foreignKey: 'category_id',
  as: 'items',
});

Item.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category',
});

// User <-> Event (Many-To-Many)
User.belongsToMany(Event, {
  foreignKey: 'user_mail',
  otherKey: 'event_id',
  as: 'events',
  through: 'user_has_event',
});

Event.belongsToMany(User, {
  foreignKey: 'event_id',
  otherKey: 'user_id',
  as: 'users',
  through: 'user_has_event',
});

module.exports = { User, Item, Category, Event };
