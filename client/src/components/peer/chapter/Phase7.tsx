import React from 'react';

const Phase7: React.FC = () => {
  return (
    <div
      className="py-10 px-8 max-w-4xl mx-auto rounded-2xl"
      style={{
        backgroundColor: '#ffffff',
        color: '#1f2937',
        boxShadow: '0 10px 25px rgba(210, 84, 142, 0.2)',
      }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center text-[#050505]">
        Mapping Your Social Circle
      </h2>
      <p className="text-lg leading-relaxed mb-4">
        Mapping your social circle is a powerful exercise to understand the relationships that shape your personal and professional life.
        By visualizing your network, you can identify the individuals who influence, support, or challenge you, as well as the gaps in your connections.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        This process often begins by categorizing relationships into groups such as family, close friends, acquaintances, colleagues, and mentors. 
        Each group represents a unique layer of influence and interaction, offering insights into how these connections contribute to your growth, 
        well-being, and aspirations.
      </p>
      <p className="text-lg leading-relaxed">
        Through mapping, you can also evaluate the balance and diversity within your social circle. Are you surrounded by individuals who encourage your 
        goals, or is there an over-reliance on certain types of relationships?
      </p>
    </div>
  );
};

export default Phase7;
