import React, { useState } from "react";

const biasChapters = [
  {
    title: "Challenge the System, Not Individuals",
    content: `The idea that systems should be challenged, not individuals, is based on the idea that organizational problems are more likely to be caused by systemic issues than by individual actions.

Instead of confronting the person, confront the system. Create a process that will fix the problem, make things work the way you want them to work, and prevent yourself from future frustration. Once you know what system is needed, ask the co-worker involved to help you create a system that will work for both of you.

One such author argues that societal structures, rather than individual actions, are often the root cause of inequality, injustice, and inefficiency. Rather than focusing on tearing down individuals, the goal should be to identify and address the systemic issues that perpetuate problems.

This perspective encourages people, including students, to critically examine institutions, policies, and broader societal frameworks, rather than scapegoating individuals for failures or shortcomings. By focusing on systemic challenges, individuals can work toward creating lasting change that improves the lives of many, rather than getting bogged down in interpersonal conflicts or blaming individuals for larger, more complex issues.

This approach fosters unity, empathy, and long-term solutions, rather than perpetuating divisiveness and short-term blame. In challenging the system, we empower ourselves and others to create more equitable and effective structures for the future.`,
  },
  {
    title: "Pursue Justice, Not Revenge",
    content: `Revenge often stems from a desire for personal satisfaction or to right a perceived wrong, but it rarely leads to true healing or progress. Instead, pursuing justice involves a focus on fairness, accountability, and the long-term well-being of all parties involved.

For students and individuals navigating conflicts, this means taking a step back and considering how actions can contribute to a just outcome that upholds integrity and promotes reconciliation, rather than seeking to "get even." Justice seeks balance, respect, and a focus on the greater good, whereas revenge can perpetuate cycles of hurt and negativity.

By prioritizing justice, we aim for a resolution that restores harmony and fosters understanding, helping to move beyond personal grievances and towards a more constructive and compassionate society. This approach leads to lasting peace and personal growth, rather than fleeting satisfaction from revenge.`,
  },
  {
    title: "Recognize Subtle Biases",
    content: `These biases, often unconscious, can shape our perceptions and interactions in ways that we may not immediately recognize. Whether based on race, gender, age, or other factors, subtle biases influence decision-making, communication, and judgment in everyday life. For students, this means being aware of the ways in which their own biases might affect how they engage with peers, instructors, or the learning environment.

Acknowledging these biases allows individuals to confront and challenge them, creating a more inclusive and equitable atmosphere for everyone. By developing the ability to recognize subtle biases, we can become more open-minded, empathetic, and intentional in our actions, ensuring that our decisions are based on fairness rather than ingrained assumptions or stereotypes.

This self-awareness not only benefits personal growth but also contributes to creating more diverse and supportive communities, where all individuals are given the opportunity to thrive without being unconsciously judged or limited by bias.`,
  },
  {
    title: "Develop Emotional Intelligence",
    content: `Emotional intelligence encompasses self-awareness, self-regulation, motivation, empathy, and social skills. By fostering these qualities, individuals can better understand their own emotional responses, leading to more thoughtful decision-making and improved interactions with others.

For students, emotional intelligence plays a vital role in academic success, as it helps them manage stress, communicate effectively, and collaborate with peers and teachers. It also enables them to empathize with others, creating more supportive and harmonious learning environments.

Developing emotional intelligence allows students to not only excel in their studies but also in their personal lives, as they become more adept at handling challenges, resolving conflicts, and maintaining positive relationships. Ultimately, cultivating EQ is a key factor in achieving long-term success and well-being, as it enhances emotional resilience, interpersonal skills, and the ability to lead with compassion and understanding.`,
  },
  {
    title: "Stay Curious, Not Defensive",
    content: `The purpose of a curious mind is an openness to learn. The purpose of a defensive mind is resisting attack. And although defensiveness can be a natural response, it's not always the best response.

Curiosity shows interest, and interest will move a conversation forward where defensiveness attempts to stop a dialogue. Whether it's politics, the pandemic, being home with your family, or zooming with your business associates, consider that curiosity is essential to cultivate.

Don't worry about being right. If you're right about something, you'll still be right after looking into the subject with others. But in the meantime, you'll create relationships that aren't rubber stamps of how you think and act.

Ask yourself if being defensive is a suitable strategy. Or is it just how you've been trained to think, lead, and act up until now. Why not use your reactions to pause, and instead of defending, initiate an inquiry? You may be surprised by the new insights you find and the genuine relationships you build. Curiosity is the path to clarity. It's not easy, but it's illuminating and humbling to find out you don't know everything.

So, let's look and stay curious!

May your day be peaceful and productive.`,
  }
];

const BiasChapterReader: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const progress = ((current + 1) / biasChapters.length) * 100;

  const nextChapter = () => {
    if (current < biasChapters.length - 1) setCurrent(current + 1);
  };

  const prevChapter = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const restart = () => setCurrent(0);

  const printPDF = () => {
    const contentToPrint = `
      <div>
        <h2>${biasChapters[current].title}</h2>
        ${biasChapters[current].content
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
            <title>${biasChapters[current].title}</title>
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
        <h2 className="text-3xl font-bold mb-4">{biasChapters[current].title}</h2>
        {biasChapters[current].content.split("\n\n").map((para, i) => (
          <p key={i} className="mb-4 text-lg leading-relaxed whitespace-pre-wrap">
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

        {current < biasChapters.length - 1 ? (
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

export default BiasChapterReader;
