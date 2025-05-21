const { DataTypes } = require("sequelize");

module.exports = {
  initialise: (sequelize) => {
    return sequelize.define(
      "PaymentMethod",
      {
        payment_method_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        method_name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        tableName: "payment_methods",
        timestamps: false,
      }
    );
  },
};
