import React from "react";

const Phase3: React.FC = () => {
  return (
    <div
      className="py-8 px-8 max-w-4xl mx-auto rounded-lg shadow-lg"
      style={{ backgroundColor: "#d2548e", color: "white" }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center">
        Phase 3: Goal-Setting Made Easy
      </h2>
      <p className="text-lg leading-relaxed">
        The first step in setting personal goals is to consider what you want to achieve in your lifetime (or at least, by a significant and distant age in the future). Setting lifetime goals gives you the overall perspective that shapes all other aspects of your decision-making.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        To give a broad, balanced coverage of all important areas in your life, try to set goals in some of the following categories (or in other categories of your own, where these are important to you):
      </p>
      <ul className="list-disc pl-5 mt-4 text-lg leading-relaxed">
        <li><strong>Career:</strong> What level do you want to reach in your career, or what do you want to achieve?</li>
        <li><strong>Financial:</strong> How much do you want to earn, by what stage? How is this related to your career goals?</li>
        <li><strong>Education:</strong> Is there any knowledge you want to acquire in particular? What information and skills will you need to achieve other goals?</li>
        <li><strong>Family:</strong> Do you want to be a parent? If so, how are you going to be a good parent? How do you want to be seen by a partner or by members of your extended family?</li>
        <li><strong>Artistic:</strong> Do you want to achieve any artistic goals?</li>
        <li><strong>Attitude:</strong> Is any part of your mindset holding you back? Is there any part of the way you behave that upsets you? (If so, set a goal to improve your behavior or find a solution to the problem.)</li>
        <li><strong>Physical:</strong> Are there any athletic goals that you want to achieve, or do you want good health deep into old age? What steps are you going to take to achieve this?</li>
        <li><strong>Pleasure:</strong> How do you want to enjoy yourself? (You should ensure that some of your life is for you!)</li>
        <li><strong>Public Service:</strong> Do you want to make the world a better place? If so, how?</li>
      </ul>
    </div>
  );
};

export default Phase3;
