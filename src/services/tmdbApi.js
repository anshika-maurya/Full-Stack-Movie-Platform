const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API = import.meta.env.VITE_API_URL;

const fetchFromBackend = async (endpoint) => {

  const res = await fetch(`${API}/api/tmdb?endpoint=${endpoint}?`);

  const data = await res.json();

  return data.results;

};

export const fetchTrending = () =>
  fetchFromBackend("trending/movie/week");


export const fetchPopular = () =>
  fetchFromBackend("movie/popular");

export const fetchTopRated = () =>
  fetchFromBackend("movie/top_rated");

export const fetchTVShows = () =>
  fetchFromBackend("tv/popular");

export const searchMulti = (query) =>
  fetchFromBackend(`search/multi?query=${query}`);

export const fetchPopularMovies = async (page = 1) => {

  const data = await fetchFromBackend(`movie/popular?page=${page}`);

  return data.results;

};

export const fetchGenres = async () => {

  const data = await fetchFromBackend("genre/movie/list");

  return data.genres;

};

export const fetchMoviesByGenre = (genreId) =>
  fetchFromBackend(`discover/movie?with_genres=${genreId}`);



export const fetchMovieDetails = async (id) => {

  return await fetchFromBackend(`movie/${id}`);

};

export const fetchCast = async (id) => {

  const data = await fetchFromBackend(`movie/${id}/credits`);

  return data.cast;

};

export const fetchTrailer = async (id) => {

  const data = await fetchFromBackend(`movie/${id}/videos`);

  return data.results;

};