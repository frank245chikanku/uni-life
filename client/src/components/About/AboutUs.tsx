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
  Sparkles,
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
      icon: <BookOpen size={21} />,
      title: "Discover",
      text: "Explore programmes and discover opportunities that match your interests, strengths and ambitions.",
    },
    {
      number: "02",
      icon: <Lightbulb size={21} />,
      title: "Understand",
      text: "Understand what you will study, the skills you can develop and what each programme involves.",
    },
    {
      number: "03",
      icon: <BriefcaseBusiness size={21} />,
      title: "Connect",
      text: "Discover possible career directions and see how your education can connect with the world of work.",
    },
    {
      number: "04",
      icon: <Target size={21} />,
      title: "Take Action",
      text: "Move forward with confidence by exploring your options, asking questions and taking your next step.",
    },
  ];

  const features = [
    {
      icon: <BookOpen size={22} />,
      title: "Programme Discovery",
      text: "Explore programmes and understand what different academic paths involve before making your decision.",
    },
    {
      icon: <BriefcaseBusiness size={22} />,
      title: "Career Connection",
      text: "Connect programmes with possible career directions so you can understand where your studies may lead.",
    },
    {
      icon: <Users size={22} />,
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
    <div className="overflow-hidden bg-white">
     
      <section className="relative overflow-hidden bg-[#031b3a]">
        
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
           
           
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <div className="mb-6 flex items-center gap-3 text-sm font-semibold text-blue-200">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <School size={17} />
                </span>

                <span>DMI St. Eugene University</span>
              </div>

              <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[4.3rem]">
                Helping students make
                <span className="mt-2 block text-blue-300">
                  better choices for their future.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-blue-100 md:text-lg">
                UNI Life Guide is a digital student guidance platform designed
                to make the university journey easier to understand — from
                discovering programmes to exploring careers and taking the
                next step toward university.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/programs")}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-[#003366] shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Explore Programmes
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => navigate("/chat")}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <MessageCircle size={18} />
                  Ask UNI
                </button>
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
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              
              <div className="absolute -inset-8 bg-blue-500/10 blur-3xl" />

             
              <div className="relative h-[380px] overflow-hidden sm:h-[480px] lg:h-[570px]">
                <img
                  src={uni}
                  alt="DMI St. Eugene University"
                  className="h-full w-full object-cover object-center"
                />

                
                <div className="absolute inset-0 bg-gradient-to-t from-[#031b3a]/70 via-transparent to-transparent" />

              
                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-10 bg-blue-300" />

                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                      DMI St. Eugene University
                    </span>
                  </div>

                  <p className="mt-3 max-w-md text-lg font-semibold text-white sm:text-xl">
                    Education that opens the door to opportunity.
                  </p>
                </div>
              </div>

             
              <div className="absolute -bottom-4 right-8 h-1 w-24 bg-blue-400 sm:right-12" />
            </motion.div>
          </div>
        </div>
      </section>

   
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-blue-600" />

                <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                  About UNI Life Guide
                </span>
              </div>

              <h2 className="mt-6 max-w-lg text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-5xl">
                More than information.
                <span className="mt-2 block text-blue-700">
                  A better way to choose your future.
                </span>
              </h2>

              <div className="mt-8 flex items-center gap-3 text-slate-500">
                <Sparkles size={18} className="text-blue-600" />

                <span className="text-sm font-medium">
                  Built around the student experience.
                </span>
              </div>
            </motion.div>

           
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl text-base leading-8 text-slate-600"
            >
              <p>
                Choosing a university programme is one of the most important
                decisions a student can make. Yet students often have to
                search through large amounts of information before they
                understand what a programme actually means for their future.
              </p>

              <p className="mt-6">
                <strong className="font-bold text-slate-900">
                  UNI Life Guide
                </strong>{" "}
                was designed to make that journey simpler. Instead of simply
                presenting university information, the platform helps students
                connect programmes with subjects, skills, career opportunities
                and their personal ambitions.
              </p>

              <p className="mt-6 text-lg font-semibold leading-8 text-[#031b3a]">
                The goal is simple: help prospective students move from
                uncertainty to confidence and from interest to action.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

   
      <section className="bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
              The UNI Life Guide Journey
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              From discovery to decision.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              A simple journey designed to help students understand their
              options before making an important decision.
            </p>
          </div>

          {/* SIMPLE JOURNEY LINE */}
          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-slate-200 lg:block" />

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              {journeyItems.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="relative"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white shadow-md">
                    {item.icon}
                  </div>

                  <div className="mt-7">
                    <span className="text-xs font-bold tracking-[0.15em] text-blue-600">
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
              ))}
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
           
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-blue-600" />

                <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                  Why UNI Life Guide
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
                Designed around the questions students actually ask.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
                Students need more than programme names. They need to
                understand where their choices can take them.
              </p>
            </motion.div>

          
            <div>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group border-t border-slate-200 py-7 last:border-b"
                >
                  <div className="flex gap-5">
                    <div className="mt-1 shrink-0 text-blue-700 transition-transform duration-300 group-hover:translate-x-1">
                      {feature.icon}
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
                      size={19}
                      className="ml-auto mt-1 hidden shrink-0 text-blue-600 transition-transform duration-300 group-hover:translate-x-1 sm:block"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-[#f3f7fc]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
           
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
             
              <div className="absolute -left-3 top-10 bottom-10 hidden w-1 bg-blue-600 lg:block" />

              <div className="relative h-[430px] overflow-hidden sm:h-[540px] lg:h-[620px]">
                <img
                  src={uni}
                  alt="DMI St. Eugene University campus"
                  className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.02]"
                />

                
                <div className="absolute inset-0 bg-gradient-to-t from-[#031b3a]/70 via-transparent to-transparent" />

               
                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                    DMI St. Eugene University
                  </p>

                  <p className="mt-2 max-w-md text-xl font-bold text-white">
                    Building knowledge. Discovering opportunity. Preparing for
                    tomorrow.
                  </p>
                </div>
              </div>
            </motion.div>

           
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-blue-600" />

                <span className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
                  Connecting Students With Opportunity
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl">
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

             
              <div className="mt-9 space-y-4">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-slate-200 pb-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-blue-600"
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

     
      <section className="relative overflow-hidden bg-[#031b3a]">
        <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-blue-200">
              <GraduationCap size={28} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
              Our Vision
            </p>

            <blockquote className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl md:leading-[1.15]">
              Do not only tell students what the university offers.
              <span className="mt-2 block text-blue-300">
                Help them understand where the university can take them.
              </span>
            </blockquote>

            <div className="mx-auto mt-8 h-px w-16 bg-blue-400/50" />

            <p className="mt-6 text-sm text-blue-200">
              The vision behind UNI Life Guide
            </p>
          </motion.div>
        </div>
      </section>

     
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-8 border-t border-slate-200 pt-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Ready to explore?
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl">
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
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-800"
              >
                Explore Programmes
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => navigate("/chat")}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-200 px-6 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
              >
                <MessageCircle size={18} />
                Ask UNI
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;