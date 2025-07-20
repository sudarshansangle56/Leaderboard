const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.addUser = async (req, res) => {
  const { name } = req.body;
  const newUser = new User({ name });
  await newUser.save();
  res.status(201).json(newUser);
};

exports.getLeaderboard = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  const leaderboard = users.map((user, index) => ({
    rank: index + 1,
    name: user.name,
    totalPoints: user.totalPoints,
  }));
  res.json(leaderboard);
};
