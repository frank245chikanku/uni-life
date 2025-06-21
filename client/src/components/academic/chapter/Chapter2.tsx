import React, { useState } from "react";

const chapters = [
  {
    title: "Phase 2: Common Misunderstandings",
    content: (
      <>
        <p className="text-lg leading-relaxed mb-4">
          An academic integrity offence is commonly believed to be cheating on a
          test (e.g., copying answers from another student’s paper, using
          unauthorized materials such as a cellphone) or plagiarizing (e.g.,
          cutting and pasting from the Internet without documenting the source).
          However, an academic integrity offence involves more than just the
          above.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>Missing In-Text Citations</strong>
          <br />
          Failure to cite the sources listed at the end of your assignment within
          the written portion of your assignment is a form of academic
          misconduct. You must show where your research has been used in your
          written work in order for your professor to accurately assess and
          provide meaningful feedback about how well you have applied the
          knowledge you have developed. Show where you have used ideas from your
          research by providing in-text citations that refer to the sources you
          have listed at the end of your assignment.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>Improper Research Practices</strong>
          <br />
          Research involves collection, analysis, and interpretation of published
          information or data. When this information is not accurately
          represented in your academic work, such as falsifying or fabricating
          the information, this is an act of academic misconduct.
        </p>

        <p className="text-lg leading-relaxed">
          <strong>Tips to help you avoid engaging in an academic offence:</strong>
          <ul className="list-disc ml-6 mt-2">
            <li>Take notes and review notes (e.g., in class, feedback) on a regular basis.</li>
            <li>Use the available resources provided by your professor.</li>
            <li>
              Read your assignment carefully. If you do not understand, ask your
              professor questions.
            </li>
            <li>
              Manage your time wisely. Start tasks early and prioritize them
              accordingly to make work manageable.
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    title: "Phase 3: The Role of Faculty",
    content: (
      <>
        <p className="text-lg leading-relaxed mb-4">
          The roles and responsibilities of college and university faculty members are closely tied to the central functions of higher education. Correspondingly, college and university faculty members undertake research, teaching, and service roles to carry out the academic work of their respective institutions. Each of these roles enables faculty members to generate and disseminate knowledge to peers, students, and external audiences.
        </p>
        <p className="text-lg leading-relaxed">
          The balance among teaching, research, and service, however, differs widely across institution types and by terms of the faculty member's appointment. The teaching role of faculty members reflects their centrality in addressing the primary educational mission among colleges and universities. As faculty members teach, they disseminate and impart basic or applied knowledge to students and assist students with the learning process and applying the knowledge.
        </p>
      </>
    ),
  },
  {
    title: "Phase 4: Student Responsibilities",
    content: (
      <>
        <p className="text-lg leading-relaxed mb-4">
          Student responsibility occurs when students take an active part in their learning by recognizing they are accountable for their academic success. It is demonstrated when they make choices and take actions that lead them toward their goal of education.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          There are some roles and responsibilities of a student that should and need to be performed during school life. By being respectful, students contribute to a healthy learning environment and lessen distractions and disciplinary actions. They are also expected to be punctual. Being late for school creates a negative impression, which can hurt their grades. Thus, they need to maintain discipline in the classroom and understand time management.
        </p>
        <p className="text-lg leading-relaxed">
          School plays an important role in the process of socializing. An educational environment is required to ensure students gain access to quality education. To exist in such a setting, students are expected to comply with behavioral expectations and display values such as politeness, kindness, compassion, generosity, sympathy, and respect.
        </p>
      </>
    ),
  },
  {
    title: "Phase 5: Talking About Integrity",
    content: (
      <>
        <p className="text-lg leading-relaxed mb-4">
          Integrity means being honest and having strong moral principles. A person with integrity behaves ethically and does the right thing, even behind closed doors. Having integrity means that you are honest, ethical, and follow defined moral principles.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Integrity at work is about even more than honesty and respect. If an organization has a true culture of integrity, employees take their commitments seriously, are proactive when they don’t understand their responsibilities, and ultimately are accountable for their results. As a result, the business thrives.
        </p>
        <h2 className="font-semibold text-2xl mt-6 mb-4 text-[#050505]">
          Most Common Traits of a Person with Integrity
        </h2>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          <li>Expressing gratitude for others</li>
          <li>Valuing honesty and openness</li>
          <li>Taking responsibility and accountability for actions, good and bad</li>
          <li>Respecting yourself and others, no matter where you are</li>
          <li>Helping those in need without sacrificing your own health</li>
          <li>Demonstrating reliability and trustworthiness</li>
          <li>Showing patience and flexibility, even when unexpected obstacles show up</li>
        </ul>
      </>
    ),
  },
];

const AcademicChapter2Reader: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const progress = ((current + 1) / chapters.length) * 100;

  const nextChapter = () => {
    if (current < chapters.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevChapter = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const restart = () => {
    setCurrent(0);
  };

  const printPDF = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      {/* Progress Bar */}
      <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
        <div
          className="bg-pink-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Chapter Content Container */}
      <div
        className="py-10 px-8 max-w-4xl mx-auto rounded-2xl"
        style={{
          backgroundColor: "#ffffff",
          color: "#1f2937",
          boxShadow: "0 10px 25px rgba(210, 84, 142, 0.2)",
        }}
      >
        <h2 className="font-bold text-3xl mb-6 text-center text-[#050505]">
          {chapters[current].title}
        </h2>
        {chapters[current].content}
      </div>

      {/* Navigation */}
      <div className="mt-6 flex justify-between items-center flex-wrap gap-2">
        <button
          onClick={prevChapter}
          disabled={current === 0}
          className={`${current === 0
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-800 text-white hover:bg-gray-900"
            } font-semibold px-6 py-2 rounded-lg shadow transition`}
        >
          Previous
        </button>

        <button
          onClick={printPDF}
          className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
        >
          📄 Print / Save
        </button>

        {current < chapters.length - 1 ? (
          <button
            onClick={nextChapter}
            className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
          >
            Next Phase
          </button>
        ) : (
          <div className="text-center w-full mt-4">
            <p className="text-green-600 font-semibold mb-4">
              🎉 You’ve completed all phases!
            </p>
            <button
              onClick={restart}
              className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
            >
              🔁 Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicChapter2Reader;
