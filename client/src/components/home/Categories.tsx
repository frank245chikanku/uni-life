import academic from "../../assets/education.png";
import peer from "../../assets/peer-to-peer.png";
import responsibility from "../../assets/reliability.png";
import financial from "../../assets/financial-statement.png";
import career from "../../assets/career-path.png";
import criticism from "../../assets/criticism.png";
import presentation from "../../assets/presentation.png";
import leader from "../../assets/leadership.png";
import { Link } from "react-router-dom";

const categoryData = [
  {
    to: "/academics",
    imgSrc: academic,
    altText: "academic",
    label: "Academic Integrity",
    bgColor: "bg-[#71c1fa]",
    textColor: "text-slate-900",
  },
  {
    to: "/peer",
    imgSrc: peer,
    altText: "peer",
    label: "Peer Pressure",
    bgColor: "bg-purple-700",
    textColor: "text-slate-200",
  },
  {
    to: "/social",
    imgSrc: responsibility,
    altText: "responsibility",
    label: "Social Responsibility",
    bgColor: "bg-[#ffb09d]",
    textColor: "text-[#0101cf]",
  },
  {
    to: "/financial",
    imgSrc: financial,
    altText: "financial",
    label: "Financial Strain",
    bgColor: "bg-yellow-400",
    textColor: "text-slate-900",
  },
  {
    to: "/career",
    imgSrc: career,
    altText: "career",
    label: "Career Uncertainty",
    bgColor: "bg-indigo-900",
    textColor: "text-slate-200",
  },
  {
    to: "/discrimination",
    imgSrc: criticism,
    altText: "criticism",
    label: "Discrimination & Bias",
    bgColor: "bg-[#71c1fa]",
    textColor: "text-slate-900",
  },
  {
    to: "/entrepreneurship",
    imgSrc: presentation,
    altText: "presentation",
    label: "Entrepreneurship Uncertainty",
    bgColor: "bg-pink-600",
    textColor: "text-slate-200",
  },
  {
    to: "/adjustment",
    imgSrc: leader,
    altText: "leader",
    label: "Adjustment to Independence",
    bgColor: "bg-green-600",
    textColor: "text-slate-200",
  },
];

const Categories = () => {
  return (
    <section className="w-full min-h-screen px-6 py-12 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Categories
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryData.map((category, index) => (
          <Link
            key={index}
            to={category.to}
            className={`rounded-xl shadow-md transition-all transform hover:scale-105 hover:shadow-lg ${category.bgColor} ${category.textColor} p-6 flex flex-col items-center text-center`}
          >
            <img
              className="w-16 h-16 mb-4"
              src={category.imgSrc}
              alt={category.altText}
            />
            <p className="text-base font-bold leading-tight">
              {category.label}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
