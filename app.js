const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(()=>{
        console.log("connected to db");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.send("I am root");
})

// Show route
app.get("/listings/:id", async (req, res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
})

// Index route
app.get("/listings", async (req, res)=>{
    const allListings = await Listing.find({})
    res.render("listings/index.ejs", {allListings})
})

// app.get("/testListing", async (req, res)=>{
//     let sampleListing = new Listing({
//         title: "My Villa",
//         description: "by the beach",
//         price: 1200,
//         location: "Mumbai",
//         country: "India"
//     })
//     await sampleListing.save();
//     console.log("Sample saved");
//     res.send("Successfull testing")
// })

app.listen(3000, ()=>{
    console.log("app is listening on port 3000");
})