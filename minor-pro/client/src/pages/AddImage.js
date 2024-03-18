import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategories,
  postNewImage,
} from "../redux/reducers/gallerySlice";
import "./AddImage.css"; // Import the CSS file

const AddImage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("category", category);
    dispatch(postNewImage(formData));
    navigate("/");
  };

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

export default AddImage;
