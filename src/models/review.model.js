const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("review", reviewSchema);
