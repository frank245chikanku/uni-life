import academic from "../../assets/academic.jpg";
import peer from "../../assets/peer-pressure.jpg";
import social from "../../assets/social-responsibility.jpg";
import financial from "../../assets/financial-strain.jpg";
import career from "../../assets/career-uncertainty.jpg";
import discrimination from "../../assets/discrimination.jpg";
import entrepreneurship from "../../assets/entrepreneurship.jpg";
import adjustment from "../../assets/independence.jpg";

import { Link } from "react-router-dom";

const categoryData = [
  {
    to: "/academics",
    image: academic,
    altText: "African university student studying",
    label: "Academic Integrity",
  },
  {
    to: "/peer",
    image: peer,
    altText: "African students experiencing peer pressure",
    label: "Peer Pressure",
  },
  {
    to: "/social",
    image: social,
    altText: "African young people participating in community activities",
    label: "Social Responsibility",
  },
  {
    to: "/financial",
    image: financial,
    altText: "African student managing personal finances",
    label: "Financial Strain",
  },
  {
    to: "/career",
    image: career,
    altText: "African student thinking about career opportunities",
    label: "Career Uncertainty",
  },
  {
    to: "/discrimination",
    image: discrimination,
    altText: "African students from different backgrounds",
    label: "Discrimination & Bias",
  },
  {
    to: "/entrepreneurship",
    image: entrepreneurship,
    altText: "African young people working on an entrepreneurial idea",
    label: "Entrepreneurship Uncertainty",
  },
  {
    to: "/adjustment",
    image: adjustment,
    altText: "African university student adapting to independent life",
    label: "Adjustment to Independence",
  },
];

const Categories = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b172a] py-16 px-4 sm:px-6 lg:px-8">

    
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

      
        <div className="text-center mb-10">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500 mb-3">
            Student Life Guide
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What Are You Dealing With?
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            Explore the areas below and find guidance, information and
            practical support for your university journey.
          </p>

        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {categoryData.map((category, index) => (
            <Link
              key={index}
              to={category.to}
              className="
                group
                overflow-hidden
                bg-blue-500/5
                rounded-2xl
                border
                border-white/10
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:shadow-2xl
                hover:border-orange-400/40
              "
            >

              
              <div className="relative p-2">

             
                <div
                  className="
                    absolute
                    -inset-2
                    rounded-[1.75rem]
                    bg-blue-500/10
                    blur-2xl
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />

            
                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.35rem]
                    border
                    border-slate-200
                    bg-slate-100
                    shadow-md
                  "
                >

                 
                  <div className="relative h-40 overflow-hidden">

                    <img
                      src={category.image}
                      alt={category.altText}
                      loading="lazy"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#06174f]/80
                        via-[#06174f]/20
                        to-transparent
                      "
                    />

                    
                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        right-4
                      "
                    >
                      <p
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-white
                          mb-1
                        "
                      >
                        Student Life Guide
                      </p>

                      <h3
                        className="
                          text-sm
                          font-bold
                          leading-snug
                          text-white
                          drop-shadow-lg
                        "
                      >
                        {category.label}
                      </h3>
                    </div>

                    
                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-1
                        w-0
                        bg-orange-500
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />

                  </div>

                </div>

              </div>

              {/* Card Content */}
              <div className="px-5 pb-5 pt-2">

                <h3
                  className="
                    text-base
                    font-semibold
                    text-white
                    leading-snug
                    transition-colors
                    duration-300
                    group-hover:text-orange-600
                  "
                >
                  {category.label}
                </h3>

                <div className="flex items-center justify-between mt-3">

                  <span
                    className="
                      text-xs
                      font-medium
                      text-white
                      group-hover:text-slate-500
                      transition-colors
                    "
                  >
                    Student Support
                  </span>

                  <span
                    className="
                      text-xs
                      font-semibold
                      text-orange-500
                      opacity-0
                      translate-x-[-5px]
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      transition-all
                      duration-300
                    "
                  >
                    Explore →
                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Categories;