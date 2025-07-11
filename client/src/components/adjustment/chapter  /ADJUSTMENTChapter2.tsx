import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const adjustmentChapters2 = [ 
  {
    title: "Paths Less Traveled",
    content: `One compelling example is the idea of embracing "first-principles thinking," a strategy of deconstructing problems to their core assumptions and rebuilding solutions from the ground up. Innovators like those who pioneered industries often took this less-traveled path, refusing to follow established models and instead questioning everything to carve out entirely new directions. For students and professionals alike, this concept is a call to action—to resist the comfort of conformity, challenge established norms, and explore unique perspectives.

By choosing paths less traveled, individuals not only stand out but also inspire others to think beyond limitations. It’s a mindset that fosters creativity, resilience, and innovation, reminding us that true breakthroughs often lie in the spaces others hesitate to explore. Such stories captivate and motivate, encouraging us to seek the extraordinary by daring to be different.`,
  },
  {
    title: "Building Your Blueprint",
    content: `Building Your Blueprint is about crafting a deliberate plan for your future, grounded in purpose, vision, and actionable steps. Much like an architect designs a structure before construction begins, building a personal or professional blueprint requires you to outline your goals, identify the resources needed, and anticipate challenges that might arise along the way. Without a blueprint, your efforts may lack direction, leading to wasted time and energy.

Start by defining your "why"—the underlying purpose driving your aspirations. Then, break your goals into specific, measurable, achievable, relevant, and time-bound (SMART) steps, ensuring that each phase aligns with your long-term vision. Embrace flexibility as you plan, knowing that blueprints can evolve with experience and unexpected changes.

Real-life examples of successful individuals often highlight the importance of this process. Innovators, leaders, and entrepreneurs didn't stumble upon their achievements—they envisioned the outcomes, mapped the steps, and worked tirelessly to bring their plans to life. By committing to your blueprint, you’re not just dreaming; you’re creating a structured path toward success, giving you the confidence to move forward and the resilience to overcome obstacles.`,
  },
  {
    title: "Wandering and Wondering",
    content: `Wandering and Wondering is the art of letting curiosity guide you beyond the confines of routine. Imagine stepping off the well-trodden path, leaving behind the rigidity of structure, and allowing your thoughts to drift freely, like clouds moving across an open sky. It’s in these moments of quiet exploration—where wandering meets wondering—that creativity thrives, and breakthroughs happen.

Wandering isn’t aimless; it’s a deliberate act of opening yourself to new experiences and perspectives. Whether it’s a physical journey to an unfamiliar place or a mental journey into uncharted ideas, wandering unlocks doors to possibilities you didn’t even know existed. Pair this with wondering—asking bold questions, embracing uncertainty, and daring to imagine the unimaginable—and you have the perfect recipe for discovery and growth.

Great innovators, artists, and thinkers didn’t find inspiration by sticking to the script; they wandered into the unknown and wondered "what if?" You, too, can find magic in this process. Give yourself permission to pause, explore, and dream without limits. You might just find that the most profound answers and ideas are waiting for you—not on the beaten path, but in the freedom of wandering and the power of wondering.`,
  },
  {
    title: "The Art of Direction",
    content: `The Art of Direction is about mastering the delicate balance between clarity of purpose and the flexibility to adapt. It’s not simply about knowing where you want to go—it’s about crafting a path that evolves as you learn and grow, keeping your focus steady while allowing room for recalibration. Direction isn’t a rigid line; it’s a dynamic force that guides you through life’s uncertainties.

Think of it as steering a ship. You have a destination in mind, but the winds and tides may shift, requiring you to adjust your course without losing sight of your goal. The art lies in your ability to remain steadfast in your vision while navigating the obstacles and opportunities that arise along the way. It’s not enough to move—you must move with intention.

In a world full of distractions, the art of direction challenges you to define what truly matters. Whether it’s building a career, nurturing relationships, or achieving personal growth, direction gives meaning to your efforts. It encourages focus, resilience, and purpose. By mastering this art, you become not just a traveler in life but a deliberate navigator, charting a course that aligns with your values and aspirations while embracing the journey itself.`,
  },
  {
    title: "The Compass Within",
    content: `Much like a physical compass points to true north, your internal compass keeps you grounded in your purpose, even amidst chaos. It’s not just about making decisions; it’s about making the right decisions—the ones that resonate with who you are and where you want to go. Whether you’re a student charting your future, a professional navigating challenges, or someone seeking personal growth, your compass within is always there to guide you.

Trusting it requires courage, especially when the external noise tells you otherwise. But those who follow their inner compass often find fulfillment, not because they took the easiest route, but because they chose the one that was truly theirs. By nurturing self-awareness, reflecting on your priorities, and staying attuned to your internal guide, you unlock a life of direction, authenticity, and purpose.`,
  },
];

const AdjustmentChapterReader2: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const match = location.pathname.match(/sub(\d+)/);
    if (match) {
      const index = parseInt(match[1]) - 1;
      if (!isNaN(index) && index >= 0 && index < adjustmentChapters2.length) {
        setCurrent(index);
      }
    }
  }, [location]);

  const progress = ((current + 1) / adjustmentChapters2.length) * 100;

  const nextChapter = () => current < adjustmentChapters2.length - 1 && setCurrent(current + 1);
  const prevChapter = () => current > 0 && setCurrent(current - 1);
  const restart = () => setCurrent(0);

  const printPDF = () => {
    const contentToPrint = `
      <div>
        <h2>${adjustmentChapters2[current].title}</h2>
        ${adjustmentChapters2[current].content
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
            <title>${adjustmentChapters2[current].title}</title>
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
          {adjustmentChapters2[current].title}
        </h2>
        {adjustmentChapters2[current].content.split("\n\n").map((para, i) => (
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

        {current < adjustmentChapters2.length - 1 ? (
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

export default AdjustmentChapterReader2;
