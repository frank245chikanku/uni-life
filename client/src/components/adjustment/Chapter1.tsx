import React, { useState } from "react";

const adjustmentChapters = [
  {
    title: "Phase 1: What Adjustment Means",
    content: `Adjustment can involve behavioral, emotional, or practical shifts to adapt and function effectively in different environments. Adjustments are integral to coping with life's challenges and achieving personal growth.

Adjustment enables individuals and organizations to navigate transitions, embrace innovation, and improve overall well-being. Whether in personal life, work settings, or social interactions, adjustment fosters flexibility, problem-solving, and growth, helping people and systems to thrive in a constantly evolving world.`,
  },
  {
    title: "Phase 2: Building Your Confidence",
    content: `Self-confidence is easy to spot but hard to develop. Everyone wants to be self-confident. But many don't know how to start building it.

It takes effort and a willingness to move outside your comfort zone to gain confidence. You build it piece by piece, starting with noticing what you already have and appreciating your wins, no matter how small. It doesn’t happen overnight.

You may not realize it, but people want to see you succeed. And more than ever, there are resources to help you become the most authentically confident version of yourself. We’ll discuss what self-confidence is, how to build confidence, and tips for improving your self-improvement journey.

Building self-confidence promotes personal growth that positively influences both your professional and personal life.`,
  },
  {
    title: "Phase 3: Goal-Setting Made Easy",
    content: `The first step in setting personal goals is to consider what you want to achieve in your lifetime (or at least, by a significant and distant age in the future). Setting lifetime goals gives you the overall perspective that shapes all other aspects of your decision-making.

To give a broad, balanced coverage of all important areas in your life, try to set goals in some of the following categories (or in other categories of your own, where these are important to you):

• Career: What level do you want to reach in your career, or what do you want to achieve?
• Financial: How much do you want to earn, by what stage? How is this related to your career goals?
• Education: Is there any knowledge you want to acquire in particular? What information and skills will you need to achieve other goals?
• Family: Do you want to be a parent? If so, how are you going to be a good parent? How do you want to be seen by a partner or by members of your extended family?
• Artistic: Do you want to achieve any artistic goals?
• Attitude: Is any part of your mindset holding you back? Is there any part of the way you behave that upsets you?
• Physical: Are there any athletic goals that you want to achieve, or do you want good health deep into old age? What steps are you going to take to achieve this?
• Pleasure: How do you want to enjoy yourself? (You should ensure that some of your life is for you!)
• Public Service: Do you want to make the world a better place? If so, how?`,
  },
  {
    title: "Phase 4: Stepping Into Adjustment",
    content: `Stepping into adjustment signifies the initial phase of embracing change and preparing to adapt to new situations, environments, or demands.

It involves recognizing the need for change, assessing the challenges, and taking deliberate steps toward alignment with the new circumstances.

This phase often requires self-awareness, resilience, and an openness to learning. Whether transitioning to a new job, adapting to a life event, or facing shifts in societal norms, stepping into adjustment sets the foundation for growth and stability.

It is a process that encourages individuals or systems to embrace flexibility and proactive problem-solving, leading to better coping strategies and eventual success in navigating change.`,
  },
  {
    title: "Phase 5: Crafting Your Own Path",
    content: `Let’s face it: life is full of rules. Sometimes they are explicit, like the ones that governed much of your life as a student. How to address your teachers. How to format your essays. And how not to start three consecutive sentences with the word "how." Because, let’s face it, it breaks the rules of grammar.

But more often, the rules that govern our lives are more nuanced; less black and white. They’re the rules about what you’re supposed to do with your life – from what you should study to the kind of person you should marry to where you should one day send your own kids to school.

All of these rules are intended to help you live a happier life, to enjoy more success, experience less angst, and fit in with the people around you. However, as you look towards the rest of your life, you have to be willing to challenge the rules that might otherwise limit what you do with it.

As much as people around you may want you to succeed, no one else but you is responsible for your happiness and creating your own definition of success. So as you look toward the future, don’t allow yourself to be hemmed in by the rules that others live by. Sure, it may take courage to break apart from the pack.`,
  },
];

const AdjustmentChapterReader: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const progress = ((current + 1) / adjustmentChapters.length) * 100;

  const nextChapter = () => {
    if (current < adjustmentChapters.length - 1) setCurrent(current + 1);
  };

  const prevChapter = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const restart = () => setCurrent(0);

  const printPDF = () => {
    const contentToPrint = `
      <div>
        <h2>${adjustmentChapters[current].title}</h2>
        ${adjustmentChapters[current].content
          .split("\n\n")
          .map((para) => `<p>${para}</p>`)
          .join("")}
      </div>
    `;

    const printWindow = window.open("", "", "width=800,height=600");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${adjustmentChapters[current].title}</title>
            <style>
              body {
                font-family: sans-serif;
                padding: 20px;
                line-height: 1.6;
              }
              h2 {
                font-size: 24px;
                margin-bottom: 16px;
              }
              p {
                font-size: 16px;
                margin-bottom: 12px;
              }
            </style>
          </head>
          <body>${contentToPrint}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.onload = () => {
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      };
    }
  };

  return (
    
    <div className="max-w-4xl mx-auto py-10 px-6 h-[calc(100vh-4rem)] flex flex-col">
      <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
        <div
          className="bg-pink-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 overflow-y-scroll">
        <h2 className="text-3xl font-bold mb-4">{adjustmentChapters[current].title}</h2>
        {adjustmentChapters[current].content.split("\n\n").map((para, i) => (
          <p key={i} className="mb-4 text-lg leading-relaxed whitespace-pre-wrap">
            {para}
          </p>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center flex-wrap gap-2">
        <button
          onClick={prevChapter}
          disabled={current === 0}
          className={`${
            current === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-800 text-white hover:bg-gray-900"
          } font-semibold px-6 py-2 rounded-lg shadow transition`}
        >
          Previous
        </button>

        <button
          onClick={printPDF}
          className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
        >
          📄 Print / Save
        </button>

        {current < adjustmentChapters.length - 1 ? (
          <button
            onClick={nextChapter}
            className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
          >
            Next Chapter
          </button>
        ) : (
          <div className="text-center w-full mt-4">
            <p className="text-green-600 font-semibold mb-4">🎉 You’ve completed all chapters!</p>
            <button
              onClick={restart}
              className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
            >
              🔁 Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdjustmentChapterReader;
