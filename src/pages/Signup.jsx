import { useEffect, useState } from "react";
import { signupUser } from "../services/authApi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState(null);
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!redirecting) return undefined;

    const timeout = setTimeout(() => navigate("/login"), 1800);
    return () => clearTimeout(timeout);
  }, [navigate, redirecting]);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return setToast({ type: "error", message: "All fields are required." });
    }

    if (password.length < 6) {
      return setToast({
        type: "error",
        message: "Password must be at least 6 characters.",
      });
    }

    try {
      await signupUser({
        name,
        email,
        password,
      });

      setToast({
        type: "success",
        message: "Account created successfully. Redirecting to login...",
      });
      setName("");
      setEmail("");
      setPassword("");
      setRedirecting(true);
    } catch (error) {
      setToast({
        type: "error",
        message:
          error.response?.data?.message || "Signup failed. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <form
        onSubmit={handleSignup}
        className="w-full max-w-sm bg-[#111827] p-8 rounded-xl shadow-lg flex flex-col gap-5"
      >
        <h1 className="text-3xl font-bold text-center">Create Account</h1>

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
          disabled={redirecting}
          className="bg-red-600 hover:bg-red-500 transition p-3 rounded-lg font-semibold"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;