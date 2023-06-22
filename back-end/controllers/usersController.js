const express = require("express");
const router = express.Router();
const { getUsers, getOneUser, createUser } = require("../queries/usersqueries");

// Get all users
router.get("/", async (req, res) => {
  try {
    const allUsers = await getUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Get one user
router.get("/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const user = await getOneUser(email);
    if (user) {
      res.json(user);
    } else {
      res
        .status(404)
        .json({ error: `User with email ${email} does not exist.` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", async (req, res) => {
  const addUser = await createUser(req.body);
  if (addUser) {
    res.status(200).json({ success: true, payload: addUser });
  } else {
    res.status(404).send({ success: false, payload: "create error" });
  }
});

module.exports = router;
