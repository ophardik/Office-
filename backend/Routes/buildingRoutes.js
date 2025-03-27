const express=require("express");
const { addBuilding, allBuilding, deletedBuildings } = require("../Controllers/buildingController");
const router=express.Router();

router.post("/addBuilding",addBuilding)
router.get("/allBuilding",allBuilding)
router.delete("/deletedBuildings/:id",deletedBuildings)


module.exports=router;