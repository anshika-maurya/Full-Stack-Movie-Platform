import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchPopular } from "../services/tmdbApi";

import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/moviesSlice";
import { FaHeart } from "react-icons/fa";

function MovieRow({ title, movies }) {
  const [page, setPage] = useState(1);
  const [rowMovies, setRowMovies] = useState(movies);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);

  useEffect(() => {
    setRowMovies(movies);
  }, [movies]);

  const handleScroll = async (e) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.target;

    if (scrollLeft + clientWidth >= scrollWidth - 50) {
      const nextPage = page + 1;
      setPage(nextPage);

      const moreMovies = await fetchPopular(nextPage);

      setRowMovies((prev) => [...prev, ...moreMovies]);
    }
  };

  return (
    <div className="mb-10">
      <h2 className="text-xl text-white font-semibold mb-4">{title}</h2>

      <div
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto hide-scrollbar py-2"
      >
        {rowMovies.map((movie) => {
          const isFavorite = favorites.some((fav) => fav.id === movie.id);

          return (
            <div key={movie.id} className="relative flex-shrink-0 w-56 group">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-56 h-[320px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                />
              </Link>

             
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  isFavorite
                    ? dispatch(removeFavorite(movie.id))
                    : dispatch(addFavorite(movie));
                }}
                className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm p-2 rounded-full hover:bg-black transition"
              >
                <FaHeart
                  className={`text-lg ${
                    isFavorite ? "text-red-500" : "text-white"
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieRow;
