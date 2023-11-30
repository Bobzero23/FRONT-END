import axios from "axios";

export const API_BASE_URL = "http://localhost:8080/";

const jwt = localStorage.getItem("jwt");

export const api = axios.create({
  baseUrl: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${jwt}}`,
    "Content-Type": "Application/json",
  },
});
