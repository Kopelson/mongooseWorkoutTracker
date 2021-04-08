# Mongoose Workout Tracker : 

 I used MongoDB, a document-oriented NoSQL database to develop, and Mongoose, an elegant mongodb object modeling for node.js, to create a backend to a full stack workout tracker application.

* Project link: https://stark-dusk-98563.herokuapp.com/

## Overview

![FitnessTracker](https://user-images.githubusercontent.com/57735283/104526742-fbfd7500-55b7-11eb-9e4a-96e988c28d13.PNG)

![Main](https://user-images.githubusercontent.com/57735283/104496235-91cfda80-558d-11eb-9b58-a895a06347b2.PNG)


<p>This is a full-stack workout tracker application. Uses a Mongo database with a Mongoose schema and handle routes with Express.</p>


### Create Workouts and Add Exercises

![createNewWorkout](https://user-images.githubusercontent.com/57735283/104520218-94dbc280-55af-11eb-9f9d-24a7bb65b705.gif)

<p>This allows users to create a new workout or add exercises to the last displayed workout. Each exercises is stored within a workout and stats of the last workout are calculated and displayed.</p>


### Dashboard of the past 7 Workouts

![Dashboard](https://user-images.githubusercontent.com/57735283/104520222-973e1c80-55af-11eb-8c4e-46d3e69f95f5.gif)

<p>This dashboard shows the user a line graph of past workout durations, a bar chart of weight lifted, a pie chart of exercise durations, and a doughnut chat of exercises weight lifted.</p>

## User Story
As a user, 
I want to be able to view create and track daily workouts. 
I want to be able to log multiple exercises in a workout on a given day. 
I should also be able to track the name, type, weight, sets, reps, and duration of exercise. 
If the exercise is a cardio exercise, 
I should be able to track my distance traveled.

## Business Context
A consumer will reach their fitness goals more quickly when they track their workout progress.

## Acceptance Criteria
<p>When the user loads the page, they are given the option to create a new workout or continue with their last workout.</p>
<p>The user is able to:</p>
  <ul>
  <li>Add exercises to the most recent workout plan.</li>
  <li>Add new exercises to a new workout plan.</li>
  <li>View the combined weight of multiple exercises from the past seven workouts on the stats page.</li>
  <li>View the total duration of each workout from the past seven workouts on the stats page.</li>
  </ul>

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

## Credits
* Trilogy Education Services for project setup

## Badges
<a href="https://img.shields.io/badge/CSS-19.0%25-yellow"><img alt="HTML Usage" src="https://img.shields.io/badge/CSS-19.0%25-yellow"></a> <a href="https://img.shields.io/badge/CSS-22.4%25-purple"><img alt="CSS Usage" src="https://img.shields.io/badge/CSS-22.4%25-purple"></a> <a href="https://img.shields.io/badge/JavaScript-58.6%25-yellow"><img alt="Javascript usage" src="https://img.shields.io/badge/JavaScript-58.6%25-yellow"></a><a href="https://img.shields.io/badge/Backend-Node.js-green"><img alt="Node.js" src="https://img.shields.io/badge/Backend-Node.js-green"></a> <a href="https://img.shields.io/badge/Backend-Express.js-green"><img alt="Express.js" src="https://img.shields.io/badge/Backend-Express.js-green"></a> <a href="https://img.shields.io/badge/Database-MongoDB-yellow"><img alt="database used MongoDB" src="https://img.shields.io/badge/Database-MongoDB-yellow"></a> <a href="https://img.shields.io/badge/Deployment-Heroku-purple"><img alt="deployed using Heroku" src="https://img.shields.io/badge/Deployment-Heroku-purple"></a>
