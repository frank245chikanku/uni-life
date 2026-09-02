import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
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
  "Stay curious. Every skill you develop can create new opportunities.",
  "Consistency makes progress easier to maintain.",
  "Take time to understand where your studies can lead you.",
  "Build skills that you can apply beyond the classroom.",
  "Good opportunities often start with good connections.",
  "Look for practical ways to apply what you learn.",
];

const Dashboard = () => {
  const user = useRecoilValue(userDetailsAtom);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setQuoteIndex((current) => (current + 1) % quotes.length);
    }, 5000);

    return () => window.clearInterval(interval);
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

  const firstName = user?.username?.trim().split(/\s+/)[0] || "Student";

  const quickStarts = [
    {
      title: "Career Guidance",
      value: "Career & Skills",
      description:
        skills.length >= 5
          ? "Good progress"
          : "Continue building your skills",
      icon: BriefcaseBusiness,
      to: "/career-guidance-and-skill-tracking",
    },
    {
      title: "Learning Resources",
      value: `${assessments} Assessments`,
      description:
        assessments > 0 ? "Continue learning" : "Start learning today",
      icon: BookOpen,
      to: "/skill-assessments-and-learning-resources",
    },
    {
      title: "Community Engagement",
      value: `${projects} Active Project`,
      description:
        projects > 0 ? "Keep making progress" : "Start a project",
      icon: Handshake,
      to: "/ethical-decision-making-and-community-engagement",
    },
    {
      title: "Internships",
      value:
        internships > 0
          ? `${internships} Opportunities`
          : "Explore Opportunities",
      description:
        internships > 0
          ? "Keep looking for opportunities"
          : "Find practical experience",
      icon: Target,
      to: "/internships-and-industrial-programs",
    },
  ];

  const exploreFeatures = [
    {
      title: "Career Guidance",
      description:
        "Explore career paths and identify the skills needed for the roles you are interested in.",
      icon: BriefcaseBusiness,
      to: "/career-guidance-and-skill-tracking",
      label: "Explore careers",
    },
    {
      title: "Learning Resources",
      description:
        "Access assessments, learning materials and practical resources to support your studies.",
      icon: BookOpen,
      to: "/skill-assessments-and-learning-resources",
      label: "Start learning",
    },
    {
      title: "Community Engagement",
      description:
        "Develop responsible decision-making skills and find ways to contribute to your community.",
      icon: Users,
      to: "/ethical-decision-making-and-community-engagement",
      label: "Get involved",
    },
    {
      title: "Internships",
      description:
        "Explore practical opportunities that can help you gain experience before entering employment.",
      icon: GraduationCap,
      to: "/internships-and-industrial-programs",
      label: "Find opportunities",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {/* Hero */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[1.6fr_0.8fr]">
            <div
              className="relative min-h-[420px] bg-cover bg-center"
              style={{ backgroundImage: `url(${dashboardBg})` }}
            >
              <div className="absolute inset-0 bg-[#06264A]/85" />

              <div className="relative z-10 flex min-h-[420px] flex-col justify-between p-7 sm:p-10 lg:p-12">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white">
                      <GraduationCap size={21} strokeWidth={1.8} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        UNI Life Guide
                      </p>
                      <p className="text-xs text-blue-200">
                        Student Dashboard
                      </p>
                    </div>
                  </div>

                  <div className="mt-14 max-w-2xl">
                    <p className="text-sm font-medium text-blue-200">
                      {greeting}
                    </p>

                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                      {firstName}
                    </h1>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
                      Manage your academic and career development from one
                      place. Explore programmes, build useful skills and find
                      opportunities that support your goals.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/Classifications"
                      className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#06264A] transition hover:bg-blue-50"
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
                      className="group inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
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

                <div className="mt-10 border-t border-white/15 pt-5">
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-blue-300">
                        Explore
                      </p>
                      <p className="mt-1 text-xs text-blue-100">
                        Programmes & Careers
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-blue-300">
                        Develop
                      </p>
                      <p className="mt-1 text-xs text-blue-100">
                        Skills & Knowledge
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-blue-300">
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

            {/* Daily tip */}
            <div className="flex flex-col justify-between bg-white p-7 sm:p-8 lg:p-9">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#155A96]">
                    <Lightbulb size={19} />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wide text-[#155A96]">
                    Daily Tip
                  </span>
                </div>

                <p className="mt-7 text-xl font-semibold leading-8 text-[#06264A]">
                  {quotes[quoteIndex]}
                </p>
              </div>

              <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#155A96]">
                  Student Guide
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Use the sections on your dashboard to plan your studies,
                  develop your skills and prepare for opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="mt-12">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#155A96]">
                Overview
              </p>

              <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#06264A]">
                Quick Start
              </h2>
            </div>

            <p className="text-sm text-slate-500">
              Access the areas you use most.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickStarts.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to={item.to}
                  className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-[#155A96]">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition group-hover:bg-blue-50">
                      <ArrowUpRight
                        size={15}
                        className="text-slate-400 transition group-hover:text-[#155A96]"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {item.title}
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-[#06264A]">
                      {item.value}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-1 border-t border-slate-100 pt-4 text-sm font-medium text-[#155A96]">
                    Open section
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Explore Features */}
        <section className="mt-14">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#155A96]">
              Student Services
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#06264A]">
              Explore Features
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Use these tools to support your studies, career planning and
              preparation for employment.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {exploreFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to={item.to}
                  className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-[#155A96]">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-slate-300 transition group-hover:text-[#155A96]"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#06264A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-1 border-t border-slate-100 pt-5 text-sm font-semibold text-[#155A96]">
                    {item.label}
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Next Step */}
        <section className="mt-14 grid gap-5 lg:grid-cols-[1fr_360px]">
          <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#155A96]">
                <TrendingUp size={21} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#155A96]">
                  Next Step
                </p>

                <h3 className="mt-1 text-xl font-bold text-[#06264A]">
                  Plan your career direction
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                  Start with your programme, explore related career options,
                  identify useful skills and look for ways to gain practical
                  experience.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-100 hover:bg-blue-50">
                <Search size={18} className="text-[#155A96]" />

                <p className="mt-3 text-sm font-semibold text-[#06264A]">
                  Explore
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Review programmes and possible career paths.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-100 hover:bg-blue-50">
                <Target size={18} className="text-[#155A96]" />

                <p className="mt-3 text-sm font-semibold text-[#06264A]">
                  Develop
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Improve your skills through learning and practice.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-100 hover:bg-blue-50">
                <BriefcaseBusiness
                  size={18}
                  className="text-[#155A96]"
                />

                <p className="mt-3 text-sm font-semibold text-[#06264A]">
                  Prepare
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Look for opportunities to gain experience.
                </p>
              </div>
            </div>
          </div>

          {/* Ask UNI */}
          <div className="rounded-xl bg-[#06264A] p-7 shadow-sm md:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-blue-100">
              <MessageCircle size={21} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              Have a question?
            </h3>

            <p className="mt-3 text-sm leading-6 text-blue-100">
              Ask UNI about programmes, careers, skills and opportunities.
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
        </section>

        {/* Footer Message */}
        <section className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-700">
                <CheckCircle2 size={21} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#06264A]">
                  Keep moving forward
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Continue exploring your options, developing useful skills
                  and gaining practical experience.
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

        <div className="mt-8 flex items-center justify-center gap-2 pb-6 text-xs text-slate-400">
          <Clock3 size={13} />
          UNI Life Guide · Student Dashboard
        </div>
      </main>
    </div>
  );
};

export default Dashboard;