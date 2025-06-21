import React from 'react';

const Phase2: React.FC = () => {
  return (
    <div
      className="py-10 px-8 max-w-4xl mx-auto rounded-2xl"
      style={{
        backgroundColor: "#ffffff",
        color: "#1f2937",
        boxShadow: "0 10px 25px rgba(210, 84, 142, 0.2)",
      }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center text-[#050505]">
        Active Listening Skills
      </h2>
      <p className="text-lg leading-relaxed mb-4">
        Active listening is a communication skill that involves going beyond simply hearing the words that another person speaks. 
        It's about actively processing and seeking to understand the meaning and intent behind them. 
        It requires being a mindful and focused participant in the communication process. 
      </p>
      <p className="text-lg leading-relaxed mb-4">
        In communication, active listening is important because it keeps you engaged with your conversation partner in a positive way. 
        It also makes the other person feel heard and valued. This skill is the foundation of a successful conversation in any setting—whether 
        at work, at home, or in social situations.
      </p>
      <p className="text-lg leading-relaxed mb-4  font-bold text-[#050505]">
      
        Active listening techniques include:
      </p>
      <ul className="list-disc list-inside text-lg">
        <li>Being fully present in the conversation</li>
        <li>Showing interest by practicing good eye contact</li>
        <li>Noticing (and using) non-verbal cues</li>
        <li>Asking open-ended questions to encourage further responses</li>
        <li>Paraphrasing and reflecting back what has been said</li>
        <li>Listening to understand rather than to respond</li>
        <li>Withholding judgment and advice</li>
      </ul>
    </div>
  );
};

export default Phase2;
