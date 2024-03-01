const express = require("express");
const router = express.Router();
const movieController = require("../controller/movieController");


router.post("/add-movie", movieController.addMovie);
router.get("/movies", movieController.getAllMovies);
router.get("/:title", movieController.getMovie);
router.put("/update-movie/:id", movieController.updateMovie);
router.delete("/delete-movie/:id", movieController.deleteMovie);
router.get("*", movieController.parDefautPage);

module.exports = router;
