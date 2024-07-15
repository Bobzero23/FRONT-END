import axios from "axios";
import { BASE_URL } from "../api/api";

export async function login(data) {
  try {
    const { data: response } = await axios.post(`${BASE_URL}/signin`, data);
    localStorage.setItem("jwt", response.data);
    return response;
  } catch (error) {
    throw Error(error.response.response.error);
  }
}

export async function signUp(data) {
  try {
    const { data: response } = await axios.post(`${BASE_URL}/signup`, data);
    localStorage.setItem("jwt", response.data);
    return response;
  } catch (error) {
    throw Error(error.response.response.error);
  }
}

