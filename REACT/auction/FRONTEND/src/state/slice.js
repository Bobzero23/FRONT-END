import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../api/api";

/**REDUX ACTIONS */
export const login = createAsyncThunk("auth/login", async (userData) => {
  try {
    //destructing, renaming the data to response
    const { data: response } = await axios.post(`${BASE_URL}/signin`, userData);
    localStorage.setItem("jwt", response.data);
    console.log("login success", response.data);
    return response;
  } catch (error) {
    console.log("catch error", error);
    //we have to throw error cuz that's the same thing we did in the slice
    // the second response is the data coming from our request
    throw Error(error.response.response.error);
  }
});

export const signup = createAsyncThunk("auth/signup", async (userData) => {
  try {
    const { data: response } = await axios.post(`${BASE_URL}/signup`, userData);
    localStorage.setItem("jwt", response.data);
    console.log("signup success", response.data);
    return response;
  } catch (error) {
    console.log("catch error", error);
    throw Error(error.response.response.error);
  }
});

//slice and reducers
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loggedIn: false,
    loading: false,
    error: null,
    jwt: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload.jwt;
        state.loggedIn = true;
      })
      .addCase.apply(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload.jwt;
        state.loggedIn = true;
      })
      .addCase.apply(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
