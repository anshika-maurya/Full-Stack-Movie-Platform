import { useState } from "react";
import { signupUser } from "../services/authApi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

   
    if (!name || !email || !password) {
      return setError("All fields are required");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    try {
      await signupUser({
        name,
        email,
        password,
      });

      alert("Signup successful");
      navigate("/login");
      setError("");

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">

      <form
        onSubmit={handleSignup}
        className="w-full max-w-sm bg-[#111827] p-8 rounded-xl shadow-lg flex flex-col gap-5"
      >

        <h1 className="text-3xl font-bold text-center">Create Account</h1>

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        <input
          type="text"
          placeholder="Full Name"
          className="p-3 bg-gray-800 rounded-lg outline-none border border-gray-700 focus:border-red-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="p-3 bg-gray-800 rounded-lg outline-none border border-gray-700 focus:border-red-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="p-3 w-full bg-gray-800 rounded-lg outline-none border border-gray-700 focus:border-red-500 pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 cursor-pointer text-gray-400"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={22} />
            ) : (
              <AiOutlineEye size={22} />
            )}
          </span>

        </div>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-500 transition p-3 rounded-lg font-semibold"
        >
          Signup
        </button>

      </form>

    </div>
  );
}

export default Signup;