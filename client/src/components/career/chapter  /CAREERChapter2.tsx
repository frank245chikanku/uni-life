import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const phases = [
  {
    title: "Embrace Failure as Growth",
    content: (
      <>
        <p className="text-lg leading-relaxed mb-4">
          We live in a culture that fixates on success. With personal and professional failures often filtered from our radar, we’re positioned only to appreciate the peaks in life’s journey — shying away from all valleys with fearful avoidance.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Yet it’s hardly a secret that some of the most successful entrepreneurs failed before achieving remarkable results. The late Steve Jobs was famously terminated from his own company before Apple became a household name. James Dyson created thousands of faulty, nonfunctional prototypes before patenting his best-selling vacuum. So, why do we forget the silver linings of these legendary failures when confronted with our own mistakes?
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Failure isn’t unlike a 5 a.m. jog on a Saturday morning; it might feel rough while you’re in the thick of it, but that doesn’t mean it isn’t serving a purpose.
        </p>
        <p className="text-lg leading-relaxed">
          Like many measures we take to improve our well-being, even the most unpleasant failures can be healthy in the long run. When plans don’t go as we hoped or anticipated, we reflect on our decision-making process and adjust our understanding.
        </p>
      </>
    ),
  },
  {
    title: "Set Small Goals",
    content: (
      <>
        <p className="text-lg leading-relaxed mb-4">
          The gist: we're usually told to "think big" when it comes to goal setting. But here's why that doesn't always work, why you should set smaller goals, and 4 ways to break down big goals into smaller ones.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I’ve been thinking about all the talk about how most people don’t meet their goals or stick to their resolutions.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          It’s usually cited as proof that the entire concept doesn’t work, and that you shouldn’t bother setting them in the first place.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          But what if that’s not true? What if we’re the problem, and most of us are just setting the wrong goals and resolutions in the first place?
        </p>
        <p className="text-lg leading-relaxed mb-4">
          What if we set ourselves up for failure, and then blame the tactic for our mistake, like in the saying “it’s a poor craftsman who blames his tools?”
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The benefit of micro habits is that you should be able to perform it with minimal effort every day. It’s important to execute on a new ritual daily so it becomes second nature, and if it’s small enough, you won’t be as tempted to defer your task from one day to the next. However, no matter the size of the task, it’s easy to get distracted, make excuses, or forget.
        </p>
        <p className="text-lg leading-relaxed">
          Perform your new action at the same time as (or right before) an action you do without thinking. Need to read a paragraph each night? You can do that while brushing your teeth. Meditating for 30 seconds each day? Check that off your list while waiting for your coffee to brew.
        </p>
      </>
    )
  },
  {
    title: "Align Career with Character",
    content: (
      <>
        <p className="text-lg leading-relaxed mb-4">
          In the pursuit of a thriving career, it's essential not only to achieve professional success but also to do so with integrity and character. The journey to building a meaningful and successful career requires a set of guiding principles that can help you stay on the right path.
        </p>
        <p className="text-lg leading-relaxed mt-4 font-semibold">Commitment to Learning</p>
        <p className="text-lg leading-relaxed mt-2">
          One of the cornerstones of a successful career is a commitment to continuous learning. The professional landscape is ever-evolving, and those who adapt and grow with it are more likely to excel. Make it a habit to acquire new knowledge and skills, whether through formal education, workshops, or self-study. Embrace a growth mindset that welcomes challenges and sees failures as opportunities for improvement.
        </p>
        <p className="text-lg leading-relaxed mt-4 font-semibold">Authenticity Over Cosmetics</p>
        <p className="text-lg leading-relaxed mt-2">
          In a world filled with pretense and superficiality, authenticity stands out. Instead of masking your true self or pretending to be someone you're not, embrace your authenticity. Be genuine in your actions, interactions, and relationships. Authenticity not only fosters trust but also leads to more fulfilling connections in your professional life.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Building a successful career with character is a journey that requires dedication and adherence to guiding principles. Commit to lifelong learning, be authentic in your actions, stay true to your values, seek genuine feedback, uplift those around you, and engage in regular self-audit. These principles will not only help you achieve professional success but also ensure that you do so with integrity and character, leaving a lasting positive impact on your career and the people you work with.
        </p>
      </>
    ),
  },
  {
    title: "Know When to Pivot",
    content: (
      <>
        <p className="text-lg leading-relaxed mb-4">
          While pivoting in the startup world means shifting to a new strategy, many entrepreneurs believe it entails drastically changing the whole company. But this is not always the case. Oftentimes, a company only has one important problem that it needs to address, and only requires a change in a single aspect of the company.
        </p>
        <p className="text-lg leading-relaxed mt-4 font-semibold">The Art of Pivoting</p>
        <p className="text-lg leading-relaxed mt-2">
          On the other hand, there's a fine art to knowing when to pivot in entrepreneurship. Pivoting involves recognizing when your current business model isn't working and making strategic changes to adapt to new opportunities or market demands. Within RiA, I've experienced firsthand the necessity of pivoting to stay relevant and competitive in the ever-evolving renewable energy sector. Some of the pivots I have made did not work at all like focusing primarily on being a project developer.
        </p>
        <p className="text-lg leading-relaxed mt-4 font-semibold">Evaluating Your Options</p>
        <p className="text-lg leading-relaxed mt-2">
          When faced with the decision to quit or pivot, it's crucial to carefully evaluate your options. Consider factors such as market demand, your passion for the business, the feasibility of monetization, and your capacity to adapt to change. Sometimes, a pivot can breathe new life into your venture, allowing you to explore different avenues for success.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Within RiA, we are constantly evaluating our options to confirm whether or not we are making the right choice. In the world of entrepreneurship, knowing when to quit and when to pivot is a delicate balance. While giving up may seem like admitting defeat, sometimes it's the most strategic move for the long-term health of your business. On the other hand, pivoting can open doors to new opportunities and reignite your passion for entrepreneurship. Ultimately, the key is to stay adaptable, resilient, and open to change as you navigate the unpredictable waters of business ownership.
        </p>
      </>
    ),
  },
  {
    title: "The Importance of Networking",
    content: (
      <>
        <p className="text-lg leading-relaxed mb-4">
          Chances are you’ve heard a colleague or mentor mention the power of networking. The importance of networking cannot be understated. Networking plays a pivotal role in both personal and professional development, offering a gateway to new opportunities, collaborations, and insights. Whether in the realm of academia, entrepreneurship, or corporate settings, cultivating a strong network enables individuals to access resources, exchange knowledge, and foster meaningful relationships.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          In today's interconnected world, the ability to network effectively is not just advantageous—it's essential for navigating career advancement, fostering innovation, and achieving long-term success. Sometimes, the individuals you meet are strangers, or sometimes you share an intermediate connection or several, as you find there is a link between your networks. It may sound like you are just casually meeting someone new, however, the purpose of a network is drastically different. Networking aims for professionals to connect and help each other grow in their careers.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Through networking, you can be helping a coworker, a friend, or supporting your career path.
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





