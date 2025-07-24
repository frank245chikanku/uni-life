import React, { useState } from "react";

const chapters = [
  {
    title: "Global Citizenship",
    content: `Global citizenship is the umbrella term for social, political, environmental, and economic actions of globally minded individuals and communities on a worldwide scale.
The term can refer to the belief that individuals are members of multiple, diverse, local and non-local networks rather than single actors affecting isolated societies.
Promoting global citizenship in sustainable development will allow individuals to embrace their social responsibility to act for the benefit of all societies, not just their own.`,
  },
  {
    title: "Philanthropy",
    content: `Philanthropy is most effective when it goes beyond mere acts of kindness to include thoughtful strategies that create long-term change.
Simply giving without understanding the root causes of problems might provide temporary relief but fails to address systemic issues.

An example of this balance is supporting programs that teach self-reliance, such as job training or financial literacy initiatives,
rather than perpetuating dependency. This approach respects the dignity of recipients and helps them build their capacity to contribute positively to society.

Philanthropy is more than just helping others—it's a transformative act that reflects responsibility, competence, and the pursuit of meaning.
It offers a way to confront the suffering and chaos of the world with courage and intent, fostering not just societal progress but also personal growth.
By engaging in thoughtful and purposeful philanthropy, individuals contribute to building a better, more equitable world while cultivating their own character and sense of purpose.`,
  },
  {
    title: "Digital Responsibility",
    content: `As students navigating a world deeply intertwined with technology, understanding and practicing digital responsibility is not just a skill but a necessity.
Think of it as taking ownership of your actions and choices in the digital space, much like an author writing a story with deliberate intent, 
shaping not just the narrative but the impact it leaves on readers.

In this case, you are the author of your digital presence, and your choices define your contribution to the online world. 
Digital responsibility is about crafting your online presence with care and intentionality, much like an author shaping a masterpiece. 
Your actions today can influence not just your future but the broader digital world.

By practicing ethical behavior, respecting privacy, exercising discipline, and fostering kindness, 
you contribute to a healthier, more meaningful digital environment.`,
  },
  {
    title: "Cultural Awareness",
    content: `Cultural awareness means being sensitive to the differences and similarities between two cultures when communicating or interacting with members of other cultural groups.
Cultural sensitivity involves inculcating values, attitudes, and knowledge that display openness and respect for different cultures, religions, languages, manner of dress, and communication styles.

Cultural awareness involves raising people’s understanding of the influence our culture has on how we do things, including how we communicate, what foods we eat, or even how we go about our work. 
Being culturally aware means understanding why cultural diversity is important and recognizing that not every person will do things in the same manner as we do. 
Being mindful of this diversity allows us to be more respectful of the way others operate based on their cultural backgrounds.

While you may not be intimately familiar with other cultures, if you at least understand your own culture and how it affects you, you can take the first step in developing a sense of cultural awareness when it comes to interacting with people who may have a different background than yourself.

Cultural awareness helps you understand yourself better, your weaknesses, your psychology, and how to become a better person. 
It also helps with cognitive flexibility, problem-solving, decision-making, and improved communication skills.`,
  },
  {
    title: "Addressing Inequality",
    content: `Inequality is an enduring feature of human existence. It manifests in various forms—social, economic, educational—and often leads to tension and suffering.
However, as students, you are uniquely positioned to confront and address inequality in ways that are meaningful and transformative.

Addressing inequality is not about dismantling everything that exists but about transforming systems and empowering individuals.
It starts with you—your education, your competence, your willingness to take responsibility.

As Jordan B. Peterson often says, "You’re not everything you could be, and you know it." Use that knowledge as motivation to grow, act, and contribute to a world where inequality is reduced and opportunities are expanded. 
Through courage, truth, and responsibility, you can be a force for meaningful change.`,
  },
];

const SocialChapterReader: React.FC = () => {
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

export default SocialChapterReader;
