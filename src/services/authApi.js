import axios from "axios";


const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/auth`,
});

export const signupUser = (data) => API.post("/signup", data);

export const loginUser = (data) => API.post("/login", data);
