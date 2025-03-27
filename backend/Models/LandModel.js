const mongoose = require("mongoose");

const landSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    squareYards: { // Changed from SquareYards to squareYards for consistency
        type: Number,
        required: true,
    },
    direction: {
        type: String,
        required: true,
    },
    location: {  // Updated for Google Maps location
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^https:\/\/www\.google\.com\/maps\/.+$/.test(v);  // Validates Google Maps URL
            },
            message: props => `${props.value} is not a valid Google Maps URL!`
        }
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    images: {
        type: [String], // Array of image URLs
        default: [],
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    roadSize: { // Consider changing to Number if applicable
        type: String, 
        required: true,
    },
    // size:{
    //     type:String,
    //     required:true
    //  },
     category:{
        type:String,
        required:true,
    },
});

const LandModel = mongoose.model("Land", landSchema); // Capitalized for consistency

module.exports = LandModel; // Ensure import statements use exact casing