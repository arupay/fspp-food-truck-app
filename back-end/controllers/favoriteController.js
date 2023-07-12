const express = require("express");
const favorite = express.Router();
const db = require("../db/dbConfig");

const { getFaveById, toggleFavorite } = require("../queries/favoritequeries");

favorite.get("/:id", async (req, res) => {
  const { id } = req.params;
  const faves = await getFaveById(id);
  if (faves && faves.length > 0) {
    res.status(200).json({ success: true, payload: faves });
  } else {
    res.status(200).json({ success: false, payload: [] }); // Return an empty array instead of a string
  }
});

favorite.post("/", async (req, res) => {
  const { user_id, truck_id } = req.body;
  try {
    const deletionOrInsertion = await toggleFavorite(user_id, truck_id);
    res.status(200).json({ success: true, payload: deletionOrInsertion });
  } catch (error) {
    console.log(error.message || error);
    res.status(500).json({ success: false, error: error.message || error });
  }
});
module.exports = favorite;
