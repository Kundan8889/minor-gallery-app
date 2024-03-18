// Redux Toolkit se createSlice aur createAsyncThunk ko import kiya gaya hai.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Axios ko import kiya gaya hai.
import axios from "axios";

// Initial state ko define kiya gaya hai.
const initialState = {
  images: [],
  categories: [],
};

// getAllImages async thunk ko create kiya gaya hai.
export const getAllImages = createAsyncThunk(
  "gallery/getAllImages",
  async () => {
    const res = await axios.get("http://localhost:8000/api/v1/get/images");
    return res.data;
  }
);

// getAllCategories async thunk ko create kiya gaya hai.
export const getAllCategories = createAsyncThunk(
  "gallery/getAllCategories",
  async () => {
    const res = await axios.get("http://localhost:8000/api/v1/get/categories");
    return res.data;
  }
);

// postNewCategory async thunk ko create kiya gaya hai.
export const postNewCategory = createAsyncThunk(
  "gallery/postNewCategory",
  async (payload) => {
    const res = await axios.post(
      "http://localhost:8000/api/v1/add/category",
      payload
    );
    return res.data;
  }
);

// postNewImage async thunk ko create kiya gaya hai.
export const postNewImage = createAsyncThunk(
  "gallery/postNewImage",
  async (payload) => {
    const res = await axios.post(
      "http://localhost:8000/api/v1/upload/image",
      payload
    );
    return res.data;
  }
);

// getSingleImage async thunk ko create kiya gaya hai.
export const getSingleImage = createAsyncThunk(
  "gallery/getSingleImage",
  async (payload) => {
    const res = await axios.get(
      `http://localhost:8000/api/v1/get/singleimage?category=${payload}`
    );
    return res.data;
  }
);

// gallerySlice ko createSlice ke through define kiya gaya hai.
const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllImages.fulfilled, (state, action) => {
        state.images = action.payload;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getSingleImage.fulfilled, (state, action) => {
        state.images = action.payload;
      });
  },
});

// gallerySlice.reducer ko export kiya gaya hai.
export default gallerySlice.reducer;
