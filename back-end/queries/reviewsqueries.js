const db = require("../db/dbConfig");

// GET ALL
const getAllReviews = async (trucks_id) => {
  try {
    if (trucks_id === "all") {
      const allReviews = await db.any(
        `SELECT reviews.*, users.username, users.email
        FROM reviews
        JOIN users ON reviews.reviewer = users.id`
      );
      return allReviews;
    }
    const allReviews = await db.any(
      `SELECT reviews.*, users.username, users.email
      FROM reviews
      JOIN users ON reviews.reviewer = users.id
      where reviews.trucks_id = $1`,
      [trucks_id]
    );
    return allReviews;
  } catch (error) {
    console.log(error || error.message);
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

const updateReview = async (id, trucks_id, { content, rating }) => {
  try {
    const updateReview = await db.one(
      "UPDATE reviews SET content=$1, rating=$2 WHERE id=$3 RETURNING *",
      [content, rating, id]
    );
    return getAllReviews(trucks_id);
    //returns all reviews for specific truck id
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
