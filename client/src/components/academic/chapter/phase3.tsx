import React from "react";

const Phase3: React.FC = () => {
  return (
    <div
      className="py-10 px-8 max-w-4xl mx-auto rounded-2xl"
      style={{
        backgroundColor: "#ffffff",
        color: "#1f2937", // Tailwind's text-gray-800
        boxShadow: "0 10px 25px rgba(210, 84, 142, 0.2)", // soft pink highlight
      }}
    >
      <h1 className="font-bold text-3xl mb-6 text-center text-[#b83260]">
        Student Responsibilities
      </h1>
      <p className="text-lg leading-relaxed mb-4">
        Student responsibility occurs when students take an active part in their learning by recognizing they are accountable for their academic success. It is demonstrated when they make choices and take actions that lead them toward their goal of education.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        There are some roles and responsibilities of a student that should and need to be performed during school life. By being respectful, students contribute to a healthy learning environment and lessen distractions and disciplinary actions. They are also expected to be punctual. Being late for school creates a negative impression, which can hurt their grades. Thus, they need to maintain discipline in the classroom and understand time management.
      </p>
      <p className="text-lg leading-relaxed">
        School plays an important role in the process of socializing. An educational environment is required to ensure students gain access to quality education. To exist in such a setting, students are expected to comply with behavioral expectations and display values such as politeness, kindness, compassion, generosity, sympathy, and respect.
      </p>
    </div>
  );
};

export default Phase3;
