const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: Array, required: true, default: [] },
  },
  { timestamp: true }
);

module.exports=mongoose.model("user",userSchema)