import { useRecoilValue } from "recoil";
import { userDetailsAtom } from "../../recoil/atom";
import { Link } from "react-router-dom";
import { BarChart2, FileCheck2, Briefcase, Award } from "lucide-react";
import { useState, useEffect } from "react";

const quotes = [
  "Stay curious — every skill you learn today prepares you for tomorrow’s opportunities.",
  "Consistency beats intensity — show up every day.",
  "Your progress is your responsibility — own it.",
  "Invest in your skills — they’re the currency of tomorrow’s job market.",
  "Build your network before you need it — relationships are long-term assets.",
  "Solve real problems — the world rewards solutions, not just effort.",
  "Seek challenges, not shortcuts — growth lives in discomfort.",
  "Your future self is shaped by today’s habits — choose wisely.",      
];

const Dashboard = () => {
  const user = useRecoilValue(userDetailsAtom); 

  const [quoteIndex, setQuoteIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setQuoteIndex((i) => (i + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const skills = ["React", "Node", "UI/UX"];
  const assessments = 3;
  const projects = 1;
  const internships = 0;

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  const quickStarts = [
    {
      label: "Skills",
      value: `Skills Added`,
      footer: skills.length >= 5 ? "Skill Builder 🏅" : "Add More Skills",
      icon: <BarChart2 className="text-blue-500" />,
      to: "/career-guidance-and-skill-tracking",
      progressClass: "bg-blue-500 w-2/3",
    },
    {
      label: "Assessments",
      value: `Assessments `,
      footer: assessments > 0 ? "On Track 🏅" : "Start One Today",
      icon: <FileCheck2 className="text-purple-500" />,
      to: "/skill-assessments-and-learning-resources",
      progressClass: "bg-purple-500 w-1/2",
    },
    {
      label: "Projects",
      value: `Active Projects`,
      footer: projects > 0 ? "Maintain Momentum" : "Kick‑start One!",
      icon: <Award className="text-green-500" />,
      to: "/ethical-decision-making-and-community-engagement",
      progressClass: "bg-green-500 w-1/4",
    },
    {
      label: "Internships",
      value: `Internships`,
      footer: internships > 0 ? "Keep Networking" : "Find Opportunities",
      icon: <Briefcase className="text-red-500" />,
      to: "/internships-and-industrial-programs",
      progressClass: "bg-red-500 w-1/6",
    },
  ];


  return (
    <div className="w-full px-4 py-6 flex flex-col">
      <p className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 animate-fade-in-up drop-shadow-lg mb-10 text-center tracking-wide">
        {greeting}, {user.username}!
      </p>

      <h2 className="text-xl font-semibold mb-4 text-gray-700 px-2">📊 Quick Starts</h2>

      <div className="grid md:grid-cols-4 gap-4 mb-10">
        {quickStarts.map((stat) => (
          <Link
            key={stat.label}
            to={stat.to}
            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-center group border border-gray-100 hover:border-blue-300"
          >
            <div className="flex justify-center mb-2 text-2xl">{stat.icon}</div>
            <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-xs italic text-gray-400 mt-1">{stat.footer}</p>
            <div className="w-full bg-gray-100 rounded-full h-2 mt-3">
              <div className={`h-2 rounded-full ${stat.progressClass}`}></div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-red-100 text-center p-4 rounded-xl mb-10 shadow-inner hover:shadow-md transition-all">
        <p className="text-md font-medium text-gray-700">
          🎯 <em>Today's Tip:</em>{" "}
          <span className="animate-pulse italic">"{quotes[quoteIndex]}"</span>
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