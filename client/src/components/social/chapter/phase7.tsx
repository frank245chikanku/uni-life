import React from 'react';

const Phase7: React.FC = () => {
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
        Order and Chaos
      </h1>
      <p className="text-lg leading-relaxed mb-4">
        Life is a constant interplay between order and chaos, two forces that shape your existence and potential for growth. Order represents structure,
        predictability, and stability—the foundation of your routines and the mastery of what you already know. Chaos, on the other hand, is the realm of the unknown,
        where uncertainty and opportunity reside, offering the chance to learn, grow, and transform.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        As students, your task is to find a balance between these forces. Too much order leads to stagnation, while too much chaos breeds confusion and overwhelm. True growth occurs when you step into chaos with courage,
        armed with the stability that order provides, transforming the unknown into new strengths and competencies.
      </p>
      <p className="text-lg leading-relaxed">
        In navigating this dynamic, you not only build yourself but also discover meaning and purpose, creating a life that is both stable and adventurous.
      </p>
    </div>
  );
};

export default Phase7;
