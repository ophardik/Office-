const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { addHome, allHouse, deleteHome } = require("../Controllers/homeController");
const router = express.Router();

// Ensure the 'uploads' folder exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
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
router.post("/addHome", upload.fields([
    { name: "profileImage", maxCount: 1 },  // Single image
    { name: "images", maxCount: 10 }        // Multiple images (up to 10)
]), addHome);

router.get("/allHouse", allHouse);
router.delete("/deleteHome/:id", deleteHome);

module.exports = router;