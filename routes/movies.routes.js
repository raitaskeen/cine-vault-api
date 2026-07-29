const express = require("express");
const controller = require("../controllers/movies.controller");

const router = express.Router();

router.post("/", controller.createMovie);

router.get("/", controller.getAllMovies);

router.put("/:id", controller.updateMovie);

router.delete("/:id", controller.deleteMovie);

module.exports = router;