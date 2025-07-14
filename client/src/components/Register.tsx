import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/front-view-stacked-books-graduation-cap-ladders-education-day.jpg";
import axios from "axios";
import { useState } from "react";
import { ENDPOINT } from "../api";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = {
      username: formData.username.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password.trim(),
    };

    try {
      const response = await axios.post(`${ENDPOINT}/api/auth/signup`, payload);
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center object-cover"
    >
      <div className="w-full min-h-screen flex p-4 justify-center items-center">
        <div className="grid md:grid-cols-2 grid-cols-1 md:w-1/2 w-full h-96 border-2 border-blue-950 shadow-lg shadow-blue-200 rounded-3xl backdrop-blur-sm bg-slate-950 bg-opacity-90">
          <div className="w-full p-3 md:flex flex-col hidden justify-center items-center">
            <p className="text-gray-200 text-3xl font-bold max-w-min">
              Register To Adjust With University Life.
            </p>
          </div>
          <div className="flex flex-col justify-center w-full p-3">
            <p className="text-2xl font-bold text-white text-center">Register</p>
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            <form onSubmit={handleSubmit} className="w-full flex flex-col mt-4">
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="p-3 outline-none bg-slate-900 border-b border-white text-white"
                placeholder="Username"
                type="text"
                required
                autoComplete="username"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 mt-4 outline-none bg-slate-900 border-b border-white text-white"
                placeholder="Email"
                type="email"
                required
                autoComplete="email"
                autoCapitalize="none"
                inputMode="email"
              />
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-4 p-3 outline-none bg-slate-900 border-b border-white text-white"
                placeholder="Password"
                type="password"
                required
                autoComplete="new-password"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-gradient-to-br from-[#00a6ff] to-red-500 hover:bg-gradient-to-br hover:from-[#00a6ffec] hover:to-red-400 text-white p-3 rounded-full"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
            <p className="mt-2 text-gray-300 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-[#00a6ff]">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
