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
        Introduction to Discrimination and Bias
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        Discrimination is the unfair or prejudicial treatment of people and groups based on characteristics such as race, gender, age, or sexual orientation. 
        That’s the simple answer. But explaining why it happens is more complicated.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        The human brain naturally puts things in categories to make sense of the world. 
        Very young children quickly learn the difference between boys and girls, for instance. 
        But the values we place on different categories are learned—from our parents, our peers, and the observations we make about how the world works. 
        Often, discrimination stems from fear and misunderstanding.
      </p>

      <div className="text-center mt-10">
        <Link
          to="/discrimination/chapter1"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full text-lg shadow-md transition duration-300 inline-block"
        >
          Continue to Phase 1   
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
