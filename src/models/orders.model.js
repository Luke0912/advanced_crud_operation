const mongoose = require("mongoose");

const mongooseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    cart: { type: array, required: true, default: [] },
  },
  { timestamps: true }
);
