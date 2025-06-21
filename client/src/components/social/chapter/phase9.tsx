import React from 'react';

const Phase9: React.FC = () => {
  return (
    <div
      className="py-10 px-8 max-w-4xl mx-auto rounded-2xl"
      style={{
        backgroundColor: '#ffffff',
        color: '#1f2937',
        boxShadow: '0 10px 25px rgba(147, 106, 140, 0.2)',
      }}
    >
      <h1 className="font-bold text-3xl mb-6 text-center text-[#050505]">
        Finding Your Place in the Community
      </h1>
      <p className="text-lg leading-relaxed mb-4">
        Finding your place in the community, as Jordan B. Peterson might suggest, begins with taking responsibility for yourself and then extending that responsibility outward. 
        A community thrives when individuals contribute their unique skills and perspectives while also respecting the shared structure that holds it together.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        As students, your role is to identify your strengths, cultivate them with discipline, and use them to support and uplift those around you. 
        This process requires humility to learn from others, courage to confront challenges, and honesty to acknowledge where you can improve.
      </p>
      <p className="text-lg leading-relaxed">
        By striving to make meaningful contributions, you not only grow as an individual but also help build a stronger, more cohesive community—one where your efforts ripple outward,
        creating a network of trust, collaboration, and shared purpose.
      </p>
    </div>
  );
};

export default Phase9;
