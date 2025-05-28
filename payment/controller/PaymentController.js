const PaymentMethod = require("../../common/models/Payment");

module.exports = {
  getAllMethods: (req, res) => {
    PaymentMethod.findAllPaymentMethods()
      .then((methods) => res.status(200).json({ status: true, data: methods }))
      .catch((err) => res.status(500).json({ status: false, error: err }));
  },

  getMethod: (req, res) => {
    PaymentMethod.findPaymentMethod(req.params.id)
      .then((method) => {
        if (!method)
          return res
            .status(404)
            .json({ status: false, message: "Method not found" });
        res.status(200).json({ status: true, data: method });
      })
      .catch((err) => res.status(500).json({ status: false, error: err }));
  },

  createMethod: (req, res) => {
    PaymentMethod.createPaymentMethod(req.body)
      .then((method) => res.status(201).json({ status: true, data: method }))
      .catch((err) => res.status(400).json({ status: false, error: err }));
  },

  updateMethod: (req, res) => {
    PaymentMethod.updatePaymentMethod(req.body, {
      where: { id: req.params.id },
    })
      .then(([affected]) => {
        if (!affected)
          return res
            .status(404)
            .json({ status: false, message: "Method not found" });
        res.status(200).json({ status: true, message: "Method updated" });
      })
      .catch((err) => res.status(400).json({ status: false, error: err }));
  },

  deleteMethod: (req, res) => {
    PaymentMethod.deletePaymentMethod({ where: { id: req.params.id } })
      .then((deleted) => {
        if (!deleted)
          return res
            .status(404)
            .json({ status: false, message: "Method not found" });
        res.status(200).json({ status: true, message: "Method deleted" });
      })
      .catch((err) => res.status(500).json({ status: false, error: err }));
  },
};
