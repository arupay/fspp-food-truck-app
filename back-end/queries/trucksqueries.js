const db = require("../db/dbConfig.js");

const getTrucks = async (userId) => {
  try {
    let query;
    if (userId) {
      query = `
      SELECT t.*, 
             ROUND(AVG(r.rating) * 2) / 2.0 AS average_score,
             COUNT(r.id) AS total_reviews,
      CASE 
        WHEN ft.user_id = $1 THEN true ELSE false 
      END AS favorite
      FROM trucks t
      LEFT JOIN reviews r ON t.id = r.trucks_id
      LEFT JOIN favorite_trucks ft ON t.id = ft.truck_id AND ft.user_id = $1
      GROUP BY t.id, ft.user_id
      ORDER BY t.id`;
    } else {
      query = `SELECT trucks.*, 
      ROUND(AVG(reviews.rating) * 2) / 2.0 AS average_score,
      COUNT(reviews.id) AS total_reviews
      FROM trucks
      LEFT JOIN reviews ON trucks.id = reviews.trucks_id
      GROUP BY trucks.id
      ORDER BY trucks.id`;
    }
    const trucks = await db.any(query, [userId]);
    return trucks;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const getOneTruck = async (id) => {
  try {
    const oneTruck = await db.any(
      "SELECT t.*, u.username AS added_by_username FROM trucks AS t JOIN users AS u ON t.added_by = u.id WHERE t.id = $1",
      id
    );
    return oneTruck;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const createTruck = async (truck) => {
  try {
    const newTruck = await db.any(
      "INSERT INTO trucks (added_by, name, address, zip, borough, category, image_url, about, lat, lng) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        truck.added_by,
        truck.name,
        truck.address,
        truck.zip,
        truck.borough,
        truck.category,
        truck.image_url,
        truck.about,
        truck.lat,
        truck.lng,
      ]
    );
    return newTruck;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const deleteTruck = async (id) => {
  try {
    const truck = await db.one(
      "DELETE FROM trucks where id=$1 RETURNING *",
      id
    );
    return truck;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const editTruck = async (
  id,
  { name, address, zip, borough, category, image_url, about, lat, lng }
) => {
  try {
    const updatedTruck = await db.one(
      "UPDATE trucks SET name=$1, address=$2, zip=$3, borough=$4, category=$5, image_url=$6, about=$7, lat=$8, lng=$9 WHERE id=$10 RETURNING *",
      [name, address, zip, borough, category, image_url, about, lat, lng, id]
    );
    return updatedTruck;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getTrucks,
  getOneTruck,
  createTruck,
  deleteTruck,
  editTruck,
};
