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

const createUser = async (user) => {
  const { email, username } = user;
  try {
    const newUser = await db.any(
      "INSERT into users (email, username) VALUES ($1,$2) RETURNING *",
      [email, username]
    );
    return newUser;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getUsers,
  getOneUser,
  createUser,
};
