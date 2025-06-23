import React from "react";

const Phase3: React.FC = () => {
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
        Recognize Subtle Biases
      </h2>
      <p className="text-lg leading-relaxed">
        These biases, often unconscious, can shape our perceptions and interactions in ways that we may not immediately recognize. Whether based on race, gender, age, or other factors, subtle biases influence decision-making, communication, and judgment in everyday life. For students, this means being aware of the ways in which their own biases might affect how they engage with peers, instructors, or the learning environment.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        Acknowledging these biases allows individuals to confront and challenge them, creating a more inclusive and equitable atmosphere for everyone. By developing the ability to recognize subtle biases, we can become more open-minded, empathetic, and intentional in our actions, ensuring that our decisions are based on fairness rather than ingrained assumptions or stereotypes.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        This self-awareness not only benefits personal growth but also contributes to creating more diverse and supportive communities, where all individuals are given the opportunity to thrive without being unconsciously judged or limited by bias.
      </p>
    </div>
  );
};

export default Phase3;
