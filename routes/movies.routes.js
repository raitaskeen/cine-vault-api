const express = require("express");
const controller = require("../controllers/movies.controller");
const { protect, admin } = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/", controller.getAllMovies);

router.post("/", protect, admin, controller.createMovie);
router.put("/:id", protect, admin, controller.updateMovie);
router.delete("/:id", protect, admin, controller.deleteMovie);

module.exports = router;
