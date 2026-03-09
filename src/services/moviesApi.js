import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/movies`,
});

export const addMovie = (data) => API.post("/add", data);

export const getMovies = () => API.get("/all");

export const deleteMovie = (id) => API.delete(`/${id}`);
