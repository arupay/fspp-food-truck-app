//DEPENDENCIES

const express = require("express");
const cors = require("cors");
const trucksController = require("./controllers/trucksController");
const usersController = require("./controllers/usersController");
const favoriteController = require("./controllers/favoriteController");
const multerController = require("./controllers/multerController");
const photosController = require("./controllers/photosController");

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/trucks", trucksController);
app.use("/users", usersController);
app.use("/favorite", favoriteController);
app.use("/multer", multerController);
app.use("/photos", photosController);

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to Trucks");
});

app.get("*", (req, res) => {
  res.status(404).send("Sorry Bud, this route doesnt exist");
});

module.exports = app;
