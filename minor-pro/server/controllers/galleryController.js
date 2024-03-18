// Import kiya gaya galleryModel aur categoryModel from "../models/gallery.js" aur "../models/category.js" respectively.
import galleryModel from "../models/gallery.js";
import categoryModel from "../models/category.js";

// galleryController class ko define kiya gaya hai.
class galleryController {
  // uploadImage function ko define kiya gaya hai jo ek image ko upload karta hai.
  static uploadImage = async (req, res) => {
    const { category } = req.body;
    try {
      if (category) {
        const addImage = galleryModel({
          name: req.file.filename,
          category: category,
        });

        const saved_image = await addImage.save();
        if (saved_image) {
          return res.status(200).json({ message: "file upload successfully" });
        }
      } else {
        return res.status(400).json({ message: "all fields are required" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  // addNewCategory function ko define kiya gaya hai jo ek nayi category ko add karta hai.
  static addNewCategory = async (req, res) => {
    const { name } = req.body;
    try {
      if (name) {
        const newCategory = categoryModel({
          name: name,
        });

        const saved_category = await newCategory.save();
        if (saved_category) {
          return res
            .status(200)
            .json({ message: "category added successfully" });
        }
      } else {
        return res.status(400).json({ message: "all fields are required" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  // getAllCategories function ko define kiya gaya hai jo sabhi categories ko fetch karta hai.
  static getAllCategories = async (req, res) => {
    try {
      const fetchAllCategories = await categoryModel.find({});
      return res.status(200).json(fetchAllCategories);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  // getAllImages function ko define kiya gaya hai jo sabhi images ko fetch karta hai.
  static getAllImages = async (req, res) => {
    try {
      const fetchAllImages = await galleryModel.find({});
      return res.status(200).json(fetchAllImages);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  // getsingleImage function ko define kiya gaya hai jo ek specific category ke images ko fetch karta hai.
  static getsingleImage = async (req, res) => {
    const { category } = req.query;
    try {
      if (category) {
        const getCategoryBasedImages = await galleryModel.find({
          category,
        });
        return res.status(200).json(getCategoryBasedImages);
      } else {
        return res.status(400).json({ message: "all fields are required" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
}

// galleryController class ko default export kiya gaya hai.
export default galleryController;
