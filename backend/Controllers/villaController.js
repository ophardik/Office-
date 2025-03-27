
const villaModel=require("../Models/villaModel")
// const addVilla=async(req,res)=>{
//     try {
//         const {name,squareYards,direction,location,price,image,images,description,type,bhk,amenities,roadSize,category}=req.body;
//        await villaModel.create({
//         name,
//         squareYards,
//         direction,
//         location,
//         price,
//         image,
//         images,
//         description,
//         type,
//         bhk,
//         amenities,
//         roadSize,
//         category,
//        })
//        res.status(201).json({
//         message:"Building Added Successfully",
//         name,
//         squareYards,
//         direction,
//         location,
//         price,
//         image,
//         images,
//         description,
//         type,
//         bhk,
//         amenities,
//         roadSize,
//         category,
//        })
//     } catch (error) {
//         console.log("error in adding home",error);
//         return res.status(400).json({
//             message:"Failed to add home",
//             success:"false"
//         })
//     }
// }
const addVilla = async (req, res) => {
    try {
        const { name, squareYards, direction, location, price, description, type, bhk, amenities, roadSize, category } = req.body;

        // Save the relative path for the profile image
        const profileImage = req.files["profileImage"] ? `villaUploads/${req.files["profileImage"][0].filename}` : null;

        // Save the relative paths for multiple images
        const images = req.files["images"] ? req.files["images"].map(file => `villaUploads/${file.filename}`) : [];

        await villaModel.create({
            name,
            squareYards,
            direction,
            location,
            price,
            image: profileImage,
            images,
            description,
            type,
            bhk,
            amenities,
            roadSize,
            category
        });

        res.status(201).json({
            message: "Building Added Successfully",
            name,
            squareYards,
            direction,
            location,
            price,
            profileImage,
            images,
            description,
            type,
            bhk,
            amenities,
            roadSize,
            category
        });
    } catch (error) {
        console.error("Error in adding villa:", error);
        res.status(400).json({
            message: "Failed to add villa",
            success: false
        });
    }
};


// const allVilla=async(req,res)=>{
//     try {
//         const allVillas=await villaModel.find({});
//         const structured=await allVillas.map((villa)=>({
//             name:villa.name,
//             squareYards:villa.squareYards,
//             direction:villa.direction,
//             location:villa.location,
//             price:villa.price,
//             image:villa.image,
//             images:villa.images,
//             description:villa.description,
//             type:villa.type,
//             bhk:villa.bhk,
//             amenities:villa.amenities,
//             roadSize:villa.roadSize,
//             category:villa.category
//         }))
//         res.status(200).json(structured);
//     } catch (error) {
//         console.log("error in getting all villas",error);
//         return res.status(400).json({
//             message:"Failed to get all villas",
//             success:"false"
//         })
//     }
// }
const allVilla = async (req, res) => {
    try {
        const allVillas = await villaModel.find({});
        const structured = allVillas.map(villa => ({
            name: villa.name,
            squareYards: villa.squareYards,
            direction: villa.direction,
            location: villa.location,
            price: villa.price,
            image: `${req.protocol}://${req.get("host")}/${villa.image}`,
            images: villa.images.map(img => `${req.protocol}://${req.get("host")}/${img}`),
            description: villa.description,
            type: villa.type,
            bhk: villa.bhk,
            amenities: villa.amenities,
            roadSize: villa.roadSize,
            category: villa.category
        }));

        res.status(200).json(structured);
    } catch (error) {
        console.error("Error in getting all villas:", error);
        res.status(400).json({
            message: "Failed to get all villas",
            success: false
        });
    }
};


const deleteVilla=async(req,res)=>{
    try {
        const {id}=req.params;
        const deletedVilla=await villaModel.findByIdAndDelete(id);
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
module.exports={addVilla,allVilla,deleteVilla}