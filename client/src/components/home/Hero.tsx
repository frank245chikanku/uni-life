import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Bot,
  ChevronRight,
  Search,
} from "lucide-react";

import bg from "../../assets/HOME1.jpeg";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[620px] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      />

      {/* Blue Gradient - Concentrated on LEFT side */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-full md:w-[70%] bg-gradient-to-r from-[#071b61]/95 via-[#102c83]/80 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-16 lg:px-10">

        {/* ================= LEFT SIDE ================= */}
        <div className="w-full max-w-2xl text-white">

          {/* University Label */}
          <div className="mb-6 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 backdrop-blur-sm">
            <span className="text-sm font-semibold tracking-wide">
              WELCOME TO DMI-ST. EUGENE UNIVERSITY
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold leading-[1.08] md:text-6xl lg:text-7xl">
            Fully Human.
            <br />

            <span className="text-white">
              Fully Alive.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-blue-50 md:text-lg md:leading-8">
            Discover quality education, explore academic programmes,
            understand your career opportunities and take the next step
            toward your future with DMI-St. Eugene University.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              to="/programs"
              className="flex items-center gap-2 rounded-lg bg-[#0b4ddd] px-7 py-3.5 text-base font-semibold text-white shadow-lg transition duration-200 hover:bg-[#083db5]"
            >
              Explore Programmes
              <ChevronRight size={19} />
            </Link>

            <Link
              to="/dashboard"
              className="rounded-lg border border-white/70 bg-white px-7 py-3.5 text-base font-semibold text-[#102c83] transition duration-200 hover:bg-blue-50"
            >
              Student Dashboard
            </Link>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="ml-auto hidden w-[320px] lg:block xl:w-[340px]">

          {/* White Find Your Path Card */}
          <div className="rounded-2xl bg-white p-5 shadow-2xl">

            {/* Card Header */}
            <div className="mb-4">

              <h2 className="text-xl font-bold text-[#101d4f]">
                Find Your Path
              </h2>

              <p className="mt-1.5 text-xs leading-5 text-gray-500">
                Explore programmes, discover careers and plan your
                future at DMI-St. Eugene University.
              </p>

            </div>


            {/* Programme Search */}
            <div className="relative">

              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search for programmes..."
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-3 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white"
              />

            </div>


            {/* Quick Options */}
            <div className="mt-4 space-y-2.5">


              {/* Undergraduate Programmes */}
              <Link
                to="/programs"
                className="group flex items-center justify-between rounded-xl bg-[#102c83] px-3.5 py-3.5 text-white transition duration-200 hover:bg-[#0b4ddd]"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15">
                    <GraduationCap size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Undergraduate Programmes
                    </p>

                    <p className="mt-0.5 text-[11px] text-blue-100">
                      Explore academic programmes
                    </p>
                  </div>

                </div>

                <ChevronRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>


              {/* Classifications */}
              <Link
                to="/classifications"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-3.5 py-3.5 transition duration-200 hover:border-blue-200 hover:bg-gray-50"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#102c83]">
                    <BookOpen size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#101d4f]">
                      Classifications
                    </p>

                    <p className="mt-0.5 text-[11px] text-gray-500">
                      Find programmes by area
                    </p>
                  </div>

                </div>

                <ChevronRight
                  size={18}
                  className="text-gray-400 transition-transform group-hover:translate-x-1"
                />

              </Link>


              {/* ASK UNI */}
              <Link
                to="/chat"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-3.5 py-3.5 transition duration-200 hover:border-blue-200 hover:bg-gray-50"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#102c83]">
                    <Bot size={20} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">

                      <p className="text-sm font-semibold text-[#101d4f]">
                        Ask Uni
                      </p>

                      <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[9px] font-bold text-blue-700">
                        AI
                      </span>

                    </div>

                    <p className="mt-0.5 text-[11px] text-gray-500">
                      Ask about careers & programmes
                    </p>
                  </div>

                </div>

                <ChevronRight
                  size={18}
                  className="text-gray-400 transition-transform group-hover:translate-x-1"
                />

              </Link>

            </div>


            {/* Small Bottom Message */}
            <div className="mt-4 border-t border-gray-100 pt-3 text-center">

              <p className="text-[11px] text-gray-400">
                Discover your programme. Discover your future.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;