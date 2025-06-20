import React from "react";

const Phase4: React.FC = () => {
  return (
    <div
      className="py-10 px-8 max-w-4xl mx-auto rounded-2xl"
      style={{
        backgroundColor: "#ffffff",
        color: "#1f2937",
        boxShadow: "0 10px 25px rgba(210, 84, 142, 0.2)",
      }}
    >
      <h1 className="font-bold text-3xl mb-6 text-center text-[#050505]">
        Talking About Integrity
      </h1>

      <p className="text-lg leading-relaxed mb-4">
        Integrity means being honest and having strong moral principles. A person with integrity behaves ethically and does the right thing, even behind closed doors. Having integrity means that you are honest, ethical, and follow defined moral principles.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        Integrity at work is about even more than honesty and respect. If an organization has a true culture of integrity, employees take their commitments seriously, are proactive when they don’t understand their responsibilities, and ultimately are accountable for their results. As a result, the business thrives.
      </p>

      <h2 className="font-semibold text-2xl mt-6 mb-4 text-[#050505]">
        Most Common Traits of a Person with Integrity
      </h2>

      <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
        <li>Expressing gratitude for others</li>
        <li>Valuing honesty and openness</li>
        <li>Taking responsibility and accountability for actions, good and bad</li>
        <li>Respecting yourself and others, no matter where you are</li>
        <li>Helping those in need without sacrificing your own health</li>
        <li>Demonstrating reliability and trustworthiness</li>
        <li>Showing patience and flexibility, even when unexpected obstacles show up</li>
      </ul>
    </div>
  );
};

export default Phase4;
