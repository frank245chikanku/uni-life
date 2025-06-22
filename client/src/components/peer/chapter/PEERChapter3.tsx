import React, { useState } from "react";

const chapters = [
  {
    title: "Finding Your Voice",
    content: `When you find your voice, you don’t find some new thing inside of you; instead, you find a little more of you.
You find a little more freedom to speak, express, and to let yourself be heard. You find that your voice isn’t 
anywhere other than inside of you or anyone else than who you are.

You’ll read and hear people talk about developing your voice. It’s true: yes, you can develop your voice — 
how you speak and write — and yes, the more you use it, the better you will get at speaking up. But don’t look 
for or expect your voice to be anyone other than you, and don’t look for or expect it to say anything other 
than what you have to say.

The most important question to consider when you don’t feel like you’ve found your voice is: what are the stories 
and who are the voices that keep you from speaking? If you don’t feel free to speak — and many of us don’t — there 
are reasons you feel that way. Those stories need to be told, and the lies within them need to be challenged.`
  },
  {
    title: "Phase 2: The Pull of the Crowd",
    content: `The pull of the crowd is a profound phenomenon that underscores the power of collective influence over individual behavior. 
"The Pull of the Crowd" refers to the psychological, social, and cultural forces that influence individuals when they become part of a group.

The concept of the crowd extends to virtual spaces, where online platforms amplify group dynamics. Social media enables the rapid spread of ideas, 
trends, and emotions, creating digital crowds that influence behaviors on a global scale. While the collective voice of such groups can be a 
powerful tool for innovation and advocacy, it also poses challenges, including the spread of misinformation and the suppression of dissenting opinions.

Understanding the pull of the crowd involves recognizing the balance between its capacity to unify and inspire and its potential to overwhelm 
individual autonomy and critical judgment.`
  },
  {
    title: "Phase 3: Mapping Your Social Circle",
    content: `Mapping your social circle is a powerful exercise to understand the relationships that shape your personal and professional life.
By visualizing your network, you can identify the individuals who influence, support, or challenge you, as well as the gaps in your connections.

This process often begins by categorizing relationships into groups such as family, close friends, acquaintances, colleagues, and mentors. 
Each group represents a unique layer of influence and interaction, offering insights into how these connections contribute to your growth, 
well-being, and aspirations.

Through mapping, you can also evaluate the balance and diversity within your social circle. Are you surrounded by individuals who encourage your 
goals, or is there an over-reliance on certain types of relationships?`
  },
  {
    title: "Phase 4: Crafting Your No",
    content: `A well-crafted “no” often includes a concise explanation, if necessary, and an acknowledgment of the other person’s needs or feelings.
For example, instead of a curt “I can’t do this,” you might say, “I appreciate the opportunity, but I need to focus on my current commitments.” 
This approach communicates your boundaries while maintaining respect and consideration.

By learning to craft your “no” thoughtfully, you empower yourself to protect your time and energy without damaging your relationships.`
  },
  {
    title: "Phase 5: The Influence Spectrum",
    content: `The influence spectrum serves as a framework for understanding the different ways power and influence operate in human interactions,
from the most positive and collaborative forms to those that are more coercive or harmful. By recognizing where different tactics fall on this spectrum,
individuals can navigate their personal and professional relationships more effectively,
ensuring they are both ethical in their approach and aware of the potential impacts of their influence.`
  }
];

const PEERChapter3Reader: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const progress = ((current + 1) / chapters.length) * 100;

  const nextChapter = () => {
    if (current < chapters.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevChapter = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const restart = () => {
    setCurrent(0);
  };

  const printPDF = () => {
    const currentChapter = chapters[current];
    const contentToPrint = `
      <div>
        <h2>${currentChapter.title}</h2>
        ${currentChapter.content
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
            <title>${currentChapter.title}</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                padding: 40px;
                line-height: 1.7;
                color: #1f2937;
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
          <body>
            ${contentToPrint}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      {/* Progress Bar */}
      <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
        <div
          className="bg-pink-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Content */}
      <div
        className="py-10 px-8 max-w-4xl mx-auto rounded-2xl"
        style={{
          backgroundColor: "#ffffff",
          color: "#1f2937",
          boxShadow: "0 10px 25px rgba(210, 84, 142, 0.2)",
        }}
      >
        <h2 className="font-bold text-3xl mb-6 text-center text-[#050505]">
          {chapters[current].title}
        </h2>
        {chapters[current].content.split("\n\n").map((para, idx) => (
          <p key={idx} className="mb-4 text-lg leading-relaxed whitespace-pre-wrap">
            {para}
          </p>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-6 flex justify-between items-center flex-wrap gap-2">
        <button
          onClick={prevChapter}
          disabled={current === 0}
          className={`${current === 0
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

        {current < chapters.length - 1 ? (
          <button
            onClick={nextChapter}
            className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
          >
            Next Chapter
          </button>
        ) : (
          <div className="text-center w-full mt-4">
            <p className="text-green-600 font-semibold mb-4">
              🎉 You’ve completed all phases!
            </p>
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

export default PEERChapter3Reader;
