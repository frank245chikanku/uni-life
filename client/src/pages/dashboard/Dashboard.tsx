
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import {
  ArrowRight,
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
import dashboardBg from "../../assets/IMG-20260704-WA0015.jpg"

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

  const quickStarts = [
    {
      label: "Career Guidance",
      value: "Career & Skills",
      footer:
        skills.length >= 5
          ? "Strong progress"
          : "Continue building skills",
      icon: BriefcaseBusiness,
      to: "/career-guidance-and-skill-tracking",
      progress: 65,
    },
    {
      label: "Learning Resources",
      value: `${assessments} Assessments`,
      footer:
        assessments > 0
          ? "Keep learning"
          : "Start learning today",
      icon: BookOpen,
      to: "/skill-assessments-and-learning-resources",
      progress: 50,
    },
    {
      label: "Community Engagement",
      value: `${projects} Active Project`,
      footer:
        projects > 0
          ? "Maintain momentum"
          : "Start something useful",
      icon: Handshake,
      to: "/ethical-decision-making-and-community-engagement",
      progress: 35,
    },
    {
      label: "Internships",
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
    },
  ];

  const exploreFeatures = [
    {
      title: "Career Guidance",
      description:
        "Explore career paths, identify useful skills and understand where your programme can take you.",
      icon: BriefcaseBusiness,
      to: "/career-guidance-and-skill-tracking",
      label: "Explore careers",
    },
    {
      title: "Learning Resources",
      description:
        "Build your knowledge through assessments, learning materials and practical development resources.",
      icon: BookOpen,
      to: "/skill-assessments-and-learning-resources",
      label: "Start learning",
    },
    {
      title: "Community Engagement",
      description:
        "Develop responsible decision-making and discover ways to contribute positively to your community.",
      icon: Users,
      to: "/ethical-decision-making-and-community-engagement",
      label: "Get involved",
    },
    {
      title: "Internships",
      description:
        "Discover opportunities that can help you gain practical experience and prepare for employment.",
      icon: GraduationCap,
      to: "/internships-and-industrial-programs",
      label: "Find opportunities",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F9FC]">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

       
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[1.6fr_0.8fr]">

            
            <div
              className="relative min-h-[450px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${dashboardBg})`,
              }}
            >
             
              <div className="absolute inset-0 bg-gradient-to-br from-[#031A35]/95 via-[#06264A]/85 to-[#155A96]/70" />

              
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

              
              <div className="relative z-10 flex min-h-[450px] flex-col justify-between p-7 sm:p-10 lg:p-12">

                
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-sm">
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

                 
                  <div className="mt-12 max-w-2xl">
                    <p className="text-sm font-semibold text-blue-200">
                      {greeting}
                    </p>

                    <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                      {firstName}.
                    </h1>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
                      Welcome to your student guide. Explore your
                      programme, discover career opportunities, build
                      practical skills and take your next step with
                      confidence.
                    </p>
                  </div>

                  
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/Classifications"
                      className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#06264A] shadow-lg transition hover:bg-blue-50"
                    >
                      <Search size={16} />

                      Explore Classfications
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>

                    <Link
                      to="/chat"
                      className="group inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
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

            
            <div className="flex flex-col justify-between bg-white p-7 sm:p-8 lg:p-9">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#155A96]">
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

              <div className="mt-10 rounded-xl bg-[#F6F9FC] p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#155A96]">
                  Keep Moving
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Small, consistent progress can make a meaningful
                  difference in your academic and career journey.
                </p>
              </div>
            </div>
          </div>
        </section>

       
        <section className="mt-12">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#155A96]">
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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickStarts.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-[#155A96]">
                      <Icon
                        size={19}
                        strokeWidth={1.8}
                      />
                    </div>

                    <ArrowRight
                      size={17}
                      className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#155A96]"
                    />
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {item.label}
                  </p>

                  <p className="mt-1 text-lg font-bold text-[#06264A]">
                    {item.value}
                  </p>

                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-1.5 rounded-full bg-[#155A96]"
                      style={{
                        width: `${item.progress}%`,
                      }}
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-xs font-medium text-slate-500">
                      {item.footer}
                    </p>

                    <span className="text-xs font-bold text-[#155A96]">
                      {item.progress}%
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        
        <section className="mt-14">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-wider text-[#155A96]">
              Student Development
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#06264A]">
              Explore Features
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Tools designed to help you move from university
              learning to practical career preparation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {exploreFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to={item.to}
                  className="group flex min-h-[230px] flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#155A96] transition group-hover:bg-[#155A96] group-hover:text-white">
                      <Icon
                        size={23}
                        strokeWidth={1.7}
                      />
                    </div>

                    <span className="text-xs font-bold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-7">
                    <h3 className="text-xl font-bold text-[#06264A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-[#155A96]">
                    {item.label}

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

       
        <section className="mt-14 grid gap-5 lg:grid-cols-[1fr_360px]">
          <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-[#155A96]">
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
                  Explore your programme, understand the careers
                  connected to it, identify the skills employers
                  value and start building practical experience.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
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

              <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
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

              <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
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
          <div className="relative overflow-hidden rounded-xl bg-[#06264A] p-7 shadow-sm md:p-8">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl" />

            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-blue-100">
                <MessageCircle size={21} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                Need some direction?
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Ask UNI about programmes, careers, skills and
                opportunities based on your interests.
              </p>

              <Link
                to="/chat"
                className="group mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#06264A] transition hover:bg-blue-50"
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

      
        <section className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-green-100 bg-green-50 text-green-700">
                <CheckCircle2 size={21} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#06264A]">
                  You're on the right path.
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Keep learning, exploring and building practical
                  experience. Your next step does not need to be
                  perfect — it just needs to move you forward.
                </p>
              </div>
            </div>

            <Link
              to="/Classifications"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-[#155A96] px-5 py-3 text-sm font-semibold text-[#155A96] transition hover:bg-blue-50"
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

