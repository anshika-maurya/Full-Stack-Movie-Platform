import { useState, useEffect } from "react";
import { addMovie, getMovies, deleteMovie } from "../services/moviesApi";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [description, setDescription] = useState("");
  const [trailer, setTrailer] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const movie = {
    title,
    poster,
    description,
    trailer,
  };

  try {
    setLoading(true);

    await addMovie(movie);

    await loadMovies();

    
    setTitle("");
    setPoster("");
    setDescription("");
    setTrailer("");

    setLoading(false);

    alert("Movie added successfully");

  } catch (error) {
    console.error(error);
    alert(error.response?.data?.message || "Something went wrong");
  }
};
  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const res = await getMovies();

    setMovies(res.data);
  };

  const handleDelete = async (id) => {
    await deleteMovie(id);

    loadMovies();
  };

  return (
    <div className="min-h-screen p-10 text-white bg-gradient-to-br from-black via-gray-900 to-black">
      <h1 className="text-3xl mb-6">Admin Dashboard</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-gray-800 shadow-2xl">
        <input
          type="text"
          placeholder="Movie Title"
          className="p-3 bg-black/40 border border-gray-700 rounded-lg outline-none focus:border-red-500 transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Poster URL"
          className="p-3 bg-black/40 border border-gray-700 rounded-lg outline-none focus:border-red-500 transition"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />

        <input
          type="text"
          placeholder="Trailer YouTube Link"
          className="p-3 bg-black/40 border border-gray-700 rounded-lg outline-none focus:border-red-500 transition"
          value={trailer}
          onChange={(e) => setTrailer(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="p-3 bg-black/40 border border-gray-700 rounded-lg outline-none focus:border-red-500 resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-red-600 hover:bg-red-500 transition p-3 rounded-lg font-semibold shadow-lg">
          {loading ? "Adding..." : "Add Movie"}
        </button>
      </form>

      <h2 className="text-2xl mt-10 mb-4">All Movies</h2>

      <div className="flex flex-col gap-4">
        {movies.map((movie) => (
          <div
            key={movie._id}
            className="bg-white/5 border border-gray-800 p-4 rounded-xl flex justify-between items-center backdrop-blur-md hover:border-red-500 transition"
          >
            <Link to={`/movie/${movie._id}`}>
  <span className="cursor-pointer hover:text-red-500">
    {movie.title}
  </span>
</Link>

            <button
              onClick={() => handleDelete(movie._id)}
              className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded-lg transition"
            >
              Delete
            </button>
          </div>
        ))}
        {movies.length === 0 && (
          <p className="text-gray-400">No movies found</p>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
