import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/movies",
});

export const addMovie = (data) => API.post("/add", data);

export const getMovies = () => API.get("/all");

export const deleteMovie = (id) => API.delete(`/${id}`);
