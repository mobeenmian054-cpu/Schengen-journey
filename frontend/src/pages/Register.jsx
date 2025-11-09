import React, { useState } from "react";
import axios from "axios";
import login1Bg from "../assets/login1.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      alert("✅ Registered successfully! Now login.");
      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4"
      style={{
        // backgroundImage: "loginBg",

        backgroundImage: `url(${login1Bg})`,  // ✅ correct
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <form
        onSubmit={handleRegister}
        className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Create Account 🚀
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 mb-4 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 mb-4 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 mb-6 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-200"
        >
          Register
        </button>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <a href="/" className="text-green-400 font-semibold hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
