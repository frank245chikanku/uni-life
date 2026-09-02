
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Bot,
  BookOpen,
  ChevronRight,
  GraduationCap,
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
      "Explore programmes, understand career options and make informed decisions about your future.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
    eyebrow: "EXPLORE PROGRAMMES",
    title: "Find a programme that fits your goals.",
    description:
      "Explore academic programmes and identify a path that matches your interests and plans.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
    eyebrow: "BUILD YOUR FUTURE",
    title: "Make your studies count beyond graduation.",
    description:
      "Connect your studies with practical skills, career options and opportunities.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
    eyebrow: "ASK UNI",
    title: "Need help deciding where to start?",
    description:
      "Ask UNI about programmes, careers, skills and opportunities.",
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
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <section className="relative min-h-[650px] w-full overflow-hidden bg-[#06174f]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt=""
          className="h-full w-full object-cover transition-opacity duration-700"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#06174f]/80" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#04143f] via-[#092267]/90 to-[#092267]/45" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 border-b border-white/20 pb-2 text-xs font-semibold tracking-[0.14em] text-blue-100">
              <GraduationCap className="h-4 w-4 text-blue-200" />
              DMI-ST. EUGENE UNIVERSITY
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Your future starts with a direction.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-blue-50 sm:text-base sm:leading-8 lg:text-lg">
              Explore programmes, discover career options and find the
              information you need to make better decisions about your
              education.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/programs"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#102c83] transition hover:bg-blue-50"
              >
                Explore Programmes

                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/chat"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <Bot className="h-4 w-4" />

                Ask UNI

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Feature Links */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-xs text-blue-100/80">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-blue-200" />
                <span>Explore Programmes</span>
              </div>

              <div className="hidden h-4 w-px bg-white/20 sm:block" />

              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-blue-200" />
                <span>Discover Careers</span>
              </div>

              <div className="hidden h-4 w-px bg-white/20 sm:block" />

              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-blue-200" />
                <span>Get Guidance</span>
              </div>
            </div>
          </div>

          {/* Slide Card */}
          <div className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:ml-auto">
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
              <div className="relative h-[390px] overflow-hidden rounded-xl sm:h-[420px]">
                <img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06174f] via-[#06174f]/30 to-transparent" />

                {/* Slide Number */}
                <div className="absolute right-4 top-4 rounded-full bg-black/20 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                  {activeSlide + 1} / {heroSlides.length}
                </div>

                {/* Slide Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="mb-2 text-[10px] font-semibold tracking-[0.16em] text-blue-200">
                    {slide.eyebrow}
                  </p>

                  <h2 className="max-w-sm text-xl font-bold leading-tight text-white sm:text-2xl">
                    {slide.title}
                  </h2>

                  <p className="mt-2 max-w-sm text-xs leading-5 text-blue-100/85">
                    {slide.description}
                  </p>

                  {/* Slider Controls */}
                  <div className="mt-5 flex items-center gap-2">
                    {heroSlides.map((item, index) => (
                      <button
                        key={item.eyebrow}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        aria-label={`View slide ${index + 1}`}
                        aria-current={activeSlide === index}
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

              {/* Card Footer */}
              <div className="flex items-center justify-between px-3 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                    <GraduationCap className="h-4 w-4 text-[#102c83]" />
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-wide text-white/50">
                      UNI Life Guide
                    </p>

                    <p className="text-[11px] font-medium text-white">
                      Student support
                    </p>
                  </div>
                </div>

                <Link
                  to="/programs"
                  aria-label="Explore programmes"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#102c83]"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Programme Link */}
            <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-slate-200 bg-white p-3 shadow-lg sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">
                    Programmes
                  </p>

                  <p className="text-xs font-semibold text-slate-800">
                    Find a programme
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Information */}
        <div className="mt-14 hidden border-t border-white/10 pt-5 md:block">
          <div className="flex items-center justify-between">
            <p className="text-xs text-blue-100/60">
              Explore programmes, careers and opportunities in one place.
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-white/60">
              <span>Explore more</span>
              <ChevronRight className="h-4 w-4 rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

