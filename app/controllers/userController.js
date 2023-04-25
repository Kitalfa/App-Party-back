const { User, Event } = require('../models');

const userController = {
  getOneUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);
      if (!user) {
        res.status(404).json('Cant find User with id ' + userId);
      } else {
        res.json(user);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAllUser: async (req, res) => {
    try {
      const user = await User.findAll();
      if (!user) {
        res.status(404).json('Cant find User API');
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  createUser: async (req, res) => {
    try {
      const { mail, lastname, firstname, password } = req.body;

      let bodyErrors = [];
      if (!mail) {
        bodyErrors.push(`mail can not be empty`);
      }
      if (!lastname) {
        bodyErrors.push(`lastname can not be empty`);
      }
      if (!firstname) {
        bodyErrors.push(`firstname can not be empty`);
      }
      if (!password) {
        bodyErrors.push(`password can not be empty`);
      }

      if (bodyErrors.length) {
        res.status(400).json(bodyErrors);
      } else {
        let newUser = User.build({
          mail,
          lastname,
          firstname,
          password,
        });

        await newUser.save();
        res.json(newUser);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  modifyUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const { mail, lastname, firstname, password } = req.body;

      let user = await User.findByPk(userId);
      if (!user) {
        res.status(404).json(`Cant find User with id ${userId}`);
      } else {
        if (mail) {
          user.mail = mail;
        }
        if (lastname) {
          user.lastname = lastname;
        }
        if (firstname) {
          user.firstname = firstname;
        }
        if (password) {
          user.password = password;
        }

        await user.save();
        res.json(user);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;
      let user = await User.findByPk(userId);
      if (!user) {
        res.status(404).json(`Cant find User with id ${userId}`);
      } else {
        await user.destroy();
        res.json('ok');
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  getEventsUser: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findByPk(userId, { include: Event });
      if (!user) {
        res.status(404).json('Cant find event with id ' + userId);
      } else {
        res.json(user);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
