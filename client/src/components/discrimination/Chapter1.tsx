import React from "react";

const Phase1: React.FC = () => {
  return (
    <div
      className="py-8 px-8 max-w-4xl mx-auto rounded-lg shadow-lg"
      style={{ backgroundColor: "#d2548e", color: "white" }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center">
        Phase 1: Understanding Discrimination and Bias
      </h2>
      <p className="text-lg leading-relaxed">
        Discrimination is the unjust treatment of people based on the groups or classes they belong to. 
        Often, discrimination stems from biases or ignorance: when we fear or misunderstand someone who is different from us, we treat them differently.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        Discrimination happens at a personal level, of course, but it reflects larger social biases and norms. 
        Because of this, it is common to pick up social and cultural patterns when we are young and not notice the various ways in which discrimination is perpetuated by our cultures and major institutions. 
        Since we grow up with it and it can feel “normal,” it’s sometimes hard to step back and see all the ways discrimination impacts us—as people experiencing discrimination and people who need to examine our own biases.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        People can discriminate against others due to one or more characteristics, including but not limited to age, race, and weight. 
        Even characteristics that are not immediately visible or apparent to other people, such as religion, immigration status, gender, sexual orientation, or disability, can be the focus of discrimination. 
        Pregnant people or people who are parents may also experience discrimination by others.
      </p>
    </div>
  );
};

export default Phase1;
