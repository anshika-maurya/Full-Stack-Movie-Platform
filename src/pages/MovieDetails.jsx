import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails, fetchCast } from "../services/tmdbApi";
import TrailerModal from "../components/TrailerModal";
import { useDispatch } from "react-redux";
import { addHistory } from "../redux/moviesSlice";


function MovieDetails() {
  const { id } = useParams();
  const [showTrailer, setShowTrailer] = useState(false);
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  const dispatch = useDispatch();

  
  const IMG = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
  const getDetails = async () => {

    const movieData = await fetchMovieDetails(id);

    setMovie(movieData);

    if (movieData) {
      dispatch(addHistory(movieData));
    }

    const castData = await fetchCast(id);

    setCast(castData.slice(0, 8));
  };

  getDetails();
}, [id]);

  if (!movie) {
    return <p className="text-white p-10">Loading...</p>;
  }

  return (
    <div className="px-5 md:px-10 py-10 text-white bg-black min-h-screen">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/300x450"
          }
          alt={movie.title}
          className="w-48 md:w-64 rounded-lg mx-auto md:mx-0 shadow-xl hover:scale-105 transition duration-300"
        />

        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">{movie.title}</h1>

          <p className="mb-2">⭐ Rating: {movie.vote_average}</p>

          <p className="mb-2">Release Date: {movie.release_date}</p>

          <button
            onClick={() => setShowTrailer(true)}
            className="bg-red-600 px-4 py-2 rounded mt-4"
          >
            Watch Trailer
          </button>

          <p className="mt-6 max-w-2xl">{movie.overview}</p>

          <h2 className="text-2xl mt-10 mb-4">Cast</h2>

          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 hide-scrollbar">
            {cast.map((actor) => (
              <div key={actor.id} className="text-center min-w-[100px]">
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : "https://via.placeholder.com/100"
                  }
                  alt={actor.name}
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover mx-auto"
                />

                <p className="mt-2 text-sm">{actor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showTrailer && (
        <TrailerModal
          movieId={movie.id}
          onClose={() => setShowTrailer(false)}
        />
      )}
    </div>
  );
}

export default MovieDetails;
