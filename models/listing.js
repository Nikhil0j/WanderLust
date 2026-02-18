const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1761839257469-96c78a7c2dd3?q=80&w=2069&auto=format&fit=crop"
        }
    },
    price: Number,
    location: String,
    country: String
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;