const { DataTypes } = require("sequelize");

module.exports = {
  initialise: (sequelize) => {
    return sequelize.define(
      "Role",
      {
        role_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
      },
      {
        tableName: "roles",
        timestamps: false,
      }
    );
  },
};
