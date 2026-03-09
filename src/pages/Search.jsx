import { useState, useEffect } from "react";
import { searchMulti } from "../services/tmdbApi";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import useDebounce from "../hooks/useDebounce";
import Loader from "../components/Loader";
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    const fetchResults = async () => {
      if (!debouncedQuery) {
        setResults([]);
        return;
      }

      setLoading(true);

      const data = await searchMulti(debouncedQuery);

      setResults(data);

      setLoading(false);
    };

    fetchResults();
  }, [debouncedQuery]);

  const filteredResults = results.filter((item) => {
    if (item.media_type === "movie" || item.media_type === "tv") {
      return item.poster_path;
    }

    if (item.media_type === "person") {
      return item.profile_path;
    }

    return false;
  });
  return (
    <div className="p-10 bg-black min-h-screen overflow-x-hidden">
      <input
        type="text"
        placeholder="Search movies, TV shows, actors..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 rounded bg-[#151515] text-white"
      />

      {loading && <Loader />}

      <div className="relative z-10 mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredResults.map((item) => {
          const card = (
            <div className="relative text-white text-center bg-gray-900 p-4 rounded-lg overflow-hidden group hover:scale-105 transition duration-300">
              <img
                src={`https://image.tmdb.org/t/p/w200${item.poster_path || item.profile_path}`}
                alt={item.title || item.name}
                className="w-32 mx-auto rounded mb-3"
              />

              {item.media_type === "movie" && <p>🎬 {item.title}</p>}

              {item.media_type === "tv" && <p>📺 {item.name}</p>}

              {item.media_type === "person" && <p>👤 {item.name}</p>}

             
              {item.media_type === "movie" && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium">
                    <FaStar />
                    {item.vote_average?.toFixed(1)}
                  </div>

                  <Link
                    to={`/movie/${item.id}`}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-semibold transition"
                  >
                    <FaPlay className="text-xs" />
                    Details
                  </Link>
                </div>
              )}
            </div>
          );

          if (item.media_type === "movie" || item.media_type === "tv") {
            return (
              <Link
                key={item.id}
                to={`/movie/${item.id}`}
                state={{ media_type: item.media_type }}
              >
                {card}
              </Link>
            );
          }

          return <div key={item.id}>{card}</div>;
        })}
      </div>
    </div>
  );
}

export default Search;
