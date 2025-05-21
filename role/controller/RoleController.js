const Role = require("../../common/models/Role");

module.exports = {
  getAllRoles: (req, res) => {
    Role.findAll()
      .then((roles) => res.status(200).json({ status: true, data: roles }))
      .catch((err) => res.status(500).json({ status: false, error: err }));
  },

  getRole: (req, res) => {
    Role.findByPk(req.params.id)
      .then((role) => {
        if (!role)
          return res
            .status(404)
            .json({ status: false, message: "Role not found" });
        res.status(200).json({ status: true, data: role });
      })
      .catch((err) => res.status(500).json({ status: false, error: err }));
  },

  createRole: (req, res) => {
    Role.create(req.body)
      .then((role) => res.status(201).json({ status: true, data: role }))
      .catch((err) => res.status(400).json({ status: false, error: err }));
  },

  updateRole: (req, res) => {
    Role.update(req.body, { where: { id: req.params.id } })
      .then(([affected]) => {
        if (!affected)
          return res
            .status(404)
            .json({ status: false, message: "Role not found" });
        res.status(200).json({ status: true, message: "Role updated" });
      })
      .catch((err) => res.status(400).json({ status: false, error: err }));
  },

  deleteRole: (req, res) => {
    Role.destroy({ where: { id: req.params.id } })
      .then((deleted) => {
        if (!deleted)
          return res
            .status(404)
            .json({ status: false, message: "Role not found" });
        res.status(200).json({ status: true, message: "Role deleted" });
      })
      .catch((err) => res.status(500).json({ status: false, error: err }));
  },
};
