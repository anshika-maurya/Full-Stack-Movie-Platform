import { useEffect, useState } from "react";

import { fetchPopularMovies } from "../services/tmdbApi";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { appendMovies, setMovies } from "../redux/moviesSlice";

import HeroBanner from "../components/HeroBanner";

import {
  fetchTrending,
  fetchPopular,
  fetchTopRated,
  fetchTVShows,
  fetchGenres,
} from "../services/tmdbApi";
import MovieRow from "../components/MovieRow";

function Home() {
  const movies = useSelector((state) => state.movies.movies);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const loadMovies = async () => {
    try {
      setLoading(true);

      const data = await fetchPopularMovies(page);

      dispatch(appendMovies(data));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const GENRE_MAP = {
    Adventure: 12,
    Romance: 10749,
    Comedy: 35,
    "TV Movie": 10770,
    Drama: 18,
  };

  const fetchMoviesByGenre = async (genreId) => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`,
    );

    const data = await res.json();

    dispatch(setMovies(data.results));
  };

  useEffect(() => {
    loadMovies();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 300 &&
        !loading
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const loadGenres = async () => {
      const data = await fetchGenres();
      setGenres(data);
    };

    loadGenres();
  }, []);

  useEffect(() => {
    const loadTMDB = async () => {
      setTrending(await fetchTrending());
      setPopular(await fetchPopular());
      setTopRated(await fetchTopRated());
      setTvShows(await fetchTVShows());
    };

    loadTMDB();
  }, []);

  useEffect(() => {
    if (!selectedGenre) return;

    const loadGenreMovies = async () => {
      const data = await fetchMoviesByGenre(selectedGenre);

      dispatch(appendMovies(data));
    };

    loadGenreMovies();
  }, [selectedGenre]);

  return (
    <div className="bg-black min-h-screen hide-scrollbar overflow-x-hidden">
      <HeroBanner />

      <div className="p-10">
        <MovieRow title="Trending Movies" movies={trending} />
        <MovieRow title="Popular Movies" movies={popular} />
        <MovieRow title="Top Rated Movies" movies={topRated} />
        <MovieRow title="Popular TV Shows" movies={tvShows} />

        <div className="mt-22 px-3">
          <h2 className="text-5xl font-bold text-white mb-18">
            Lights Fade Stories Begin Here
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} show={movie} />
            ))}
          </div>
        </div>

        <div className="flex gap-4 flex-wrap mb-6"></div>
      </div>

      {loading && <Loader />}
    </div>
  );
}

export default Home;
