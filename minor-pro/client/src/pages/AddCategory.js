// React aur useState ko import kiya gaya hai.
import React, { useState } from "react";

// react-redux se useDispatch ko import kiya gaya hai.
import { useDispatch } from "react-redux";

// gallerySlice se postNewCategory aur getAllCategories ko import kiya gaya hai.
import { postNewCategory, getAllCategories } from "../redux/reducers/gallerySlice";

// react-router-dom se useNavigate ko import kiya gaya hai.
import { useNavigate } from "react-router-dom";

// CSS file ko import kiya gaya hai.
import "./AddCategory.css";

// AddCategory component ko define kiya gaya hai.
const AddCategory = () => {
  const dispatch = useDispatch(); // useDispatch hook ka upyog kiya gaya hai.
  const navigate = useNavigate(); // useNavigate hook ka upyog kiya gaya hai.
  const [input, setInput] = useState({
    name: "",
  });

  // handleSubmit function ko define kiya gaya hai.
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(postNewCategory(input)); // postNewCategory action ko dispatch kiya gaya hai.
    dispatch(getAllCategories()); // getAllCategories action ko dispatch kiya gaya hai.
    navigate("/add-image"); // "/add-image" path par navigate kiya gaya hai.
  };

  // JSX ko return kiya gaya hai.
  return (
    <div className="container">
      <div className="row">
        <div className="align-center">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Category:</label>
              <input
                name="name"
                value={input.name}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type="text"
                className="form-control"
                placeholder="Enter Category"
              />
            </div>

            <button type="submit" className="btn btn-primary mt-4">
              Add Category
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

// AddCategory component ko export kiya gaya hai.
export default AddCategory;
