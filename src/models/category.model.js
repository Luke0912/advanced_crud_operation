const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name can't be null"]
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
})

module.exports=mongoose.model("category",categorySchema)