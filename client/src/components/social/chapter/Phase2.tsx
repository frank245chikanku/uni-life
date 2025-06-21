import React from 'react';

const Phase2: React.FC = () => {
  return (
    <div
      className="py-10 px-8 max-w-4xl mx-auto rounded-2xl"
      style={{
        backgroundColor: '#ffffff',
        color: '#1f2937',
        boxShadow: '0 10px 25px rgba(210, 84, 142, 0.2)',
      }}
    >
      <h1 className="font-bold text-3xl mb-6 text-center text-[#050505]">
        Philanthropy
      </h1>
      <p className="text-lg leading-relaxed mb-4">
        Philanthropy is most effective when it goes beyond mere acts of kindness to include thoughtful strategies that create long-term change.
        Simply giving without understanding the root causes of problems might provide temporary relief but fails to address systemic issues.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        An example of this balance is supporting programs that teach self-reliance, such as job training or financial literacy initiatives,
        rather than perpetuating dependency. This approach respects the dignity of recipients and helps them build their capacity to contribute positively to society.
      </p>
      <p className="text-lg leading-relaxed">
        Philanthropy is more than just helping others—it's a transformative act that reflects responsibility, competence, and the pursuit of meaning.
        It offers a way to confront the suffering and chaos of the world with courage and intent, fostering not just societal progress but also personal growth.
        By engaging in thoughtful and purposeful philanthropy, individuals contribute to building a better, more equitable world while cultivating their own character and sense of purpose.
      </p>
    </div>
  );
};

export default Phase2;
