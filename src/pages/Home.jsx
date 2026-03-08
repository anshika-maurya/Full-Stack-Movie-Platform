import { useEffect, useState } from "react";
import { fetchShows } from "../services/moviesApi"
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { appendShows } from "../redux/moviesSlice"

function Home() {

 const shows = useSelector((state) => state.movies.shows);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  
const dispatch = useDispatch();
  
  

  const loadShows = async () => {

  setLoading(true);

  const data = await fetchShows(page);

  dispatch(appendShows(data));

  setLoading(false);

};
  
  useEffect(() => {
    loadShows();
  }, [page]);


  useEffect(() => {

  const handleScroll = () => {

    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 200
    ) {
      setPage(prev => prev + 1);
    }

  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  if (loading) {
    return <Loader />;
  }

  return (
  <div className="p-10 bg-black min-h-screen">

    <h1 className="text-3xl text-white mb-8">
      Popular Shows
    </h1>

    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

      {shows.map((show) => (
        <MovieCard key={show.id} show={show} />
      ))}

    </div>

    {loading && <Loader />}

  </div>
);
}

export default Home;