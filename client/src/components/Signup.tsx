import { Link } from "react-router-dom"
import bg from "../assets/front-view-stacked-books-graduation-cap-ladders-education-day.jpg"

const Signup = () => {
  return (
    <section style={{ backgroundImage: `url(${bg})`}} className="bg-cover bg-center object-cover">
    <div className="w-full min-h-screen flex p-4 justify-center items-center">
        <div className="grid grid-cols-2 w-1/2 h-96 border-2 border-blue-950 shadow-lg shadow-blue-200 rounded-3xl backdrop-blur-sm bg-slate-950 bg-opacity-90">
            <div className=" flex flex-col justify-center w-full p-3">
                <p className="text-2xl font-bold text-white text-center">Login</p>
                <div className="w-full flex flex-col mt-4">
                    <input className="p-3 outline-none bg-slate-900 border-b border-white text-white" placeholder="username" type="text" />
                    <input className="mt-4 p-3 outline-none bg-slate-900 border-b border-white text-white" placeholder="password" type="password" />
                </div>
                <button className="mt-4 w-full bg-gradient-to-br from-[#00a6ff] to-red-500 hover:bg-gradient-to-br hover:from-[#00a6ffec] hover:to-red-400  text-white p-3 rounded-full">Login</button>
                <p className="mt-2 text-gray-300 text-center">Dont have an account? <Link to="/register" className="text-[#00a6ff]">Sign Up</Link></p>

            </div>
            <div className="w-full flex flex-col justify-center items-center p-4">
                <p className="text-white text-3xl font-bold text-end max-w-min">WELCOME BACK!</p>
                <p className="text-gray-200 text-end">To Uni-Life Guide</p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Signup