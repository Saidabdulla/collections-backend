const bcrypt = require("bcrypt");
const User = require("../models/user");

const registerUser = async (req, res) => {
  try {
    const userExist = await User.findOne({
      email: req.body.email.toLowerCase(),
    });

    if (userExist)
      return res.status(404).json({ error: "User already exist!" });

    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(req.body.password, salt);

    const user = {
      fullName: req.body.fullName,
      email: req.body.email.toLowerCase(),
      isAdmin: false,
      isActive: true,
      password: hashedPwd,
    };

    const savedUser = await User.create(user);
    return res.status(201).json(savedUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = registerUser;
