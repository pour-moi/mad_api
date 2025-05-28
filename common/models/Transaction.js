const { DataTypes } = require("sequelize");

const TransactionModel = {
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
};

module.exports = {
  initialise: (sequelize) => {
    this.model = sequelize.define("Transaction", TransactionModel, {
      tableName: "transactions",
      timestamps: false,
    });
  },

  createTransaction: (transaction) => {
    return this.model.create(transaction);
  },

  findTransaction: (query) => {
    return this.model.findOne({ where: query });
  },

  findAllTransactions: (query) => {
    return this.model.findAll({ where: query });
  },

  updateTransaction: (id, data) => {
    return this.model.update(data, { where: { transaction_id: id } });
  },

  deleteTransaction: (id) => {
    return this.model.destroy({ where: { transaction_id: id } });
  },
};
