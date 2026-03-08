import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchShowDetails } from "../services/moviesApi"
import TrailerModal from "../components/TrailerModal";
import { useDispatch } from "react-redux";
import { addHistory } from "../redux/moviesSlice";

function MovieDetails() {

  const { id } = useParams();
  const [showTrailer, setShowTrailer] = useState(false);
  const [show, setShow] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {

  const getDetails = async () => {
    const data = await fetchShowDetails(id);

    setShow(data);

    dispatch(addHistory(data));

  };

  getDetails();

}, [id]);

  if (!show) {
    return <p className="text-white p-10">Loading...</p>;
  }

  return (
  <div className="p-10 text-white">

    <img
      src={show.image?.original}
      alt={show.name}
      className="w-64 rounded-lg mb-6"
    />

    <h1 className="text-4xl font-bold mb-4">
      {show.name}
    </h1>

    <p className="mb-4">
      Rating: {show.rating?.average || "N/A"}
    </p>

    <button
      onClick={() => setShowTrailer(true)}
      className="bg-red-600 text-white px-4 py-2 rounded mb-6"
    >
      Watch Trailer
    </button>

    <div
      dangerouslySetInnerHTML={{ __html: show.summary }}
    />

    {showTrailer && (
      <TrailerModal
        title={show.name}
        onClose={() => setShowTrailer(false)}
      />
    )}

  </div>
);
  
}

export default MovieDetails;