const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        // required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://images.unsplash.com/..."
    },
    price: Number,
    location: String,
    country: String
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;