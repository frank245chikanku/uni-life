import React from "react";

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
        Phase 2: Recognize the Reality of Bias
      </h2>
      <p className="text-lg leading-relaxed">
        Discrimination can be damaging even if you haven’t been the target of overt acts of bias. 
        Regardless of your personal experiences, it can be stressful just being a member of a group that is often discriminated against, 
        such as racial minorities or individuals who identify as lesbian, gay, bisexual, or transgender.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        The anticipation of discrimination creates its own chronic stress. People might even avoid situations where they expect they could be treated poorly, 
        possibly missing out on educational and job opportunities. Focusing on your core values, beliefs, and perceived strengths can motivate people to succeed 
        and may even buffer the negative effects of bias. Overcoming hardship can also make people more resilient and better able to face future challenges.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        One problem with discrimination is that people can internalize others’ negative beliefs, even when they’re false. You may start to believe you’re not good enough. 
        But family and friends can remind you of your worth and help you reframe those faulty beliefs.
      </p>
    </div>
  );
};

export default Phase2;
