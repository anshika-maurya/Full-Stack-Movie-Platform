const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchTrending = async () => {

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/tmdb/trending`
  );

  const data = await res.json();

  return data.results;
};

export const fetchPopular = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const fetchTopRated = async () => {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const fetchTVShows = async () => {
  const res = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const searchMulti = async (query) => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`,
  );

  const data = await res.json();

  return data.results;
};

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

export const fetchMoviesByGenre = async (genreId) => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`,
  );

  const data = await res.json();

  return data.results;
};
