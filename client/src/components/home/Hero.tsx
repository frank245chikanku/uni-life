import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Bot,
  BookOpen,
  ChevronRight,
  GraduationCap,
  Sparkles,
  Target,
} from "lucide-react";

import bg from "../../assets/IMG-20260704-WA0015 copy.jpg";
import askuni from "../../assets/HOME1.jpeg";

const heroSlides = [
  {
    image: bg,
    eyebrow: "START YOUR JOURNEY",
    title: "Discover where your education can take you.",
    description:
      "Explore programmes, understand career possibilities and make confident decisions about your future.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
    eyebrow: "EXPLORE PROGRAMMES",
    title: "Find a programme that fits your future.",
    description:
      "Discover academic pathways designed to help you build knowledge, skills and confidence.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
    eyebrow: "BUILD YOUR FUTURE",
    title: "Your degree is more than a qualification.",
    description:
      "Connect what you study today with the opportunities you can pursue tomorrow.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
    eyebrow: "ASK UNI",
    title: "Not sure where to start?",
    description:
      "Ask Uni can help you explore programmes, careers and the next step in your journey.",
  },
  {
    image: askuni,
    eyebrow: "DMI-ST. EUGENE UNIVERSITY",
    title: "Fully Human. Fully Alive.",
    description:
      "Discover quality education, explore academic programmes and take the next step toward your future.",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <section className="relative min-h-[680px] w-full overflow-hidden bg-[#06174f]">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt=""
          className="h-full w-full object-cover transition-all duration-1000"
        />
      </div>

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-[#06174f]/75" />

      {/* Left-focused gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04143f] via-[#092267]/90 to-[#092267]/35" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06174f] to-transparent" />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_390px] lg:gap-16">
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold tracking-[0.18em] text-blue-100 shadow-lg backdrop-blur-md sm:text-xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-300" />

              DMI-ST. EUGENE UNIVERSITY
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Your future
              <br />

              <span className="bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent">
                starts with a direction.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-blue-50/90 sm:text-base sm:leading-8 lg:text-lg">
              Discover programmes, explore career possibilities and understand
              where your education can take you — all in one place.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/programs"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#102c83] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-2xl sm:px-7"
              >
                Explore Programmes

                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/chat"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:px-7"
              >
                <Bot className="h-4 w-4" />

                Ask Uni

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* =================================================
                QUICK TRUST POINTS
            ================================================== */}

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-blue-100/80">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                  <GraduationCap className="h-3.5 w-3.5 text-blue-200" />
                </div>

                <span>Explore Programmes</span>
              </div>

              <div className="hidden h-5 w-px bg-white/20 sm:block" />

              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                  <Target className="h-3.5 w-3.5 text-purple-200" />
                </div>

                <span>Discover Careers</span>
              </div>

              <div className="hidden h-5 w-px bg-white/20 sm:block" />

              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                  <Bot className="h-3.5 w-3.5 text-blue-200" />
                </div>

                <span>Get Guidance</span>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE — UNIQUE CHANGING DISCOVERY PANEL
          ====================================================== */}

          <div className="relative mx-auto w-full max-w-[390px] lg:mx-0 lg:ml-auto">
            {/* Floating glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/20 blur-2xl" />

            {/* Main visual card */}
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-md">
              {/* Image */}
              <div className="relative h-[390px] overflow-hidden rounded-[1.35rem] sm:h-[430px]">
                <img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06174f] via-[#06174f]/20 to-transparent" />

                {/* Top floating label */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span className="text-[9px] font-bold tracking-[0.15em] text-white">
                    DISCOVER
                  </span>
                </div>

                {/* Slide number */}
                <div className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1.5 text-[9px] font-bold text-white backdrop-blur-md">
                  0{activeSlide + 1} / 0{heroSlides.length}
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="mb-2 text-[9px] font-bold tracking-[0.2em] text-blue-200">
                    {slide.eyebrow}
                  </p>

                  <h2 className="max-w-sm text-xl font-bold leading-tight text-white sm:text-2xl">
                    {slide.title}
                  </h2>

                  <p className="mt-2 max-w-sm text-xs leading-5 text-blue-100/80">
                    {slide.description}
                  </p>

                  {/* Dots */}
                  <div className="mt-5 flex items-center gap-2">
                    {heroSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        aria-label={`View slide ${index + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeSlide === index
                            ? "w-7 bg-white"
                            : "w-1.5 bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating bottom navigation */}
              <div className="flex items-center justify-between px-3 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                    <GraduationCap className="h-4 w-4 text-[#102c83]" />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-white/50">
                      Your journey
                    </p>

                    <p className="text-[11px] font-semibold text-white">
                      Starts here
                    </p>
                  </div>
                </div>

                <Link
                  to="/programs"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white hover:text-[#102c83]"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Small floating card */}
            <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-white/20 bg-white p-3 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Explore
                  </p>

                  <p className="text-xs font-bold text-slate-800">
                    Find your programme
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM DISCOVERY BAR
        ======================================================== */}

        <div className="mt-14 hidden border-t border-white/10 pt-5 md:block">
          <div className="flex items-center justify-between">
            <p className="text-xs text-blue-100/60">
              One platform. One journey. A clearer path to your future.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-white/70">
              <span>Scroll to explore</span>

              <ChevronRight className="h-4 w-4 rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;