const homeModel=require("../Models/homeModel")
const addHome = async (req, res) => {
    try {
        const {
            name,
            squareYards,
            direction,
            location,
            price,
            description,
            type,
            bhk,
            amenities,
            roadSize,
            size,
            category
        } = req.body;

        // Access uploaded files correctly for validation
        const profileImage = req.files?.profileImage?.[0]?.path || null;
        const additionalImages = req.files?.images ? req.files.images.map(file => file.path) : [];

        // Validation check
        if (!name || !squareYards || !direction || !location || !price || !profileImage || !additionalImages.length || !description || !type || !bhk || !amenities || !roadSize || !size || !category) {
            return res.status(400).json({
                message: "Please fill all the fields",
                success: false
            });
        }

        // Creating a new home entry
        const newHome = await homeModel.create({
            name,
            squareYards,
            direction,
            location,
            price,
            image: profileImage,
            images: additionalImages,
            description,
            type,
            bhk,
            amenities,
            roadSize,
            size,
            category
        });

        res.status(201).json({
            message: "Home added successfully",
            success: true,
            data: newHome
        });

    } catch (error) {
        console.error("Error in adding home:", error.message);
        res.status(500).json({
            message: "Failed to add home",
            success: false,
            error: error.message
        });
    }
};


const allHouse=async(req,res)=>{
    try {
    const allHouses=await homeModel.find({});
    const structured=await allHouses.map((house)=>({
        id:house._id,
        name:house.name,
        squareYards:house.squareYards,
        direction:house.direction,
        location:house.location,
        price:house.price,
        image:house.image,
        images:house.images,
        description:house.description,
        type:house.type,
        bhk:house.bhk,
        amenities:house.amenities,
        roadSize:house.roadSize,
        size:house.size,
        category:house.category,
    }))
    res.status(200).json(structured);
    } catch (error) {
        console.log("error in getting all Houses",error);
        return res.status(400).json({
            message:"Failed to get all Houses",
            success:"false"
        })
    }
}

const deleteHome=async(req,res)=>{
    try {
        const {id}=req.params;
        const deletedHome=await homeModel.findByIdAndDelete(id);
        if(!deletedHome){
            return res.status(404).json({
                message:"Home not found",
                success:"false"
                })
                }
                res.status(200).json({
                    message:"Home deleted successfully",
                    success:"true"
                    })
    } catch (error) {
        return res.status(400).json({
            message:"Failed to delete Home",
            success:"false"
        })
    }
}
module.exports={addHome,allHouse,deleteHome}