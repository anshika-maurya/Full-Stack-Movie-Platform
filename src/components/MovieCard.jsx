import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/moviesSlice";
import { FaHeart, FaStar } from "react-icons/fa";

function MovieCard({ show }) {
  const dispatch = useDispatch();

  const rating = show.vote_average ? show.vote_average.toFixed(1) : "N/A";

  return (
    <div className="relative w-[420px] flex-shrink-0 group">
      <Link to={`/movie/${show.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${show.backdrop_path || show.poster_path}`}
          alt={show.title}
          className="w-full h-[220px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

     
      <button
        onClick={() => dispatch(addFavorite(show))}
        className="absolute bottom-3 right-3 bg-black/70 p-2 rounded-full hover:bg-red-600 transition"
      >
        <FaHeart className="text-white text-sm" />
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
