// Mongoose library ko import kiya gaya.
import mongoose from "mongoose";

// Ek gallerySchema define kiya gaya hai mongoose.Schema ke dwara.
const gallerySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  category: {
    // Category ke reference ke liye mongoose.Schema.Types.ObjectId ka upyog kiya gaya hai.
    type: mongoose.Schema.Types.ObjectId,
    ref: "category", // category collection ke saath refer kiya gaya hai.
  },
});

// galleryModel ko gallerySchema ke saath mongoose.model() ke dwara define kiya gaya hai.
const galleryModel = mongoose.model("gallery", gallerySchema);

// galleryModel ko module ka default export kiya gaya hai.
export default galleryModel;
