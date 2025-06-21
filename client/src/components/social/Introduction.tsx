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
        Introduction to Social Responsibility
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        The theory of social responsibility and ethics applies in both individual and group capacities. It should be incorporated into daily actions and decisions, particularly ones that will have an effect on other persons and/or the environment. In the larger group capacity, a code of social responsibility and ethics is applied within said group as well as during interactions with another group or an individual.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Businesses have developed a system of social responsibility that is tailored to their company environment. If social responsibility is maintained within a company, then the employees and the environment are held equal to the company’s economics. Maintaining social responsibility within a company ensures the integrity of society and the environment are protected.
      </p>

      <div className="text-center mt-10">
        <Link
          to="/social/chapter1"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full text-lg shadow-md transition duration-300 inline-block"
        >
          Continue to Phase 1
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
