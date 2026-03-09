import { useEffect, useState } from "react";
import { fetchTrailer } from "../services/tmdbApi";

function TrailerModal({ movieId, onClose }) {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const loadTrailer = async () => {

      const videos = await fetchTrailer(movieId);

      const trailer = videos.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );

      if (trailer) {
        setTrailerKey(trailer.key);
      }
    };

    loadTrailer();
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