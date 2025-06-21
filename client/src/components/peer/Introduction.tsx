import React from "react";
import { Link } from "react-router-dom";

const Introduction: React.FC = () => {
  return (
    <div
      className="py-10 px-8 max-w-4xl mx-auto rounded-2xl"
      style={{
        backgroundColor: "#ffffff",
        color: "#1f2937",
        boxShadow: "0 10px 25px rgba(210, 84, 142, 0.2)",
      }}
    >
      <h1 className="font-bold text-3xl mb-10 text-center text-[#050505]">
        Introduction to Peer Pressure
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        Peer pressure or influence is a common occurrence in university life. Naturally, those
        around you influence your life in one way or the other. You were not born with your own
        character or lifestyle. The society or community around you contributes to who you are. The
        question many ask is, how influential are those people in your life? It could be positive or
        negative.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        The university community is full of people from different walks of life. And learning one
        thing or the other from your peers is part of the process. As such, peer pressure or
        influence is part of every student’s journey. Many students often find themselves in
        situations where they are pressured to conform to the expectations of their peers. It can be
        in terms of social behavior, academic performance, or lifestyle choices.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Whereas peer influence can be positive, it can also have negative consequences. Peer
        pressure or influence is a phenomenon that occurs when the opinions, behaviors, or attitudes
        of your peers influence you. As mentioned earlier, it can be positive or negative. Positive
        peer influence can help you improve your academic performance, develop social skills, and
        build self-confidence. Negative peer influence, on the other hand, can lead to unhealthy
        behaviors i.e. drug use, drinking, or reckless behavior.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        If you understand the nature of the influence, you’ll make informed decisions and avoid
        negative consequences.
      </p>

      <div className="text-center mt-10">
        <Link
          to="/peer/chapter1"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full text-lg shadow-md transition duration-300 inline-block"
        >
          Continue to Phase 1
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
