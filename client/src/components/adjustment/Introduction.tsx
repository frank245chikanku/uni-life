import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Introduction: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="py-10 px-8 max-w-4xl mx-auto rounded-2xl h-[calc(100vh-4rem)] overflow-y-scroll"
      style={{
        backgroundColor: "#ffffff",
        color: "#1f2937",
        boxShadow: "0 10px 25px rgba(210, 84, 142, 0.2)",
      }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center text-[#050505]">
        Introduction to Adjustment
      </h2>
      <p className="text-lg leading-relaxed">
        Adjustment is the process through which individuals or systems modify their behavior, thoughts, or operations to effectively respond to changing circumstances, environments, or challenges. It is a vital aspect of human experience, enabling individuals to navigate transitions and maintain balance in personal, social, or professional contexts.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        In psychology, adjustment is often associated with achieving harmony between one’s needs and external demands, contributing to mental well-being and effective functioning. In broader contexts, such as organizations or societies, adjustment reflects adaptability and resilience, ensuring continuity and progress amid change. The concept underscores the importance of flexibility and problem-solving as essential tools for growth and success.
      </p>
      <div className="text-center mt-10">
        <Link
          to="/adjustment/chapter1"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full text-lg shadow-md transition duration-300 inline-block"
        >
          Continue to Phase 1
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
