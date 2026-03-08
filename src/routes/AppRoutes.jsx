import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import Search from "../pages/Search";
import Favorites from "../pages/Favorites";
import MovieDetails from "../pages/MovieDetails";
import History from "../pages/History";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AdminDashboard from "../pages/AdminDashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route
        path="/favorites"
        element={
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        }
      />

      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        }
      />
      <Route path="/movie/:id" element={<MovieDetails />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default AppRoutes;
