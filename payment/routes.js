const router = require("express").Router();
const PaymentController = require("./controller/PaymentController");

router.get("/", PaymentController.getAllMethods);
router.get("/:id", PaymentController.getMethod);
router.post("/", PaymentController.createMethod);
router.put("/:id", PaymentController.updateMethod);
router.delete("/:id", PaymentController.deleteMethod);

module.exports = router;
