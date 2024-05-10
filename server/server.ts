import { app } from "./app";
import connectDB from "./utils/db";
require("dotenv").config();
import { v2 as cloudinary } from "cloudinary";

//Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

//SERVER
app.listen(process.env.PORT, () => {
  console.log("server is running");
  connectDB();
});
