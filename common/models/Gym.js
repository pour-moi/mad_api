const { DataTypes } = require("sequelize");

module.exports = {
  initialise: (sequelize) => {
    return sequelize.define(
      "Gym",
      {
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
      },
      {
        tableName: "gym_details",
        timestamps: false,
      }
    );
  },
};
