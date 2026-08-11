import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const careers = [
  {
    title: "Business Administration",
    category: "Business & Management",
    skills: ["Project Management", "Finance", "HR"],
    link: "https://jobsearchzm.com/",
    nextSkill: "Excel & Business Budgeting",
    icon: BriefcaseBusiness,
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Social Work",
    category: "Community & Development",
    skills: ["Community Development", "Counseling", "NGO Management"],
    link: "https://www.greatzambiajobs.com/job-categories/junior-job-fresh-graduate-entry-level-jobs-in-zambia-62",
    nextSkill: "Case Management",
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Health & Public Health",
    category: "Healthcare",
    skills: ["Public Health", "Clinical Practice", "Health Education"],
    link: "https://jobwebzambia.com/",
    nextSkill: "DHIS2 Data Analysis",
    icon: HeartPulse,
    gradient: "from-rose-500 to-orange-500",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    title: "IT & Digital Careers",
    category: "Technology",
    skills: ["Design Thinking", "Digital Skills", "Problem Solving"],
    link: "https://www.zambiajob.com/",
    nextSkill: "Accessibility & WCAG",
    icon: Lightbulb,
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Graduate & Entry-Level Jobs",
    category: "Students & Graduates",
    skills: ["Internships", "Graduate Programs", "Volunteering"],
    link: "https://www.greatzambiajobs.com/job-categories/junior-job-fresh-graduate-entry-level-jobs-in-zambia-62",
    nextSkill: "Workplace Communication",
    icon: GraduationCap,
    gradient: "from-indigo-500 to-violet-500",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    title: "Student-Focused Jobs",
    category: "Student Support",
    skills: ["Administration", "Support Services", "Coordination"],
    link: "https://jobsinzambia.alljobspo.com/Student-jobs-in-zambia",
    nextSkill: "Student Engagement",
    icon: Target,
    gradient: "from-amber-500 to-yellow-500",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

const CareerGuidance = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold text-blue-600 shadow-sm">
            <Sparkles className="h-4 w-4" />
            CAREER GUIDANCE
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Find Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Career Direction
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Explore career paths, discover the skills employers need,
            and take your next step with confidence.
          </p>
        </div>

        {/* Section title */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Explore Paths
            </p>

            <h3 className="mt-1 text-xl font-bold text-slate-900">
              Opportunities for you
            </h3>
          </div>

          <span className="hidden text-sm text-slate-400 sm:block">
            {careers.length} career paths
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {careers.map((career) => {
            const Icon = career.icon;

            return (
              <a
                key={career.title}
                href={career.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Top gradient line */}
                <div
                  className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${career.gradient}`}
                />

                {/* Top row */}
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${career.iconBg}`}
                  >
                    <Icon
                      className={`h-5 w-5 ${career.iconColor}`}
                      strokeWidth={2}
                    />
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition-all group-hover:bg-blue-50">
                    <ArrowUpRight className="h-4 w-4 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" />
                  </div>
                </div>

                {/* Category */}
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {career.category}
                </p>

                {/* Title */}
                <h3 className="mb-4 text-lg font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
                  {career.title}
                </h3>

                {/* Skills */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-1.5">
                    {career.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Next Skill */}
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-3 transition-colors group-hover:bg-blue-50/70">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Next skill
                    </p>

                    <p className="truncate text-xs font-semibold text-slate-700">
                      {career.nextSkill}
                    </p>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 transition-colors group-hover:text-blue-600">
                    Explore opportunities
                  </span>

                  <span className="text-[10px] text-slate-400">
                    Visit →
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Small bottom message */}
        <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
          <Target className="h-4 w-4" />
          <span>
            Explore a path, build your skills, and keep moving forward.
          </span>
        </div>
      </div>
    </section>
  );
};

export default CareerGuidance;