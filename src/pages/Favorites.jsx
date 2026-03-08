import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

function Favorites() {

  const favorites = useSelector((state) => state.movies.favorites);

  console.log(favorites);   // correct debug

  return (
    <div className="p-10 bg-black min-h-screen">

      <h1 className="text-3xl text-white mb-8">
        Favorite Movies
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {favorites.map(movie => (
          <MovieCard key={movie.id} show={movie} />
        ))}

      </div>

    </div>
  );
}

export default Favorites;