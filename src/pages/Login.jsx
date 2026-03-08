import { useState } from "react";
import { loginUser } from "../services/authApi";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

  e.preventDefault();

  try {

    const response = await loginUser({
      email,
      password
    });

    const token = response.data.token;

    localStorage.setItem("token", token);

    alert("Login successful");

  } catch (error) {

    alert("Login failed");

  }

};

  return (
    <div className="p-10 bg-black min-h-screen text-white flex justify-center">

      <form onSubmit={handleLogin} className="w-80 flex flex-col gap-4">

        <h1 className="text-3xl mb-4">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="p-2 bg-gray-800 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 bg-gray-800 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-red-600 p-2 rounded">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;