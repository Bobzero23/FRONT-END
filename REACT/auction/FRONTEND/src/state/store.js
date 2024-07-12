import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

//combining all reducers to as single reducer
const rootReducer = combineReducers({});

//configuring a store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(thunk),
});

export default store;
