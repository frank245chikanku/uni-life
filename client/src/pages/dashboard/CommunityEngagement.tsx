import {
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

const engagementCards = [
  {
    title: "Ethical Decision-Making",
    category: "Professional Ethics",
    skills: ["Ethics", "Decision Making", "Professional Conduct"],
    link: "https://www.acm.org/code-of-ethics",
    nextSkill: "Ethical Leadership",
    description:
      "Learn how to make responsible choices in real-world situations through professional guidelines and practical examples.",
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    icon: ShieldCheck,
  },
  {
    title: "Zambian Student Webinars & Meetups",
    category: "Student Community",
    skills: ["Networking", "Events", "Peer Learning"],
    link: "https://www.eventbrite.com/d/zambia--lusaka/webinars/",
    nextSkill: "Professional Networking",
    description:
      "Join webinars and meetups in Zambia covering technology, health, social work, business and other fields.",
    gradient: "from-purple-500 to-pink-500",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    icon: Users,
  },
  {
    title: "Professional & Mentor Connect",
    category: "Mentorship",
    skills: ["Mentorship", "Career Advice", "Networking"],
    link: "https://www.linkedin.com/groups/14271555/",
    nextSkill: "Mentorship & Communication",
    description:
      "Connect with professionals and experienced people who can provide career insights, guidance and encouragement.",
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    icon: GraduationCap,
  },
  {
    title: "ZICA Virtual Accountants Forum",
    category: "Accounting & Finance",
    skills: ["Accounting", "Finance", "Professional Development"],
    link: "https://www.zica.co.zm/",
    nextSkill: "Financial Literacy",
    description:
      "Explore forums, webinars and professional opportunities for students and professionals in accounting and finance.",
    gradient: "from-rose-500 to-orange-500",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    icon: BriefcaseBusiness,
  },
  {
    title: "Professional Conduct Resources",
    category: "Workplace Readiness",
    skills: ["Communication", "Workplace Etiquette", "Time Management"],
    link: "https://www.coursera.org/learn/work-smarter-not-harder",
    nextSkill: "Professional Communication",
    description:
      "Develop workplace etiquette, communication and professional habits that help you become a well-rounded professional.",
    gradient: "from-indigo-500 to-violet-500",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    icon: HeartHandshake,
  },
  {
    title: "VSO Zambia – Youth Volunteer Program",
    category: "Community Development",
    skills: ["Volunteering", "Leadership", "Community Service"],
    link: "https://www.vsointernational.org/volunteering",
    nextSkill: "Community Leadership",
    description:
      "Explore volunteering opportunities that allow you to contribute to community development while building valuable experience.",
    gradient: "from-amber-500 to-yellow-500",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    icon: Globe2,
  },
];

const CommunityEngagement = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">

      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">


        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold text-blue-600 shadow-sm">
            <Sparkles className="h-4 w-4" />
            COMMUNITY & ETHICAL GROWTH
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Grow Through{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Community & Purpose
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Build meaningful connections, strengthen your professional values,
            develop practical skills, and contribute positively to your
            community.
          </p>
        </div>


        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Explore Opportunities
            </p>

            <h3 className="mt-1 text-xl font-bold text-slate-900">
              Community & Professional Growth
            </h3>
          </div>

          <span className="hidden text-sm text-slate-400 sm:block">
            {engagementCards.length} opportunities
          </span>
        </div>


        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {engagementCards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.title}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex min-h-[290px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >

                <div
                  className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${card.gradient}`}
                />


                <div className="mb-5 flex items-center justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.iconBg}`}
                  >
                    <Icon
                      className={`h-5 w-5 ${card.iconColor}`}
                      strokeWidth={2}
                    />
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition-all group-hover:bg-blue-50">
                    <ArrowUpRight className="h-4 w-4 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" />
                  </div>
                </div>


                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {card.category}
                </p>


                <h3 className="mb-2 text-lg font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
                  {card.title}
                </h3>


                <p className="mb-4 text-xs leading-5 text-slate-500">
                  {card.description}
                </p>


                <div className="mb-5">
                  <div className="flex flex-wrap gap-1.5">
                    {card.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>


                <div className="mt-auto flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-3 transition-colors group-hover:bg-blue-50/70">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Next skill
                    </p>

                    <p className="truncate text-xs font-semibold text-slate-700">
                      {card.nextSkill}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 transition-colors group-hover:text-blue-600">
                    Explore opportunity
                  </span>

                  <span className="text-[10px] text-slate-400">
                    Visit →
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
          <Users className="h-4 w-4" />

          <span>
            Connect with others, build your values, and make a positive impact.
          </span>
        </div>
      </div>
    </section>
  );
};

export default CommunityEngagement;