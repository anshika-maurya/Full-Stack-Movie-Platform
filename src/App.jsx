import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar
        onGenreClick={(genre) => {
          const genreId = GENRE_MAP[genre];
          fetchMoviesByGenre(genreId);
        }}
      />
      <AppRoutes />
    </>
  );
}

export default App;
