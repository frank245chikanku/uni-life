import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const phases = [
  {
    title: "Stay Grounded in Reality",
    content: (
      <>
        <p className="text-lg leading-relaxed">
          There is, however, an invitation to be grounded in reality.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          To be grounded in reality is to be firmly connected with life, both the good and the bad. It’s not avoiding the tough work of day-to-day life in favor of chasing a wisp of a lie.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          It’s getting advice, being okay with failures, giving grace to yourself and others. It’s totally real and thoroughly honest. It’s vulnerable.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          People who are grounded in reality are lovers of truth.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Nothing changes the human heart so deeply as to look bad in the presence of love, to be seen with all that is wickedly ugly about us and still be wanted, more, to be delighted in.
        </p>
        <h2 className="text-2xl font-semibold mt-6">How to become grounded</h2>
        <p className="text-lg leading-relaxed mt-4">
          Review where your sense of self-worth comes from.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          We want to impress, to be loved and valued, and so subtly, we place our self-worth into the fickle hands of others.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          If you’re dancing to another’s tune, you will never discover the beautiful song within yourself.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Perhaps your self-worth comes from your own sense of achievement.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          You’re only as worthy as the success you achieve. If that’s the case, then how do you handle failure?
        </p>
      </>
    ),
  },
  {
    title: "Find Mentors, Not Idols",
    content: (
      <>
        <p className="text-lg leading-relaxed">
          The idea of finding mentors, not idols, emphasizes the importance of building relationships with individuals who can guide, challenge, and support personal and professional growth, rather than idolizing people from a distance. Mentors provide practical wisdom, constructive feedback, and personalized advice based on real experiences.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Unlike idols, who may appear perfect and distant, mentors offer a more accessible and realistic model of success, rooted in understanding and mutual growth. This approach helps individuals learn from someone who understands their unique circumstances and provides actionable insights. Instead of seeking unattainable perfection, focusing on mentorship allows for continuous development, with a mentor serving as a sounding board and a resource for overcoming obstacles.
        </p>
      </>
    ),
  },
  {
    title: "Resist Cynicism",
    content: (
      <>
        <p className="text-lg leading-relaxed">
          Cynicism, which can stem from a sense of disillusionment or a belief that things are inherently flawed, can be a significant barrier to personal and academic growth. Peterson argues that students, especially in today's world, must avoid becoming cynical about their education, society, or themselves. Instead, they should focus on taking responsibility for their own lives, cultivating a mindset of growth, and embracing the challenges that come with learning and self-improvement.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          By resisting cynicism, students are better equipped to confront the complexities of life with optimism and purpose, seeing the opportunities for development rather than focusing on the negatives. Students should recognize that while the world may be imperfect, they have the power to shape their own path and contribute positively to society, which is a far more empowering mindset than one rooted in cynicism.
        </p>
      </>
    ),
  },
  {
    title: "Focus on Long-Term Vision",
    content: (
      <>
        <p className="text-lg leading-relaxed">
          The importance of focusing on a long-term vision, particularly for students navigating their education and early career stages. It is crucial for individuals to avoid getting caught up in the immediate gratification of short-term successes or distractions, as these can cloud their sense of purpose. Instead, one should set clear, meaningful goals and maintain a vision for the future that aligns with personal values and aspirations.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          For students, this means looking beyond the challenges of exams or assignments and envisioning how their education can contribute to their broader life goals. By focusing on long-term vision, students are more likely to make decisions that align with their deeper sense of meaning, enabling them to overcome temporary setbacks and stay motivated through the inevitable struggles of academic and professional life.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Peterson reminds us that true fulfillment often comes from the pursuit of something greater than ourselves, and by keeping this vision in mind, students can cultivate resilience and make choices that lead to lasting success and personal growth.
        </p>
      </>
    ),
  },
  {
    title: "Define Your Legacy",
    content: (
      <>
        <p className="text-lg leading-relaxed">
          Especially for students, it's essential to think critically about the legacy they wish to leave behind. Defining your legacy involves understanding the impact you want to have on the world and shaping your actions accordingly. For students, this means not just focusing on grades or immediate accomplishments, but also considering how their work, character, and relationships will be remembered.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          I suggest that by consciously choosing to live with integrity, pursuing meaningful goals, and contributing to the well-being of others, students can begin to build a legacy that transcends temporary successes. Defining your legacy requires self-awareness and deliberate action, aligning your daily choices with your long-term values and aspirations.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          By doing so, students can create a sense of purpose and direction that guides them through challenges and ensures that their efforts are meaningful, both for themselves and for others.
        </p>
      </>
    ),
  },
];

const CareerPhasesReader: React.FC = () => {
  const [current, setCurrent] = useState(0);


  const location = useLocation();
  useEffect(() => {
    const chapterMatch = location.pathname.match(/sub(\d+)/);
    if (chapterMatch) {
      const index = parseInt(chapterMatch[1]) - 1;
      if (!isNaN(index) && index >= 0 && index < phases.length) {
        setCurrent(index);
      }
    }
  }, [location]);

  const progress = ((current + 1) / phases.length) * 100;

  const nextChapter = () => current < phases.length - 1 && setCurrent(current + 1);
  const prevChapter = () => current > 0 && setCurrent(current - 1);
  const restart = () => setCurrent(0);

  const printPDF = () => {
    window.print();
  };

  return (
    <div className="w-full h-screen py-6 px-4 md:px-6 flex flex-col">


      <div className="no-print w-full bg-gray-300 rounded-full h-3 mb-4 md:mb-6">
        <div
          className="bg-pink-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>


      <div id="print-area" className="flex-1 overflow-y-auto pb-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {phases[current].title}
        </h2>
        {phases[current].content}
      </div>




      <div className="no-print mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
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

        {current < phases.length - 1 ? (
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


export default CareerPhasesReader;
