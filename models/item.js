const { Schema, model } = require("mongoose");
const Collection = require("./collection");

const itemSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    tags: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],

    liked_users: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],

    disliked_users: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],

    seen_users: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],

    comments: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        text: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],

    collection_id: { type: Schema.Types.ObjectId, ref: Collection },
  },
  { timestamps: true }
);

module.exports = model("item", itemSchema);
