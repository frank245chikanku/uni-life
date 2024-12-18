import React from "react";

const Introduction: React.FC = () => {
  return (
    <div 
      className="py-8 px-8 max-w-4xl mx-auto rounded-lg shadow-lg" 
      style={{ backgroundColor: "#d2548e", color: "white" }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center">
        Introduction to Academic Integrity
      </h2>
      <p className="text-lg leading-relaxed">
        Academic Integrity, much like personal integrity, is a reflection of a student’s character.
        The purpose of higher education is to provide the opportunity for students to learn and gain
        knowledge that supports whatever career field they choose. To learn, students must be actively 
        engaged, and this often includes navigating difficult courses and challenging situations. It is 
        those challenges that often create the test of individual character. 
        <br />
        <br />
        How will you respond when you have not prepared appropriately or managed time wisely? When you 
        have been struggling throughout with course content, or are navigating personal circumstances 
        that interfere with focus or course commitment? How will you respond when you believe your peers 
        are engaging in dishonest behavior, and you are falling behind yourself? What decisions will you 
        make in these situations, and how will this define your academic integrity?
      </p>
    </div>
  );
};

export default Introduction;
