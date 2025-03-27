const mongoose=require("mongoose");

const shopSchema=new mongoose.Schema({
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
    roadSize:{
        type:String,
        required:true,
    },
    size:{
        type:String,
    },
    category:{
        type:String,
        required:true,
    },
})
const Shop=mongoose.model("Shop",shopSchema);
module.exports=Shop;