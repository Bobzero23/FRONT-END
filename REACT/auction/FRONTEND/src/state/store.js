import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import authReducer from "./slice";

//combining all reducers to as single reducer
const rootReducer = combineReducers({
  auth: authReducer,
});

//configuring a store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(thunk),
});

export default store;
