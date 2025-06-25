import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Introduction: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="py-10 px-8 max-w-4xl mx-auto rounded-2xl h-[calc(100vh-4rem)] overflow-y-scroll"
      style={{
        backgroundColor: "#ffffff",
        color: "#1f2937",
        boxShadow: "0 10px 25px rgba(210, 84, 142, 0.2)",
      }}
    >
      <h1 className="font-bold text-3xl mb-10 text-center text-[#050505]">
        Introduction to Financial Strain
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        Financial strain refers to difficulty affording food, clothing, housing, major items such as furniture/household equipment, leisure activities, and bills. It represents an undesirable mismatch between income and the combination of expenses and accumulated debt. In this way, financial strain does not represent objective measures of socioeconomic status (SES), but rather income inadequacy relative to expenses.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Importantly, financial strain is related to, but distinct from, income and other traditional SES indicators. As evidence of its distinction, there is considerable variation in the severity of financial strain experienced by people of a similar income strata. Additionally, unlike traditional, objective measures of SES, financial strain is applicable to individuals of all SES strata. Heightened financial strain can negatively impact self-esteem and personal control.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Theoretical models of stress posit that the chronic stress that develops as a byproduct of financial strain can lead to poorer health outcomes, including cardiovascular disease, elevated blood pressure, overall poor physical health, and depression.
      </p>

      <div className="text-center mt-10">
        <Link
          to="/financial/chapter1"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full text-lg shadow-md transition duration-300 inline-block"
        >
          Continue to Phase 1
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
