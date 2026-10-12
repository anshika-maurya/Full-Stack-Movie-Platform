import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/moviesSlice";
import { FaHeart, FaStar } from "react-icons/fa";

function MovieCard({ show, className = "w-[420px]" }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) =>
    state.movies.favorites.some((movie) => movie.id === show.id),
  );

  const rating = show.vote_average ? show.vote_average.toFixed(1) : "N/A";

  return (
    <div className={`${className} relative flex-shrink-0 group`}>
      <Link to={`/movie/${show.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${show.backdrop_path || show.poster_path}`}
          alt={show.title}
          className="w-full h-[220px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

     
      <button
        onClick={() =>
          dispatch(isFavorite ? removeFavorite(show.id) : addFavorite(show))
        }
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        className="absolute bottom-3 right-3 bg-black/70 p-2 rounded-full hover:bg-red-600 transition"
      >
        <FaHeart className={`text-sm ${isFavorite ? "text-red-500" : "text-white"}`} />
      </button>

     
      <div className="mt-2 px-1">
        <h2 className="text-white text-sm font-semibold truncate">
          {show.title}
        </h2>

        <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
          <FaStar className="text-yellow-400 text-xs" />
          {rating}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
