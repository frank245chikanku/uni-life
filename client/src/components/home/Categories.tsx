
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Search } from "lucide-react";

import academic from "../../assets/academic.jpg";
import peer from "../../assets/peer-pressure.jpg";
import social from "../../assets/social-responsibility.jpg";
import financial from "../../assets/financial-strain.jpg";
import career from "../../assets/career-uncertainty.jpg";
import discrimination from "../../assets/discrimination.jpg";
import entrepreneurship from "../../assets/entrepreneurship.jpg";
import adjustment from "../../assets/independence.jpg";

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
    altText:
      "African young people participating in community activities",
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
    altText:
      "African young people working on an entrepreneurial idea",
    label: "Entrepreneurship Uncertainty",
  },
  {
    to: "/adjustment",
    image: adjustment,
    altText:
      "African university student adapting to independent life",
    label: "Adjustment to Independence",
  },
];

const Categories = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b172a] px-4 py-14 sm:px-6 lg:px-8">

      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">


        <div className="mb-9 text-center">

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
            Student Life Guide
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What Are You Dealing With?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
            Explore the areas below and find guidance,
            information and practical support for your
            university journey.
          </p>

        </div>




        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {categoryData.map((category) => (
            <Link
              key={category.to}
              to={category.to}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-blue-500/5
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:border-orange-400/40
                hover:shadow-2xl
              "
            >



              <div className="relative p-2">

                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-2
                    rounded-[1.75rem]
                    bg-blue-500/10
                    opacity-0
                    blur-2xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
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



                    <div className="absolute bottom-4 left-4 right-4">

                      <p
                        className="
                          mb-1
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-white
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




              <div className="px-5 pb-5 pt-2">

                <h3
                  className="
                    text-base
                    font-semibold
                    leading-snug
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-orange-400
                  "
                >
                  {category.label}
                </h3>

                <div className="mt-3 flex items-center justify-between">

                  <span className="text-xs font-medium text-white">
                    Student Support
                  </span>

                  <span
                    className="
                      flex
                      items-center
                      gap-1
                      translate-x-[-5px]
                      text-xs
                      font-semibold
                      text-orange-500
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  >
                    Explore

                    <ArrowRight size={13} />

                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>




        <div
          className="
            mt-10
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
          "
        >

          <div className="grid lg:grid-cols-[1fr_auto]">



            <div className="p-6 sm:p-7">

              <div className="flex items-start gap-4">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-500/10
                    text-orange-500
                  "
                >
                  <MessageCircle size={20} />
                </div>

                <div>

                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-orange-500
                    "
                  >
                    Queries
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-white">
                    Need help with something specific?
                  </h3>

                  <p className="mt-2 max-w-xl text-xs leading-5 text-slate-400 sm:text-sm">
                    Submit a question to the UNI Life Guide
                    team or check the response to a query you
                    have already submitted.
                  </p>

                </div>

              </div>




              <div className="mt-6 grid gap-3 sm:grid-cols-2">


                <Link
                  to="/query"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-4
                    py-3.5
                    transition-all
                    duration-200
                    hover:border-orange-400/30
                    hover:bg-white/[0.07]
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-orange-500/10
                        text-orange-500
                      "
                    >
                      <MessageCircle size={16} />
                    </div>

                    <div>

                      <p className="text-xs font-semibold text-white">
                        Submit a Query
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-500">
                        Ask the support team
                      </p>

                    </div>

                  </div>

                  <ArrowRight
                    size={15}
                    className="
                      text-slate-500
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                      group-hover:text-orange-500
                    "
                  />

                </Link>




                <Link
                  to="/query"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-4
                    py-3.5
                    transition-all
                    duration-200
                    hover:border-blue-400/30
                    hover:bg-white/[0.07]
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-blue-500/10
                        text-blue-400
                      "
                    >
                      <Search size={16} />
                    </div>

                    <div>

                      <p className="text-xs font-semibold text-white">
                        Check a Query
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-500">
                        View your response
                      </p>

                    </div>

                  </div>

                  <ArrowRight
                    size={15}
                    className="
                      text-slate-500
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                      group-hover:text-blue-400
                    "
                  />

                </Link>

              </div>

            </div>



            <div
              className="
                flex
                items-center
                border-t
                border-white/10
                bg-[#071525]/60
                p-6
                lg:w-64
                lg:border-l
                lg:border-t-0
              "
            >

              <div className="w-full">

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-slate-500
                  "
                >
                  Query Centre
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-400">
                  Your Query ID and security code can be
                  used to securely access your query later.
                </p>

                <Link
                  to="/query"
                  className="
                    mt-4
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-[#06264A]
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#155A96]
                  "
                >
                  Open Queries

                  <ArrowRight size={14} />

                </Link>

              </div>

            </div>

          </div>

        </div>




        <div className="mt-5 text-center">

          <p className="text-[10px] text-slate-500">
            Browse a category for guidance or use Queries
            when you need direct assistance.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Categories;

