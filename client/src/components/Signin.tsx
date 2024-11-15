import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import bg from "../assets/front-view-stacked-books-graduation-cap-ladders-education-day.jpg";
import { ENDPOINT } from "../api";
import { useRecoilState } from "recoil";
import { isAuthenticatedAtom, userDetailsAtom } from "../recoil/atom";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [,authState] = useRecoilState(isAuthenticatedAtom)
  const [,user] = useRecoilState(userDetailsAtom)


  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${ENDPOINT}/api/auth/signin`, formData);
      if (response.status === 200) {
        
        console.log(response.data)
        authState(true);
        user(response.data)
        navigate("/");
      }
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-center object-cover">
      <div className="w-full min-h-screen flex p-4 justify-center items-center">
        <div className="grid grid-cols-2 w-1/2 h-96 border-2 border-blue-950 shadow-lg shadow-blue-200 rounded-3xl backdrop-blur-sm bg-slate-950 bg-opacity-90">
          <div className="flex flex-col justify-center w-full p-3">
            <p className="text-2xl font-bold text-white text-center">Login</p>
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            <form onSubmit={handleSubmit} className="w-full flex flex-col mt-4">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 outline-none bg-slate-900 border-b border-white text-white"
                placeholder="email"
                type="text"
                required
              />
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-4 p-3 outline-none bg-slate-900 border-b border-white text-white"
                placeholder="password"
                type="password"
                required
              />
              <button
                type="submit"
                className="mt-4 w-full bg-gradient-to-br from-[#00a6ff] to-red-500 hover:bg-gradient-to-br hover:from-[#00a6ffec] hover:to-red-400 text-white p-3 rounded-full"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <p className="mt-2 text-gray-300 text-center">
              Don’t have an account? <Link to="/register" className="text-[#00a6ff]">Sign Up</Link>
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center p-4">
            <p className="text-white text-3xl font-bold text-end max-w-min">WELCOME BACK!</p>
            <p className="text-gray-200 text-end">To Uni-Life Guide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
