import { useState, useEffect } from "react";
import { addMovie, getMovies, deleteMovie } from "../services/moviesApi"


function AdminDashboard() {

  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [description, setDescription] = useState("");
  const [trailer, setTrailer] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (e) => {

  e.preventDefault();

  const movie = {
    title,
    poster,
    description,
    trailer
  };

  try {

    await addMovie(movie);

    alert("Movie added successfully");

  } catch (error) {

    alert("Failed to add movie");

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
    <div className="p-10 bg-black min-h-screen text-white">

      <h1 className="text-3xl mb-6">Admin Dashboard</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">

        <input
          type="text"
          placeholder="Movie Title"
          className="p-2 bg-gray-800 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Poster URL"
          className="p-2 bg-gray-800 rounded"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />

        <input
          type="text"
          placeholder="Trailer YouTube Link"
          className="p-2 bg-gray-800 rounded"
          value={trailer}
          onChange={(e) => setTrailer(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="p-2 bg-gray-800 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-red-600 p-2 rounded">
          Add Movie
        </button>

      </form>

      <h2 className="text-2xl mt-10 mb-4">All Movies</h2>

<div className="flex flex-col gap-4">

  {movies.map((movie) => (

    <div
      key={movie._id}
      className="bg-gray-800 p-4 rounded flex justify-between items-center"
    >

      <span>{movie.title}</span>

      <button
        onClick={() => handleDelete(movie._id)}
        className="bg-red-600 px-3 py-1 rounded"
      >
        Delete
      </button>

    </div>

  ))}

</div>

    </div>
  );
}

export default AdminDashboard;