const express = require("express");
const photosController = express.Router();
const {
  getAllPhotos,
  postPhoto,
  getPhotosByTruckId,
} = require("../queries/photosqueries");

// Get all photos
photosController.get("/", async (req, res) => {
  try {
    const photos = await getAllPhotos();
    res.status(200).json({ success: true, payload: photos });
  } catch (error) {
    console.log(error.message || error);
    res.status(500).json({ success: false, error: error.message || error });
  }
});

photosController.get("/truck/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const photos = await getPhotosByTruckId(id);
    res.status(200).json({ success: true, payload: photos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error });
  }
});

photosController.post("/", async (req, res) => {
  const { image_url, truck_id, user_id, caption } = req.body;
  try {
    const newPhoto = await postPhoto(image_url, truck_id, user_id, caption);
    res.status(201).json({ success: true, payload: newPhoto });
  } catch (error) {
    console.log(error.message || error);
    res.status(500).json({ success: false, error: error.message || error });
  }
});

module.exports = photosController;
