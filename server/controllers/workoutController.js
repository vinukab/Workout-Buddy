const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getWorkout = async (req, res) => {
    try {
       const { id } = req.params;
       if (!mongoose.Types.ObjectId.isValid(id)) {
         return res.staus(404).json({ error: "no such workout with this id" });
       }
       const workout = await Workout.findById(id);
       if (!workout) {
         return res.staus(404).json({ error: "workout not found" });
       }
       res.status(200).json(workout); 
    } catch (err) {
        res.status(400).json({error:err.message})
    }
};

const createWorkout = async (req, res) => {
  try {
    const workout = await Workout.create(req.body);
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.staus(404).json({ error: "no such workout with this id" });
        }
        const deletedWorkout = await Workout.findOneAndDelete({ _id: id });
        if (!deletedWorkout) {
          return tes.staus(404).json({ error: "workout not found" });
        }
        res.status(200).json(deletedWorkout); 
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
  
};

const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "no such workout with this id" });
    }
    const updatedWorkout = await Workout.findOneAndUpdate(
      { _id: id },
      req.body 
    );
    if (!updatedWorkout) {
      return res.status(404).json({ error: "workout not found" });
    }
    res.status(200).json(updatedWorkout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
