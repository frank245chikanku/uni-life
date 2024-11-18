import React from "react";

const Introduction: React.FC = () => {
  return (
    <div
      className="py-8 px-8 max-w-4xl mx-auto rounded-lg shadow-lg"
      style={{ backgroundColor: "#d2548e", color: "white" }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center">
        Introduction to Entrepreneurship Uncertainty
      </h2>
      <p className="text-lg leading-relaxed">
        Entrepreneurship is a process that involves some degree of uncertainty,
        and thus the ability of entrepreneurs to interpret and respond to
        uncertainty is often what determines the degree of success or failure
        achieved by the venture.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        In fact, the notion that entrepreneurs make decisions and subsequently
        act in the face of inherently uncertain, even unknowable, futures is
        one of the most closely held assumptions in entrepreneurship.
      </p>
    </div>
  );
};

export default Introduction;
