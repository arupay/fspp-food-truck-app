const db = require("../db/dbConfig");

// GET BY ID

const getFaveById = async (id) => {
  try {
    const faves = await db.any(
      "SELECT * FROM favorite_trucks WHERE user_id = $1",
      id
    );
    return faves;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};
const toggleFavorite = async (user_id, truck_id) => {
  try {
    const query = `
      WITH deleted AS (
        DELETE FROM favorite_trucks
        WHERE user_id = $1 AND truck_id = $2
        RETURNING *
      )
      INSERT INTO favorite_trucks (user_id, truck_id)
      SELECT $1, $2
      WHERE NOT EXISTS (
        SELECT 1 FROM deleted
      )
      RETURNING *,
              CASE 
                WHEN EXISTS (SELECT 1 FROM deleted) 
              THEN 'delete' ELSE 'insert' 
              END AS action;
    `;
    const result = await db.oneOrNone(query, [user_id, truck_id]);
    return result;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};
module.exports = {
  getFaveById,
  toggleFavorite,
};
