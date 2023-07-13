const db = require("../db/dbConfig");

// Get all photos
const getAllPhotos = async () => {
  try {
    const photos = await db.any("SELECT * FROM photos");
    return photos;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const getPhotosByTruckId = async (truckId) => {
  try {
    const photos = await db.any("SELECT * FROM photos WHERE truck_id = $1", [
      truckId,
    ]);
    return photos;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const postPhoto = async (image_url, truck_id, user_id, caption = null) => {
  try {
    const query = `
        INSERT INTO photos (image_url, truck_id, user_id, caption)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
      `;
    const newPhoto = await db.one(query, [
      image_url,
      truck_id,
      user_id,
      caption,
    ]);
    return newPhoto;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllPhotos,
  postPhoto,
  getPhotosByTruckId,
};
