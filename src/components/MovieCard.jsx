import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/moviesSlice"

function MovieCard({ show }) {

  const dispatch = useDispatch();

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">

      {/* ONLY IMAGE IS CLICKABLE */}
      <Link to={`/movie/${show.id}`}>
        <img
          src={show.image?.medium}
          alt={show.name}
          className="w-full h-64 object-cover"
        />
      </Link>

      <div className="p-3">

        <h2 className="text-white text-lg font-semibold">
          {show.name}
        </h2>

        <p className="text-gray-400 text-sm">
          Rating: {show.rating?.average || "N/A"}
        </p>

        <button
          onClick={() => dispatch(addFavorite(show))}
          className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
        >
          Add to Favorites
        </button>

      </div>

    </div>
  );
}

export default MovieCard;