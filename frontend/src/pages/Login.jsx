import { useState } from "react";
import login1Bg from "../assets/login1.png";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Login failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4"
     style={{
        // backgroundImage: "loginBg",
        
        backgroundImage: `url(${login1Bg})`,  // ✅ correct
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
    
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-2xl p-8">
        {/* 🔹 Heading */}
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Welcome Back 👋
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Please login to continue
        </p>

        {/* 🔹 Error message */}
        {error && (
          <div className="bg-red-600 text-white px-4 py-2 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        {/* 🔹 Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* 🔹 Submit button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-200"
          >
            Login
          </button>
        </form>

        {/* 🔹 Footer link */}
        <p className="text-center text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-400 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
