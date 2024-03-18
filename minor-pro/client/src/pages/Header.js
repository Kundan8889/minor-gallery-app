// React aur Link ko import kiya gaya hai.
import React from "react";
import { Link } from "react-router-dom";

// CSS file ko import kiya gaya hai.
import "./header.css";

// Header component ko define kiya gaya hai.
const Header = () => {
  return (
    <nav className="custom-nav">
      <div className="brand-container">
        {/* Home page par jaane ke liye Link ka upyog kiya gaya hai */}
        <Link className="brand-link" to="/">
          My Gallery
        </Link>
      </div>
      <div className="buttons-container">
        {/* Add Image page par jaane ke liye Link ka upyog kiya gaya hai */}
        <Link to="/add-image">
          <button className="custom-button"> 
            Add Image
          </button>
        </Link>
        {/* Add Category page par jaane ke liye Link ka upyog kiya gaya hai */}
        <Link to="/add-category">
          <button className="custom-button">
            Add Category
          </button>
        </Link>
      </div>
    </nav>
  );
};

// Header component ko export kiya gaya hai.
export default Header;
