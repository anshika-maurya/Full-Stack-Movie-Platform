import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";
import { fetchMoviesByGenre } from "../services/tmdbApi";

const genres = {
  adventure: { id: 12, title: "Adventure Movies" },
  romance: { id: 10749, title: "Romance Movies" },
  comedy: { id: 35, title: "Comedy Movies" },
  "tv-movie": { id: 10770, title: "TV Movies" },
  drama: { id: 18, title: "Drama Movies" },
};

function GenreMovies() {
  const { genre } = useParams();
  const selectedGenre = genres[genre];
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCurrent = true;

    const loadMovies = async () => {
      setLoading(true);
      setMovies([]);

      if (!selectedGenre) {
        setLoading(false);
        return;
      }

      try {
        const results = await fetchMoviesByGenre(selectedGenre.id);
        if (isCurrent) setMovies(results);
      } catch (error) {
        console.error("Failed to load genre movies:", error);
      } finally {
        if (isCurrent) setLoading(false);
      }
    };

    loadMovies();

    return () => {
      isCurrent = false;
    };
  }, [selectedGenre]);

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white md:px-10">
      <h1 className="mb-8 text-3xl font-bold">
        {selectedGenre?.title ?? "Genre not found"}
      </h1>

      {loading ? (
        <Loader />
      ) : !selectedGenre ? (
        <p>That genre could not be found.</p>
      ) : movies.length === 0 ? (
        <p>No movies found for this genre.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} show={movie} />
          ))}
        </div>
      )}
    </main>
  );
}

export default GenreMovies;
