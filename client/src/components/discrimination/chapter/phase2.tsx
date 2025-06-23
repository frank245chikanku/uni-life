import React from "react";

const Phase2: React.FC = () => {
  return (
    <div
      className="py-10 px-8 max-w-4xl mx-auto rounded-2xl"
      style={{
        backgroundColor: "#ffffff",
        color: "#1f2937",
        boxShadow: "0 10px 25px rgba(210, 84, 142, 0.2)",
      }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center text-[#050505]">
        Pursue Justice, Not Revenge
      </h2>
      <p className="text-lg leading-relaxed">
        Revenge often stems from a desire for personal satisfaction or to right a perceived wrong, but it rarely leads to true healing or progress. Instead, pursuing justice involves a focus on fairness, accountability, and the long-term well-being of all parties involved.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        For students and individuals navigating conflicts, this means taking a step back and considering how actions can contribute to a just outcome that upholds integrity and promotes reconciliation, rather than seeking to "get even." Justice seeks balance, respect, and a focus on the greater good, whereas revenge can perpetuate cycles of hurt and negativity.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        By prioritizing justice, we aim for a resolution that restores harmony and fosters understanding, helping to move beyond personal grievances and towards a more constructive and compassionate society. This approach leads to lasting peace and personal growth, rather than fleeting satisfaction from revenge.
      </p>
    </div>
  );
};

export default Phase2;
