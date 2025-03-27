// const express=require("express");
// const { addVilla, allVilla,deleteVilla } = require("../Controllers/villaController");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");
// const router=express.Router();

// const uploadDir = path.join(__dirname, "../villaUploads");
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Multer configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, uploadDir);
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });

// // File filter
// const fileFilter = (req, file, cb) => {
//     const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
//     if (allowedTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(new Error("Only JPEG, JPG, and PNG files are allowed"), false);
//     }
// };

// // Upload configuration
// const upload = multer({ 
//     storage: storage,
//     fileFilter: fileFilter,
//     limits: { fileSize: 2 * 1024 * 1024 } // 2MB size limit
// });

// // Route to handle both single and multiple file uploads
// router.post("/addVilla", upload.fields([
//     { name: "profileImage", maxCount: 1 },  // Single image
//     { name: "images", maxCount: 10 }        // Multiple images (up to 10)
// ]),addVilla );

// // router.post("/addVilla",addVilla)
// router.get("/allVilla",allVilla)
// router.delete("/deleteVilla/:id",deleteVilla)

// module.exports=router

const express = require("express");
const { addVilla, allVilla, deleteVilla } = require("../Controllers/villaController");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const uploadDir = path.join(__dirname, "../villaUploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename);
    }
});

// File filter
const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only JPEG, JPG, and PNG files are allowed"), false);
    }
};

// Upload configuration
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 } // 2MB size limit
});

// Route to handle both single and multiple file uploads
router.post("/addVilla", upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "images", maxCount: 10 }
]), addVilla);

router.get("/allVilla", allVilla);
router.delete("/deleteVilla/:id", deleteVilla);

module.exports = router;