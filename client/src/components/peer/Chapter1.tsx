import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const chapters = [ 
  {
    title: "Phase 1: Understanding Peer Pressure",
    content: `Peer pressure is a very real issue that affects many of the teenagers of the world today. It is a normal part of growing up. Peer pressure is basically a social pressure. This can be from family members, friends, or those persons who work together. When we think of the words “peer pressure”, what is the first thing that comes to mind? Majority of us would say that peer pressure is an influence from friends or classmates to do something we normally do not follow as a routine.

Peer pressure is the direct influence on people by peers who get encouraged to follow their peers by changing their habits, values, and behavior. The ‘teenage’ is the age when peer pressure plays a vital role. Peer pressure can be both positive as well as negative. It's up to the individual to make the best out of every situation. Peer pressure may always be there—we have to use it wisely as we navigate through life.`
  },
  {
    title: "Phase 2: Who Are Your Peers?",
    content: `Values serve as guiding principles, motivating specific behaviors, and actions. Peers spend a considerable amount of time together, thus offering a unique platform for the acquisition and development of values.

Peer relationships offer a unique context for the development of values during adolescence. First, peers spend a significant amount of time together. They engage in shared activities and establish strong emotional bonds. Adolescents have ample opportunity to observe, learn from, and be influenced by their peers' values and behaviors.

Second, peer relationships are characterized by a sense of egalitarianism, where individuals of similar age and status interact on relatively equal footing. This equality encourages open dialogue, perspective sharing, and the exchange of values. Adolescents engage in discussions, debates, and negotiations with peers, helping them challenge and refine their own values while considering alternative viewpoints.`
  },
  {
    title: "Phase 3: Groupthink and Conformity",
    content: `Groupthink and conformity are both social phenomena that illustrate how peer pressure can shape individual behavior within groups. Groupthink occurs when the desire for group cohesion and unanimity overrides individuals’ ability to think independently or critically. In situations of groupthink, individuals may suppress dissenting opinions, leading to irrational or harmful decision-making. This dynamic often arises when people prioritize harmony over accuracy, resulting in decisions that may not align with individual or collective best interests.

This indicates that peer pressure can be powerful enough to make individuals act against their own knowledge or beliefs to fit in with the group. This conformity is not limited to social settings but extends to organizations, where workplace norms and leadership styles can pressure employees to overlook ethical considerations for the sake of unity. For example, a strong culture of conformity in an organization might pressure employees to follow unethical practices, leading to moral dilemmas and cognitive dissonance as they struggle between personal ethics and the urge to fit in.

To counteract these effects, organizations can create environments that prioritize open communication, ethical training, and supportive leadership.`
  },
  {
    title: "Phase 4: Communication and Assertiveness",
    content: `Assertiveness is an important skill for dealing with peer pressure or influence. It involves expressing your opinions and standing up for your beliefs in a respectful and confident manner. When you face peer pressure, assertiveness can help you say no. It also helps you maintain your boundaries without damaging your relationships with your peers.

How do you become assertive? Well, it involves being clear and direct in your communication. Use “I” statements instead of “you” statements. Stay calm and composed in the face of pressure. For example, instead of saying “You’re pressuring me to drink alcohol,” you could say “I don’t feel comfortable drinking alcohol, so I’m going to pass.” By using “I” statements, you are taking ownership of your feelings and decisions. Invariably, this makes it easier for your peers to understand and respect your boundaries.`
  },
  {
    title: "Phase 5: Refusing Pressure Tactfully",
    content: `Often, "just saying no" isn't enough, and young people must look inward at self-confidence and personal convictions to make good choices.`
  }
];

const PeerChapterReader: React.FC = () => {
  const [current, setCurrent] = useState(0);


  const location = useLocation();
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





export default PeerChapterReader;
