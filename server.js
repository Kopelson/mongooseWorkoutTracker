//require dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//create an instance of express
const app = express();
//use a logger on the server
app.use(logger("dev"));
//middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
//setup database URL and collection name

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });


// Listen on port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log("App running on port 3000!");
  });