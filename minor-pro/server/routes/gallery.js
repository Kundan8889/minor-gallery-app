// express aur multer ko import kiya gaya hai.
import express from "express";
import multer from "multer";

// galleryController ko import kiya gaya hai.
import galleryController from "../controllers/galleryController.js";

// Express Router ka instance banaya gaya hai.
const router = express.Router();

// multer ke liye storage configuration ki gayi hai.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/upload/`);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// multer ka instance banaya gaya hai jise storage configuration ke saath initialize kiya gaya hai.
const upload = multer({ storage: storage });

// Upload image endpoint par POST request handle karne ke liye middleware aur controller ka upyog kiya gaya hai.
router.post("/upload/image", upload.single("image"), galleryController.uploadImage);

// Add category endpoint par POST request handle karne ke liye controller ka upyog kiya gaya hai.
router.post("/add/category", galleryController.addNewCategory);

// Get all categories endpoint par GET request handle karne ke liye controller ka upyog kiya gaya hai.
router.get("/get/categories", galleryController.getAllCategories);

// Get all images endpoint par GET request handle karne ke liye controller ka upyog kiya gaya hai.
router.get("/get/images", galleryController.getAllImages);

// Get single image endpoint par GET request handle karne ke liye controller ka upyog kiya gaya hai.
router.get("/get/singleimage", galleryController.getsingleImage);

// Router ko export kiya gaya hai.
export default router;
