const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
  },
  { timestamp: true }
);

module.exports=mongoose.model("brand",brandSchema)