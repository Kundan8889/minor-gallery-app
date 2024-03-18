// express, connectToMongo, cors, aur galleryRoutes ko import kiya gaya hai.
import express from "express";
import connectToMongo from "./config/db.js";
import cors from "cors";
import galleryRoutes from './routes/gallery.js'

// express app ka instance banaya gaya hai.
const app = express();

// CORS middleware ka upyog kiya gaya hai.
app.use(cors());

// JSON middleware ka upyog kiya gaya hai.
app.use(express.json());

// galleryRoutes ka upyog kiya gaya hai.
app.use("/api/v1", galleryRoutes);

// Static file serving middleware ka upyog kiya gaya hai.
app.use(express.static("public/upload"));

// Server port ka nirdhaarit kiya gaya hai.
const PORT = 8000;

// MongoDB se connect karne ka function ko call kiya gaya hai.
connectToMongo();

// Server ko specified port par sunnaya gaya hai.
app.listen(PORT, () => {
  console.log(`api is running on http://localhost:${PORT}`);
});
