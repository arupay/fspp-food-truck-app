const express = require("express");
const db = require("../db/dbConfig");
const trucks = express.Router();
const reviewsController = require("./reviewsController.js");

trucks.use("/:trucks_id/reviews", reviewsController);

const {
  getTrucks,
  getOneTruck,
  createTruck,
  deleteTruck,
  editTruck,
} = require("../queries/trucksqueries");

const {
  formatter,
  defaultImage,
  setCoords,
} = require("../validations/validations");

//GET
trucks.get("/", async (req, res) => {
  const userId = req.query.userId; // Assuming the user ID is passed as a query parameter
  console.log(userId);
  const trucksObj = await getTrucks(userId);
  if (trucksObj) {
    res.json({ success: true, payload: trucksObj });
  } else {
    res.status(404).json("Error");
  }
});
//GET ONE
trucks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const truck = await getOneTruck(id);
  if (truck[0]) {
    res.status(200).json({ success: true, payload: truck[0] });
  } else {
    res.status(404).json({ success: false, payload: `not found` });
  }
});

//POST
trucks.post("/new", setCoords, formatter, defaultImage, async (req, res) => {
  const newTruck = await createTruck(req.body);
  res.status(200).json({ success: true, payload: newTruck[0] });
});

//DELETE

trucks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const truck = await deleteTruck(id);
  if (truck.id) {
    res.status(200).json({ success: true, payload: truck });
  } else {
    res.status(404).json({ success: false, payload: "Error-- Cannot Delete" });
  }
});

//UPDATE
trucks.put("/:id", setCoords, formatter, defaultImage, async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await editTruck(id, req.body);
    res.status(200).json({ success: true, payload: updated });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, payload: `Error in edit with id ${id}` });
  }
});

module.exports = trucks;
