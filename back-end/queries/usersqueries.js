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

const getOneUser = async (email) => {
  try {
    const oneUser = await db.any("SELECT * FROM users WHERE email = $1", email);
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
