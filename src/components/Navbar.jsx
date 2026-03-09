import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiUser } from "react-icons/fi";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const token = localStorage.getItem("token");
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-black border-b border-gray-800 px-6 pt-4 text-white flex items-center justify-between">
      <Link to="/" className="ml-8">
        <img src={logo} alt="MovieApp Logo" width={155} height={32} />
      </Link>

      <div className="hidden md:flex gap-8 text-sm font-medium">
        <Link to="/" className="hover:text-red-500">
          Home
        </Link>

        <Link to="/adventure" className="hover:text-red-500">
          Adventure
        </Link>

        <Link to="/romance" className="hover:text-red-500">
          Romance
        </Link>

        <Link to="/comedy" className="hover:text-red-500">
          Comedy
        </Link>

        <Link to="/tv-movie" className="hover:text-red-500">
          TV Movie
        </Link>

        <Link to="/drama" className="hover:text-red-500">
          Drama
        </Link>
      </div>

      
      <div className="flex items-center gap-6">
        
        <Link to="/search">
          <FiSearch className="text-xl hover:text-red-500 cursor-pointer" />
        </Link>

       
        {token && (
          <Link to="/favorites">
            <FiHeart className="text-xl hover:text-red-500 cursor-pointer" />
          </Link>
        )}

        {!token ? (
          <>
            <Link to="/login">
              <button className="px-4 py-1 border border-gray-600 rounded hover:bg-gray-800">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="px-4 py-1 bg-red-600 rounded hover:bg-red-700">
                Signup
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/admin">
              <button className="px-4 py-1 rounded-md bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition text-white font-medium">
                Admin
              </button>
            </Link>

            <div className="relative">
              <FiUser
                className="text-2xl cursor-pointer hover:text-red-500"
                onClick={() => setOpen(!open)}
              />

              {open && (
                <div className="absolute right-0 mt-3 bg-gray-900 border border-gray-700 rounded shadow-lg">
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 hover:bg-gray-800 w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
