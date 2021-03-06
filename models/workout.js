const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
        type: { type: String, required: true },
        name: { type: String, required: true },
        distance: Number,
        duration: { type: Number, min: 1 },
        reps: Number,
        sets: Number,
        weight: Number
    }
  ]

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;