const express = require("express");
const { createWorkout, getWorkout, getAllWorkouts, deleteWorkout, updateWorkout } = require("../controllers/workoutController");
const router = express.Router();

router.get("/", getAllWorkouts);

router.get("/:id", getWorkout);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;
