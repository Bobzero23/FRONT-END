import axios from "axios";

//here is the live backend link
export const BASE_URL = "https://auction-app-backend-i9xh.onrender.com";

//setting default url for backend requests
const api = axios.create({
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

api.interceptors.request.use(
  (config) => {
    // localStorage'dan token'ı alın
    const token = localStorage.getItem("jwt");
    if (token) {
      // Token'ı Authorization header'ına ekleyin
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
