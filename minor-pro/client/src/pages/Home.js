import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories, getAllImages, getSingleImage } from "../redux/reducers/gallerySlice";
import "./Home.css"; // Import the CSS file

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllImages());
    dispatch(getAllCategories());
  }, [dispatch]); // Added dispatch as a dependency

  const { images, categories } = useSelector((state) => state.gallery);

  const handleCategories = (id) => {
    dispatch(getSingleImage(id));
  };

  return (
    <div className="container my-3">
      <div className="row ">
        <div align="center">
          <button
            onClick={() => dispatch(getAllImages())}
            className="btn btn-primary filter-button"
            data-filter="all"
          >
            All
          </button>

          {categories &&
            categories.map((item) => (
              <button
                key={item._id}
                onClick={() => handleCategories(item._id)}
                className="btn btn-default filter-button border mx-2"
                data-filter="hdpe"
              >
                {item.name}
              </button>
            ))}
        </div>

        <br />

        {images &&
          images.map((item, index) => (
            <div key={index} className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe my-4">
              <img
                src={`http://localhost:8000/${item.name}`}
                alt={`Image ${index}`} // Brief description of the image
                className="img img-responsive"
                height="300px"
                width="300px"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
