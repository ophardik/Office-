const mongoose=require("mongoose");
require("dotenv").config()

async function connectToDb(){
    try {
       const conn=await mongoose.connect(process.env.MONGO_URI);
       console.log("connected to DB") 
    } catch (error) {
        console.log("error in connecting with DB",error)
    }
}
module.exports=connectToDb