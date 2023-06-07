//DEPENDENCIES

const express = require("express");
const cors = require("cors");
const trucksController = require("./controllers/trucksController");
const reviewsController = require("./controllers/reviewsController.js");
const usersController = require("./controllers/usersController");

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/trucks", trucksController);
app.use("/reviews", reviewsController);
app.use("/users", usersController);

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to Trucks");
});

app.get("*", (req, res) => {
  res.status(404).send("Sorry Bud, this route doesnt exist");
});

module.exports = app;
