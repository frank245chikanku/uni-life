import React, { useState } from "react";

const chapters = [
  {
    title: "Creating Integrity Pledges",
    content: (
      <>
        <p className="text-lg leading-relaxed mb-4">
          Creating integrity pledges involves crafting clear, actionable commitments that reflect
          one's dedication to upholding ethical standards and honesty. These pledges are not just
          symbolic, but serve as a personal promise to act with integrity in both professional
          and academic settings.
        </p>
        <p className="text-lg leading-relaxed mt-4 font-semibold">
          Honor Pledge
        </p>
        <p className="text-lg leading-relaxed mt-4">
          I recognize the importance of personal integrity in all aspects of life and work. I commit myself to truthfulness, honor, and responsibility, by which I earn the respect of others. I support the development of good character and commit myself to uphold the highest standards of academic integrity as an important aspect of personal integrity.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          My commitment obliges me to conduct myself according to the University Honor Code.
        </p>
      </>
    ),
  },
  {
    title: "Setting the Right Tone",
    content: (
      <>
        <p className="text-lg leading-relaxed">
          Setting the right tone is crucial for fostering a positive and productive environment.
          Whether in academic settings, workplaces, or personal relationships, the tone you set
          influences interactions and outcomes. It involves establishing clear expectations,
          promoting respect, and encouraging open communication. By setting a constructive tone,
          you create an atmosphere where individuals feel valued, motivated, and empowered to
          achieve their best work.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Setting the tone early is critical. All eyes are on you as the new leader, so make it count.
          Create a buzz, set an example, show your priorities, establish the mood, and be present.
          These activities will let your team know what kind of leader you are and what your expectations are.
          This will help you down the line when you need their help to tackle the tough issues.
        </p>
      </>
    ),
  },
  {
    title: "Everyone's Involved",
    content: (
      <>
        <p className="text-lg leading-relaxed">
          "Everyone's Involved" in the context of academic integrity underscores the shared responsibility among all members of an educational community — students, faculty, administrators, and institutions — to maintain and promote ethical standards in academic work. Academic integrity isn't just a set of rules that applies to students; it is a collective effort that involves everyone in the system, ensuring fairness, honesty, and respect for the learning process.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Here’s a breakdown of how each group plays a vital role in maintaining academic integrity.
        </p>
      </>
    ),
  },
  {
    title: "Check-Ins for Integrity",
    content: (
      <>
        <p className="text-lg leading-relaxed">
          Integrity involves being consistent in promoting and supporting organizational values and between words and action; being predictable in the face of adversity; following strong morals and ethics; being true to oneself;
          communicating openly; using non-threatening language; remaining calm; being non-judgemental, safe, and co-operative; and showing an interest in understanding others’ points of view.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Breaches of integrity are not always character issues; they can be due to a deficit of leadership skills. The following tips require core skills such as emotional intelligence, communication,
          mental fitness, conflict resolution, and problem-solving.
        </p>
      </>
    ),
  },
  {
    title: "Acting on Feedback",
    content: (
      <>
        <p className="text-lg leading-relaxed">
          Acting on feedback is essential for personal and professional growth. It involves actively
          listening to constructive criticism, reflecting on it, and taking intentional steps to make
          improvements. By embracing feedback, individuals show a commitment to continuous learning and
          development. Rather than viewing feedback as a setback, it should be seen as a valuable tool
          that guides decision-making, fosters skill development, and strengthens relationships within
          teams and communities.
        </p>
      </>
    ),
  },
];

const Chapter3Reader: React.FC = () => {
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
    const printWindow = window.open("", "", "width=800,height=600");
    if (printWindow) {
      const container = document.createElement("div");
      container.style.padding = "20px";
      container.style.fontFamily = "sans-serif";
      container.style.color = "#1f2937";
      container.innerHTML = `<h2 style="font-size:24px; margin-bottom:16px;">${chapters[current].title}</h2>`;

      const tempDiv = document.createElement("div");
      tempDiv.style.position = "fixed";
      tempDiv.style.left = "-9999px";
      document.body.appendChild(tempDiv);

      import("react-dom/client").then(ReactDOMClient => {
        const root = ReactDOMClient.createRoot(tempDiv);
        root.render(chapters[current].content);

        setTimeout(() => {
          container.innerHTML += tempDiv.innerHTML;
          printWindow.document.write(`
            <html>
              <head>
                <title>${chapters[current].title}</title>
                <style>
                  body { font-family: sans-serif; padding: 20px; line-height: 1.6; color: #1f2937; }
                  h2 { font-size: 24px; margin-bottom: 16px; }
                  p { font-size: 16px; margin-bottom: 12px; }
                  ul { font-size: 16px; margin-bottom: 12px; padding-left: 20px; }
                  li { margin-bottom: 8px; }
                  strong { font-weight: bold; }
                </style>
              </head>
              <body>${container.innerHTML}</body>
            </html>
          `);
          printWindow.document.close();
          printWindow.focus();
          printWindow.print();
          printWindow.close();
          root.unmount();
          document.body.removeChild(tempDiv);
        }, 100);
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 h-[calc(100vh-4rem)] flex flex-col">
      {/* Progress bar */}
      <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
        <div
          className="bg-pink-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-scroll px-4">
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
          {chapters[current].content}
        </div>
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
              🎉 You’ve completed all Chapters!
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

export default Chapter3Reader;
