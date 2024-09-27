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
    to: "/academics/chapter1",
    imgSrc: academic,
    altText: "academic",
    label: "Academic Integrity",
    bgColor: "bg-[#71c1fa]",
    textColor: "text-slate-900",
  },
  {
    to: "/peer/chapter1",
    imgSrc: peer,
    altText: "peer",
    label: "Peer Pressure",
    bgColor: "bg-purple-700",
    textColor: "text-slate-200",
  },
  {
    to: "/social/chapter1",
    imgSrc: responsibility,
    altText: "responsibility",
    label: "Social Responsibility",
    bgColor: "bg-[#ffb09d]",
    textColor: "text-[#0101cf]",
  },
  {
    to: "/financial/chapter1",
    imgSrc: financial,
    altText: "financial",
    label: "Financial Strain",
    bgColor: "bg-yellow-400",
    textColor: "text-slate-900",
  },
  {
    to: "/career/chapter1",
    imgSrc: career,
    altText: "career",
    label: "Career Uncertainty",
    bgColor: "bg-indigo-900",
    textColor: "text-slate-200",
  },
  {
    to: "/discrimination/chapter1",
    imgSrc: criticism,
    altText: "criticism",
    label: "Discrimination & Bias",
    bgColor: "bg-[#71c1fa]",
    textColor: "text-slate-900",
  },
  {
    to: "/entrepreneurship/chapter1",
    imgSrc: presentation,
    altText: "presentation",
    label: "Entrepreneurship Uncertainty",
    bgColor: "bg-pink-600",
    textColor: "text-slate-200",
  },
  {
    to: "/adjustment/chapter1",
    imgSrc: leader,
    altText: "leader",
    label: "Adjustment to Independence",
    bgColor: "bg-green-600",
    textColor: "text-slate-200",
  },
];

const Categories = () => {
  return (
    <section className="w-full flex flex-col min-h-screen justify-center items-center p-6">
      <p className="font-bold text-[50px] text-gray-200">Categories</p>
      <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-4 mt-16">
        {categoryData.map((category, index) => (
          <Link
            key={index}
            to={category.to}
            className={`w-full shadow shadow-gray-600 ${category.bgColor} cursor-pointer hover:shadow-slate-900 hover:shadow-md p-4 rounded-sm flex flex-col justify-center items-center`}
          >
            <img
              className="h-20 w-20"
              src={category.imgSrc}
              alt={category.altText}
            />
            <p
              className={`mt-4 font-bold ${category.textColor} text-lg text-center`}
            >
              {category.label}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
