import React from "react";
import { Link } from "react-router-dom";

const Introduction: React.FC = () => {
  return (
    <div
    className="py-10 px-8 max-w-4xl mx-auto rounded-2xl"
    style={{
      backgroundColor: "#ffffff",
      color: "#1f2937",
      boxShadow: "0 10px 25px rgba(210, 84, 142, 0.2)",
    }}
  >
    <h1 className="font-bold text-3xl mb-10 text-center text-[#050505]">
        Introduction to Entrepreneurship Uncertainty
      </h1>
      <p className="text-lg leading-relaxed">
        Entrepreneurship is a process that involves some degree of uncertainty,
        and thus the ability of entrepreneurs to interpret and respond to
        uncertainty is often what determines the degree of success or failure
        achieved by the venture.
      </p>
      <div className="text-center mt-10">
        <Link
          to="/entrepreneurship/chapter1/sub1"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full text-lg shadow-md transition duration-300 inline-block"
        >
          Continue to Phase 1   
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
