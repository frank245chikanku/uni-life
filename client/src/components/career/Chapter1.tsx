import React from "react";

const CareerPhase: React.FC = () => {
  return (
    <div
      className="py-8 px-8 max-w-4xl mx-auto rounded-lg shadow-lg"
      style={{ backgroundColor: "#d2548e", color: "white" }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center">Phase 1: Understanding Career Uncertainty</h2>
      <p className="text-lg leading-relaxed mb-4">
        Career uncertainty is a common challenge that many individuals face at various points in their professional journey. 
        This uncertainty can stem from a variety of factors, including changing job markets, personal doubts, or the desire for a more fulfilling career path.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        It is critical that young people build their own career awareness of not only occupational options or study pathways, but also of their feelings and the decision-making processes associated with making choices. 
        Understanding why they are choosing certain careers, or struggling to make decisions, can prompt them to explore different pathways, investigate employment market trends, or reflect further on how their own strengths and interests relate to career options.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Studies have shown that the more time young people invest in career exploration and career planning, the greater their career certainty and confidence become.
      </p>
    </div>
  );
};

export default CareerPhase;
