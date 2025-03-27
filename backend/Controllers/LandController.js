const land=require("../Models/LandModel")
const addLand=async(req,res)=>{
    try {
        const {name,}=req.body
    } catch (error) {
        console.log("error in adding land",error);
        return res.status(400).json({
            message: "Error in adding land",
            success:"false"
        })
    }
}