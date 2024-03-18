import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postNewCategory, getAllCategories } from "../redux/reducers/gallerySlice";
import { useNavigate } from "react-router-dom";
import "./AddCategory.css"; // Import the CSS file

const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(postNewCategory(input));
    dispatch(getAllCategories());
    navigate("/add-image");
  };

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

export default AddCategory;
