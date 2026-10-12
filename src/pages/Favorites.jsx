import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const favorites = useSelector((state) => state.movies.favorites);

  return (
    <main className="min-h-screen bg-black px-5 py-10 text-white sm:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col gap-4 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
              Your collection
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Favorite Movies
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              The movies you want to keep close.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            <FaHeart className="text-red-500" />
            <span>
              {favorites.length} {favorites.length === 1 ? "movie" : "movies"}
            </span>
          </div>
        </header>

        {favorites.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] px-6 py-16 text-center sm:py-20">
            <FaHeart className="mx-auto mb-5 text-4xl text-red-500/80" />
            <h2 className="text-xl font-semibold">Your list is waiting</h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-400">
              Browse movies and tap the heart on anything you want to save here.
            </p>
            <Link
              to="/"
              className="mt-7 inline-flex rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Explore movies
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favorites.map((movie) => (
              <MovieCard key={movie.id} show={movie} className="w-full" />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Favorites;
