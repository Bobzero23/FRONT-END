import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./auth/Reducer";
import thunk from "redux-thunk";
import { customerProductReducer } from "./product/Reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  product: customerProductReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
