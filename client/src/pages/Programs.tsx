
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  Clock,
  GraduationCap,
  BookOpen,
  X,
  MessageCircle,
  Sparkles,
  BriefcaseBusiness,
  CheckCircle2,
  Layers3,
} from "lucide-react";

type Module = {
  code: string;
  name: string;
};

type Program = {
  id: string;
  name: string;
  shortName: string;
  department: string;
  duration: string;
  level: string;
  description: string;
  overview: string;
  careers: string[];
  skills: string[];
  modules: Module[];
  icon: string;
};

const programs: Program[] = [
  {
    id: "computer-science",
    name: "Bachelor of Science in Computer Science",
    shortName: "BSc Computer Science",
    department: "School of Computing",
    duration: "4 Years",
    level: "Bachelor's Degree",

    description:
      "Build practical skills in software, computer systems, programming, networking, databases and modern computing technologies.",

    overview:
      "Computer Science prepares students to understand how computing systems work and how software and technology can be used to solve real-world problems. The programme combines programming, algorithms, databases, computer systems, networking and emerging technologies.",

    careers: [
      "Software Developer",
      "Systems Analyst",
      "Network Administrator",
      "Database Administrator",
      "IT Support Specialist",
      "Cybersecurity Specialist",
      "Systems Developer",
      "Technology Consultant",
    ],

    skills: [
      "Programming and software development",
      "Problem solving and algorithm design",
      "Database development",
      "Computer networking",
      "System analysis and design",
      "Computer hardware and troubleshooting",
      "Research and technology innovation",
    ],

    modules: [
      { code: "CS", name: "Fundamentals of Computer" },
      {
        code: "CS",
        name: "Fundamentals of Information Technology",
      },
      {
        code: "CS",
        name: "Introduction to Programming Using C",
      },
      {
        code: "CS",
        name: "Object Oriented Programming Using C++",
      },
      { code: "CS", name: "Data Structures and Algorithms" },
      {
        code: "CS",
        name: "PC Hardware and Troubleshooting",
      },
      {
        code: "CS",
        name: "Microprocessor and Its Applications",
      },
      { code: "CS", name: "Computer Networks" },
      { code: "CS", name: "Database Management" },
      { code: "CS", name: "Software Engineering" },
      { code: "CS", name: "Distributed Computing" },
      { code: "CS", name: "Mobile Computing" },
      { code: "CS", name: "Wireless Communication" },
      { code: "CS", name: "Research Methodology" },
      { code: "CS", name: "Final Year Project" },
    ],

    icon: "💻",
  },

  {
    id: "business-administration",
    name: "Bachelor of Business Administration",
    shortName: "BBA",
    department: "School of Business",
    duration: "4 Years",
    level: "Bachelor's Degree",

    description:
      "Develop business knowledge, leadership and entrepreneurial skills needed to understand organisations and create opportunities.",

    overview:
      "Business Administration provides a broad understanding of how organisations operate. Students explore management, marketing, entrepreneurship, accounting, operations and organisational leadership while developing practical business decision-making skills.",

    careers: [
      "Business Administrator",
      "Marketing Officer",
      "Human Resource Officer",
      "Entrepreneur",
      "Business Analyst",
      "Operations Officer",
      "Sales Executive",
      "Project Coordinator",
    ],

    skills: [
      "Business communication",
      "Leadership and management",
      "Marketing",
      "Entrepreneurship",
      "Business planning",
      "Financial awareness",
      "Project coordination",
    ],

    modules: [
      { code: "BA", name: "Principles of Management" },
      { code: "BA", name: "Business Communication" },
      { code: "BA", name: "Principles of Marketing" },
      { code: "BA", name: "Financial Management" },
      { code: "BA", name: "Human Resource Management" },
      { code: "BA", name: "Entrepreneurship" },
      { code: "BA", name: "Business Economics" },
      { code: "BA", name: "Operations Management" },
      { code: "BA", name: "Project Management" },
      { code: "BA", name: "Management Accounting" },
      { code: "BA", name: "Marketing Management" },
      { code: "BA", name: "Business Research Methods" },
      { code: "BA", name: "Strategic Management" },
      { code: "BA", name: "Business Ethics" },
      { code: "BA", name: "Final Year Project" },
    ],

    icon: "📊",
  },

  {
    id: "information-technology",
    name: "Bachelor of Information Technology",
    shortName: "BIT",
    department: "School of Computing",
    duration: "4 Years",
    level: "Bachelor's Degree",

    description:
      "Learn how technology is used to solve organisational problems through information systems, networking, databases, web technologies and IT infrastructure.",

    overview:
      "Information Technology focuses on the practical application and management of technology within organisations. Students learn how to support computer infrastructure, develop information systems, manage networks and use technology to improve organisational operations.",

    careers: [
      "IT Officer",
      "Systems Administrator",
      "IT Support Specialist",
      "Network Administrator",
      "Web Developer",
      "Information Systems Officer",
      "Database Administrator",
      "IT Consultant",
    ],

    skills: [
      "IT infrastructure management",
      "Networking",
      "Web development",
      "Database management",
      "System administration",
      "Technical support",
      "Information systems analysis",
    ],

    modules: [
      {
        code: "IT",
        name: "Fundamentals of Information Technology",
      },
      { code: "IT", name: "Computer Fundamentals" },
      { code: "IT", name: "Programming Fundamentals" },
      { code: "IT", name: "Object Oriented Programming" },
      { code: "IT", name: "Computer Networks" },
      { code: "IT", name: "Database Management Systems" },
      { code: "IT", name: "Web Technologies" },
      { code: "IT", name: "Systems Analysis and Design" },
      { code: "IT", name: "PC Hardware and Troubleshooting" },
      { code: "IT", name: "Operating Systems" },
      { code: "IT", name: "Information Systems" },
      { code: "IT", name: "Cloud Computing" },
      { code: "IT", name: "Cybersecurity Fundamentals" },
      { code: "IT", name: "Research Methodology" },
      { code: "IT", name: "Final Year Project" },
    ],

    icon: "🌐",
  },

  {
    id: "business-management",
    name: "Bachelor of Business Management",
    shortName: "BBM",
    department: "School of Business",
    duration: "4 Years",
    level: "Bachelor's Degree",

    description:
      "Prepare for the world of business with knowledge in management, leadership, operations and organisational development.",

    overview:
      "Business Management develops students' ability to understand organisations, manage people and resources, coordinate operations and make informed business decisions.",

    careers: [
      "Business Manager",
      "Operations Manager",
      "Project Coordinator",
      "Sales Officer",
      "Business Consultant",
      "Entrepreneur",
      "Management Officer",
      "Business Development Officer",
    ],

    skills: [
      "Leadership",
      "Business planning",
      "Operations management",
      "Team management",
      "Entrepreneurship",
      "Project management",
      "Business communication",
    ],

    modules: [
      { code: "MG", name: "Principles of Management" },
      { code: "MG", name: "Business Communication" },
      { code: "MG", name: "Marketing Management" },
      { code: "MG", name: "Human Resource Management" },
      {
        code: "MG",
        name: "Production and Operations Management",
      },
      { code: "MG", name: "Project Management" },
      {
        code: "MG",
        name: "Entrepreneurship and Small Scale Business",
      },
      { code: "MG", name: "Strategic Management" },
      { code: "MG", name: "Business Economics" },
      { code: "MG", name: "Management Accounting" },
      { code: "MG", name: "Financial Management" },
      { code: "MG", name: "Business Research Methods" },
      { code: "MG", name: "Organisational Behaviour" },
      { code: "MG", name: "Business Ethics" },
      { code: "MG", name: "Final Year Project" },
    ],

    icon: "📈",
  },

  {
    id: "education",
    name: "Bachelor of Education",
    shortName: "BEd",
    department: "School of Education",
    duration: "4 Years",
    level: "Bachelor's Degree",

    description:
      "Develop the knowledge and professional skills needed to inspire learners, support education and contribute meaningfully to society.",

    overview:
      "The Bachelor of Education prepares students for professional roles in teaching, education management and learning support. The programme combines educational theory, teaching practice, curriculum studies and professional development.",

    careers: [
      "Teacher",
      "Education Officer",
      "School Administrator",
      "Curriculum Developer",
      "Education Consultant",
      "Training Officer",
      "Academic Coordinator",
      "Education Programme Officer",
    ],

    skills: [
      "Teaching and learning",
      "Classroom management",
      "Curriculum development",
      "Educational assessment",
      "Communication",
      "Educational leadership",
      "Research and academic writing",
    ],

    modules: [
      { code: "EDU", name: "Foundations of Education" },
      { code: "EDU", name: "Educational Psychology" },
      { code: "EDU", name: "Curriculum Studies" },
      { code: "EDU", name: "Teaching Methods" },
      { code: "EDU", name: "Educational Assessment" },
      { code: "EDU", name: "Classroom Management" },
      { code: "EDU", name: "Educational Technology" },
      { code: "EDU", name: "Guidance and Counselling" },
      { code: "EDU", name: "Educational Administration" },
      { code: "EDU", name: "Research Methodology" },
      { code: "EDU", name: "Inclusive Education" },
      { code: "EDU", name: "Teaching Practice" },
      { code: "EDU", name: "Educational Leadership" },
      { code: "EDU", name: "Final Year Project" },
    ],

    icon: "🎓",
  },

  {
    id: "public-administration",
    name: "Bachelor of Public Administration",
    shortName: "BPA",
    department: "School of Social Sciences",
    duration: "4 Years",
    level: "Bachelor's Degree",

    description:
      "Gain an understanding of public service, administration, governance and policy while preparing for meaningful roles in public and community organisations.",

    overview:
      "Public Administration focuses on how public institutions and organisations are managed. Students explore governance, public policy, administration, development and organisational management.",

    careers: [
      "Administrative Officer",
      "Public Service Officer",
      "Policy Officer",
      "Project Officer",
      "Government Administrator",
      "Community Development Officer",
      "Programme Officer",
      "Development Officer",
    ],

    skills: [
      "Public sector management",
      "Policy analysis",
      "Administration",
      "Research",
      "Project coordination",
      "Community development",
      "Professional communication",
    ],

    modules: [
      {
        code: "PA",
        name: "Introduction to Public Administration",
      },
      { code: "PA", name: "Principles of Management" },
      { code: "PA", name: "Public Policy" },
      { code: "PA", name: "Public Finance" },
      { code: "PA", name: "Human Resource Management" },
      { code: "PA", name: "Local Government Administration" },
      { code: "PA", name: "Public Sector Management" },
      { code: "PA", name: "Development Administration" },
      { code: "PA", name: "Project Management" },
      { code: "PA", name: "Research Methodology" },
      { code: "PA", name: "Governance and Ethics" },
      { code: "PA", name: "Community Development" },
      { code: "PA", name: "Public Policy Analysis" },
      { code: "PA", name: "Organisational Behaviour" },
      { code: "PA", name: "Final Year Project" },
    ],

    icon: "🏛️",
  },
];

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] =
    useState("All");
  const [selectedProgram, setSelectedProgram] =
    useState<Program | null>(null);

  const departments = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(programs.map((program) => program.department))
      ),
    ],
    []
  );

  const filteredPrograms = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return programs.filter((program) => {
      const matchesSearch =
        search === "" ||
        program.name.toLowerCase().includes(search) ||
        program.shortName.toLowerCase().includes(search) ||
        program.description.toLowerCase().includes(search) ||
        program.overview.toLowerCase().includes(search) ||
        program.careers.some((career) =>
          career.toLowerCase().includes(search)
        ) ||
        program.skills.some((skill) =>
          skill.toLowerCase().includes(search)
        ) ||
        program.modules.some((module) =>
          module.name.toLowerCase().includes(search)
        );

      const matchesDepartment =
        selectedDepartment === "All" ||
        program.department === selectedDepartment;

      return matchesSearch && matchesDepartment;
    });
  }, [searchTerm, selectedDepartment]);

  return (
    <div className="min-h-screen w-full bg-white">
      {/* =====================================================
          BLUE HERO
          Matches the About Us page structure
      ====================================================== */}
      <section className="relative w-full overflow-hidden bg-[#031b3a]">
        {/* Background atmosphere */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-48 -left-40 h-[520px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-sm font-semibold text-blue-200">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <GraduationCap size={17} />
              </span>

              <span>DMI St. Eugene University</span>
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[4.3rem]">
              Your future starts
              <span className="mt-2 block text-blue-300">
                with the right choice.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
              Explore programmes, discover what you could study,
              understand the skills you can develop and see where
              each path could take you.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/chat"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-[#003366] shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                <MessageCircle size={18} />
                Ask UNI
                <ArrowRight size={17} />
              </Link>

              <span className="flex items-center gap-2 text-sm text-blue-200">
                <Sparkles size={16} />
                Need help choosing? Just ask.
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-7 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-300" />
                Programme guidance
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-300" />
                Career exploration
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-300" />
                Student support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH / FILTER
      ====================================================== */}
      <section className="relative z-10 mx-auto -mt-7 w-full max-w-5xl px-5 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/50">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search a programme, career, skill or module..."
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-50"
              />
            </div>

            <select
              value={selectedDepartment}
              onChange={(e) =>
                setSelectedDepartment(e.target.value)
              }
              className="h-11 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-600 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-50 sm:w-56"
            >
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department === "All"
                    ? "All Departments"
                    : department}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROGRAMMES
      ====================================================== */}
      <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-blue-600" />

              <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Explore Programmes
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Find something that feels right.
            </h2>

            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">
              Go beyond the programme name. Explore modules,
              skills, career possibilities and what you can expect
              from each academic path.
            </p>
          </div>

          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-500">
            {filteredPrograms.length}{" "}
            {filteredPrograms.length === 1
              ? "programme"
              : "programmes"}
          </div>
        </div>

        {filteredPrograms.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((program) => (
              <article
                key={program.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                {/* Card Header */}
                <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm ring-1 ring-slate-100">
                      {program.icon}
                    </div>

                    <span className="rounded-full bg-blue-100/80 px-3 py-1.5 text-xs font-bold text-blue-700">
                      {program.shortName}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-wide text-blue-600">
                    {program.department}
                  </p>

                  <h3 className="mt-2 min-h-[60px] text-xl font-bold leading-7 text-slate-900">
                    {program.name}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Clock
                        size={15}
                        className="text-blue-600"
                      />
                      {program.duration}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <BookOpen
                        size={15}
                        className="text-blue-600"
                      />
                      {program.level}
                    </span>
                  </div>

                  <p className="line-clamp-4 text-sm leading-6 text-slate-600">
                    {program.description}
                  </p>

                  <div className="mt-5 rounded-xl bg-slate-50 p-4">
                    <div className="flex items-center gap-2">
                      <Layers3
                        size={16}
                        className="text-blue-600"
                      />

                      <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                        What you'll study
                      </span>
                    </div>

                    <p className="mt-2 text-sm font-medium text-slate-700">
                      {program.modules.length} curriculum-informed
                      modules
                    </p>
                  </div>

                  <div className="mt-auto pt-7">
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedProgram(program)
                        }
                        className="group/button flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                      >
                        Explore Programme

                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover/button:translate-x-1"
                        />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedProgram(program)
                        }
                        className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        Quick View
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
              <Search size={24} className="text-slate-400" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              We couldn't find that programme
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Try another search or browse all of our available
              programmes.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedDepartment("All");
              }}
              className="mt-5 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Show All Programmes
            </button>
          </div>
        )}
      </main>

      {/* =====================================================
          MARKETING CTA
      ====================================================== */}
      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 to-indigo-900">
          <div className="relative px-7 py-12 md:px-12 md:py-14">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-400/10 blur-2xl" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 flex items-center gap-2 text-blue-300">
                  <Sparkles size={18} />

                  <span className="text-sm font-semibold">
                    UNI Life Guide
                  </span>
                </div>

                <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                  Still wondering what to study?
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100 md:text-base">
                  You don't have to figure everything out alone.
                  Chat with UNI Life Guide and get help exploring
                  programmes, careers and your next step.
                </p>
              </div>

              <Link
                to="/chat"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                <MessageCircle size={18} />
                Chat with UNI
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DETAILED PROGRAMME MODAL
      ====================================================== */}
      {selectedProgram && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:p-5"
          onClick={() => setSelectedProgram(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="programme-modal-title"
        >
          <div
            className="max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 p-7 text-white md:p-9">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

              <div className="relative flex items-start justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-lg">
                    {selectedProgram.icon}
                  </div>

                  <p className="text-sm font-semibold text-blue-200">
                    {selectedProgram.department}
                  </p>

                  <h2
                    id="programme-modal-title"
                    className="mt-2 text-2xl font-bold leading-tight md:text-4xl"
                  >
                    {selectedProgram.name}
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 md:text-base">
                    {selectedProgram.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  className="shrink-0 rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"
                  aria-label="Close programme details"
                >
                  <X size={21} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-9">
              {/* Programme Summary */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock size={17} />

                    <span className="text-xs font-bold uppercase tracking-wide">
                      Duration
                    </span>
                  </div>

                  <p className="mt-2 text-lg font-bold text-slate-900">
                    {selectedProgram.duration}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-2 text-slate-400">
                    <GraduationCap size={17} />

                    <span className="text-xs font-bold uppercase tracking-wide">
                      Qualification
                    </span>
                  </div>

                  <p className="mt-2 text-lg font-bold text-slate-900">
                    {selectedProgram.level}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-2 text-slate-400">
                    <BookOpen size={17} />

                    <span className="text-xs font-bold uppercase tracking-wide">
                      Programme
                    </span>
                  </div>

                  <p className="mt-2 text-lg font-bold text-slate-900">
                    {selectedProgram.shortName}
                  </p>
                </div>
              </div>

              {/* About */}
              <div className="mt-10">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1 w-7 rounded-full bg-blue-600" />

                  <h3 className="text-xl font-bold text-slate-900">
                    About the Programme
                  </h3>
                </div>

                <p className="max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
                  {selectedProgram.overview}
                </p>
              </div>

              {/* Modules */}
              <div className="mt-10">
                <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                  <div>
                    <div className="flex items-center gap-2">
                      <Layers3
                        size={19}
                        className="text-blue-600"
                      />

                      <h3 className="text-xl font-bold text-slate-900">
                        What You Will Study
                      </h3>
                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                      Key curriculum-informed modules associated
                      with this programme.
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                    {selectedProgram.modules.length} modules
                  </span>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {selectedProgram.modules.map((module, index) => (
                    <div
                      key={`${module.name}-${index}`}
                      className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:bg-blue-50/50"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-700 transition group-hover:bg-blue-100">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {module.name}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-400">
                          {module.code}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-amber-100 bg-amber-50 p-4">
                  <p className="text-xs leading-5 text-amber-800">
                    <strong>Note:</strong> Module names shown here
                    are curriculum-informed for the UNI Life Guide
                    demo. Students should confirm the latest
                    official programme structure, semester allocation
                    and admission requirements with DMI St. Eugene
                    University.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-10">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={19}
                    className="text-blue-600"
                  />

                  <h3 className="text-xl font-bold text-slate-900">
                    Skills You Can Develop
                  </h3>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {selectedProgram.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-blue-600"
                      />

                      <span className="text-sm leading-6 text-slate-700">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Careers */}
              <div className="mt-10">
                <div className="flex items-center gap-2">
                  <BriefcaseBusiness
                    size={19}
                    className="text-blue-600"
                  />

                  <h3 className="text-xl font-bold text-slate-900">
                    Where Could It Take You?
                  </h3>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {selectedProgram.careers.map((career) => (
                    <div
                      key={career}
                      className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />

                        <span className="text-sm font-semibold text-slate-700">
                          {career}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-5 md:p-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Still not sure if this is for you?
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Ask UNI Life Guide about this programme,
                      careers and whether it matches your interests.
                    </p>
                  </div>

                  <Link
                    to="/chat"
                    onClick={() => setSelectedProgram(null)}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                  >
                    <MessageCircle size={17} />
                    Ask UNI
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Close */}
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  Close Programme
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Programs;

