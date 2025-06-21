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
        Introduction to Academic Integrity
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        Academic Integrity, much like personal integrity, is a reflection of a student’s
        character. The purpose of higher education is to provide the opportunity for students to
        learn and gain knowledge that supports whatever career field they choose.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        To learn, students must be actively engaged, and this often includes navigating
        difficult courses and challenging situations. It is those challenges that often create
        the test of individual character.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        How will you respond when you have not prepared appropriately or managed time wisely?
        When you have been struggling with course content, or navigating personal circumstances
        that interfere with focus or commitment?
      </p>

      <p className="text-lg leading-relaxed mb-6">
        What decisions will you make in these situations? The answer will define your academic
        integrity — and ultimately, your academic legacy.
      </p>

      <div className="text-center mt-10">
        <Link
          to="/academics/chapter1"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full text-lg shadow-md transition duration-300 inline-block"
        >
          Continue to Phase 1
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
