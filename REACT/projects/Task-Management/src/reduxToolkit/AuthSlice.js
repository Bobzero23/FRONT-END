import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, api, setAuthHeader } from "../api/Api";

/** THESE ARE THE REDUX ACTIONS */

export const login = createAsyncThunk("auth/login", async (userData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/signin`, userData);
    localStorage.setItem("jwt", data.jwt);
    console.log("login success", data);
    return data;
  } catch (error) {
    console.log("catch error", error);
  }
});

export const register = createAsyncThunk("auth/register", async (userData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/signup`, userData);
    localStorage.setItem("jwt", data.jwt);
    console.log("register success", data);
    return data;
  } catch (error) {
    console.log("catch error", error);
  }
});

export const logout = createAsyncThunk("auth/logout", async (userData) => {
  try {
    localStorage.clear();
  } catch (error) {
    console.log("catch error", error);
  }
});

export const getUserProfile = createAsyncThunk(
  "auth/getUserProfile",
  async (jwt) => {
    setAuthHeader(jwt, api);
    try {
      const { data } = await api.get(`/api/user/profile`);
      console.log("user profile success", data);
      return data;
    } catch (error) {
      console.log("catch error", error);
    }
  }
);

export const getUserList = createAsyncThunk("auth/getUserList", async (jwt) => {
  setAuthHeader(jwt, api);
  try {
    const { data } = await api.get(`/auth/user`);
    console.log("user list success", data);
    return data;
  } catch (error) {
    console.log("catch error", error);
  }
});

/** THESE ARE THE REDUX REDUCERS */

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loggedIn: false,
    loading: false,
    error: null,
    jwt: null,
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(login.fulfilled, (state, action) => {
        (state.loading = false), (state.jwt = action.payload.jwt);
      });
  },
});
