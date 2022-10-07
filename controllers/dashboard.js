const User = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getAllUsers };
