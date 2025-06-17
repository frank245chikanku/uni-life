import { Link } from "react-router-dom";
import uni from "../../assets/front-view-stacked-books-graduation-cap-ladders-education-day.jpg";

const AboutUs = () => {
  return (
    <div className="px-6 md:px-16 lg:px-32 py-20 bg-[#eef6fb] text-gray-800">

      <h2 className="text-center text-4xl font-semibold tracking-wide mb-14 text-[#003366] font-serif">
        About UniGuide
      </h2>


      <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="h-full">
          <img
            src={uni}
            alt="Uni Life Guide"
            className="w-full h-full object-cover md:max-h-[400px] rounded-lg"
          />
        </div>

        <div className="p-6 md:p-8 space-y-5">
          <p className="text-base leading-relaxed">
            <strong>Uni Life Guide</strong> is a modern ethical guidance tool tailored to
            university students. It presents clear frameworks like decision trees,
            real-world scenarios, and guiding principles — all designed to
            support students in making thoughtful, moral decisions.
          </p>

          <p className="text-base leading-relaxed">
            unfortunately, today, the education process does not wholly prepare the students to contribute to this national goal,
            instead it is limited to bookish and theoretical knowledge/information that fail to equip the students fully to face the real challenges of life.
            With changing times and increasing competition,
            job demands have grown, but the capability found in the employees is unsatisfactory.
          </p>

          <p className="text-base leading-relaxed">
            <strong>Uni Life Guide</strong> aims to address this gap by providing a structured, accessible framework that combines ethical guidelines, decision trees,
            and case studies,helping students navigate moral dilemmas with confidence and integrity.
          </p>
        </div>
      </div>


      <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="font-semibold text-xl text-[#003366] mb-3">Ethical Clarity</h3>
          <p className="text-sm leading-relaxed">
            Helps students analyze complex situations with integrity and clear ethical frameworks.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="font-semibold text-xl text-[#003366] mb-3">Practical Tools</h3>
          <p className="text-sm leading-relaxed">
            Includes decision trees, case studies, and step-by-step methods to apply ethics practically.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="font-semibold text-xl text-[#003366] mb-3">Student Empowerment</h3>
          <p className="text-sm leading-relaxed">
            Equips students with confidence, empathy, and the skills to lead responsibly.
          </p>
        </div>
      </div>


      <div className="mt-20 bg-white p-6 md:p-10 rounded-xl shadow-md text-center">
        <blockquote className="italic text-lg text-gray-700 max-w-3xl mx-auto">
          "Uni Life Guide is more than a tool — it's a compass for students navigating
          the ethical realities of university life and beyond."
        </blockquote>
        <p className="mt-4 text-sm text-gray-500">— Project Vision Statement</p>
      </div>


      <div className="mt-16 text-center">
        <p className="text-lg mb-4 font-medium">
          Want to experience how UniGuide makes a difference?
        </p>
        <Link
          to="/dashboard"
          className="bg-gradient-to-br from-[#00a6ff] to-red-500 hover:from-[#00a6ffec] hover:to-red-400 text-white p-3 px-6 rounded-full transition duration-300 inline-block"
        >
          Explore Features
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
