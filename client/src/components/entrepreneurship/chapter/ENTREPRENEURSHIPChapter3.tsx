import React, { useState } from "react";

const entrepreneurshipChapters = [
  {
    title: "Bet on the Unseen",
    content: `The idea of "betting on the unseen" encourages students and aspiring entrepreneurs to invest in potential and possibilities that are not immediately evident. This concept, often explored in books on innovation and success, highlights the importance of believing in ideas, talents, or opportunities that may not yet have tangible proof of success. A powerful real-life scenario is the story of startups like Airbnb, which initially faced skepticism for their unconventional model of home-sharing. Investors who bet on the unseen potential of this concept reaped extraordinary rewards as the company transformed an unproven idea into a global phenomenon.

For students, this philosophy inspires them to trust their vision, talents, and the value of hard work, even when the outcome is uncertain. It means believing in their ability to grow, taking calculated risks, and recognizing opportunities where others see none. Betting on the unseen is not about blind faith but about having the courage to pursue what others might overlook and the patience to see it through. This mindset fosters creativity, resilience, and the ability to thrive in uncharted territories, reminding students that today's unseen can become tomorrow's success story.`,
  },
  {
    title: "Don’t Be Fooled by Randomness",
    content: `The idea of not being fooled by randomness emphasizes the importance of recognizing the role of chance in outcomes, especially in areas like success, failure, and decision-making. Often, people attribute positive results to skill or strategy without acknowledging the impact of luck or unpredictable factors.

For instance, someone might experience significant success in the stock market or a business venture, not because of superior skill, but due to favorable circumstances beyond their control. Misinterpreting such randomness can lead to overconfidence and flawed decision-making.

For students and aspiring entrepreneurs, understanding this concept is vital. It encourages a focus on building resilient strategies that can withstand uncertainty and unpredictable events. It also fosters humility, as recognizing the role of luck prevents one from becoming complacent or overly reliant on what worked in the past. Instead of being misled by random success, individuals are encouraged to critically evaluate outcomes, make thoughtful decisions, and prepare for a range of possibilities. 

This mindset helps in navigating the complexities of life and building sustainable paths to success.`,
  },
  {
    title: "Fail Fast, Fail Smart",
    content: `This approach suggests that failure, rather than being avoided, should be embraced as a critical part of the learning process. The idea is to experiment, identify what doesn’t work, and pivot or adapt without wasting excessive time or resources. For instance, in the world of startups, launching a minimum viable product (MVP) to test assumptions allows entrepreneurs to gather feedback, recognize mistakes, and refine their approach before committing fully.

Failing smart means analyzing what went wrong, extracting lessons, and applying those insights to future endeavors. It’s about taking calculated risks, ensuring that setbacks are manageable, and leveraging them for improvement. By adopting this mindset, individuals cultivate resilience, adaptability, and the ability to innovate in the face of challenges, setting a foundation for long-term success.`,
  },
  {
    title: "Plan for Asymmetric Payoffs",
    content: `Thinkers who explore decision-making under uncertainty emphasize that success often hinges not on playing it safe but on identifying high-reward scenarios where losses are limited but gains can be exponential.

For instance, in venture capitalism, investors often back multiple startups knowing most may fail, but a single success can yield returns that far surpass the initial investment. This idea also applies to students or professionals, where taking calculated risks—like pursuing unconventional career paths or ambitious projects—might feel uncertain but holds the potential for outsized rewards.

The theory encourages individuals to think strategically, allocate resources wisely, and remain open to possibilities that offer transformative outcomes. It’s a mindset shift that values bold but thoughtful decision-making, ensuring that efforts are aligned with opportunities capable of delivering profound impact. Planning for asymmetric payoffs teaches resilience, strategic thinking, and the courage to embrace uncertainty for significant long-term gains.`,
  },
  {
    title: "Iterate Until You Get It Right",
    content: `Success doesn’t come from one perfect attempt but from multiple iterations—refining, learning from mistakes, and making adjustments along the way. Many authors who focus on the startup world emphasize this iterative process, pointing out that businesses and products rarely succeed in their first version. Instead, they evolve based on feedback, testing, and adjustments to better meet the needs of users or customers.

This concept is crucial in both academic and personal growth. The process of iteration allows individuals to learn from failures, refine their approaches, and improve with each step. It’s about resilience and not being discouraged by early setbacks, but rather seeing them as part of the journey toward mastery. This approach fosters a growth mindset, where mistakes are viewed as opportunities to improve rather than obstacles.

Whether it’s refining a project, mastering a skill, or navigating challenges, the key is persistence—keeping at it, making small, thoughtful changes, and iterating until the right solution is found. This process is what leads to eventual success and expertise, not perfection at the start.`,
  }
];

const ENTREPRENEURSHIPChapter3Reader: React.FC = () => {
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
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
        <div
          className="bg-pink-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div>
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

export default ENTREPRENEURSHIPChapter3Reader;
