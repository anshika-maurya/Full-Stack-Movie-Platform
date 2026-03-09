const API = import.meta.env.VITE_API_URL;

/* UNIVERSAL TMDB FETCH */
const fetchFromBackend = async (endpoint) => {
  try {

    const res = await fetch(`${API}/api/tmdb?endpoint=${endpoint}`);

    const data = await res.json();

    return data;

  } catch (error) {
    console.error("TMDB API Error:", error);
    return null;
  }
};

/* TRENDING */
export const fetchTrending = async () => {
  const data = await fetchFromBackend("trending/movie/week");
  return data?.results || [];
};

/* POPULAR */
export const fetchPopular = async () => {
  const data = await fetchFromBackend("movie/popular");
  return data?.results || [];
};

/* TOP RATED */
export const fetchTopRated = async () => {
  const data = await fetchFromBackend("movie/top_rated");
  return data?.results || [];
};

/* TV SHOWS */
export const fetchTVShows = async () => {
  const data = await fetchFromBackend("tv/popular");
  return data?.results || [];
};

/* SEARCH */
export const searchMulti = async (query) => {
  const data = await fetchFromBackend(`search/multi?query=${query}`);
  return data?.results || [];
};

/* POPULAR MOVIES GRID */
export const fetchPopularMovies = async (page = 1) => {
  const data = await fetchFromBackend(`movie/popular?page=${page}`);
  return data?.results || [];
};

/* GENRE MOVIES */
export const fetchMoviesByGenre = async (genreId) => {
  const data = await fetchFromBackend(`discover/movie?with_genres=${genreId}`);
  return data?.results || [];
};

/* MOVIE DETAILS */
export const fetchMovieDetails = async (id) => {
  const data = await fetchFromBackend(`movie/${id}`);
  return data || {};
};

/* CAST */
export const fetchCast = async (id) => {
  const data = await fetchFromBackend(`movie/${id}/credits`);
  return data?.cast || [];
};

/* TRAILER */
export const fetchTrailer = async (id) => {
  const data = await fetchFromBackend(`movie/${id}/videos`);
  return data?.results || [];
};

/* GENRES */
export const fetchGenres = async () => {
  const data = await fetchFromBackend("genre/movie/list");
  return data?.genres || [];
};