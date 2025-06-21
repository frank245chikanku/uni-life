import React from "react";

const Chapter3: React.FC = () => {
  return (
    <div
      className="py-8 px-8 max-w-4xl mx-auto rounded-lg"
      style={{
        backgroundColor: "#ffffff",
        color: "#1f2937",
        boxShadow: "0 10px 25px rgba(210, 84, 142, 0.2)",
      }}
    >
      <h1 className="font-bold text-3xl mb-6 text-center text-[#050505]">
        Creating Integrity Pledges
      </h1>
      <p className="text-lg leading-relaxed">
        Creating integrity pledges involves crafting clear, actionable commitments that reflect
        one's dedication to upholding ethical standards and honesty. These pledges are not just
        symbolic, but serve as a personal promise to act with integrity in both professional
        and academic settings.
      </p>
      <p className="text-lg leading-relaxed mt-4 font-semibold">
        Honor Pledge
      </p>
      <p className="text-lg leading-relaxed mt-4">
        I recognize the importance of personal integrity in all aspects of life and work. I commit myself to truthfulness, honor, and responsibility, by which I earn the respect of others. I support the development of good character and commit myself to uphold the highest standards of academic integrity as an important aspect of personal integrity.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        My commitment obliges me to conduct myself according to the University Honor Code.
      </p>
    </div>
  );
};

export default Chapter3;
