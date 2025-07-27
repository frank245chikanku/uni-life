import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const entrepreneurshipChapters = [
  {
    title: "Decentralize Risk in Your Startup",
    content: `The idea of decentralizing risk is tied to the concept of not putting all resources, decisions, or operations in a single area that could potentially fail. One well-known narrative involves startups diversifying their revenue streams or operational dependencies to ensure that no single failure can collapse the entire venture.

Students can relate to the story of how early-stage companies often experiment with multiple products or markets to see what sticks. By spreading risk, they learn which avenue generates traction while safeguarding against total loss. A compelling real-life example might include a tech company initially launching multiple apps before focusing on the most successful one, ensuring survival even if one app fails. This approach not only mitigates risks but also teaches resilience and adaptability—qualities essential for both startups and personal growth. For students, it serves as a reminder to diversify efforts, embrace experimentation, and learn from small failures without jeopardizing the bigger vision.`,
  },
  {
    title: "Pivot, Don’t Persevere",
    content: `When entrepreneurs encounter unexpected events, they have to attend to relational and temporal commitments simultaneously.

Pivoting and perseverance require a recalibration of the temporal commitments associated with venture ideas.

- To persevere, entrepreneurs position actions as continuation of the past, extend timelines and complexify temporal ordering.
- To pivot, they reposition actions on a revised timeline by reinterpreting the past to align with a new projected future.

Given the uncertainties surrounding entrepreneurship, entrepreneurs are likely to confront unexpected events when they pursue their venture ideas. Upon encountering such events, entrepreneurs may decide to persevere with their original ideas to maintain legitimacy in the eyes of stakeholders. Alternatively, they may pivot to deal with the unfolding contexts they are confronted with. Overall, entrepreneurs face tensions between continuity and change, which they must address.

Whether choosing to persevere by building on the past or pivoting to redefine the future, entrepreneurs must strategically recalibrate their actions to align with evolving circumstances and stakeholder expectations. This duality demands flexibility, foresight, and the ability to reinterpret challenges as opportunities. Ultimately, success lies in an entrepreneur's ability to skillfully manage these tensions, embracing both stability and adaptation to drive their ventures forward amidst uncertainty.`,
  },
  {
    title: "Understand Optionality",
    content: `Optionality is the state of having options. It’s a context where you can select from a set of choices without being under any obligation to do so. We usually have a common-sense understanding of the term. Who amongst us hasn’t used the phrase ‘let’s keep our options open’ at least once in their life? Optionality is about options that are available to you.

Strategic optionality involves using options in a strategic way, to understand their payoffs, and selectively acting on them. In the same common-sensical way, we know that options are most useful in a context of uncertainty, when the future is uncertain, and you are unsure of the best way forward. We take common-sense as our starting point and delve deeper into the idea here in this chapter.

Optionality is a powerful tool that can be harnessed to create value in many different ways. However, it is also a complex concept that requires a deep understanding of the underlying assets and markets. In this section, we will explore the concept of optionality in more detail and provide insights from different points of view.`,
  },
  {
    title: "Build Resilience, Not Fragility",
    content: `When we aspire to show resilience we subconsciously acknowledge our ego that we know the future because we are saying we don't need to learn as we move into the future.

We also tend to accept our mediocrity by becoming intellectually lazy and not doing the work required to shape the future.

I don't want you to get me wrong. I like to be resilient and it isn't totally wrong but if we wish for greater things we should not get limited by the comfort resilience provides to us. We must go beyond resilience and aim for anti-fragility.

As a property, anti-fragility can be applied in multiple spheres of our life and can be a great lens to look at various aspects that are inherently antifragile already.

“Curiosity is antifragile, like an addiction, and is magnified by attempts to satisfy it — books have a secret mission and ability to multiply, as everyone who has wall-to-wall bookshelves knows well.”

There is a reason why people who are into lifelong learning appear to be humble because they know that they don't know a lot and any amount of pride in having learned something will only come in their way of learning more things.`,
  },
  {
    title: "Prepare for Extreme Outcomes",
    content: `In any venture, whether it’s entrepreneurship, investments, or personal projects, it’s important to mentally prepare for both the best and worst-case scenarios. Preparing for extreme outcomes means acknowledging the possibility of dramatic success or failure, and being ready to handle both. This mindset helps reduce the emotional impact of unexpected results, whether it’s a windfall of success or an unforeseen failure. By preparing for extremes, you create contingency plans, diversify your approach, and build resilience. You become more equipped to deal with setbacks and more confident in celebrating successes. This mental preparation also encourages calculated risk-taking, as you become less afraid of the unknown and more confident in your ability to adapt to changing circumstances.`,
  }
];

const ENTREPRENEURSHIPChapter2Reader: React.FC = () => {
  const [current, setCurrent] = useState(0);


  const location = useLocation();
  useEffect(() => {
    const chapterMatch = location.pathname.match(/sub(\d+)/);
    if (chapterMatch) {
      const index = parseInt(chapterMatch[1]) - 1;
      if (!isNaN(index) && index >= 0 && index < entrepreneurshipChapters.length) {
        setCurrent(index);
      }
    }
  }, [location]);

  const progress = ((current + 1) / entrepreneurshipChapters.length) * 100;

  const nextChapter = () => current < entrepreneurshipChapters.length - 1 && setCurrent(current + 1);
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
          {entrepreneurshipChapters[current].title}
        </h2>
        {entrepreneurshipChapters[current].content.split("\n\n").map((para, i) => (
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

        {current < entrepreneurshipChapters.length - 1 ? (
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

export default ENTREPRENEURSHIPChapter2Reader;
