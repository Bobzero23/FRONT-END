import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import authReducer from "./slice";
import productReducer from "./productSlice";

//combining all reducers to as single reducer
const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

//configuring a store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(thunk),
});

export default store;
