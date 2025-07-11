import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const adjustmentChapters3 = [
  {
    title: "Getting Things Done",
    content: `Do you ever feel like you spend more time thinking about doing your tasks than, well…actually doing them? Worrying about everything on your to-do list can be exhausting, especially when the list doesn’t seem to get any smaller. When information piles up in your head, you feel stressed, overwhelmed, and uncertain.

Start with a full mind sweep of all the "open loops" you can think of — anything you might need to take action on in the future. This includes personal projects, work tasks, commitments, or things you want to do someday.

This process not only alleviates stress but also empowers you to take purposeful action. Rather than being weighed down by uncertainty and indecision, you can approach your to-do list with clarity and confidence, turning overwhelming chaos into manageable steps. Remember, productivity begins not with doing everything at once but with identifying the right things to do and starting there.`,
  },
  {
    title: "Focus and Finish",
    content: `It’s not just about getting things done—it’s about locking in on what truly matters and driving it home with relentless precision. Imagine turning off the chaos around you, silencing the noise, and zoning in on your goals like a laser beam. That’s the magic of focus. But the real win? It’s crossing that finish line, feeling the rush of accomplishment that comes from sticking with it until the very end.

This isn’t just about productivity; it’s about transformation. When you focus deeply, you enter a state of flow where time bends, creativity ignites, and progress feels effortless. But focus without finishing is like starting a race you never complete. The magic happens when you pair your unwavering attention with the discipline to follow through, no matter the hurdles.

Whether it’s a daunting project, a personal goal, or a lifelong dream, focus and finish is your secret weapon to stand out, thrive, and achieve what others only talk about. Don’t just start—commit to finishing, and watch your efforts turn into results that inspire not only you but everyone watching.`,
  },
  {
    title: "Creating Balance",
    content: `True balance isn’t about perfection; it’s about integration. It’s the delicate dance between work and rest, ambition and self-care, action and reflection. Think of it as playing a musical instrument—you need the right tempo, the right pauses, and the right focus to create a beautiful melody. Without balance, life can become chaotic, leading to burnout, stress, and missed opportunities for growth.

For students, professionals, or anyone juggling multiple responsibilities, creating balance is the key to staying grounded and moving forward. It involves setting boundaries, making conscious choices about where you invest your time, and giving yourself permission to step back when needed. When you create balance, you’re not just managing your time—you’re mastering the art of living with intention, where every day feels both fulfilling and sustainable.`,
  },
  {
    title: "Evaluating Your Progress",
    content: `It’s easy to get caught up in the rush of everyday tasks, but taking the time to reflect on your achievements, challenges, and growth is what separates those who make real progress from those who merely stay busy. Evaluation isn’t just about measuring success—it’s about understanding where you’ve excelled, where you’ve stumbled, and how you can course-correct to move forward more effectively.

Think of it as checking the map on a road trip. Even if you’ve been driving for hours, it’s important to pause and make sure you’re heading in the right direction. Sometimes, you may realize that your initial route needs adjustment. Other times, you’ll see how far you’ve come and gain the motivation to push through any remaining miles.

Evaluating your progress doesn’t have to be complicated. It can be as simple as setting aside time each week or month to review your goals and the actions you've taken. What’s working? What needs improvement? How do you feel about your progress? This practice empowers you to stay focused, motivated, and in control of your journey.

For students, entrepreneurs, or anyone on a path of growth, regularly evaluating your progress allows you to celebrate your wins, learn from setbacks, and refine your approach. It’s a powerful tool for ensuring that your efforts are always aligned with your values, goals, and long-term vision, keeping you on track toward continued success.`,
  },
  {
    title: "Using Checkpoints",
    content: `Using Checkpoints is the art of turning long-term goals into achievable steps that keep you focused and motivated. Think of them as milestones along a winding path, helping you measure progress, recalibrate when necessary, and celebrate every small victory. They transform daunting tasks into manageable wins, making the journey toward your ambitions more tangible and rewarding.

For students, professionals, or anyone pursuing growth, checkpoints act as your compass, ensuring you stay aligned with your vision while keeping momentum alive. They are more than markers—they’re reminders that progress, no matter how small, is still progress.

As you move forward, let each checkpoint serve as a moment of reflection and encouragement, proving that success isn’t about how fast you reach your destination but about the dedication to take it step by step. Keep moving, keep growing, and let each milestone guide you closer to the future you envision.`,
  },
];

const AdjustmentChapterReader3: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const match = location.pathname.match(/sub(\d+)/);
    if (match) {
      const index = parseInt(match[1]) - 1;
      if (!isNaN(index) && index >= 0 && index < adjustmentChapters3.length) {
        setCurrent(index);
      }
    }
  }, [location]);

  const progress = ((current + 1) / adjustmentChapters3.length) * 100;

  const nextChapter = () => current < adjustmentChapters3.length - 1 && setCurrent(current + 1);
  const prevChapter = () => current > 0 && setCurrent(current - 1);
  const restart = () => setCurrent(0);

  const printPDF = () => {
    const contentToPrint = `
      <div>
        <h2>${adjustmentChapters3[current].title}</h2>
        ${adjustmentChapters3[current].content
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
            <title>${adjustmentChapters3[current].title}</title>
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {adjustmentChapters3[current].title}
        </h2>
        {adjustmentChapters3[current].content.split("\n\n").map((para, i) => (
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

        {current < adjustmentChapters3.length - 1 ? (
          <button
            onClick={nextChapter}
            className="w-full md:w-auto bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
          >
            Next Chapter
          </button>
        ) : (
          <div className="text-center w-full">
            <p className="text-green-600 font-semibold mb-4">
              🎉 You’ve completed all chapters!
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

export default AdjustmentChapterReader3;
