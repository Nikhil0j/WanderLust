const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(()=>{
        console.log("connected to db");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res)=>{
    res.send("I am root");
})

app.get("/testListing", async (req, res)=>{
    let sampleListing = new Listing({
        title: "My Villa",
        description: "by the beach",
        price: 1200,
        location: "Mumbai",
        country: "India"
    })
    await sampleListing.save();
    console.log("Sample saved");
    res.send("Successfull testing")
})

app.listen(3000, ()=>{
    console.log("app is listening on port 3000");
})