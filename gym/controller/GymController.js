const Gym = require("../../common/models/Gym");

module.exports = {
  getAllGyms: async (req, res) => {
    try {
      const gyms = await Gym.findAllGyms();
      res.status(200).json({ status: true, data: gyms });
    } catch (err) {
      res.status(500).json({ status: false, error: err });
    }
  },

  getGym: async (req, res) => {
    try {
      const gym = await Gym.findGym(req.params.id);
      if (!gym)
        return res
          .status(404)
          .json({ status: false, message: "Gym not found" });
      res.status(200).json({ status: true, data: gym });
    } catch (err) {
      res.status(500).json({ status: false, error: err });
    }
  },

  createGym: async (req, res) => {
    try {
      const newGym = await Gym.createGym(req.body);
      res.status(201).json({ status: true, data: newGym });
    } catch (err) {
      res.status(400).json({ status: false, error: err });
    }
  },

  updateGym: async (req, res) => {
    try {
      const [updated] = await Gym.updateGym(req.body, {
        where: { id: req.params.id },
      });
      if (!updated)
        return res
          .status(404)
          .json({ status: false, message: "Gym not found" });
      res.status(200).json({ status: true, message: "Gym updated" });
    } catch (err) {
      res.status(400).json({ status: false, error: err });
    }
  },

  deleteGym: async (req, res) => {
    try {
      const deleted = await Gym.deleteGym({ where: { id: req.params.id } });
      if (!deleted)
        return res
          .status(404)
          .json({ status: false, message: "Gym not found" });
      res.status(200).json({ status: true, message: "Gym deleted" });
    } catch (err) {
      res.status(500).json({ status: false, error: err });
    }
  },
};
