const User = require("../models/User");

const secureEndpoint = async (req, res) => {
  const userId = req.user.userId;
  const user = await User.findByPk(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json({ message: "Secure endpoint accessed", user: user });
};

module.exports = { secureEndpoint };
