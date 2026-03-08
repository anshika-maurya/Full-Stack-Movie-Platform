import { useState, useEffect } from "react";
import { searchShows } from "../services/moviesApi"
import MovieCard from "../components/MovieCard";
import useDebounce from "../hooks/useDebounce";
import Loader from "../components/Loader";

function Search() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {

    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {

      setLoading(true);   

      const data = await searchShows(debouncedQuery);

      const shows = data.map(item => item.show);

      setResults(shows);

      setLoading(false);  
    };

    fetchResults();

  }, [debouncedQuery]);

  return (
    <div className="p-10 bg-black min-h-screen">

      <input
        type="text"
        placeholder="Search movies..."
        className="w-full p-3 mb-8 rounded bg-gray-800 text-white"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <Loader />}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {results.map((show) => (
          <MovieCard key={show.id} show={show} />
        ))}

      </div>

    </div>
  );
}

export default Search;