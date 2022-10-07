const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      res.json({
        user: {
          fullName: user.fullName,
          email: user.email,
          isActive: user.isActive,
          isAdmin: user.isAdmin,
        },
        token,
      });
    } else res.status(404).json({ error: "Invalid credentials." });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = loginUser;
