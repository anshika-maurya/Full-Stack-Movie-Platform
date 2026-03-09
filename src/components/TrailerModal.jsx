import { useEffect, useState } from "react";

function TrailerModal({ movieId, onClose }) {
  const [trailerKey, setTrailerKey] = useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchTrailer = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`,
      );

      const data = await res.json();

      const trailer = data.results.find((video) => video.type === "Trailer");

      if (trailer) {
        setTrailerKey(trailer.key);
      }
    };

    fetchTrailer();
  }, [movieId]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-black p-4 rounded-lg">
        <button onClick={onClose} className="text-white mb-4">
          Close
        </button>

        {trailerKey ? (
          <iframe
            width="800"
            height="450"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            allowFullScreen
          />
        ) : (
          <p className="text-white">Trailer not available</p>
        )}
      </div>
    </div>
  );
}

export default TrailerModal;
