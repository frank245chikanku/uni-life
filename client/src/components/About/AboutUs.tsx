import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isAuthenticatedAtom } from "../../recoil/atom";
import { Lightbulb, Wrench, Users } from "lucide-react";
import { motion } from "framer-motion";
import uni from "../../assets/front-view-stacked-books-graduation-cap-ladders-education-day.jpg";

const AboutUs = () => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isAuthenticatedAtom);

  const handleExploreClick = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="px-6 md:px-16 lg:px-32 py-20 bg-[#eef6fb] text-gray-800">
      <h2 className="text-center text-4xl md:text-5xl font-bold tracking-wide mb-14 text-[#003366] font-serif drop-shadow-sm">
        About <span className="text-[#00a6ff]">UniGuide</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-full"
        >
          <img
            src={uni}
            alt="Uni Life Guide"
            className="w-full h-full object-cover md:max-h-[400px] rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 md:p-8 space-y-5"
        >
          <p className="text-base leading-loose">
            <strong>Uni Life Guide</strong> is a modern ethical guidance tool tailored to
            university students. It presents clear frameworks like decision trees,
            real-world scenarios, and guiding principles — all designed to
            support students in making thoughtful, moral decisions.
          </p>

          <p className="text-base leading-loose">
            Unfortunately, today, the education process does not wholly prepare students to contribute to national development.
            Instead, it is limited to bookish and theoretical knowledge that fails to fully equip students to face real-life challenges.
            As competition grows, job demands increase, yet the capability often falls short.
          </p>

          <p className="text-base leading-loose">
            <strong>Uni Life Guide</strong> aims to bridge this gap by providing a structured, accessible framework
            combining ethical guidelines, decision trees, and case studies to help students navigate moral dilemmas with confidence and integrity.
          </p>
        </motion.div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <Lightbulb className="mx-auto mb-3 text-[#00a6ff]" size={32} />
          <h3 className="font-semibold text-xl text-[#003366] mb-3">Ethical Clarity</h3>
          <p className="text-sm leading-relaxed">
            Helps students analyze complex situations with integrity and clear ethical frameworks.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <Wrench className="mx-auto mb-3 text-[#00a6ff]" size={32} />
          <h3 className="font-semibold text-xl text-[#003366] mb-3">Practical Tools</h3>
          <p className="text-sm leading-relaxed">
            Includes decision trees, case studies, and step-by-step methods to apply ethics practically.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <Users className="mx-auto mb-3 text-[#00a6ff]" size={32} />
          <h3 className="font-semibold text-xl text-[#003366] mb-3">Student Empowerment</h3>
          <p className="text-sm leading-relaxed">
            Equips students with confidence, empathy, and the skills to lead responsibly.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 bg-white p-6 md:p-10 rounded-xl shadow-md text-center"
      >
        <blockquote className="italic text-lg text-gray-700 max-w-3xl mx-auto">
          "Uni Life Guide is more than a tool — it's a compass for students, navigating through
          the ethical realities of university life and beyond."
        </blockquote>
        <p className="mt-4 text-sm text-gray-500">— Project Vision Statement</p>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mt-16 text-center"
      >
        <p className="text-lg mb-4 font-medium">
          Want to experience how UniGuide makes a difference?
        </p>
        <button
          onClick={handleExploreClick}
          className="bg-gradient-to-br from-[#00a6ff] to-[#ff416c] hover:scale-105 hover:shadow-xl text-white p-3 px-6 rounded-full transition-transform duration-300 ease-in-out"
        >
          🚀 Explore Features
        </button>
      </motion.div>
    </div>
  );
};

export default AboutUs;
