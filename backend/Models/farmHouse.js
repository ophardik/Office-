const mongoose=require("mongoose");

const FarmSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    squareYards:{
        type:Number,
        required:true,
    },
    direction:{
        type:String,
        required:true,
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
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    images:{
        type:[String],
        default:[],
    },
    description:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true,
    },
    bhk:{
        type:String,
        required:true,
    },
    amenities:{
        type:[String],
        default:[],
    },
    category:{
        type:String,
        required:true,
    },
})
const Farm=mongoose.model("Farm",FarmSchema);
module.exports=Farm;