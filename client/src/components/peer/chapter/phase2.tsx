import React from 'react';

const Phase2: React.FC = () => {
  return (
    <div
      className="py-8 px-8 max-w-4xl mx-auto rounded-lg shadow-lg"
      style={{ backgroundColor: '#5a81b8', color: 'white' }}
      
    >
      <h1 className="font-bold text-3xl mb-6 text-center">
        Active Listening Skills
      </h1>
      <p className="text-lg leading-relaxed">
        Active listening is a communication skill that involves going beyond simply hearing the words that another person speaks. 
        It's about actively processing and seeking to understand the meaning and intent behind them. 
        It requires being a mindful and focused participant in the communication process. 
      </p>
      <p className="text-lg leading-relaxed mt-4">
        In communication, active listening is important because it keeps you engaged with your conversation partner in a positive way. 
        It also makes the other person feel heard and valued. This skill is the foundation of a successful conversation in any setting—whether 
        at work, at home, or in social situations.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        Active listening techniques include:
      </p>
      <ul className="list-disc list-inside text-lg mt-4">
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
