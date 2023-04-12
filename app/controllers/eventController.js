const { Event } = require('../models');

const eventController = {
  getOneEvent: async (req, res) => {
    try {
      const eventId = req.params.id;
      const event = await Event.findByPk(eventId);
      if (!event) {
        res.status(404).json('Cant find event with id ' + eventId);
      } else {
        res.json(event);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  createEvent: async (req, res) => {
    try {
      const { title, date, description, adresse, image } = req.body;

      let bodyErrors = [];
      if (!title) {
        bodyErrors.push(`title can not be empty`);
      }
      if (!date) {
        bodyErrors.push(`date can not be empty`);
      }
      if (!description) {
        bodyErrors.push(`description can not be empty`);
      }
      if (!adresse) {
        bodyErrors.push(`adresse can not be empty`);
      }
      if (!image) {
        bodyErrors.push(`image can not be empty`);
      }

      if (bodyErrors.length) {
        res.status(400).json(bodyErrors);
      } else {
        let newEvent = Event.build({
          title,
          date,
          description,
          adresse,
          image,
        });

        await newEvent.save();
        res.json(newEvent);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  modifyEvent: async (req, res) => {
    try {
      const eventId = req.params.id;
      const { title, date, description, adresse, image } = req.body;

      let event = await Event.findByPk(eventId);
      if (!event) {
        res.status(404).json(`Cant find event with id ${eventId}`);
      } else {
        if (title) {
          event.title = title;
        }
        if (date) {
          event.date = date;
        }
        if (description) {
          event.description = description;
        }
        if (adresse) {
          event.adresse = adresse;
        }
        if (image) {
          event.image = image;
        }
        await event.save();
        res.json(event);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  deleteEvent: async (req, res) => {
    try {
      const eventId = req.params.id;
      let event = await Event.findByPk(eventId);
      if (!event) {
        res.status(404).json(`Cant find event with id ${eventId}`);
      } else {
        await event.destroy();
        res.json('ok');
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
};

module.exports = eventController;
