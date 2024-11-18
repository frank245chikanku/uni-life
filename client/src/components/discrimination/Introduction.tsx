import React from "react";

const Introduction: React.FC = () => {
  return (
    <div
      className="py-8 px-8 max-w-4xl mx-auto rounded-lg shadow-lg"
      style={{ backgroundColor: "#d2548e", color: "white" }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center">
        Introduction to Discrimination and Bias
      </h2>
      <p className="text-lg leading-relaxed">
        Discrimination is the unfair or prejudicial treatment of people and groups based on characteristics such as race, gender, age, or sexual orientation. 
        That’s the simple answer. But explaining why it happens is more complicated.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        The human brain naturally puts things in categories to make sense of the world. 
        Very young children quickly learn the difference between boys and girls, for instance. 
        But the values we place on different categories are learned—from our parents, our peers, and the observations we make about how the world works. 
        Often, discrimination stems from fear and misunderstanding.
      </p>
    </div>
  );
};

export default Introduction;
