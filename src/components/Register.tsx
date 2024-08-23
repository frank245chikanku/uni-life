import { Link } from "react-router-dom";
import bg from "../assets/front-view-stacked-books-graduation-cap-ladders-education-day.jpg";

const Register = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center object-cover"
    >
      <div className="w-full min-h-screen flex p-4 justify-center items-center">
        <div className="grid grid-cols-2 w-1/2 h-96 border-2 border-blue-950 shadow-lg shadow-blue-200 rounded-3xl backdrop-blur-sm bg-slate-950 bg-opacity-90">
          <div className="w-full p-3 flex flex-col justify-center items-center">
            <p className="text-gray-200 text-3xl font-bold max-w-min">
              Register To Adjust With University Life.
            </p>
          </div>
          <div className=" flex flex-col justify-center w-full p-3">
            <p className="text-2xl font-bold text-white text-center">
              Register
            </p>
            <div className="w-full flex flex-col mt-4">
              <input
                className="p-3 outline-none bg-slate-900 border-b border-white text-white"
                placeholder="username"
                type="text"
              />
              <input
                className="p-3 mt-4 outline-none bg-slate-900 border-b border-white text-white"
                placeholder="email"
                type="text"
              />
              <input
                className="mt-4 p-3 outline-none bg-slate-900 border-b border-white text-white"
                placeholder="password"
                type="password"
              />
            </div>
            <button className="mt-4 w-full bg-gradient-to-br from-[#00a6ff] to-red-500 hover:bg-gradient-to-br hover:from-[#00a6ffec] hover:to-red-400  text-white p-3 rounded-full">
              Register
            </button>
            <p className="mt-2 text-gray-300 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-[#00a6ff]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
