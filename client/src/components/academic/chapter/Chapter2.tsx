import React, { useState } from "react";

const chapters = [
  {
    title: "Phase 1: Common Misunderstandings",
    content: (
      <>
        <p className="text-lg leading-relaxed mb-4">
          An academic integrity offence is commonly believed to be cheating on a
          test (e.g., copying answers from another student’s paper, using
          unauthorized materials such as a cellphone) or plagiarizing (e.g.,
          cutting and pasting from the Internet without documenting the source).
          However, an academic integrity offence involves more than just the
          above.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Missing In-Text Citations</strong>
          <br />
          Failure to cite the sources listed at the end of your assignment within
          the written portion of your assignment is a form of academic
          misconduct. You must show where your research has been used in your
          written work in order for your professor to accurately assess and
          provide meaningful feedback about how well you have applied the
          knowledge you have developed.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Improper Research Practices</strong>
          <br />
          Research involves collection, analysis, and interpretation of published
          information or data. When this information is not accurately
          represented in your academic work, such as falsifying or fabricating
          the information, this is an act of academic misconduct.
        </p>
        <p className="text-lg leading-relaxed">
          <strong>Tips to help you avoid engaging in an academic offence:</strong>
          <ul className="list-disc ml-6 mt-2">
            <li>Take notes and review notes on a regular basis.</li>
            <li>Use the available resources provided by your professor.</li>
            <li>Read your assignment carefully. If unclear, ask questions.</li>
            <li>Manage your time wisely and start tasks early.</li>
          </ul>
        </p>
      </>
    ),
  },
  {
    title: "Phase 2: The Role of Faculty",
    content: (
      <>
        <p className="text-lg leading-relaxed mb-4">
          The roles and responsibilities of college and university faculty members are closely tied to the central functions of higher education. Faculty members undertake research, teaching, and service to carry out academic work.
        </p>
        <p className="text-lg leading-relaxed">
          The balance among teaching, research, and service differs across institutions. Teaching reflects their central role in education by imparting knowledge to students and supporting learning.
        </p>
      </>
    ),
  },
  {
    title: "Phase 3: Student Responsibilities",
    content: (
      <>
        <p className="text-lg leading-relaxed mb-4">
          Student responsibility means taking active part in learning and being accountable for academic success. It involves making choices that lead to educational goals.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Students are expected to be respectful, punctual, and disciplined. These behaviors contribute to a healthy learning environment and academic success.
        </p>
        <p className="text-lg leading-relaxed">
          Students should show values like kindness, compassion, and respect in educational settings, fostering social and academic growth.
        </p>
      </>
    ),
  },
  {
    title: "Phase 4: Talking About Integrity",
    content: (
      <>
        <p className="text-lg leading-relaxed mb-4">
          Integrity means being honest and ethical, even when no one is watching. A person with integrity follows strong moral principles.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          In workplaces, integrity also means being proactive, responsible, and accountable. A culture of integrity helps organizations thrive.
        </p>
        <h2 className="font-semibold text-2xl mt-6 mb-4 text-[#050505]">
          Most Common Traits of a Person with Integrity
        </h2>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          <li>Expressing gratitude for others</li>
          <li>Valuing honesty and openness</li>
          <li>Taking responsibility for actions</li>
          <li>Respecting yourself and others</li>
          <li>Helping others without compromising health</li>
          <li>Demonstrating reliability</li>
          <li>Showing patience and flexibility</li>
        </ul>
      </>
    ),
  },
  {
    title: "Phase 5: Understanding Plagiarism",
    content: (
      <>
        <p className="text-lg leading-relaxed mb-4">
          Plagiarism can also include re-using your own work without citation. Under the regulations for examinations, intentional or reckless plagiarism is a disciplinary offence.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The necessity to acknowledge others’ work or ideas applies not only to text but also to other media, such as computer code, illustrations, and graphs...
        </p>
        <p className="text-lg leading-relaxed">
          The best way of avoiding plagiarism is to learn and employ the principles of good academic practice from the beginning of your university career...
        </p>
      </>
    ),
  },
];

const AcademicChapter2Reader: React.FC = () => {
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

      import("react-dom/client").then((ReactDOMClient) => {
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
                  p, ul { font-size: 16px; margin-bottom: 12px; padding-left: 20px; }
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
    <div className="max-w-4xl mx-auto py-10 px-6">
      {/* Progress Bar */}
      <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
        <div
          className="bg-pink-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Chapter Content */}
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

export default AcademicChapter2Reader;
