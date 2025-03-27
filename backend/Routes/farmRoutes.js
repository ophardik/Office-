const express=require("express");
const { addFarmHouse, allFarmHouse, deleteFarmHouse } = require("../Controllers/farmHouseControllers");
const router=express.Router();

router.post("/addFarmHouse",addFarmHouse);
router.get("/allFarmHouse",allFarmHouse)
router.delete("/deleteFarmHouse/:id",deleteFarmHouse)

module.exports=router