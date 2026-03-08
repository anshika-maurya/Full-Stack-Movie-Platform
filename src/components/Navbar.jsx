import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex gap-6 text-lg border-b border-gray-700">

      <Link to="/" className="hover:text-red-500">
        Home
      </Link>

      <Link to="/search" className="hover:text-red-500">
        Search
      </Link>

      <Link to="/favorites" className="hover:text-red-500">
        Favorites
      </Link>

      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/admin">Admin</Link>

    </nav>
  );
}

export default Navbar;