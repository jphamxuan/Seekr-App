const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trailSchema = new Schema({
    name: { type: String, required: true, index: { unique: true } },
    link: String,
    location: String,
    image: String,
    length: Number,
    conditionStatus: String,
    stars: Number,
    latituge: Number,
    longitude: Number
});

const Trail = mongoose.model("trail", trailSchema);

module.exports = Trail;
