const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "brand",
  },
  name: { type: String, required: true },
  country: {
    type: String,
    required: [true, "country can't be null"],
  },
  city: {
    type: String,
    default: "",
  },
  measureValue: {
    type: Number,
    default: 0,
  },
  minPrice: {
    type: Number,
    required: [true, "minPrice can't be null"],
    min: [1, "minPrice must be at least 1"],
  },
  maxPrice: {
    type: Number,
    required: [true, "maxPrice can't be null"],
    min: [1, "maxPrice must be at least 1"],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category' 
}
});

module.exports=mongoose.model("product",productSchema)