
import {
  ArrowUpRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ExternalLink,
  FileText,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Microscope,
  Sparkles,
} from "lucide-react";

const learningResources: {
  title: string;
  category: string;
  topics: string[];
  link: string;
  benefit: string;
  nextStep: string;
  icon: React.ElementType;
  gradient: string;
  iconBg: string;
  iconColor: string;
}[] = [
  {
    title: "Business & Social Work Courses",
    category: "Business & Community",
    topics: ["Leadership", "Project Management", "Community Development"],
    link:
      "https://www.coursera.org/courses?query=business%20administration%20social%20work",
    benefit: "Upskill with courses from leading universities.",
    nextStep: "Choose one course and start learning.",
    icon: GraduationCap,
    gradient: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Engineering & Computer Science",
    category: "Technology & Engineering",
    topics: ["Electrical Engineering", "Algorithms", "Programming"],
    link: "https://ocw.mit.edu/",
    benefit: "Access MIT's world-class course materials for free.",
    nextStep: "Pick one subject and follow it weekly.",
    icon: Brain,
    gradient: "from-violet-500 to-purple-400",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    title: "eBooks & Academic Articles",
    category: "Books & Research",
    topics: ["Academic Textbooks", "eBooks", "Research Papers"],
    link: "https://www.pdfdrive.com/",
    benefit: "Explore academic reading and research resources.",
    nextStep: "Find one useful book for your studies.",
    icon: BookOpen,
    gradient: "from-emerald-500 to-teal-400",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Research Platforms",
    category: "Academic Research",
    topics: ["ResearchGate", "ERIC", "JSTOR"],
    link: "https://www.researchgate.net/",
    benefit: "Discover academic research and scholarly communities.",
    nextStep: "Find three papers related to your field.",
    icon: FileText,
    gradient: "from-orange-500 to-amber-400",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    title: "Health Sciences Research",
    category: "Health & Public Health",
    topics: ["Nursing", "Nutrition", "Public Health"],
    link: "https://www.ncbi.nlm.nih.gov/pmc/",
    benefit: "Explore global health publications and research.",
    nextStep: "Read one article and summarize it.",
    icon: HeartPulse,
    gradient: "from-rose-500 to-pink-400",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    title: "Infosys Springboard",
    category: "Digital & Career Skills",
    topics: ["Digital Skills", "Technology", "AI"],
    link:
      "https://infyspringboard.us.onwingspan.com/web/en/page/home",
    benefit: "Build digital and professional skills for free.",
    nextStep: "Choose a learning path and start.",
    icon: Lightbulb,
    gradient: "from-indigo-500 to-blue-500",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
];

function LearningResources() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] px-4 py-12 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <header className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold text-blue-600 shadow-sm">
            <Sparkles className="h-4 w-4" />
            LEARNING HUB
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Learn. Build.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Grow.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Access credible learning resources to strengthen your academic,
            technical and professional skills.
          </p>
        </header>

        {/* =====================================================
            SECTION TITLE
        ===================================================== */}
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#155A96]">
              Explore Resources
            </p>

            <h3 className="mt-1 text-xl font-bold text-[#06264A]">
              Resources for your journey
            </h3>
          </div>

          <span className="hidden text-sm text-slate-400 sm:block">
            {learningResources.length} resources
          </span>
        </div>

        {/* =====================================================
            RESOURCE CARDS
            Same compact sizing as Career Guidance
        ===================================================== */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learningResources.map((resource, index) => {
            const Icon = resource.icon;

            return (
              <a
                key={resource.title}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl"
              >
                {/* Gradient top line */}
                <div
                  className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${resource.gradient}`}
                />

                {/* Header */}
                <div className="relative flex items-start justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${resource.iconBg} ${resource.iconColor} transition-all duration-300 group-hover:scale-105`}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-widest text-slate-300">
                      0{index + 1}
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition-all group-hover:bg-blue-50">
                      <ArrowUpRight
                        size={15}
                        className="text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Category + title */}
                <div className="relative mt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    {resource.category}
                  </p>

                  <h3 className="mt-1 text-lg font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
                    {resource.title}
                  </h3>
                </div>

                {/* Topics */}
                <div className="relative mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {resource.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefit */}
                <div className="relative mt-4">
                  <div className="flex gap-2.5">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                      <CheckCircle2
                        size={14}
                        className="text-emerald-600"
                      />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Why use it
                      </p>

                      <p className="mt-0.5 text-xs leading-5 text-slate-500">
                        {resource.benefit}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Next step */}
                <div className="relative mt-4 rounded-xl bg-slate-50 px-3 py-2.5 transition-colors group-hover:bg-blue-50/70">
                  <div className="flex items-center gap-2">
                    <Lightbulb
                      size={13}
                      className="shrink-0 text-amber-500"
                    />

                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Next step
                    </p>
                  </div>

                  <p className="mt-1 text-xs font-semibold leading-5 text-slate-700">
                    {resource.nextStep}
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="relative mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs font-semibold text-slate-500 transition-colors group-hover:text-blue-600">
                    Open resource
                  </span>

                  <span className="flex items-center gap-1 text-[10px] text-slate-400">
                    <ExternalLink size={11} />
                    Visit site
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
          <Microscope size={13} />
          Choose one resource, keep learning and apply what you discover.
        </div>
      </div>
    </section>
  );
}

export default LearningResources;

