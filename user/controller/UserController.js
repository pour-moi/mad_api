const User = require("../../common/models/User");

module.exports = {
  getAllUsers: (req, res) => {
    User.findAllUsers(req.query)
      .then((users) => res.status(200).json({ status: true, data: users }))
      .catch((err) => res.status(500).json({ status: false, error: err }));
  },

  getUser: (req, res) => {
    User.findUser({ id: req.params.id })
      .then((user) => {
        if (!user)
          return res
            .status(404)
            .json({ status: false, message: "User not found" });

        return res.status(200).json({ status: true, data: user.toJSON() });
      })
      .catch((err) => res.status(500).json({ status: false, error: err }));
  },

  createUser: (req, res) => {
    User.createUser(req.body)
      .then((user) => res.status(201).json({ status: true, data: user }))
      .catch((err) => res.status(400).json({ status: false, error: err }));
  },

  updateUser: (req, res) => {
    User.updateUser(req.params.id, req.body)
      .then((updated) => {
        if (!updated)
          return res
            .status(404)
            .json({ status: false, message: "User not found" });

        return res.status(200).json({ status: true, message: "User updated" });
      })
      .catch((err) => res.status(400).json({ status: false, error: err }));
  },

  deleteUser: (req, res) => {
    User.deleteUser(req.params.id)
      .then((deleted) => {
        if (!deleted)
          return res
            .status(404)
            .json({ status: false, message: "User not found" });

        return res.status(200).json({ status: true, message: "User deleted" });
      })
      .catch((err) => res.status(500).json({ status: false, error: err }));
  },
};
