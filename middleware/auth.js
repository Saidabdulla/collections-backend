const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoced = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoced.id).select("-password");

      next();
    } catch (error) {
      res.status(401).json({ error: "Not Authorizated." });
    }
  }

  if (!token) {
    return res.status(401).json({ error: "Not Authorizated, No Token." });
  }
});

const checkAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res
      .status(403)
      .json({ error: "Access to that resource is forbidden." });
  }

  next();
};

module.exports = { protect, checkAdmin };
