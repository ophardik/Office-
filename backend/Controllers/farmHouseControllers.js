
const farmHouseModel=require("../Models/farmHouse")
const addFarmHouse=async(req,res)=>{
    try {
        const {name,squareYards,direction,location,price,image,images,description,type,bhk,amenities,category}=req.body;
       await farmHouseModel.create({
        name,
        squareYards,
        direction,
        location,
        price,
        image,
        images,
        description,
        type,
        bhk,
        amenities,
        category,
       })
       res.status(201).json({
        message:"Farm House Added Successfully",
        name,
        squareYards,
        direction,
        location,
        price,
        image,
        images,
        description,
        type,
        bhk,
        amenities,
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

const allFarmHouse=async(req,res)=>{
    try {
        const allFarmHouses=await farmHouseModel.find({});
        const structured=await allFarmHouses.map((farmHouse)=>({
            _id:farmHouse._id,
            name:farmHouse.name,
            squareYards:farmHouse.squareYards,
            direction:farmHouse.direction,
            location:farmHouse.location,
            price:farmHouse.price,
            image:farmHouse.image,
            images:farmHouse.images,
            description:farmHouse.description,
            type:farmHouse.type,
            bhk:farmHouse.bhk,
            amenities:farmHouse.amenities,
            category:farmHouse.category,
        }))
        res.status(200).json(structured);
    } catch (error) {
        console.log("error in fetching all farmhouses",error);
        return res.status(400).json({
            message:"Failed to fetch all farmhouses",
            success:"false"
        })
    }
}
const deleteFarmHouse=async(req,res)=>{
    try {
        const {id}=req.params;
        const deletedBuilding=await farmHouseModel.findByIdAndDelete(id);
        if(!deletedBuilding){
            return res.status(404).json({
                message:"FarmHouse not found",
                success:"false"
                })
                }
                res.status(200).json({
                    message:"FarmHouse deleted successfully",
                    success:"true"
                    })
    } catch (error) {
        return res.status(400).json({
            message:"Failed to delete FarmHouse",
            success:"false"
        })
    }
}
module.exports={addFarmHouse,allFarmHouse,deleteFarmHouse}