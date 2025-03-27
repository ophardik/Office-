const express=require("express");
const path=require("path")
const connectToDb = require("./Config/db");
require("dotenv").config({path:"./Config/.env"})
const cors=require("cors")
const landRoute=require("./Routes/landRoutes")
const homeRoute=require("./Routes/homeRoutes")
const buildingRoute=require("./Routes/buildingRoutes")
const farmHouseRoute=require("./Routes/farmRoutes")
const shopRoute=require("./Routes/shopRoutes")
const villaRoute=require("./Routes/villaRoutes")
const app=express();

const villaDir=path.join(__dirname,"villaUploads")

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/villaUploads", express.static(path.join(__dirname, "villaUploads")));
app.use("/homeUploads", express.static(path.join(__dirname, "uploads")));
app.use(cors({ origin: "*" })); // Allow all origins
connectToDb()

app.use("/api",landRoute)
app.use("/api2",homeRoute)
app.use("/api3",buildingRoute)
app.use("/api4",farmHouseRoute)
app.use("/api5",shopRoute)
app.use("/api6",villaRoute)

app.listen(process.env.PORT,()=>{
    console.log("Server is running on port "+process.env.PORT);
})