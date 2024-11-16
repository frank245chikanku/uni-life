import React from "react";

const Phase2: React.FC = () => {
  return (
    <div
      className="py-8 px-8 max-w-4xl mx-auto rounded-lg shadow-lg"
      style={{ backgroundColor: "#d2548e", color: "white" }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center">Start with What You Know</h2>
      <p className="text-lg leading-relaxed">
        No matter how confident you are, you can still have doubts about your abilities. 
        When that happens, start with what you know and work out from there. 
        Imagine you had all the puzzle pieces spilled out on a table but didn't have the box top with the picture on it. 
        How would you put the puzzle together? Your inner voice might say, "That's too hard, I can't do it, I need the picture to help me." 
        But you know what to do: find the corner pieces, pick out the straight edge pieces, and start with what you know.
      </p>
    </div>
  );
};

export default Phase2;
