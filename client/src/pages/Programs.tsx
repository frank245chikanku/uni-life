import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  Clock3,
  GraduationCap,
  BookOpen,
  X,
  MessageCircle,
  BriefcaseBusiness,
  CheckCircle2,
  Layers3,
  Code2,
  HeartHandshake,
  BarChart3,
  Landmark,
  Users,
  ChevronRight,
  Apple,
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
  },
  {
    id: "social-work",
    name: "Bachelor of Social Work",
    shortName: "BSW",
    department: "School of Social Sciences",
    duration: "4 Years",
    level: "Bachelor's Degree",
    description:
      "Develop professional knowledge and practical skills for supporting individuals, families and communities while contributing to social development.",
    overview:
      "Social Work prepares students to understand social challenges and support individuals, families and communities through professional social work practice. The programme develops knowledge in human behaviour, community development, social policy, counselling, research and social welfare.",
    careers: [
      "Social Worker",
      "Community Development Officer",
      "Child Protection Officer",
      "Case Management Officer",
      "Social Welfare Officer",
      "Community Outreach Officer",
      "Family Support Officer",
      "NGO Programme Officer",
    ],
    skills: [
      "Case management",
      "Community development",
      "Counselling and interpersonal communication",
      "Social research",
      "Community outreach",
      "Advocacy and social support",
      "Professional social work practice",
    ],
    modules: [
      { code: "SW", name: "Introduction to Social Work" },
      { code: "SW", name: "Human Behaviour and Social Environment" },
      { code: "SW", name: "Social Work Practice" },
      { code: "SW", name: "Social Welfare Policy" },
      { code: "SW", name: "Community Development" },
      { code: "SW", name: "Social Work with Individuals and Families" },
      { code: "SW", name: "Social Work with Groups" },
      { code: "SW", name: "Child Welfare and Protection" },
      { code: "SW", name: "Counselling Skills" },
      { code: "SW", name: "Social Research Methods" },
      { code: "SW", name: "Human Rights and Social Justice" },
      { code: "SW", name: "Community Health and Social Care" },
      { code: "SW", name: "Social Work Administration" },
      { code: "SW", name: "Fieldwork Practice" },
      { code: "SW", name: "Final Year Project" },
    ],
  },
  {
    id: "food-and-nutrition",
    name: "Bachelor of Food and Nutrition",
    shortName: "BSc Food & Nutrition",
    department: "School of Health Sciences",
    duration: "4 Years",
    level: "Bachelor's Degree",
    description:
      "Explore food, nutrition and wellbeing while developing knowledge and practical skills for supporting healthier individuals and communities.",
    overview:
      "Food and Nutrition focuses on the relationship between food, nutrition and human wellbeing. Students develop knowledge of nutrients, food science, nutrition assessment, community nutrition, food safety and nutrition education.",
    careers: [
      "Nutrition Officer",
      "Community Nutritionist",
      "Food Quality Officer",
      "Nutrition Programme Officer",
      "Food Safety Officer",
      "Public Health Nutrition Officer",
      "Nutrition Education Officer",
      "Food and Nutrition Consultant",
    ],
    skills: [
      "Nutrition assessment",
      "Food science",
      "Community nutrition",
      "Food safety and hygiene",
      "Nutrition education",
      "Dietary planning",
      "Research and data analysis",
    ],
    modules: [
      { code: "FN", name: "Introduction to Food and Nutrition" },
      { code: "FN", name: "Human Nutrition" },
      { code: "FN", name: "Food Science" },
      { code: "FN", name: "Human Anatomy and Physiology" },
      { code: "FN", name: "Biochemistry and Nutrition" },
      { code: "FN", name: "Food Safety and Hygiene" },
      { code: "FN", name: "Community Nutrition" },
      { code: "FN", name: "Nutrition Assessment" },
      { code: "FN", name: "Food Processing and Preservation" },
      { code: "FN", name: "Nutrition Education and Communication" },
      { code: "FN", name: "Public Health Nutrition" },
      { code: "FN", name: "Maternal and Child Nutrition" },
      { code: "FN", name: "Food Quality Management" },
      { code: "FN", name: "Research Methodology" },
      { code: "FN", name: "Final Year Project" },
    ],
  },
  {
    id: "business-administration-advanced",
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
  },
];

const getProgramIcon = (programId: string) => {
  switch (programId) {
    case "computer-science":
      return Code2;
    case "business-administration":
      return BarChart3;
    case "social-work":
      return HeartHandshake;
    case "food-and-nutrition":
      return Apple;
    case "business-administration-advanced":
      return BriefcaseBusiness;
    case "education":
      return GraduationCap;
    case "public-administration":
      return Landmark;
    default:
      return BookOpen;
  }
};

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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-[#06264A]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-blue-100">
                <GraduationCap size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  DMI St. Eugene University
                </p>

                <p className="mt-0.5 text-xs text-blue-200">
                  Academic Programmes
                </p>
              </div>
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
              Choose a programme that
              <span className="block text-blue-300">
                moves you forward.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">
              Explore programmes, understand what you will study,
              discover possible career paths and make a more
              informed choice about your future.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/chat"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#06264A] transition hover:bg-blue-50"
              >
                <MessageCircle size={17} />
                Ask UNI
                <ArrowRight size={16} />
              </Link>

              <span className="text-sm text-blue-200">
                Need help deciding? Talk to UNI Life Guide.
              </span>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <CheckCircle2 size={16} />
                Programme guidance
              </div>

              <div className="flex items-center gap-2 text-sm text-blue-100">
                <CheckCircle2 size={16} />
                Career exploration
              </div>

              <div className="flex items-center gap-2 text-sm text-blue-100">
                <CheckCircle2 size={16} />
                Student support
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-6 w-full max-w-6xl px-5 lg:px-8">
        <div className="border border-slate-200 bg-white p-3 shadow-md">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search programmes, careers, skills or modules..."
                className="h-12 w-full border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white"
              />
            </div>

            <select
              value={selectedDepartment}
              onChange={(e) =>
                setSelectedDepartment(e.target.value)
              }
              className="h-12 border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white sm:w-60"
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

      <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-9 flex flex-col justify-between gap-5 border-b border-slate-200 pb-7 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#155A96]">
              Academic Programmes
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#06264A] md:text-4xl">
              Explore your options
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
              Compare programmes by their focus, skills, modules
              and possible career opportunities.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
            <span className="font-bold text-[#06264A]">
              {filteredPrograms.length}
            </span>

            {filteredPrograms.length === 1
              ? "programme"
              : "programmes"}
          </div>
        </div>

        {filteredPrograms.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((program) => {
              const Icon = getProgramIcon(program.id);

              return (
                <article
                  key={program.id}
                  className="group flex min-h-[510px] flex-col border border-slate-200 bg-white transition duration-200 hover:border-blue-300 hover:shadow-lg"
                >
                  <div className="border-b border-slate-200 px-6 py-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-blue-100 bg-blue-50 text-[#155A96]">
                        <Icon size={23} strokeWidth={1.8} />
                      </div>

                      <span className="border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#155A96]">
                        {program.shortName}
                      </span>
                    </div>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#155A96]">
                      {program.department}
                    </p>

                    <h3 className="mt-2 min-h-[64px] text-xl font-bold leading-7 text-[#06264A]">
                      {program.name}
                    </h3>
                  </div>

                  <div className="flex flex-1 flex-col px-6 py-6">
                    <div className="mb-5 flex flex-wrap gap-x-5 gap-y-2 border-b border-slate-100 pb-5">
                      <span className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <Clock3
                          size={15}
                          className="text-[#155A96]"
                        />
                        {program.duration}
                      </span>

                      <span className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <BookOpen
                          size={15}
                          className="text-[#155A96]"
                        />
                        {program.level}
                      </span>
                    </div>

                    <p className="line-clamp-4 text-sm leading-6 text-slate-600">
                      {program.description}
                    </p>

                    <div className="mt-6 border-l-2 border-blue-200 bg-slate-50 px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Programme structure
                      </p>

                      <p className="mt-1.5 text-sm font-semibold text-slate-800">
                        {program.modules.length} curriculum-informed
                        modules
                      </p>
                    </div>

                    <div className="mt-auto pt-7">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedProgram(program)
                        }
                        className="flex w-full items-center justify-between border border-[#155A96] bg-[#155A96] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0E4779]"
                      >
                        <span>View Programme</span>

                        <ArrowRight
                          size={17}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="border border-slate-200 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center border border-slate-200 bg-slate-50 text-slate-400">
              <Search size={23} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-[#06264A]">
              No programme found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Try another search term or return to the full list
              of programmes.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedDepartment("All");
              }}
              className="mt-5 border border-[#155A96] bg-[#155A96] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0E4779]"
            >
              Show All Programmes
            </button>
          </div>
        )}
      </main>

      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl border border-blue-900 bg-[#06264A]">
          <div className="px-7 py-10 md:px-10 md:py-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 flex items-center gap-2 text-blue-200">
                  <MessageCircle size={18} />

                  <span className="text-sm font-semibold">
                    UNI Life Guide
                  </span>
                </div>

                <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                  Still unsure what to study?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 md:text-base">
                  Speak with UNI Life Guide to explore programmes,
                  possible careers and the next step that may be
                  right for you.
                </p>
              </div>

              <Link
                to="/chat"
                className="inline-flex shrink-0 items-center justify-center gap-2 border border-white/20 bg-white px-6 py-3 text-sm font-semibold text-[#06264A] transition hover:bg-blue-50"
              >
                <MessageCircle size={17} />
                Chat with UNI
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {selectedProgram && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#03182D]/75 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedProgram(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="programme-modal-title"
        >
          <div
            className="max-h-[94vh] w-full max-w-5xl overflow-y-auto bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-slate-200 bg-[#06264A] px-6 py-7 text-white md:px-9 md:py-8">
              <div className="flex items-start justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center border border-white/10 bg-white/10">
                    {(() => {
                      const Icon = getProgramIcon(
                        selectedProgram.id
                      );

                      return (
                        <Icon
                          size={23}
                          strokeWidth={1.8}
                        />
                      );
                    })()}
                  </div>

                  <p className="text-sm font-medium text-blue-200">
                    {selectedProgram.department}
                  </p>

                  <h2
                    id="programme-modal-title"
                    className="mt-2 text-2xl font-bold leading-tight md:text-3xl"
                  >
                    {selectedProgram.name}
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-100 md:text-base">
                    {selectedProgram.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  className="shrink-0 border border-white/10 bg-white/10 p-2.5 text-white transition hover:bg-white/20"
                  aria-label="Close programme details"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="px-6 py-7 md:px-9 md:py-9">
              <div className="grid border border-slate-200 sm:grid-cols-3">
                <div className="border-b border-slate-200 p-5 sm:border-b-0 sm:border-r">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock3 size={17} />

                    <span className="text-xs font-bold uppercase tracking-wide">
                      Duration
                    </span>
                  </div>

                  <p className="mt-2 text-base font-bold text-[#06264A]">
                    {selectedProgram.duration}
                  </p>
                </div>

                <div className="border-b border-slate-200 p-5 sm:border-b-0 sm:border-r">
                  <div className="flex items-center gap-2 text-slate-400">
                    <GraduationCap size={17} />

                    <span className="text-xs font-bold uppercase tracking-wide">
                      Qualification
                    </span>
                  </div>

                  <p className="mt-2 text-base font-bold text-[#06264A]">
                    {selectedProgram.level}
                  </p>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-slate-400">
                    <BookOpen size={17} />

                    <span className="text-xs font-bold uppercase tracking-wide">
                      Programme
                    </span>
                  </div>

                  <p className="mt-2 text-base font-bold text-[#06264A]">
                    {selectedProgram.shortName}
                  </p>
                </div>
              </div>

              <section className="mt-10">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-5 w-1 bg-[#155A96]" />

                  <h3 className="text-xl font-bold text-[#06264A]">
                    About the Programme
                  </h3>
                </div>

                <p className="max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
                  {selectedProgram.overview}
                </p>
              </section>

              <section className="mt-10">
                <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center bg-blue-50 text-[#155A96]">
                        <Layers3 size={18} />
                      </div>

                      <h3 className="text-xl font-bold text-[#06264A]">
                        What You Will Study
                      </h3>
                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                      Key curriculum-informed modules associated
                      with this programme.
                    </p>
                  </div>

                  <span className="w-fit border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[#155A96]">
                    {selectedProgram.modules.length} modules
                  </span>
                </div>

                <div className="grid gap-2 md:grid-cols-2">
                  {selectedProgram.modules.map((module, index) => (
                    <div
                      key={`${module.name}-${index}`}
                      className="flex items-center gap-4 border border-slate-200 bg-white px-4 py-3.5 transition hover:border-blue-200 hover:bg-blue-50/30"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-slate-100 text-[11px] font-bold text-slate-500">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="min-w-0">
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

                <div className="mt-4 border-l-2 border-amber-400 bg-amber-50 px-4 py-3">
                  <p className="text-xs leading-5 text-amber-800">
                    <strong>Note:</strong> Module names shown here
                    are curriculum-informed for the UNI Life Guide
                    demo. Students should confirm the latest
                    official programme structure, semester allocation
                    and admission requirements with DMI St. Eugene
                    University.
                  </p>
                </div>
              </section>

              <section className="mt-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center bg-blue-50 text-[#155A96]">
                    <CheckCircle2 size={18} />
                  </div>

                  <h3 className="text-xl font-bold text-[#06264A]">
                    Skills You Can Develop
                  </h3>
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {selectedProgram.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-start gap-3 border border-slate-200 bg-white px-4 py-3.5"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-[#155A96]"
                      />

                      <span className="text-sm leading-6 text-slate-700">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center bg-blue-50 text-[#155A96]">
                    <BriefcaseBusiness size={18} />
                  </div>

                  <h3 className="text-xl font-bold text-[#06264A]">
                    Where Could It Take You?
                  </h3>
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {selectedProgram.careers.map((career) => (
                    <div
                      key={career}
                      className="flex items-center gap-3 border border-slate-200 bg-white px-4 py-3.5"
                    >
                      <span className="h-2 w-2 shrink-0 bg-[#155A96]" />

                      <span className="text-sm font-semibold text-slate-700">
                        {career}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-10 border border-blue-100 bg-blue-50/60 px-5 py-5 md:px-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="font-bold text-[#06264A]">
                      Not sure if this programme is right for you?
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Ask UNI Life Guide about this programme,
                      careers and how it may match your interests.
                    </p>
                  </div>

                  <Link
                    to="/chat"
                    onClick={() => setSelectedProgram(null)}
                    className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#155A96] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0E4779]"
                  >
                    <MessageCircle size={17} />
                    Ask UNI
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </section>

              <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-6">
                <div className="hidden items-center gap-2 text-xs text-slate-400 sm:flex">
                  <Users size={14} />
                  UNI Life Guide
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  className="ml-auto inline-flex items-center gap-2 border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  Close
                  <ChevronRight size={15} />
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