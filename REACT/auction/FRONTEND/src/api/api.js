import axios from "axios";

export const BASE_URL = "http://localhost:5555";

//setting default url for backend requests
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//in case we have a token we set it in headers and if not we just delete the the authorization header
export const setAuthHeader = (token, api) => {
  if (token) api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else {
    delete api.defaults.headers.common["Authorization"];
  }
};
