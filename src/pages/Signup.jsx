import { useState } from "react";
import { signupUser } from "../services/authApi";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
  e.preventDefault();

  try {

    await signupUser({
      name,
      email,
      password
    });

    alert("Signup successful");

  } catch (error) {

    alert("Signup failed");

  }
};

  return (
    <div className="p-10 bg-black min-h-screen text-white flex justify-center">

      <form onSubmit={handleSignup} className="w-80 flex flex-col gap-4">

        <h1 className="text-3xl mb-4">Signup</h1>

        <input
          type="text"
          placeholder="Name"
          className="p-2 bg-gray-800 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          Signup
        </button>

      </form>

    </div>
  );
}

export default Signup;