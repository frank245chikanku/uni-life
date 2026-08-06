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
    altText: "Academic Integrity",
    label: "Academic Integrity",
  },
  {
    to: "/peer",
    imgSrc: peer,
    altText: "Peer Pressure",
    label: "Peer Pressure",
  },
  {
    to: "/social",
    imgSrc: responsibility,
    altText: "Social Responsibility",
    label: "Social Responsibility",
  },
  {
    to: "/financial",
    imgSrc: financial,
    altText: "Financial Strain",
    label: "Financial Strain",
  },
  {
    to: "/career",
    imgSrc: career,
    altText: "Career Uncertainty",
    label: "Career Uncertainty",
  },
  {
    to: "/discrimination",
    imgSrc: criticism,
    altText: "Discrimination & Bias",
    label: "Discrimination & Bias",
  },
  {
    to: "/entrepreneurship",
    imgSrc: presentation,
    altText: "Entrepreneurship Uncertainty",
    label: "Entrepreneurship Uncertainty",
  },
  {
    to: "/adjustment",
    imgSrc: leader,
    altText: "Adjustment to Independence",
    label: "Adjustment to Independence",
  },
];

const Categories = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 py-16 px-4 sm:px-6 lg:px-8">

      {/* Decorative Background Elements */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute -bottom-32 -left-24 w-80 h-80 bg-indigo-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Student Life Guide
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            What Are You Dealing With?
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base">
            Explore the areas below and find guidance, information and
            practical support for your university journey.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categoryData.map((category, index) => (
            <Link
              key={index}
              to={category.to}
              className="
                group
                bg-white/95
                backdrop-blur-sm
                border border-white
                rounded-2xl
                p-6
                min-h-[190px]
                flex
                flex-col
                items-center
                justify-center
                text-center
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:border-blue-200
                hover:bg-white
              "
            >
              {/* Icon Container */}
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-blue-50
                  flex
                  items-center
                  justify-center
                  mb-5
                  transition-all
                  duration-300
                  group-hover:bg-blue-100
                  group-hover:scale-105
                "
              >
                <img
                  src={category.imgSrc}
                  alt={category.altText}
                  className="w-9 h-9 object-contain"
                />
              </div>

              {/* Category Name */}
              <h3
                className="
                  text-base
                  font-semibold
                  text-slate-800
                  leading-snug
                  group-hover:text-blue-700
                  transition-colors
                "
              >
                {category.label}
              </h3>

              {/* View Link */}
              <span
                className="
                  mt-3
                  text-xs
                  font-medium
                  text-blue-600
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                "
              >
                Explore →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;