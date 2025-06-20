import React from "react";

const Phase2: React.FC = () => {
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
        The Role of Faculty
      </h1>
      <p className="text-lg leading-relaxed mb-4">
        The roles and responsibilities of college and university faculty members are closely tied to the central functions of higher education. Correspondingly, college and university faculty members undertake research, teaching, and service roles to carry out the academic work of their respective institutions. Each of these roles enables faculty members to generate and disseminate knowledge to peers, students, and external audiences.
      </p>
      <p className="text-lg leading-relaxed">
        The balance among teaching, research, and service, however, differs widely across institution types and by terms of the faculty member's appointment. The teaching role of faculty members reflects their centrality in addressing the primary educational mission among colleges and universities. As faculty members teach, they disseminate and impart basic or applied knowledge to students and assist students with the learning process and applying the knowledge.
      </p>
    </div>
  );
};

export default Phase2;
