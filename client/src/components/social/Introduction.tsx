import React from "react";

const Introduction: React.FC = () => {
  return (
    <div
      className="py-8 px-8 max-w-4xl mx-auto rounded-lg shadow-lg"
      style={{ backgroundColor: "#d2548e", color: "white" }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center">
        Introduction to Social Responsibility
      </h2>
      <p className="text-lg leading-relaxed mb-4">
        The theory of social responsibility and ethics applies in both individual and group capacities. It should be incorporated into daily actions and decisions, particularly ones that will have an effect on other persons and/or the environment. In the larger group capacity, a code of social responsibility and ethics is applied within said group as well as during interactions with another group or an individual.
      </p>
      
      <p className="text-lg leading-relaxed">
        Businesses have developed a system of social responsibility that is tailored to their company environment. If social responsibility is maintained within a company, then the employees and the environment are held equal to the company’s economics. Maintaining social responsibility within a company ensures the integrity of society and the environment are protected.
      </p>
    </div>
  );
};

export default Introduction;
