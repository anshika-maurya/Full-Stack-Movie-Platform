import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

function History() {
  const history = useSelector((state) => state.movies.history);

  return (
    <div className="p-10 bg-black min-h-screen">
      <h1 className="text-3xl text-white mb-8">Recently Watched</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {history.map((movie) => (
          <MovieCard key={movie.id} show={movie} />
        ))}
      </div>
    </div>
  );
}

export default History;
