const { DataTypes } = require("sequelize");

const PaymentMethodModel = {
  payment_method_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  method_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
};

module.exports = {
  initialise: (sequelize) => {
    this.model = sequelize.define("PaymentMethod", PaymentMethodModel, {
      tableName: "payment_methods",
      timestamps: false,
    });
  },

  createPaymentMethod: (paymentMethod) => {
    return this.model.create(paymentMethod);
  },

  findPaymentMethod: (query) => {
    return this.model.findOne({ where: query });
  },

  findAllPaymentMethods: (query) => {
    return this.model.findAll({ where: query });
  },

  updatePaymentMethod: (id, data) => {
    return this.model.update(data, { where: { payment_method_id: id } });
  },

  deletePaymentMethod: (id) => {
    return this.model.destroy({ where: { payment_method_id: id } });
  },
};
