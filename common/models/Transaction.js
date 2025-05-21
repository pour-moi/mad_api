const { DataTypes } = require("sequelize");

module.exports = {
  initialise: (sequelize) => {
    return sequelize.define(
      "Transaction",
      {
        transaction_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        plan_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        payment_method_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        start_date: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        end_date: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: "transactions",
        timestamps: false,
      }
    );
  },
};
