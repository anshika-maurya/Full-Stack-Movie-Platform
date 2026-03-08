import axios from "axios";

const BASE_URL = "https://api.tvmaze.com";

const API = axios.create({
  baseURL: "http://localhost:5000/api/movies"
});

export const fetchShows = async (page = 0) => {
  const response = await axios.get(`https://api.tvmaze.com/shows?page=${page}`);
  return response.data;
};

export const fetchShowDetails = async (id) => {
  const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  return response.data;
};

export const searchShows = async (query) => {
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${query}`
  );
  return response.data;
};

export const addMovie = (data) => API.post("/add", data);

export const getMovies = () => API.get("/all");

export const deleteMovie = (id) => API.delete(`/${id}`);