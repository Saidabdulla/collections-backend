const { Schema, model } = require("mongoose");
const User = require("./user");

const collectionSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    topic: {
      type: String,
      required: true,
      trim: true,
    },
    img: {
      type: String,
      required: true,
      trim: true,
    },
    author_id: { type: Schema.Types.ObjectId, ref: User },
  },
  { timestamps: true }
);

module.exports = model("collection", collectionSchema);
