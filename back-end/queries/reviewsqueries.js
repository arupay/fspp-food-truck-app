const db = require("../db/dbConfig");

// GET ALL
const getAllReviews = async (trucks_id) => {
  try {
    if (trucks_id === "all") {
      const allReviews = await db.any("SELECT * FROM reviews");
      return allReviews;
    }
    const allReviews = await db.any(
      `SELECT * FROM reviews WHERE trucks_id = ${trucks_id}`
    );
    return allReviews;
  } catch (error) {
    return error;
  }
};
const getReview = async (id) => {
  try {
    const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
    return oneReview;
  } catch (error) {
    return error;
  }
};

const createReview = async (trucks_id, { reviewer, content, rating }) => {
  try {
    const newReview = await db.one(
      "INSERT INTO reviews (reviewer, content, rating, trucks_id) VALUES($1, $2, $3, $4) RETURNING *",
      [reviewer, content, rating, trucks_id]
    );
    return newReview;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const updateReview = async (id, trucks_id, { reviewer, content, rating }) => {
  try {
    const updateReview = await db.one(
      "UPDATE reviews SET reviewer=$1, content=$2, rating=$3, trucks_id=$4 where id=$5 RETURNING *",
      [reviewer, content, rating, trucks_id, id]
    );
    return updateReview;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const deleteReview = async (id) => {
  try {
    const oneReview = await db.one(
      "DELETE FROM reviews WHERE id=$1 RETURNING *",
      id
    );
    return oneReview;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};
module.exports = {
  getAllReviews,
  createReview,
  deleteReview,
  getReview,
  updateReview,
};
