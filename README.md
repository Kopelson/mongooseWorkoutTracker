# Mongoose Workout Tracker

* Project link: https://stark-dusk-98563.herokuapp.com/

![Main](https://user-images.githubusercontent.com/57735283/104496235-91cfda80-558d-11eb-9b58-a895a06347b2.PNG)

## Overview
<p>This is a full-stack workout tracker application. Uses a Mongo database with a Mongoose schema and handle routes with Express.</p>


## Create Workouts and Add Exercises

![createNewWorkout](https://user-images.githubusercontent.com/57735283/104520218-94dbc280-55af-11eb-9f9d-24a7bb65b705.gif)


## Dashboard of the past 7 Workouts

![Dashboard](https://user-images.githubusercontent.com/57735283/104520222-973e1c80-55af-11eb-8c4e-46d3e69f95f5.gif)

## Technologies
### Express.js - Server 
### MongoDB - NoSQL Database
### Mongoose - ODM (object data modeling)

#### Mongoose Technologies Used:
.Schema()
.model()
.connect()
.create()
.aggregate()

$sort
$limit
$push
$addFields
$sum

#### Express Technologies Used:
express()
.use()
.listen()

Express Middleware
express.static("public")
express.urlencoded({extended: true})
express.json()

### Server Logger
morgan - HTTP request logger middleware for node.js

## Resources
<ul>
  <li> https://mongoosejs.com/docs/ </li>
  <li> https://docs.mongodb.com/manual/ </li>
  <li> https://www.npmjs.com/package/morgan </li>
</ul>
