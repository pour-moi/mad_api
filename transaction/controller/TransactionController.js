const Transaction = require("../../common/models/Transaction");

module.exports = {
  getAllTransactions: (req, res) => {
    Transaction.findAllTransactions()
      .then((txs) => res.status(200).json({ status: true, data: txs }))
      .catch((err) => res.status(500).json({ status: false, error: err }));
  },

  getTransaction: (req, res) => {
    Transaction.findTransaction(req.params.id)
      .then((tx) => {
        if (!tx)
          return res
            .status(404)
            .json({ status: false, message: "Transaction not found" });
        res.status(200).json({ status: true, data: tx });
      })
      .catch((err) => res.status(500).json({ status: false, error: err }));
  },

  createTransaction: (req, res) => {
    Transaction.createTransaction(req.body)
      .then((tx) => res.status(201).json({ status: true, data: tx }))
      .catch((err) => res.status(400).json({ status: false, error: err }));
  },

  updateTransaction: (req, res) => {
    Transaction.updateTransaction(req.body, { where: { id: req.params.id } })
      .then(([affected]) => {
        if (!affected)
          return res
            .status(404)
            .json({ status: false, message: "Transaction not found" });
        res.status(200).json({ status: true, message: "Transaction updated" });
      })
      .catch((err) => res.status(400).json({ status: false, error: err }));
  },

  deleteTransaction: (req, res) => {
    Transaction.deleteTransaction({ where: { id: req.params.id } })
      .then((deleted) => {
        if (!deleted)
          return res
            .status(404)
            .json({ status: false, message: "Transaction not found" });
        res.status(200).json({ status: true, message: "Transaction deleted" });
      })
      .catch((err) => res.status(500).json({ status: false, error: err }));
  },
};
