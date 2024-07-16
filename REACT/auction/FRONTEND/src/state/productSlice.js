import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../api/api";

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    try {
      //destructing, renaming the data to response
      const { data: response } = await axios.post(
        `${BASE_URL}/product`,
        product
      );
      return response;
    } catch (error) {
      console.log("catch error", error);
      //we have to throw error cuz that's the same thing we did in the slice
      // the second response is the data coming from our request
      throw Error(error.response.response.error);
    }
  }
);

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    try {
      //destructing, renaming the data to response
      const { data: response } = await axios.get(`${BASE_URL}/product`);
      return response;
    } catch (error) {
      console.log("catch error", error);
      //we have to throw error cuz that's the same thing we did in the slice
      // the second response is the data coming from our request
      throw Error(error.response.response.error);
    }
  }
);

export const updateBid = createAsyncThunk(
  "products/updateBid/",
  async ({ id, startingBid }) => {
    try {
      //destructing, renaming the data to response
      const { data: response } = await axios.put(`${BASE_URL}/product/${id}`, {
        startingBid,
      });
      console.log("updated", response);
      return response;
    } catch (error) {
      console.log("catch error", error);
      //we have to throw error cuz that's the same thing we did in the slice
      // the second response is the data coming from our request
      throw Error(error.response.response.error);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [action.payload, ...state.products];
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateBid.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBid.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex(
          (product) => product._id === action.payload._id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateBid.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

// export async function addProduct(data) {
//     try {
//       const { data: response } = await axios.post(`${BASE_URL}/product`, data);
//       return response;
//     } catch (error) {
//       throw Error(error.response.response.error);
//     }
//   }
