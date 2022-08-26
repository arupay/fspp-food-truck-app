const express = require("express");
const db = require("../db/dbConfig");
const trucks = express.Router();

const {
  getTrucks,
  getOneTruck,
  createTruck,
  deleteTruck,
  editTruck,
} = require("../queries/trucksqueries");

const { formatter, defaultImage } = require("../validations/validations");

//GET
trucks.get("/", async (req, res) => {
  const trucksObj = await getTrucks();
  if (trucksObj) {
    res.json({ sucess: true, payload: trucksObj });
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
trucks.post("/new", formatter, defaultImage, async (req, res) => {
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
trucks.put("/:id", formatter, defaultImage, async (req, res) => {
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
