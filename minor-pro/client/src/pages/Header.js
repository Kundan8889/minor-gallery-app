import React from "react";
import { Link } from "react-router-dom";
import "./header.css"; // CSS file imported

const Header = () => {
  return (
    <nav className="custom-nav">
      <div className="brand-container">
        <Link className="brand-link" to="/">
          My Gallery
        </Link>
      </div>
      <div className="buttons-container">
        <Link to="/add-image">
          <button className="custom-button"> 
            Add Image
          </button>
        </Link>
        <Link to="/add-category">
          <button className="custom-button">
            Add Category
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
