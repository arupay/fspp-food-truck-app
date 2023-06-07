const db = require("../db/dbConfig.js");

const getUsers = async () => {
  try {
    const users = await db.any("SELECT * FROM users");
    return users;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const getOneUser = async (id) => {
  try {
    const oneUser = await db.any("SELECT * FROM users WHERE id = $1", id);
    return oneUser;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getUsers,
  getOneUser,
};
