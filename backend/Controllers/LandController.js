const landModel=require("../Models/LandModel")
const addLand=async(req,res)=>{
    try {
        const {name,squareYards,direction,location,price,image,images,description,type,roadSize,category}=req.body;
        await landModel.create({
            name,
            squareYards,
            direction,
            location,
            price,
            image,
            images,
            description,
            type,
            roadSize,
            category,
        });
        return res.status(201).json({
            message:"Land Added Successfully",
            name,
            squareYards,
            direction,
            location,
            price,
            image,
            images,
            description,
            type,
            roadSize,
            category,
        })
    } catch (error) {
        console.log("error in adding land",error);
        return res.status(400).json({
            message: "Error in adding land",
            success:"false"
        })
    }
}

const allLand=async(req,res)=>{
    try {
        const allLands=await landModel.find({});
        const structured=await allLands.map((land)=>({
            _id:land._id,
            name:land.name,
            squareYards:land.squareYards,
            direction:land.direction,
            location:land.location,
            price:land.price,
            image:land.image,
            images:land.images,
            description:land.description,
            type:land.type,
            roadSize:land.roadSize,
            category:land.category,
        }))
        return res.status(200).json({
            message:"All Lands Retrieved Successfully",
            data:structured
        })
    } catch (error) {
        console.log("error in getting all Lands",error)
        return res.status(400).json({
            message: "Error in getting all Lands",
            success:"false"
        })
    }
}
const deleteLand=async(req,res)=>{
    try {
        const {id}=req.params;
        const deletedBuilding=await landModel.findByIdAndDelete(id);
        if(!deletedBuilding){
            return res.status(404).json({
                message:"Land not found",
                success:"false"
                })
                }
                res.status(200).json({
                    message:"Land deleted successfully",
                    success:"true"
                    })
    } catch (error) {
        return res.status(400).json({
            message:"Failed to delete Land",
            success:"false"
        })
    }
}
module.exports={addLand,allLand,deleteLand}