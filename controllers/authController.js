const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config");
const User = require("../models/User");

const generateToken = (user) => {
  return jwt.sign({ userId: user.id }, config.secretKey, { expiresIn: "1h" });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { login };
