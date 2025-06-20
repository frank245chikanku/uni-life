import React from "react";

const Chapter2: React.FC = () => {
  return (
    <div
      className="py-10 px-8 max-w-4xl mx-auto rounded-2xl"
      style={{
        backgroundColor: "#ffffff",
        color: "#1f2937", // text-gray-800
        boxShadow: "0 10px 25px rgba(210, 84, 142, 0.2)", // subtle pink shadow
      }}
    >
      <h1 className="font-bold text-3xl mb-6 text-center text-[#b83260]">
        Common Misunderstandings
      </h1>

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
    </div>
  );
};

export default Chapter2;
