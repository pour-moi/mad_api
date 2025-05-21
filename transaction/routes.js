const router = require("express").Router();
const TransactionController = require("./controller/TransactionController");

router.get("/", TransactionController.getAllTransactions);
router.get("/:id", TransactionController.getTransaction);
router.post("/", TransactionController.createTransaction);
router.put("/:id", TransactionController.updateTransaction);
router.delete("/:id", TransactionController.deleteTransaction);

module.exports = router;
