import React from "react";

const Phase4: React.FC = () => {
  return (
    <div
      className="py-8 px-8 max-w-4xl mx-auto rounded-lg shadow-lg"
      style={{ backgroundColor: "#d2548e", color: "white" }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center">
        Phase 4: Start Small, Learn Fast
      </h2>
      <p className="text-lg leading-relaxed">
        Successful companies start small after thinking big. Rather than jumping on the bandwagon for one potentially big product, they break the idea down into smaller pieces for testing. They don’t allow themselves to make decisions solely on intuition or lock in on financial projections based on wishful thinking. They defer important decisions until they have real data.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        Companies that learn fast take a scientific approach to innovation. They take the attitude that a demo is worth more than thousands of pages of business plans. They conduct extensive, inexpensive prototyping before they even get to the pilot phase—let alone the big rollout—so they can gather comprehensive information and quickly analyze both what’s working and what isn’t. They also don’t fall in love with their own ideas. Successful companies develop the institutional discipline to keep on asking the tough questions and are ready to set aside or alter projects based on what they learn, not what they hope.
      </p>
    </div>
  );
};

export default Phase4;
