import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  School,
  Target,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import uni from "../../assets/HOME1.jpeg";

const AboutUs = () => {
  const navigate = useNavigate();

  const journeyItems = [
    {
      number: "01",
      icon: BookOpen,
      title: "Discover",
      text: "Explore programmes and discover opportunities that match your interests, strengths and ambitions.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Understand",
      text: "Learn what you will study, the skills you can develop and what each programme involves.",
    },
    {
      number: "03",
      icon: BriefcaseBusiness,
      title: "Connect",
      text: "Explore possible career directions and understand how your education can connect with the world of work.",
    },
    {
      number: "04",
      icon: Target,
      title: "Take Action",
      text: "Move forward with confidence by exploring your options, asking questions and deciding on your next step.",
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Programme Discovery",
      text: "Explore programmes and understand what different academic paths involve before making your decision.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Career Connection",
      text: "Connect programmes with possible career directions and understand where your studies may lead.",
    },
    {
      icon: Users,
      title: "Personal Guidance",
      text: "Get support when you are unsure about what to study, which direction to take or what to do next.",
    },
  ];

  const benefits = [
    "Clear programme information",
    "Career-focused guidance",
    "Student-friendly digital experience",
    "Personalised guidance through UNI",
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="overflow-hidden bg-[#061b36]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="mb-6 flex items-center gap-3 text-sm font-semibold text-blue-200">
                <School size={18} />
                <span>DMI St. Eugene University</span>
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Helping students make better choices for their future.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 md:text-lg">
                UNI Life Guide is a digital student guidance platform designed
                to make the university journey easier to understand — from
                discovering programmes to exploring careers and taking the next
                step toward university.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/programs")}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#061b36] transition hover:bg-blue-50"
                >
                  Explore Programmes
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => navigate("/chat")}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <MessageCircle size={18} />
                  Ask UNI
                </button>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  Programme guidance
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  Career exploration
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  Student support
                </div>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl"
            >
              <motion.img
                src={uni}
                alt="DMI St. Eugene University"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{ scale: 1.04 }}
                className="h-[380px] w-full object-cover sm:h-[480px] lg:h-[570px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-blue-700" />
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                  About UNI Life Guide
                </span>
              </div>

              <h2 className="mt-5 max-w-lg text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
                More than information.
                <span className="block text-blue-700">
                  A better way to choose your future.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl text-base leading-8 text-slate-600"
            >
              <p>
                Choosing a university programme is one of the most important
                decisions a student can make. Yet students often have to
                search through large amounts of information before they
                understand what a programme actually means for their future.
              </p>

              <p className="mt-6">
                <strong className="font-semibold text-slate-900">
                  UNI Life Guide
                </strong>{" "}
                was designed to make that journey simpler. Instead of simply
                presenting university information, the platform helps students
                connect programmes with subjects, skills, career opportunities
                and their personal ambitions.
              </p>

              <p className="mt-6 text-lg font-semibold leading-8 text-[#061b36]">
                The goal is simple: help prospective students move from
                uncertainty to confidence and from interest to action.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-[#f6f8fb]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
              The UNI Life Guide Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              From discovery to decision.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              A straightforward journey designed to help students understand
              their options before making an important decision.
            </p>
          </div>

          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-slate-200 lg:block" />

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {journeyItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                  >
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white">
                      <Icon size={21} />
                    </div>

                    <div className="mt-6">
                      <span className="text-xs font-bold tracking-[0.15em] text-blue-700">
                        {item.number}
                      </span>

                      <h3 className="mt-2 text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-xs text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-blue-700" />

                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                  Why UNI Life Guide
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                Designed around the questions students actually ask.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
                Students need more than programme names. They need to
                understand where their choices can take them.
              </p>
            </motion.div>

            <div>
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    className="border-t border-slate-200 py-7 last:border-b"
                  >
                    <div className="flex gap-5">
                      <div className="shrink-0 text-blue-700">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {feature.title}
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                          {feature.text}
                        </p>
                      </div>

                      <ArrowRight
                        size={18}
                        className="ml-auto hidden shrink-0 text-blue-600 sm:block"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Connecting students with opportunity */}
      <section className="bg-[#f4f7fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Second image */}
            <motion.div
              initial={{ opacity: 0, x: -35, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl"
            >
              <motion.img
                src={uni}
                alt="DMI St. Eugene University campus"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{ scale: 1.04 }}
                className="h-[430px] w-full object-cover sm:h-[520px] lg:h-[600px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-blue-700" />

                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                  Connecting Students With Opportunity
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
                Helping students see beyond the classroom.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                University is not only about completing a qualification. It is
                about developing knowledge, discovering strengths, building
                relationships and preparing for life after graduation.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                UNI Life Guide brings these pieces together in one experience,
                helping prospective students understand what they can study,
                where their studies can lead and how they can take their next
                step.
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-slate-200 pb-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-blue-700"
                    />

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-[#061b36]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-blue-200">
              <GraduationCap size={28} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
              Our Vision
            </p>

            <blockquote className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl md:leading-[1.15]">
              Do not only tell students what the university offers.
              <span className="mt-2 block text-blue-300">
                Help them understand where the university can take them.
              </span>
            </blockquote>

            <p className="mt-6 text-sm text-blue-200">
              The vision behind UNI Life Guide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 border-t border-slate-200 pt-10 md:flex-row md:items-center md:justify-between"
          >
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                Ready to explore?
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
                Your next step starts with understanding your options.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Explore DMI St. Eugene University programmes, discover career
                possibilities and use UNI Life Guide to make a more informed
                decision.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <button
                onClick={() => navigate("/programs")}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Explore Programmes
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => navigate("/chat")}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-200 px-6 py-3.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                <MessageCircle size={18} />
                Ask UNI
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;