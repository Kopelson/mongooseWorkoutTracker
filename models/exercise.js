const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  distance: Number,
  duration: { type: Number, min: 1 },
  reps: Number,
  sets: Number,
  weight: Number
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;