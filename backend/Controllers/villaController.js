// const villaModel = require("../Models/villaModel");
// const path = require("path");

// const addVilla = async (req, res) => {
//   try {
//     const {
//       name,
//       squareYards,
//       direction,
//       location,
//       price,
//       description,
//       type,
//       bhk,
//       amenities,
//       roadSize,
//       category,
//     } = req.body;

//     // Save the relative path for the profile image
//     const profileImage = req.files["profileImage"]
//       ? `villaUploads/${req.files["profileImage"][0].filename}`
//       : null;

//     // Save the relative paths for multiple images
//     const images = req.files["images"]
//       ? req.files["images"].map((file) => `villaUploads/${file.filename}`)
//       : [];

//     const newVilla = await villaModel.create({
//       name,
//       squareYards,
//       direction,
//       location,
//       price,
//       image: profileImage,
//       images,
//       description,
//       type,
//       bhk,
//       amenities,
//       roadSize,
//       category,
//     });

//     res.status(201).json({
//       message: "Villa Added Successfully",
//       villa: {
//         name,
//         squareYards,
//         direction,
//         location,
//         price,
//         profileImage,
//         images,
//         description,
//         type,
//         bhk,
//         amenities,
//         roadSize,
//         category,
//       },
//     });
//   } catch (error) {
//     console.error("Error in adding villa:", error);
//     res.status(400).json({
//       message: "Failed to add villa",
//       success: false,
//     });
//   }
// };

// const allVilla = async (req, res) => {
//   try {
//     const allVillas = await villaModel.find({});
//     const structured = allVillas.map((villa) => ({
//       name: villa.name,
//       squareYards: villa.squareYards,
//       direction: villa.direction,
//       location: villa.location,
//       price: villa.price,
//      image: `${req.protocol}://${req.get("host")}/uploads/${path.basename(house.image)}`,
//      images: house.images.map(img => `${req.protocol}://${req.get("host")}/uploads/${path.basename(img)}`),
//       description: villa.description,
//       type: villa.type,
//       bhk: villa.bhk,
//       amenities: villa.amenities,
//       roadSize: villa.roadSize,
//       category: villa.category,
//     }));

//     res.status(200).json(structured);
//   } catch (error) {
//     console.error("Error in getting all villas:", error);
//     res.status(400).json({
//       message: "Failed to get all villas",
//       success: false,
//     });
//   }
// };

// const deleteVilla = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedVilla = await villaModel.findByIdAndDelete(id);

//     if (!deletedVilla) {
//       return res.status(404).json({
//         message: "Villa not found",
//         success: false,
//       });
//     }

//     res.status(200).json({
//       message: "Villa deleted successfully",
//       success: true,
//     });
//   } catch (error) {
//     console.error("Error in deleting villa:", error);
//     res.status(400).json({
//       message: "Failed to delete villa",
//       success: false,
//     });
//   }
// };

// module.exports = { addVilla, allVilla, deleteVilla };


const villaModel = require("../Models/villaModel");
const path = require("path");

const addVilla = async (req, res) => {
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
            category
        } = req.body;

        const profileImage = req.files?.profileImage?.[0]?.path || null;
        const additionalImages = req.files?.images ? req.files.images.map(file => file.path) : [];

        if (
            !name || !squareYards || !direction || !location || !price ||
            !profileImage || !additionalImages.length || !description ||
            !type || !bhk || !amenities || !roadSize || !category
        ) {
            return res.status(400).json({
                message: "Please fill all the fields",
                success: false
            });
        }

        const newVilla = await villaModel.create({
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
            category
        });

        res.status(201).json({
            message: "Villa added successfully",
            success: true,
            data: newVilla
        });

    } catch (error) {
        console.error("Error in adding villa:", error.message);
        res.status(500).json({
            message: "Failed to add villa",
            success: false,
            error: error.message
        });
    }
};

const allVilla = async (req, res) => {
    try {
        const allVillas = await villaModel.find({});
        const structured = allVillas.map(villa => ({
            id: villa._id,
            name: villa.name,
            squareYards: villa.squareYards,
            direction: villa.direction,
            location: villa.location,
            price: villa.price,
            image: `${req.protocol}://${req.get("host")}/uploads/${path.basename(villa.image)}`,
            images: villa.images.map(img => `${req.protocol}://${req.get("host")}/uploads/${path.basename(img)}`),
            description: villa.description,
            type: villa.type,
            bhk: villa.bhk,
            amenities: villa.amenities,
            roadSize: villa.roadSize,
            category: villa.category,
        }));
  console.log(structured)
        res.status(200).json(structured);
    } catch (error) {
        console.log("Error in getting all villas:", error.message);
        return res.status(400).json({
            message: "Failed to get all villas",
            success: false
        });
    }
};

const deleteVilla = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedVilla = await villaModel.findByIdAndDelete(id);
        if (!deletedVilla) {
            return res.status(404).json({
                message: "Villa not found",
                success: false
            });
        }
        res.status(200).json({
            message: "Villa deleted successfully",
            success: true
        });
    } catch (error) {
        return res.status(400).json({
            message: "Failed to delete villa",
            success: false
        });
    }
};

module.exports = { addVilla, allVilla, deleteVilla };
