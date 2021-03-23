const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductUserSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    description: String,
    price: Number,
    img: String
}, { timestamps: true });

module.exports = mongoose.model("Products", ProductUserSchema);