const express=require("express");
const { addShop, allShop, deleteShop } = require("../Controllers/shopController");
const router=express.Router();

router.post("/addShop",addShop);
router.get("/allShop",allShop);
router.delete("/deleteShop/:id",deleteShop);


module.exports=router