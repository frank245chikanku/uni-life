import { useRecoilValue } from "recoil";
import { userDetailsAtom } from "../../recoil/atom";
import { Link } from "react-router-dom";
import { BarChart2, FileCheck2, Briefcase, Award } from "lucide-react";

const Dashboard = () => {
  const user = useRecoilValue(userDetailsAtom);

  return (
    <div className="w-full px-4 py-6 flex flex-col">

      <p className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 animate-fade-in-up drop-shadow-lg mb-10 text-center tracking-wide">
        Welcome, {user.username}!
      </p>

      <h2 className="text-xl font-semibold mb-4 text-gray-700 px-2">📊 Quick Starts</h2>

      <div className="grid md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Skills", value: "12+", icon: <BarChart2 className="text-blue-500" /> },
          { label: "Assessments", value: "5 Completed", icon: <FileCheck2 className="text-purple-500" /> },
          { label: "Projects", value: "2 Active", icon: <Award className="text-green-500" /> },
          { label: "Internships", value: "1 Applied", icon: <Briefcase className="text-red-500" /> },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-center group border border-gray-100 hover:border-blue-300"
          >
            <div className="flex justify-center mb-2 text-2xl">{stat.icon}</div>
            <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-xs italic text-gray-400 mt-1 group-hover:text-blue-400 transition">
              Guided Progress
            </p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-red-100 text-center p-4 rounded-xl mb-10 shadow-inner hover:shadow-md transition-all">
        <p className="text-md font-medium text-gray-700">
          🎯 <em>Today's Tip:</em> <span className="italic">"Stay curious — every skill you learn today prepares you for tomorrow’s opportunities."</span>
        </p>
      </div>

      <h2 className="text-xl font-semibold mb-4 text-gray-700 px-2">🚀 Explore Features</h2>

      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mb-12">
        {[
          {
            title: "Career Guidance & Skill Tracking",
            to: "/career-guidance-and-skill-tracking",
            img: "/work-in-progress.png",
          },
          {
            title: "Skill Assessments & Learning Resources",
            to: "/skill-assessments-and-learning-resources",
            img: "/skillful.png",
          },
          {
            title: "Ethical Decision Making & Community Engagement",
            to: "/ethical-decision-making-and-community-engagement",
            img: "/handshake.png",
          },
          {
            title: "Internships & Industrial Programs",
            to: "/internships-and-industrial-programs",
            img: "/apprenticeship.png",
          },
        ].map((item) => (
          <Link
            key={item.title}
            to={item.to}
            className="shadow-xl hover:shadow-2xl flex flex-col p-4 rounded-2xl h-96 bg-gradient-to-br from-[#00a6ff] to-red-500 hover:scale-105 transition-transform duration-300"
          >
            <p className="text-white font-bold text-lg">{item.title}</p>
            <div className="flex justify-center items-center h-full">
              <img src={item.img} alt={item.title} className="h-64 w-64 object-contain" />
            </div>
          </Link>
        ))}
      </div>


      <div className="mt-6 p-6 bg-white border border-gray-200 rounded-xl shadow-md text-center hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-gray-800 mb-2">You're On the Right Path 🚀</h3>
        <p className="text-sm text-gray-600 mb-4">
          Keep building, learning, and connecting. Every step you take today shapes your future success.
        </p>
        <Link
          to="/Classifications"
          className="inline-block mt-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
        >
          Plan Your Next Move →
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
