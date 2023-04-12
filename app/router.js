const express = require('express');
const path = require('path');
/* -------------- Controllers -------------- */

const eventController = require('./controllers/eventController');
const eventUserController = require('./controllers/eventUserController');
const eventItemController = require('./controllers/eventItemController');
const userController = require('./controllers/userController');
const itemController = require('./controllers/itemController');

/* -------------- Routes -------------- */

const router = express.Router();

router.get('/', (req, res) => {
  console.log(__dirname);
  let filePath = path.join(__dirname, '../assets/index.html');
  res.sendFile(filePath);
});

/** Event **/
// router.get('/event', eventController.getAllEvent);
// router.get('/event/:id', eventController.getOneevent);
// router.post('/event', eventController.createEvent);
// router.put('/event/:id', eventController.modifyEvent);
// router.delete('/event/:id', eventController.deleteEvent);

// /** Event > User **/
// router.get('/event/:id/users', eventUserController.getUsersEvent);
// router.post('/event/:id/users', eventUserController.addUserEvent);
// router.delete('/event/:id/users/:mail', eventUserController.deleteUserEvent);

// /** Event > Item **/
// router.get('/event/:id/item', eventItemController.getItemEvent);
// router.post('/event/:id/item', eventItemController.addItemEvent);
// router.put('/event/:id/item/:id', eventItemController.modifyItemEvent);
// router.delete('/event/:id/item/:id', eventItemController.deleteItemEvent);

// /**  User **/
// router.get('/user/:mail', userController.getOneUser);
// router.post('/user', userController.createUser);
// router.put('/user/:mail', userController.modifyUser);
// router.delete('/user/:mail', userController.deleteUser);

// /**  Item **/
// router.get('/item/:id', itemController.getOneItem);
// router.post('/item', itemController.createItem);
// router.put('/item/:id', itemController.modifyItem);
// router.delete('/item/:id', itemController.deleteItem);

module.exports = router;
