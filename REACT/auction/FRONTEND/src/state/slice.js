import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../api/api";

/**REDUX ACTIONS */
export const login = createAsyncThunk("auth/login", async (userData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/signin`, userData);
    localStorage.setItem("jwt", data.jwt);
    console.log("login success", data);
    return data;
  } catch (error) {
    console.log("catch error", error);
    throw Error(error.response.data.error);
  }
});
