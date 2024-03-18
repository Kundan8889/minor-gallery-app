// React aur useEffect ko import kiya gaya hai.
import React, { useEffect } from "react";

// react-redux se useSelector aur useDispatch ko import kiya gaya hai.
import { useSelector, useDispatch } from "react-redux";

// gallerySlice se getAllCategories, getAllImages aur getSingleImage ko import kiya gaya hai.
import { getAllCategories, getAllImages, getSingleImage } from "../redux/reducers/gallerySlice";

// CSS file ko import kiya gaya hai.
import "./Home.css";

// Home component ko define kiya gaya hai.
const Home = () => {
  const dispatch = useDispatch(); // useDispatch hook ka upyog kiya gaya hai.

  // useEffect hook ka upyog kiya gaya hai images aur categories ko fetch karne ke liye.
  useEffect(() => {
    dispatch(getAllImages());
    dispatch(getAllCategories());
  }, [dispatch]); // dispatch ko dependency ke roop mein add kiya gaya hai.

  // useSelector hook ka upyog kiya gaya hai Redux store se images aur categories ko retrieve karne ke liye.
  const { images, categories } = useSelector((state) => state.gallery);

  // handleCategories function ko define kiya gaya hai.
  const handleCategories = (id) => {
    dispatch(getSingleImage(id)); // getSingleImage action ko dispatch kiya gaya hai.
  };

  // JSX ko return kiya gaya hai.
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

// Home component ko export kiya gaya hai.
export default Home;
