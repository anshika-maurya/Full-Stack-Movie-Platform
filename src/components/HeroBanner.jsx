import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchTrending } from "../services/tmdbApi";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

function HeroBanner() {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadMovie = async () => {
      const movies = await fetchTrending();

      const randomMovie = movies[Math.floor(Math.random() * movies.length)];

      setMovie(randomMovie);
    };

    loadMovie();
  }, []);

  if (!movie) return null;

  const IMG = "https://image.tmdb.org/t/p/original";

  return (
    <div
      className="relative h-[80vh] flex items-end text-white"
      style={{
        backgroundImage: `url(${IMG}${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      
      <div className="relative p-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>

        <p className="text-gray-300 mb-6 line-clamp-3">{movie.overview}</p>

        <div className="flex gap-4">
          <button
            onClick={() => navigate(`/movie/${movie.id}`)}
            className="flex items-center gap-2 bg-red-600 text-white px-7 py-3 rounded-md font-semibold shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300"
          >
            <FaPlay className="text-sm" />
            Play
          </button>

          <button
            onClick={() => navigate(`/movie/${movie.id}`)}
            className="flex items-center gap-2 bg-gray-800/80 backdrop-blur-md border border-gray-600 text-white px-7 py-3 rounded-md font-semibold hover:bg-gray-700 hover:scale-105 transition-all duration-300"
          >
            <AiOutlineInfoCircle className="text-lg" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
