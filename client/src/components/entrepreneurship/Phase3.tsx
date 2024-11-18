import React from "react";

const Phase3: React.FC = () => {
  return (
    <div
      className="py-8 px-8 max-w-4xl mx-auto rounded-lg shadow-lg"
      style={{ backgroundColor: "#d2548e", color: "white" }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center">
        Phase 3: Prepare for Black Swan Events
      </h2>
      <p className="text-lg leading-relaxed">
        Whether environmental, economic, political, societal, or technological in nature, 
        ‘black swan’ events are almost impossible to predict and often bring massive repercussions. 
        In an age of economic and political interconnectedness, unforeseen events, even in remote locations, 
        can cause havoc for businesses and financial institutions if not managed properly.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        Traditional crisis management plans, public relations strategies, and supply chain risk management 
        may fall short when these events surface, but organisations must respond or face being overwhelmed. 
        When planning for the unexpected, there is clearly a line to be drawn. Some possibilities are just too remote 
        to justify the expense in time, money, and human resources, and at some point boards must assess the cost benefits 
        of attempting to predict the unpredictable.
      </p>
    </div>
  );
};

export default Phase3;
