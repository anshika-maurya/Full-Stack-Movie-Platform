const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API = import.meta.env.VITE_API_URL;

const fetchFromBackend = async (endpoint) => {
  try {
    const res = await fetch(`${API}/api/tmdb?endpoint=${endpoint}`);

    const data = await res.json();

    return data?.results || [];

  } catch (error) {
    console.error("API error:", error);
    return [];
  }
};

export const fetchTrending = async () => {

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/tmdb?endpoint=trending/movie/week`
  );

  const data = await res.json();

  return data.results || [];

};


export const fetchPopular = async () => {

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/tmdb?endpoint=movie/popular`
  );

  const data = await res.json();

  return data.results || [];

};

export const fetchTopRated = () =>
  fetchFromBackend("movie/top_rated");

export const fetchTVShows = () =>
  fetchFromBackend("tv/popular");

export const searchMulti = (query) =>
  fetchFromBackend(`search/multi?query=${query}`);

export const fetchPopularMovies = async (page = 1) => {

  return await fetchFromBackend(`movie/popular?page=${page}`);

};



export const fetchMoviesByGenre = (genreId) =>
  fetchFromBackend(`discover/movie?with_genres=${genreId}`);



export const fetchMovieDetails = async (id) => {

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/tmdb?endpoint=movie/${id}`
  );

  return await res.json();

};
export const fetchCast = async (id) => {

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/tmdb?endpoint=movie/${id}/credits`
  );

  const data = await res.json();

  return data.cast || [];

};

export const fetchTrailer = async (id) => {

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/tmdb?endpoint=movie/${id}/videos`
  );

  const data = await res.json();

  return data.results || [];

};
export const fetchGenres = async () => {

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/tmdb?endpoint=genre/movie/list`
  );

  const data = await res.json();

  return data.genres || [];

};