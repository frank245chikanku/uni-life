import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const entrepreneurshipChapters = [
  {
    title: "Phase 1: Understanding Entrepreneurship Uncertainty",
    content: `Uncertainty is a challenge that all startups face at some point, whether it's due to changes in the industry, environment, or economy. Business risks can't always be predicted, but business leaders can best prepare for them by developing strategies that can apply to a range of possible outcomes.

Successful entrepreneurs understand that change is an inherent part of the business landscape. They are not only open to change but also embrace it. Instead of fearing disruption, they actively seek ways to innovate and stay ahead of the curve.

Agile thinking is the hallmark of entrepreneurial success in uncertain times. Entrepreneurs are quick to adapt their strategies and pivot when necessary. This flexibility allows them to respond effectively to unexpected challenges and capitalize on emerging trends.

While entrepreneurs are often seen as risk-takers, it's important to note that they take calculated risks. They assess potential outcomes, weigh the pros and cons, and make informed decisions. This strategic approach to risk-taking minimizes the negative impact of uncertainties.

Uncertainty is not a barrier but a backdrop against which entrepreneurs create their success stories. By embracing change, fostering innovation, and maintaining a growth mindset, entrepreneurs thrive in even the most unpredictable environments.`,
  },
  {
    title: "Phase 2: The Power of Contrarian Thinking",
    content: `Contrarian thinkers often excel at identifying market gaps and untapped opportunities that others may overlook. By adopting an innovative approach, these entrepreneurs bring about groundbreaking solutions and disrupt industries.

While contrarian thinking can lead to groundbreaking success, it is not without its challenges. The resilience of contrarian thinkers in the face of skepticism and criticism is crucial. Balancing contrarianism with pragmatism, learning from failure, and iterating on ideas are essential components of navigating the complexities that arise when challenging conventional wisdom.

By questioning assumptions and challenging the status quo, startups can navigate uncharted territory, innovate, and thrive in unexpected ways. Embracing contrarian thinking may well be the key to unlocking the next wave of groundbreaking success.`,
  },
  {
    title: "Phase 3: Prepare for Black Swan Events",
    content: `‘Black swan’ events are almost impossible to predict and often bring massive repercussions. In an age of economic and political interconnectedness, unforeseen events, even in remote locations, can cause havoc for businesses and financial institutions.

Traditional crisis management plans, public relations strategies, and supply chain risk management may fall short when these events surface, but organisations must respond or face being overwhelmed. Boards must assess the cost benefits of attempting to predict the unpredictable.`,
  },
  {
    title: "Phase 4: Start Small, Learn Fast",
    content: `Successful companies start small after thinking big. Rather than jumping on the bandwagon for one potentially big product, they break the idea down into smaller pieces for testing. They rely on real data instead of wishful thinking.

They prototype, test, and learn quickly. This scientific approach to innovation helps identify what works and what doesn’t early on. Most importantly, they remain flexible and willing to adapt or abandon ideas based on evidence.`,
  },
  {
    title: "Phase 5: Create a Monopoly Through Innovation",
    content: `Creating a monopoly through innovation means introducing products so unique they give a company control over a market. Patents protect these ideas and encourage investment in new technologies.

However, it’s important for companies to continue improving and for governments to ensure monopolies don’t stifle competition.`,
  },
];

const EntrepreneurshipChapterReader: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const chapterMatch = location.pathname.match(/sub(\d+)/);
    if (chapterMatch) {
      const index = parseInt(chapterMatch[1]) - 1;
      if (!isNaN(index) && index >= 0 && index < entrepreneurshipChapters.length) {
        setCurrent(index);
      }
    }
  }, [location]);

  const progress = ((current + 1) / entrepreneurshipChapters.length) * 100;

  const nextChapter = () => current < entrepreneurshipChapters.length - 1 && setCurrent(current + 1);
  const prevChapter = () => current > 0 && setCurrent(current - 1);
  const restart = () => setCurrent(0);

  const printPDF = () => {
    const contentToPrint = `
      <div>
        <h2>${entrepreneurshipChapters[current].title}</h2>
        ${entrepreneurshipChapters[current].content
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
            <title>${entrepreneurshipChapters[current].title}</title>
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
    <div className="w-full h-screen py-6 px-4 md:px-6 flex flex-col">
      <div className="w-full bg-gray-300 rounded-full h-3 mb-4 md:mb-6">
        <div
          className="bg-pink-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 overflow-y-auto pb-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{entrepreneurshipChapters[current].title}</h2>
        {entrepreneurshipChapters[current].content.split("\n\n").map((para, i) => (
          <p
            key={i}
            className="mb-4 text-base md:text-lg leading-relaxed whitespace-pre-wrap"
          >
            {para}
          </p>
        ))}
      </div>

      <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <button
          onClick={prevChapter}
          disabled={current === 0}
          className={`w-full md:w-auto ${current === 0
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-800 text-white hover:bg-gray-900"
            } font-semibold px-6 py-2 rounded-lg shadow transition`}
        >
          Previous
        </button>

        <button
          onClick={printPDF}
          className="w-full md:w-auto bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
        >
          📄 Print / Save
        </button>

        {current < entrepreneurshipChapters.length - 1 ? (
          <button
            onClick={nextChapter}
            className="w-full md:w-auto bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
          >
            Next Chapter
          </button>
        ) : (
          <div className="text-center w-full">
            <p className="text-green-600 font-semibold mb-4">🎉 You’ve completed all chapters!</p>
            <button
              onClick={restart}
              className="w-full md:w-auto bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
            >
              🔁 Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EntrepreneurshipChapterReader;
