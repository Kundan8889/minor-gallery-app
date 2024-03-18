import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./pages/Home";
import AddCategory from "./pages/AddCategory";
import AddImage from "./pages/AddImage";
import Header from "./pages/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/add-image" element={<AddImage />} />
      </Routes>
    </>
  );
};

export default App;
