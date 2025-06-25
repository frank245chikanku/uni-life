import React, { useState } from "react";

const entrepreneurshipChapters = [
  {
    title: "Phase 1: Understanding Entrepreneurship Uncertainty",
    content: `Uncertainty is a challenge that all startups face at some point, whether it's due to changes in the industry, environment, or economy. Business risks can't always be predicted, but business leaders can best prepare for them by developing strategies that can apply to a range of possible outcomes.

Successful entrepreneurs understand that change is an inherent part of the business landscape. They are not only open to change but also embrace it. Instead of fearing disruption, they actively seek ways to innovate and stay ahead of the curve.

Agile thinking is the hallmark of entrepreneurial success in uncertain times. Entrepreneurs are quick to adapt their strategies and pivot when necessary. This flexibility allows them to respond effectively to unexpected challenges and capitalize on emerging trends.

While entrepreneurs are often seen as risk-takers, it's important to note that they take calculated risks. They assess potential outcomes, weigh the pros and cons, and make informed decisions. This strategic approach to risk-taking minimizes the negative impact of uncertainties.

Uncertainty is not a barrier but a backdrop against which entrepreneurs create their success stories. By embracing change, fostering innovation, and maintaining a growth mindset, entrepreneurs thrive in even the most unpredictable environments. They remind us that uncertainty is not to be feared but welcomed as an opportunity for growth and innovation.`,
  },
  {
    title: "Phase 2: The Power of Contrarian Thinking",
    content: `Contrarian thinkers often excel at identifying market gaps and untapped opportunities that others may overlook. By adopting an innovative approach, these entrepreneurs bring about groundbreaking solutions and disrupt industries.

While contrarian thinking can lead to groundbreaking success, it is not without its challenges. The resilience of contrarian thinkers in the face of skepticism and criticism is crucial. Balancing contrarianism with pragmatism, learning from failure, and iterating on ideas are essential components of navigating the complexities that arise when challenging conventional wisdom.

Contrarian thinking emerges as a powerful tool for those seeking to redefine norms and uncover hidden opportunities. By questioning assumptions and challenging the status quo, startups can navigate uncharted territory, innovate, and thrive in unexpected ways. Embracing contrarian thinking may well be the key to unlocking the next wave of groundbreaking success within the startup community. It's the daring ones who ask, "What if?" that often lead the way to a future filled with untapped potential.`,
  },
  {
    title: "Phase 3: Prepare for Black Swan Events",
    content: `Whether environmental, economic, political, societal, or technological in nature, ‘black swan’ events are almost impossible to predict and often bring massive repercussions. In an age of economic and political interconnectedness, unforeseen events, even in remote locations, can cause havoc for businesses and financial institutions if not managed properly.

Traditional crisis management plans, public relations strategies, and supply chain risk management may fall short when these events surface, but organisations must respond or face being overwhelmed. When planning for the unexpected, there is clearly a line to be drawn. Some possibilities are just too remote to justify the expense in time, money, and human resources, and at some point boards must assess the cost benefits of attempting to predict the unpredictable.`,
  },
  {
    title: "Phase 4: Start Small, Learn Fast",
    content: `Successful companies start small after thinking big. Rather than jumping on the bandwagon for one potentially big product, they break the idea down into smaller pieces for testing. They don’t allow themselves to make decisions solely on intuition or lock in on financial projections based on wishful thinking. They defer important decisions until they have real data.

Companies that learn fast take a scientific approach to innovation. They take the attitude that a demo is worth more than thousands of pages of business plans. They conduct extensive, inexpensive prototyping before they even get to the pilot phase—let alone the big rollout—so they can gather comprehensive information and quickly analyze both what’s working and what isn’t. They also don’t fall in love with their own ideas. Successful companies develop the institutional discipline to keep on asking the tough questions and are ready to set aside or alter projects based on what they learn, not what they hope.`,
  },
  {
    title: "Phase 5: Create a Monopoly Through Innovation",
    content: `Creating a monopoly through innovation means introducing new ideas or products that are so unique they give a company control over a market. Patents help protect these ideas for a time, encouraging creativity and investment in new technologies. For example, companies like AT&T used their innovations to grow industries, while places like Silicon Valley show how innovation can create powerful businesses.

However, it’s important for companies to keep improving and for governments to ensure fair competition so that monopolies don’t block others from succeeding.`,
  },
];

const entrepreneurshipChapterReader: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const progress = ((current + 1) / entrepreneurshipChapters.length) * 100;

  const nextChapter = () => {
    if (current < entrepreneurshipChapters.length - 1) setCurrent(current + 1);
  };

  const prevChapter = () => {
    if (current > 0) setCurrent(current - 1);
  };

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
    <div className="max-w-4xl mx-auto py-10 px-6 h-[calc(100vh-4rem)] flex flex-col">
      <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
        <div
          className="bg-pink-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 overflow-y-scroll">
        <h2 className="text-3xl font-bold mb-4">
          {entrepreneurshipChapters[current].title}
        </h2>
        {entrepreneurshipChapters[current].content
          .split("\n\n")
          .map((para, i) => (
            <p
              key={i}
              className="mb-4 text-lg leading-relaxed whitespace-pre-wrap"
            >
              {para}
            </p>
          ))}
      </div>

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

        {current < entrepreneurshipChapters.length - 1 ? (
          <button
            onClick={nextChapter}
            className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
          >
            Next Chapter
          </button>
        ) : (
          <div className="text-center w-full mt-4">
            <p className="text-green-600 font-semibold mb-4">
              🎉 You’ve completed all chapters!
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

export default entrepreneurshipChapterReader;
