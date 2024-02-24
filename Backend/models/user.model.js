const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique : true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique : true,
    },
    list: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "List",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
