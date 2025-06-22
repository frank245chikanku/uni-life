import React, { useState } from "react";

const careerChapters = [
  {
    title: "Phase 1: Understanding Career Uncertainty",
    content: `Career uncertainty is a common challenge that many individuals face at various points in their professional journey. 
This uncertainty can stem from a variety of factors, including changing job markets, personal doubts, or the desire for a more fulfilling career path.

It is critical that young people build their own career awareness of not only occupational options or study pathways, but also of their feelings and the decision-making processes associated with making choices. 
Understanding why they are choosing certain careers, or struggling to make decisions, can prompt them to explore different pathways, investigate employment market trends, or reflect further on how their own strengths and interests relate to career options.

Studies have shown that the more time young people invest in career exploration and career planning, the greater their career certainty and confidence become.`,
  },
  {
    title: "Phase 2: Start with What You Know",
    content: `No matter how confident you are, you can still have doubts about your abilities. 
When that happens, start with what you know and work out from there. 
Imagine you had all the puzzle pieces spilled out on a table but didn't have the box top with the picture on it. 
How would you put the puzzle together? Your inner voice might say, "That's too hard, I can't do it, I need the picture to help me." 
But you know what to do: find the corner pieces, pick out the straight edge pieces, and start with what you know.`,
  },
  {
    title: "Phase 3: Define Your Values",
    content: `Values are the deepest desires of your heart—they provide a scaffolding for how you want to interact with others, yourself, and the world in general.
This is why consciously choosing which values you want to espouse is so imperative. Ironically, if you don’t take the time to consciously define and construct a framework of your personal values,
you will still embody values—unfortunately, they may just not be the ones you thought you were striving for. To avoid this, you must take the time to consciously identify your core values,
and then work through how living those values would look in your daily life.

Think of the process of defining your values as constructing your personal life rudder. A rudder (commonly used on ships, boats, submarines, and aircraft) is a primary steering device that operates by altering the movement of water or air, allowing the vehicle to turn or yaw in a particular direction.
The rudder is absolutely crucial to the vehicle moving towards its desired orientation—you can think of it as a built-in compass. Without a well-constructed or well-defined rudder,
a vehicle is much more likely to move aimlessly, without ever making any meaningful progress.

In essence, without your rudder of personal values being deliberately defined, it is very easy to drift along, tossed around by the vagaries of life. One key to averting this aimlessness is to ask yourself:
“What valued direction do I want to move in?” and “Which values would help me head there?”`,
  },
  {
    title: "Phase 4: Accept Responsibility",
    content: `Taking responsibility for your actions is a fundamental aspect of personal growth and maturity.
It involves acknowledging your mistakes, owning up to your decisions, and actively working to make amends or improvements.
Cultivating accountability not only strengthens your character but also fosters healthier relationships and personal development.

Regularly take time to reflect on your actions and their consequences. Ask yourself if there are areas where you can improve and be honest with yourself about your shortcomings.`,
  },
  {
    title: "Phase 5: Build Competence",
    content: `Competencies are the skills, attributes, and expertise that can be applied in the workplace.
It's essential to build competence to improve the quality and efficiency of your work.
Learning how to build competence helps you improve productivity and advance your career.

Developing competence involves identifying the skills, talents, characteristics, and knowledge you require to perform your job effectively and training or practicing to improve them.
Taking time to enhance competence helps you improve your job performance, allowing you to advance your career.

It's essential to identify the competencies you want to develop and improve so you can set goals and objectives to achieve them. Perform an objective self-evaluation to determine which competencies aren't your strongest or which you require if you want to advance your career. 
Ask your colleagues and superiors for advice on what attributes you can improve.

Once you identify areas for improvement, set goals to determine how you're going to improve them.
Identify a significant goal, such as improving a specific competency within a particular period.`,
  },
];

const CareerChapterReader: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const progress = ((current + 1) / careerChapters.length) * 100;

  const nextChapter = () => {
    if (current < careerChapters.length - 1) setCurrent(current + 1);
  };

  const prevChapter = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const restart = () => setCurrent(0);

  const printPDF = () => {
    const contentToPrint = `
      <div>
        <h2>${careerChapters[current].title}</h2>
        ${careerChapters[current].content
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
            <title>${careerChapters[current].title}</title>
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
        <h2 className="text-3xl font-bold mb-4">{careerChapters[current].title}</h2>
        {careerChapters[current].content.split("\n\n").map((para, i) => (
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

        {current < careerChapters.length - 1 ? (
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

export default CareerChapterReader;
