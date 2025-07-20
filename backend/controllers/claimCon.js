const User = require("../models/User");
const ClaimHistory = require("../models/ClaimHistory");

exports.claimPoints = async (req, res) => {
  const { userId } = req.params;
  const randomPoints = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.totalPoints += randomPoints;
  await user.save();

  const history = new ClaimHistory({ userId, points: randomPoints });
  await history.save();

  res.json({
    message: `User ${user.name} claimed ${randomPoints} points!`,
    totalPoints: user.totalPoints,
  });
};

exports.getUserHistory = async (req, res) => {
  const { userId } = req.params;
  const history = await ClaimHistory.find({ userId }).sort({ timestamp: -1 });
  res.json(history);
};
