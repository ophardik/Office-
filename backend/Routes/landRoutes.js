const express=require("express");
const { addLand, allLand, deleteLand } = require("../Controllers/LandController");
const router=express.Router();

router.post("/addLand",addLand)
router.get("/allLand",allLand)
router.delete("/deleteLand/:id",deleteLand)
module.exports=router