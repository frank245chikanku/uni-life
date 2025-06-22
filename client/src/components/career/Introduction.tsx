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
        Introduction to Career Uncertainty
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        It is critical that young people build their own career awareness of not only occupational options or study pathways, 
        but also of their feelings and the decision-making processes associated with making choices. 
        Understanding why they are choosing certain careers, or struggling to make decisions, can prompt them to explore different pathways, 
        investigate employment market trends, or reflect further on how their own strengths and interests relate to career options.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Studies have shown that the more time young people invest in career exploration and career planning, the greater their career certainty and confidence become.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        It is also important that young people acknowledge that making career decisions is a complex, ongoing process, 
        and that the skills and knowledge they are building through this process are beneficial to their overall career development and future employability. 
        Understanding that career decision-making will likely evoke different emotions at different times is key to managing their own wellbeing.
      </p>

      <div className="text-center mt-10">
        <Link
          to="/career/chapter1"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full text-lg shadow-md transition duration-300 inline-block"
        >
          Continue to Phase 1
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
