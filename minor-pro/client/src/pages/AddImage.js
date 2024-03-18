// React, useState, useEffect ko import kiya gaya hai.
import React, { useState, useEffect } from "react";

// react-router-dom se useNavigate ko import kiya gaya hai.
import { useNavigate } from "react-router-dom";

// react-redux se useSelector aur useDispatch ko import kiya gaya hai.
import { useSelector, useDispatch } from "react-redux";

// gallerySlice se getAllCategories aur postNewImage ko import kiya gaya hai.
import {
  getAllCategories,
  postNewImage,
} from "../redux/reducers/gallerySlice";

// CSS file ko import kiya gaya hai.
import "./AddImage.css";

// AddImage component ko define kiya gaya hai.
const AddImage = () => {
  const navigate = useNavigate(); // useNavigate hook ka upyog kiya gaya hai.
  const [file, setFile] = useState(null); // File ko state mein rakha gaya hai.
  const [category, setCategory] = useState(""); // Category ko state mein rakha gaya hai.
  const dispatch = useDispatch(); // useDispatch hook ka upyog kiya gaya hai.
  const { categories } = useSelector((state) => state.gallery); // useSelector hook ka upyog kiya gaya hai.

  // useEffect hook ka upyog kiya gaya hai categories ko fetch karne ke liye.
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  // handleSubmit function ko define kiya gaya hai.
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("category", category);
    dispatch(postNewImage(formData)); // postNewImage action ko dispatch kiya gaya hai.
    navigate("/"); // "/" path par navigate kiya gaya hai.
  };

  // JSX ko return kiya gaya hai.
  return (
    <div className="container">
      <div className="row">
        <div className="align-center">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                id="image"
                className="form-control"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                className="form-control custom-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled>
                  Please Select
                </option>
                {categories.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Upload
            </button>
          </form>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

// AddImage component ko export kiya gaya hai.
export default AddImage;
