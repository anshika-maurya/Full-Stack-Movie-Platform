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
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`,
  );

  const data = await res.json();

  return data.results;
};

export const fetchGenres = async () => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`,
  );

  const data = await res.json();

  return data.genres;
};

export const fetchMoviesByGenre = (genreId) =>
  fetchFromBackend(`discover/movie?with_genres=${genreId}`);



export const fetchMovieDetails = (id) =>
  fetchFromBackend(`movie/${id}`);

export const fetchCast = (id) =>
  fetchFromBackend(`movie/${id}/credits`);

export const fetchTrailer = (id) =>
  fetchFromBackend(`movie/${id}/videos`);