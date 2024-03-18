import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  images: [],
  categories: [],
};

export const getAllImages = createAsyncThunk(
  "gallery/getAllImages",
  async () => {
    const res = await axios.get("http://localhost:8000/api/v1/get/images");
    return res.data;
  }
);

export const getAllCategories = createAsyncThunk(
  "gallery/getAllCategories",
  async () => {
    const res = await axios.get("http://localhost:8000/api/v1/get/categories");
    return res.data;
  }
);

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

export const getSingleImage = createAsyncThunk(
  "gallery/getSingleImage",
  async (payload) => {
    const res = await axios.get(
      `http://localhost:8000/api/v1/get/singleimage?category=${payload}`
    );
    return res.data;
  }
);

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

export default gallerySlice.reducer;
