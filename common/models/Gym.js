const { DataTypes } = require("sequelize");

const GymModel = {
  gym_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING(20),
  },
  email: {
    type: DataTypes.STRING(100),
  },
  website: {
    type: DataTypes.STRING(100),
  },
  working_hours: {
    type: DataTypes.STRING(255),
  },
  images: {
    type: DataTypes.TEXT,
    allowNull: true,
    get() {
      const raw = this.getDataValue("images");
      return raw ? JSON.parse(raw) : [];
    },
    set(val) {
      this.setDataValue("images", JSON.stringify(val));
    },
  },
};

module.exports = {
  initialise: (sequelize) => {
    this.model = sequelize.define("Gym", GymModel, {
      tableName: "gym_details",
      timestamps: false,
    });
  },

  createGym: (gym) => {
    return this.model.create(gym);
  },

  findGym: (query) => {
    return this.model.findOne({ where: query });
  },

  findAllGyms: (query) => {
    return this.model.findAll({ where: query });
  },

  updateGym: (id, data) => {
    return this.model.update(data, { where: { gym_id: id } });
  },

  deleteGym: (id) => {
    return this.model.destroy({ where: { gym_id: id } });
  },
};
