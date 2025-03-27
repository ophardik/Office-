
const buildingModel=require("../Models/Building")
const addBuilding=async(req,res)=>{
    try {
        const {name,squareYards,direction,location,price,image,images,description,type,amenities,totalFloors,category}=req.body;
       await buildingModel.create({
        name,
        squareYards,
        direction,
        location,
        price,
        image,
        images,
        description,
        type,
        amenities,
        totalFloors,
        category,
       })
       res.status(201).json({
        message:"Building Added Successfully",
        name,
        squareYards,
        direction,
        location,
        price,
        image,
        images,
        description,
        type,
        amenities,
        totalFloors,
        category,
       })
    } catch (error) {
        console.log("error in adding home",error);
        return res.status(400).json({
            message:"Failed to add home",
            success:"false"
        })
    }
}

const allBuilding=async(req,res)=>{
    try {
        const allBuildings=await buildingModel.find({});
        const structured=await allBuildings.map((building)=>({
            _id:building._id,
            name:building.name,
            squareYards:building.squareYards,
            direction:building.direction,
            location:building.location,
            price:building.price,
            image:building.image,
            images:building.images,
            description:building.description,
            type:building.type,
            amenities:building.amenities,
            totalFloors:building.totalFloors,
            category:building.category,
        }))
        res.status(200).json(structured)
    } catch (error) {
        console.log("error in fetching all listed buildings",error);
        return res.status(400).json({
            message:"Failed to fetch all listed buildings",
            success:"false"
        })
    }
}

const deletedBuildings=async(req,res)=>{
    try {
        const {id}=req.params;
        const deletedBuilding=await buildingModel.findByIdAndDelete(id);
        if(!deletedBuilding){
            return res.status(404).json({
                message:"Building not found",
                success:"false"
                })
                }
                res.status(200).json({
                    message:"Building deleted successfully",
                    success:"true"
                    })
    } catch (error) {
        return res.status(400).json({
            message:"Failed to delete Building",
            success:"false"
        })
    }
}
module.exports={addBuilding,allBuilding,deletedBuildings}