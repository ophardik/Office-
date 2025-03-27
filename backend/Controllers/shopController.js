
const shopModel=require("../Models/Shops");
const { allHouse } = require("./homeController");
const addShop=async(req,res)=>{
    try {
        const {name,squareYards,direction,location,price,image,images,description,type,roadSize,size,category}=req.body;
       await shopModel.create({
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
        size,
        category,
       })
       res.status(201).json({
        message:"Shop Added Successfully",
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
        size,
        category
       })
    } catch (error) {
        console.log("error in adding Shop",error);
        return res.status(400).json({
            message:"Failed to add Shop",
            success:"false"
        })
    }
}

const allShop=async(req,res)=>{
    try {
        const allShops=await shopModel.find({});
        const structured=await allShops.map((shop)=>({
            _id:shop._id,
            name:shop.name,
            squareYards:shop.squareYards,
            direction:shop.direction,
            location:shop.location,
            price:shop.price,
            image:shop.image,
            images:shop.images,
            description:shop.description,
            type:shop.type,
            roadSize:shop.roadSize,
            size:shop.size,
            category:shop.category,
        }))
        res.status(200).json(structured);
    } catch (error) {
        console.log("error in getting all shops",error);
        return res.status(400).json({
            message:"Failed to get all shops",
            success:"false"
        })
    }
}

const deleteShop=async(req,res)=>{
    try {
        const {id}=req.params;
        const deletedVilla=await shopModel.findByIdAndDelete(id);
        if(!deletedVilla){
            return res.status(404).json({
                message:"Shop not found",
                success:"false"
                })
                }
                res.status(200).json({
                    message:"Shop deleted successfully",
                    success:"true"
                    })
    } catch (error) {
        return res.status(400).json({
            message:"Failed to delete Shop",
            success:"false"
        })
    }
}
module.exports={addShop,allShop,deleteShop}