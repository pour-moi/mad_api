const express = require("express");
const { Sequelize } = require("sequelize");
const app = express();
app.use(express.json());

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./storage/data.sqlite",
});

const User = require("./common/models/User");
const GymModel = require("./common/models/Gym");
const RoleModel = require("./common/models/Role");
const PaymentModel = require("./common/models/Payment");
const TransactionModel = require("./common/models/Transaction");

const UserRoutes = require("./user/routes");
const GymRoutes = require("./gym/routes");
const PaymentRoutes = require("./payment/routes");
const RoleRoutes = require("./role/routes");
const TransactionRoutes = require("./transaction/routes");

User.initialise(sequelize);
GymModel.initialise(sequelize);
RoleModel.initialise(sequelize);
PaymentModel.initialise(sequelize);
TransactionModel.initialise(sequelize);

sequelize.sync({ alter: true }).then(() => {
  console.log("Database synced");

  app.use("/user", UserRoutes);
  app.use("/gym", GymRoutes);
  app.use("/payment", PaymentRoutes);
  app.use("/role", RoleRoutes);
  app.use("/transaction", TransactionRoutes);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log("Server listening"));
});
