const router = require("express").Router();
const RoleController = require("./controller/RoleController");

router.get("/", RoleController.getAllRoles);
router.get("/:id", RoleController.getRole);
router.post("/", RoleController.createRole);
router.put("/:id", RoleController.updateRole);
router.delete("/:id", RoleController.deleteRole);

module.exports = router;
