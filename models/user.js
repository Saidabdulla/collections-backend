const { Schema, model } = require("mongoose");

const userSchema = Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  isBlocked: {
    type: Boolean,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = model("user", userSchema);
