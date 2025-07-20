const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  addUser,
  getLeaderboard,
} = require("../controllers/userCon");

router.get("/", getAllUsers);
router.post("/", addUser);
router.get("/leaderboard", getLeaderboard);

module.exports = router;
