import React from "react";

const Phase5: React.FC = () => {
  return (
    <div
      className="py-10 px-8 max-w-4xl mx-auto rounded-2xl"
      style={{
        backgroundColor: "#ffffff",
        color: "#1f2937",
        boxShadow: "0 10px 25px rgba(210, 84, 142, 0.2)",
      }}
    >
      <h1 className="font-bold text-3xl mb-6 text-center text-[#b83260]">
        Understanding Plagiarism
      </h1>
      <p className="text-lg leading-relaxed mb-4">
        Plagiarism can also include re-using your own work without citation. Under the regulations for examinations, intentional or reckless plagiarism is a disciplinary offence.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        The necessity to acknowledge others’ work or ideas applies not only to text but also to other media, such as computer code, illustrations, and graphs...
      </p>
      <p className="text-lg leading-relaxed">
        The best way of avoiding plagiarism is to learn and employ the principles of good academic practice from the beginning of your university career...
      </p>
    </div>
  );
};

export default Phase5;
