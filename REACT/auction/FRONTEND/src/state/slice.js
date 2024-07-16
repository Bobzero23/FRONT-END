import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../api/api";
import { BASE_URL } from "../api/api";

/**REDUX ACTIONS */
export const login = createAsyncThunk("auth/login", async (userData) => {
  try {
    //destructing, renaming the data to response
    const { data: response } = await axios.post(`${BASE_URL}/signin`, userData);
    localStorage.setItem("jwt", response.data);
    return response;
  } catch (error) {
    console.log("catch error", error);
    //we have to throw error cuz that's the same thing we did in the slice
    // the second response is the data coming from our request
    throw Error(error.response.response.error);
  }
});

export const getUserById = createAsyncThunk("auth/getUserById", async () => {
  try {
    //destructing, renaming the data to response
    const { data: response } = await axios.get(`${BASE_URL}/user/`);
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
    console.log(response.balance);
    return response;
  } catch (error) {
    console.log("catch error", error);
    throw Error(error.response.response.error);
  }
});

export const updateBalance = createAsyncThunk(
  "auth/updateBalance/",
  async ({ balance }) => {
    try {
      //destructing, renaming the data to response
      const { data: response } = await axios.put(`${BASE_URL}/user/`, {
        balance,
      });
      return response;
    } catch (error) {
      console.log("catch error", error);
      //we have to throw error cuz that's the same thing we did in the slice
      // the second response is the data coming from our request
      throw Error(error.response.response.error);
    }
  }
);

//slice and reducers
const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    loggedIn: false,
    loading: false,
    error: null,
    isAdmin: false,
    balance: null,
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
        state.isAdmin = action.payload.isAdmin;
        state.balance = action.payload.balance;
        state.userId = action.payload.userId;
        state.jwt = action.payload.jwt;
        state.loggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
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
        state.isAdmin = action.payload.isAdmin;
        state.balance = action.payload.balance;
        state.userId = action.payload.userId;
        state.loggedIn = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateBalance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBalance.fulfilled, (state, action) => {
        state.loading = false;
        state.balance = action.payload.balance;
        state.loggedIn = true;
      })
      .addCase(updateBalance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.balance = action.payload.balance;
        state.loggedIn = true;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
