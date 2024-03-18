// React library se React ko import kiya gaya hai.
import React from "react";

// react-router-dom se Route aur Routes ko import kiya gaya hai.
import { Route, Routes } from "react-router-dom";

// Bootstrap ke grid CSS aur bundle JS ko import kiya gaya hai.
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

// Home, AddCategory, AddImage aur Header components ko import kiya gaya hai.
import Home from "./pages/Home";
import AddCategory from "./pages/AddCategory";
import AddImage from "./pages/AddImage";
import Header from "./pages/Header";

// App component ko define kiya gaya hai.
const App = () => {
  return (
    <>
      {/* Header component ko render kiya gaya hai. */}
      <Header />
      
      {/* Routes component ke andar various routes define kiye gaye hain */}
      <Routes>
        {/* "/" path ke liye Home component ka element render kiya gaya hai. */}
        <Route path="/" element={<Home />} />
        
        {/* "/add-category" path ke liye AddCategory component ka element render kiya gaya hai. */}
        <Route path="/add-category" element={<AddCategory />} />
        
        {/* "/add-image" path ke liye AddImage component ka element render kiya gaya hai. */}
        <Route path="/add-image" element={<AddImage />} />
      </Routes>
    </>
  );
};

// App component ko export kiya gaya hai.
export default App;
