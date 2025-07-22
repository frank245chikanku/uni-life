import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const chapters = [
  {
    title: "Phase 1: Understanding Academic Integrity",
    content: `Academic integrity is an interdisciplinary concept that provides the foundation for every aspect and all levels of education...`,
  },
  {
    title: "Phase 2: Implementing Best Practices",
    content: `Understanding how to avoid plagiarism is not just a student problem; staff also need support and education to teach students...`,
  },
  {
    title: "Phase 3: Addressing Violations",
    content: `Academic dishonesty has been a persistent part of the higher education landscape...`,
  },
  {
    title: "Phase 4: Promoting a Culture of Integrity",
    content: `Much has been written in recent years about honesty and integrity in the classroom...`,
  },
  {
    title: "Phase 5: Continuous Improvement",
    content: `Providing education and professional development ensures that students, instructors, and staff are aware of policies...`,
  },
];

const ChapterReader: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const location = useLocation();
  const printContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chapterMatch = location.pathname.match(/sub(\d+)/);
    if (chapterMatch) {
      const index = parseInt(chapterMatch[1]) - 1;
      if (!isNaN(index) && index >= 0 && index < chapters.length) {
        setCurrent(index);
      }
    }
  }, [location]);

  const progress = ((current + 1) / chapters.length) * 100;

  const nextChapter = () => current < chapters.length - 1 && setCurrent(current + 1);
  const prevChapter = () => current > 0 && setCurrent(current - 1);
  const restart = () => setCurrent(0);

  const printPDF = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow || !printContentRef.current) return;

    const style = `
      <style>
        body {
          font-family: sans-serif;
          padding: 20px;
        }
        h2 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 16px;
        }
        p {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 12px;
        }
      </style>
    `;

    printWindow.document.write(`
      <html>
        <head>
          <title>${chapters[current].title}</title>
          ${style}
        </head>
        <body>
          ${printContentRef.current.innerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();

    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };
  };

  return (
    <div className="w-full h-screen py-6 px-4 md:px-6 flex flex-col">
      <div className="no-print w-full bg-gray-300 rounded-full h-3 mb-4 md:mb-6">
        <div
          className="bg-pink-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Printable Content */}
      <div ref={printContentRef} className="flex-1 overflow-y-auto pb-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {chapters[current].title}
        </h2>
        {chapters[current].content.split("\n\n").map((para, i) => (
          <p
            key={i}
            className="mb-4 text-base md:text-lg leading-relaxed whitespace-pre-wrap"
          >
            {para}
          </p>
        ))}
      </div>

      {/* Controls */}
      <div className="no-print mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
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

export default ChapterReader;
