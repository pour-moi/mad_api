const router = require("express").Router();
const UserController = require("./controller/UserController");

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUser);
router.post("/", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
