import React from "react";

const Introduction: React.FC = () => {
  return (
    <div
      className="py-8 px-8 max-w-4xl mx-auto rounded-lg shadow-lg"
      style={{ backgroundColor: "#d2548e", color: "white" }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center">Introduction to Career Uncertainty</h2>
      <p className="text-lg leading-relaxed mb-4">
        It is critical that young people build their own career awareness of not only occupational options or study pathways, 
        but also of their feelings and the decision-making processes associated with making choices. 
        Understanding why they are choosing certain careers, or struggling to make decisions, can prompt them to explore different pathways, 
        investigate employment market trends, or reflect further on how their own strengths and interests relate to career options.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Studies have shown that the more time young people invest in career exploration and career planning, the greater their career certainty and confidence become.
      </p>
      <p className="text-lg leading-relaxed">
        It is also important that young people acknowledge that making career decisions is a complex, ongoing process, 
        and that the skills and knowledge they are building through this process are beneficial to their overall career development and future employability. 
        Understanding that career decision-making will likely evoke different emotions at different times is key to managing their own wellbeing.
      </p>
    </div>
  );
};

export default Introduction;
