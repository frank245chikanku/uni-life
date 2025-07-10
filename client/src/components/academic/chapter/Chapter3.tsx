import React, { useRef, useState } from "react";

const chapters = [
  {
    title: "Creating Integrity Pledges",
    content: (
      <>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          Creating integrity pledges involves crafting clear, actionable commitments that reflect one’s dedication to upholding ethical standards and honesty. These pledges are not just symbolic, but serve as a personal promise to act with integrity in both professional and academic settings.
        </p>
        <p className="text-base md:text-lg font-semibold mt-4">Honor Pledge</p>
        <p className="text-base md:text-lg mt-2 leading-relaxed">
          I recognize the importance of personal integrity in all aspects of life and work. I commit myself to truthfulness, honor, and responsibility, by which I earn the respect of others. I support the development of good character and commit myself to uphold the highest standards of academic integrity as an important aspect of personal integrity.
        </p>
        <p className="text-base md:text-lg mt-4 leading-relaxed">
          My commitment obliges me to conduct myself according to the University Honor Code.
        </p>
      </>
    ),
  },
  {
    title: "Setting the Right Tone",
    content: (
      <>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          Setting the right tone is crucial for fostering a positive and productive environment. Whether in academic settings, workplaces, or personal relationships, the tone you set influences interactions and outcomes. It involves establishing clear expectations, promoting respect, and encouraging open communication.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          Setting the tone early is critical. All eyes are on you as the new leader, so make it count. Create a buzz, set an example, show your priorities, establish the mood, and be present. These actions help define your leadership and foster future collaboration.
        </p>
      </>
    ),
  },
  {
    title: "Everyone's Involved",
    content: (
      <>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          “Everyone's Involved” underscores the shared responsibility among all members of an educational community — students, faculty, administrators, and institutions — to uphold ethical academic standards. Academic integrity isn’t just about students; it’s a collective commitment.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          Here’s a breakdown of how each group plays a vital role in maintaining academic integrity.
        </p>
      </>
    ),
  },
  {
    title: "Check-Ins for Integrity",
    content: (
      <>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          Integrity includes being consistent, communicating openly, showing empathy, and aligning words with actions. It means staying calm and nonjudgmental, cooperating, and considering others’ views — even during adversity.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          Breaches of integrity may result not from poor character but from lacking leadership skills. To prevent this, core skills like emotional intelligence, communication, and conflict resolution are essential.
        </p>
      </>
    ),
  },
  {
    title: "Acting on Feedback",
    content: (
      <>
        <p className="text-base md:text-lg leading-relaxed">
          Acting on feedback is vital for growth. It means listening to constructive input, reflecting, and intentionally applying changes. It promotes learning, improvement, and stronger collaboration.
        </p>
      </>
    ),
  },
];

const Chapter3Reader: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const progress = ((current + 1) / chapters.length) * 100;
  const printRef = useRef<HTMLDivElement>(null);

  const nextChapter = () => current < chapters.length - 1 && setCurrent(current + 1);
  const prevChapter = () => current > 0 && setCurrent(current - 1);
  const restart = () => setCurrent(0);

  const printPDF = () => {
    const content = printRef.current;
    if (content) {
      const printWindow = window.open("", "", "width=800,height=600");
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${chapters[current].title}</title>
              <style>
                body { font-family: sans-serif; padding: 20px; line-height: 1.6; color: #1f2937; }
                h2 { font-size: 24px; margin-bottom: 16px; }
                p, ul { font-size: 16px; margin-bottom: 12px; padding-left: 20px; }
                li { margin-bottom: 8px; }
                strong { font-weight: bold; }
              </style>
            </head>
            <body>
              <h2>${chapters[current].title}</h2>
              ${content.innerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.onload = () => {
          printWindow.focus();
          printWindow.print();
          printWindow.close();
        };
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 md:px-6 h-[calc(100vh-4rem)] flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
        <div
          className="bg-pink-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Chapter Content */}
      <div ref={printRef} className="flex-1 overflow-y-auto pb-4">
        <h2 className="text-center font-bold text-2xl md:text-3xl mb-6 text-[#050505]">
          {chapters[current].title}
        </h2>
        {chapters[current].content}
      </div>

      {/* Navigation */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <button
          onClick={prevChapter}
          disabled={current === 0}
          className={`w-full md:w-auto ${
            current === 0
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

        {current < chapters.length - 1 ? (
          <button
            onClick={nextChapter}
            className="w-full md:w-auto bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
          >
            Next Chapter
          </button>
        ) : (
          <div className="text-center w-full">
            <p className="text-green-600 font-semibold mb-4">
              🎉 You’ve completed all Chapters!
            </p>
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

export default Chapter3Reader;
