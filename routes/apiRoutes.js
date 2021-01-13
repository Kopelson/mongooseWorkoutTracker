const db = require("../models");

module.exports = function(app) {
//Create
//This creates a new workout with the frontend data.
app.post("/api/workouts", ({body}, res) => {
    db.Workout.create(body)
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.json(err);
    });
})
//Read
//This searches all workouts, populates exercises array, 
//and returns to the frontend a json of the result.
app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .populate("exercises")
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.json(err);
    });
});
//This grabs the last 7 workouts, populates the exercises array, 
//then creates a new field calculating the total duration, 
//and returns the frontend a json of the aggregated result.
app.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([
    {$sort: {_id:1}},
    { $limit : 7 },
    { $lookup: {
      from: 'exercises',
      localField: 'exercises',
      foreignField: '_id',
      as: "exercises"
    }},
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" }
      }
    }
  ]).then(workoutdb => {
    res.json(workoutdb);
  })
  .catch(err => {
    res.json(err);
  });
});
//Update
//This adds exercises to the current workout.
app.put("/api/workouts/:id", (req, res) => {
  let workoutId = req.params.id
    db.Exercise.create(req.body)
    .then(({_id}) => db.Workout.findOneAndUpdate({_id: workoutId}, { $push: { exercises: _id } }, { new: true }))
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.json(err);
    });
});
};
