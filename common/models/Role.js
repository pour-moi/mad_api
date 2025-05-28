const { DataTypes } = require("sequelize");

const RoleModel = {
  role_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
};

module.exports = {
  initialise: (sequelize) => {
    this.model = sequelize.define("Role", RoleModel, {
      tableName: "roles",
      timestamps: false,
    });
  },

  createRole: (role) => {
    return this.model.create(role);
  },

  findRole: (query) => {
    return this.model.findOne({ where: query });
  },

  findAllRoles: (query) => {
    return this.model.findAll({ where: query });
  },

  updateRole: (id, data) => {
    return this.model.update(data, { where: { role_id: id } });
  },

  deleteRole: (id) => {
    return this.model.destroy({ where: { role_id: id } });
  },
};
