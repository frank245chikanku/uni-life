
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Handshake,
  Lightbulb,
  MessageCircle,
  Search,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import { userDetailsAtom } from "../../recoil/atom";
import dashboardBg from "../../assets/IMG-20260704-WA0015.jpg";

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
    const interval = setInterval(() => {
      setQuoteIndex((current) => (current + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const skills = ["React", "Node", "UI/UX"];
  const assessments = 3;
  const projects = 1;
  const internships = 0;

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good morning"
      : hour < 18
      ? "Good afternoon"
      : "Good evening";

  const firstName = user?.username?.split(" ")[0] || "Student";

  /*
   * QUICK START CARDS
   */
  const quickStarts = [
    {
      label: "Career Guidance",
      shortLabel: "Career",
      value: "Career & Skills",
      footer:
        skills.length >= 5
          ? "Strong progress"
          : "Continue building skills",
      icon: BriefcaseBusiness,
      to: "/career-guidance-and-skill-tracking",
      progress: 65,
      number: "01",
      gradient: "from-blue-500 to-cyan-400",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      label: "Learning Resources",
      shortLabel: "Learning",
      value: `${assessments} Assessments`,
      footer:
        assessments > 0
          ? "Keep learning"
          : "Start learning today",
      icon: BookOpen,
      to: "/skill-assessments-and-learning-resources",
      progress: 50,
      number: "02",
      gradient: "from-violet-500 to-purple-400",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      label: "Community Engagement",
      shortLabel: "Community",
      value: `${projects} Active Project`,
      footer:
        projects > 0
          ? "Maintain momentum"
          : "Start something useful",
      icon: Handshake,
      to: "/ethical-decision-making-and-community-engagement",
      progress: 35,
      number: "03",
      gradient: "from-emerald-500 to-teal-400",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      label: "Internships",
      shortLabel: "Experience",
      value:
        internships > 0
          ? `${internships} Opportunities`
          : "Explore Opportunities",
      footer:
        internships > 0
          ? "Keep networking"
          : "Find your first opportunity",
      icon: Target,
      to: "/internships-and-industrial-programs",
      progress: 20,
      number: "04",
      gradient: "from-orange-500 to-amber-400",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  /*
   * EXPLORE FEATURES
   */
  const exploreFeatures = [
    {
      title: "Career Guidance",
      description:
        "Explore career paths and discover the skills that can move you forward.",
      icon: BriefcaseBusiness,
      to: "/career-guidance-and-skill-tracking",
      label: "Explore careers",
      gradient: "from-blue-500 to-cyan-400",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Learning Resources",
      description:
        "Build knowledge through assessments, learning materials and practical resources.",
      icon: BookOpen,
      to: "/skill-assessments-and-learning-resources",
      label: "Start learning",
      gradient: "from-violet-500 to-purple-400",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      title: "Community Engagement",
      description:
        "Develop responsible decision-making and discover ways to contribute.",
      icon: Users,
      to: "/ethical-decision-making-and-community-engagement",
      label: "Get involved",
      gradient: "from-emerald-500 to-teal-400",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Internships",
      description:
        "Find practical opportunities that help prepare you for employment.",
      icon: GraduationCap,
      to: "/internships-and-industrial-programs",
      label: "Find opportunities",
      gradient: "from-orange-500 to-amber-400",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#F7F9FC]">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[1.6fr_0.8fr]">

            {/* HERO IMAGE */}
            <div
              className="relative min-h-[430px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${dashboardBg})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#031A35]/95 via-[#06264A]/85 to-[#155A96]/70" />

              {/* Decorative Glow */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative z-10 flex min-h-[430px] flex-col justify-between p-7 sm:p-10 lg:p-12">

                <div>
                  {/* Logo */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md">
                      <GraduationCap
                        size={23}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        UNI Life Guide
                      </p>

                      <p className="text-xs text-blue-200">
                        Student Dashboard
                      </p>
                    </div>
                  </div>

                  {/* Greeting */}
                  <div className="mt-12 max-w-2xl">
                    <p className="text-sm font-semibold text-blue-200">
                      {greeting}
                    </p>

                    <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                      {firstName}.
                    </h1>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
                      Welcome to your student guide. Explore your programme,
                      discover career opportunities, build practical skills
                      and take your next step with confidence.
                    </p>
                  </div>

                  {/* Hero Buttons */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/Classifications"
                      className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#06264A] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
                    >
                      <Search size={16} />

                      Explore Classifications

                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>

                    <Link
                      to="/chat"
                      className="group inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
                    >
                      <MessageCircle size={16} />

                      Ask UNI

                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>

                {/* Hero Bottom */}
                <div className="mt-10 border-t border-white/10 pt-5">
                  <div className="flex flex-wrap gap-x-6 gap-y-3">

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                        Explore
                      </p>

                      <p className="mt-1 text-xs text-blue-100">
                        Programmes & Careers
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                        Develop
                      </p>

                      <p className="mt-1 text-xs text-blue-100">
                        Skills & Knowledge
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                        Prepare
                      </p>

                      <p className="mt-1 text-xs text-blue-100">
                        Opportunities & Experience
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* DAILY TIP */}
            <div className="flex flex-col justify-between bg-white p-7 sm:p-8 lg:p-9">
              <div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#155A96]">
                    <Lightbulb size={19} />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#155A96]">
                    Today's Tip
                  </span>
                </div>

                <p className="mt-7 text-xl font-bold leading-8 text-[#06264A]">
                  “{quotes[quoteIndex]}”
                </p>

              </div>

              <div className="mt-10 rounded-2xl border border-slate-100 bg-[#F7F9FC] p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#155A96]">
                  Keep Moving
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Small, consistent progress can make a meaningful difference
                  in your academic and career journey.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            QUICK START
        ========================================================= */}
        <section className="mt-12">

          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#155A96]">
                Your Progress
              </p>

              <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#06264A]">
                Quick Start
              </h2>
            </div>

            <p className="text-sm text-slate-500">
              Pick up where you left off.
            </p>
          </div>

          {/* MAIN DASHBOARD CARDS */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {quickStarts.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl"
                >
                  {/* Gradient top line */}
                  <div
                    className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${item.gradient}`}
                  />

                  {/* Decorative glow */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-slate-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Header */}
                  <div className="relative flex items-start justify-between">

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor} transition-all duration-300 group-hover:scale-105`}
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="flex items-center gap-2">

                      <span className="text-[10px] font-bold tracking-widest text-slate-300">
                        {item.number}
                      </span>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition-all duration-300 group-hover:bg-slate-100">
                        <ArrowUpRight
                          size={15}
                          className="text-slate-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#155A96]"
                        />
                      </div>

                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative mt-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      {item.label}
                    </p>

                    <h3 className="mt-1 text-lg font-bold leading-6 text-[#06264A]">
                      {item.value}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.footer}
                    </p>

                  </div>

                  {/* Progress */}
                  <div className="relative mt-5">

                    <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
                      <span>Progress</span>

                      <span className="text-[#155A96]">
                        {item.progress}%
                      </span>
                    </div>

                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${item.gradient} transition-all duration-700 group-hover:brightness-105`}
                        style={{
                          width: `${item.progress}%`,
                        }}
                      />
                    </div>

                  </div>

                  {/* Bottom */}
                  <div className="relative mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                    <span className="text-xs font-semibold text-slate-400 transition-colors group-hover:text-[#155A96]">
                      Open section
                    </span>

                    <ArrowRight
                      size={14}
                      className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#155A96]"
                    />

                  </div>
                </Link>
              );
            })}

          </div>
        </section>

        {/* =========================================================
            EXPLORE FEATURES
        ========================================================= */}
        <section className="mt-14">

          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#155A96]">
              Student Development
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#06264A]">
              Explore Features
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Tools designed to help you move from university learning to
              practical career preparation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {exploreFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to={item.to}
                  className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                >
                  {/* Top gradient */}
                  <div
                    className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${item.gradient}`}
                  />

                  <div className="flex items-start justify-between">

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor} transition-all duration-300 group-hover:scale-105`}
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.7}
                      />
                    </div>

                    <span className="text-xs font-bold tracking-widest text-slate-300">
                      0{index + 1}
                    </span>

                  </div>

                  <div className="mt-6">

                    <h3 className="text-lg font-bold text-[#06264A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                    <span className="text-sm font-semibold text-[#155A96]">
                      {item.label}
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition-all group-hover:bg-blue-50">
                      <ArrowRight
                        size={15}
                        className="text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#155A96]"
                      />
                    </div>

                  </div>
                </Link>
              );
            })}

          </div>
        </section>

        {/* =========================================================
            NEXT STEP + ASK UNI
        ========================================================= */}
        <section className="mt-14 grid gap-5 lg:grid-cols-[1fr_360px]">

          {/* NEXT STEP */}
          <div className="rounded-[22px] border border-slate-200 bg-white p-7 shadow-sm md:p-8">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#155A96]">
                <TrendingUp size={21} />
              </div>

              <div>

                <p className="text-xs font-bold uppercase tracking-wider text-[#155A96]">
                  Your Next Step
                </p>

                <h3 className="mt-1 text-xl font-bold text-[#06264A]">
                  Build a stronger career direction
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                  Explore your programme, understand the careers connected to
                  it, identify the skills employers value and start building
                  practical experience.
                </p>

              </div>

            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:bg-blue-50">
                <Search
                  size={18}
                  className="text-[#155A96]"
                />

                <p className="mt-3 text-sm font-bold text-[#06264A]">
                  Explore
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Discover programmes and career paths.
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:bg-blue-50">
                <Target
                  size={18}
                  className="text-[#155A96]"
                />

                <p className="mt-3 text-sm font-bold text-[#06264A]">
                  Develop
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Build skills through learning and practice.
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:bg-blue-50">
                <BriefcaseBusiness
                  size={18}
                  className="text-[#155A96]"
                />

                <p className="mt-3 text-sm font-bold text-[#06264A]">
                  Prepare
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Find opportunities and gain experience.
                </p>
              </div>

            </div>
          </div>

          {/* ASK UNI */}
          <div className="relative overflow-hidden rounded-[22px] bg-[#06264A] p-7 shadow-sm md:p-8">

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl" />

            <div className="relative">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-blue-100">
                <MessageCircle size={21} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                Need some direction?
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Ask UNI about programmes, careers, skills and opportunities
                based on your interests.
              </p>

              <Link
                to="/chat"
                className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#06264A] transition-all hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Chat with UNI

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>
          </div>

        </section>

        {/* =========================================================
            FINAL MESSAGE
        ========================================================= */}
        <section className="mt-10 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <CheckCircle2 size={21} />
              </div>

              <div>

                <h3 className="text-lg font-bold text-[#06264A]">
                  You're on the right path.
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Keep learning, exploring and building practical experience.
                  Your next step does not need to be perfect — it just needs
                  to move you forward.
                </p>

              </div>

            </div>

            <Link
              to="/Classifications"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#155A96] px-5 py-3 text-sm font-semibold text-[#155A96] transition-all hover:bg-blue-50"
            >
              Plan Your Next Move

              <ArrowRight size={16} />
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <div className="mt-8 flex items-center justify-center gap-2 pb-6 text-xs text-slate-400">
          <Clock3 size={13} />
          UNI Life Guide · Your academic and career companion
        </div>

      </main>
    </div>
  );
};

export default Dashboard;

