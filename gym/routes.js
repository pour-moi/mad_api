const router = require("express").Router();
const GymController = require("./controller/GymController");

router.get("/", GymController.getAllGyms);
router.get("/:id", GymController.getGym);
router.post("/", GymController.createGym);
router.put("/:id", GymController.updateGym);
router.delete("/:id", GymController.deleteGym);

module.exports = router;
