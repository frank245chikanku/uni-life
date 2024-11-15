import React from "react";

const Phase2: React.FC = () => {
  return (
    <div
      className="py-8 px-8 max-w-4xl mx-auto rounded-lg shadow-lg"
      style={{ backgroundColor: "#d2548e", color: "white" }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center">
        Phase 2: Who Are Your Peers?
      </h2>
      <p className="text-lg leading-relaxed mb-4">
        Values serve as guiding principles, motivating specific behaviors, and actions. Peers spend a considerable amount of time together, thus offering a unique platform for the acquisition and development of values.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        Peer relationships offer a unique context for the development of values during adolescence. First, peers spend a significant amount of time together. They engage in shared activities and establish strong emotional bonds. Adolescents have ample opportunity to observe, learn from, and be influenced by their peers' values and behaviors.
      </p>

      <p className="text-lg leading-relaxed">
        Second, peer relationships are characterized by a sense of egalitarianism, where individuals of similar age and status interact on relatively equal footing. This equality encourages open dialogue, perspective sharing, and the exchange of values. Adolescents engage in discussions, debates, and negotiations with peers, helping them challenge and refine their own values while considering alternative viewpoints.
      </p>
    </div>
  );
};

export default Phase2;
