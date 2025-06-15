import { useRecoilValue } from "recoil"
import { userDetailsAtom } from "../../recoil/atom"
import { Link } from "react-router-dom"

const Dashboard = () => {
    const user = useRecoilValue(userDetailsAtom)
    return (
        <div className="w-full px-4 py-6 flex flex-col">
            <p>Welcome {user.username}!!</p>
            <div className="w-full mt-4 grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4">
                <Link to="/career-guidance-and-skill-tracking" className="shadow flex flex-col p-4 rounded-md h-96 bg-gradient-to-br from-[#00a6ff] to-red-500 hover:transition-all duration-300 ease-in-out transform hover:scale-105">
                    <p className="text-white font-bold text-lg">Career Guidance & Skill Tracking</p>
                    <div className=" justify-center flex items-center w-full">
                        <img src="/work-in-progress.png" alt="work-in-progress" className="h-64 w-64" />
                    </div>
                </Link>
                <Link to="/" className="shadow flex flex-col p-4 rounded-md h-96 bg-gradient-to-br from-[#00a6ff] to-red-500 hover:transition-all duration-300 ease-in-out transform hover:scale-105">
                    <p className="text-white font-bold text-lg">Skill Assessments & Learning Resources</p>
                    <div className=" justify-center flex items-center w-full">
                        <img src="/skillful.png" alt="skillful" className="h-64 w-64" />
                    </div>
                </Link>
                <Link to="/" className="shadow flex flex-col p-4 rounded-md h-96 bg-gradient-to-br from-[#00a6ff] to-red-500 hover:transition-all duration-300 ease-in-out transform hover:scale-105">
                    <p className="text-white font-bold text-lg mb-3">Ethical Decision Making & Community Engagement</p>
                    <div className=" justify-center flex items-center w-full">
                        <img src="/handshake.png" alt="handshake" className="h-64 w-64" />
                    </div>
                </Link>
                <Link to="/" className="shadow flex flex-col p-4 rounded-md h-96 bg-gradient-to-br from-[#00a6ff] to-red-500 hover:transition-all duration-300 ease-in-out transform hover:scale-105">
                    <p className="text-white font-bold text-lg">Generate Progress Reports</p>
                    <div className=" justify-center flex items-center w-full">
                        <img src="/progress-report.png" alt="progress-report" className="h-64 w-64" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard