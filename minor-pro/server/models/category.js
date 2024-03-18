// Mongoose library ko import kiya gaya.
import mongoose from "mongoose";

// Ek categorySchema define kiya gaya hai mongoose.Schema ke dwara.
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

// categoryModel ko categorySchema ke saath mongoose.model() ke dwara define kiya gaya hai.
const categoryModel = mongoose.model("category", categorySchema);

// categoryModel ko module ka default export kiya gaya hai.
export default categoryModel;
