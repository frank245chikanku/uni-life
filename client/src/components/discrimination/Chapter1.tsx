import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const biasChapters = [
  {
    title: "Phase 1: Understanding Discrimination and Bias",
    content: `Discrimination is the unjust treatment of people based on the groups or classes they belong to. 
Often, discrimination stems from biases or ignorance: when we fear or misunderstand someone who is different from us, we treat them differently.

Discrimination happens at a personal level, of course, but it reflects larger social biases and norms. 
Because of this, it is common to pick up social and cultural patterns when we are young and not notice the various ways in which discrimination is perpetuated by our cultures and major institutions. 
Since we grow up with it and it can feel “normal,” it’s sometimes hard to step back and see all the ways discrimination impacts us—as people experiencing discrimination and people who need to examine our own biases.

People can discriminate against others due to one or more characteristics, including but not limited to age, race, and weight. 
Even characteristics that are not immediately visible or apparent to other people, such as religion, immigration status, gender, sexual orientation, or disability, can be the focus of discrimination. 
Pregnant people or people who are parents may also experience discrimination by others.`,
  },
  {
    title: "Phase 2: Recognize the Reality of Bias",
    content: `Discrimination can be damaging even if you haven’t been the target of overt acts of bias. 
Regardless of your personal experiences, it can be stressful just being a member of a group that is often discriminated against, 
such as racial minorities or individuals who identify as lesbian, gay, bisexual, or transgender.

The anticipation of discrimination creates its own chronic stress. People might even avoid situations where they expect they could be treated poorly, 
possibly missing out on educational and job opportunities. Focusing on your core values, beliefs, and perceived strengths can motivate people to succeed 
and may even buffer the negative effects of bias. Overcoming hardship can also make people more resilient and better able to face future challenges.

One problem with discrimination is that people can internalize others’ negative beliefs, even when they’re false. You may start to believe you’re not good enough. 
But family and friends can remind you of your worth and help you reframe those faulty beliefs.`,
  },
  {
    title: "Phase 3: Confront Injustice with Truth",
    content: `All injustice affects others, so talking about justice that isn't social is like talking about water that isn't wet or a square with no right angles. 
But the Bible's call to seek justice is not a call to superficial, kneejerk activism. 
We are not merely commanded to execute justice, but to "truly execute justice."

The God who commands us to seek justice is the same God who commands us to "test everything" and "hold fast to what is good."`,
  },
  {
    title: "Phase 4: Cultivate Resilience",
    content: `Resilience means being able to cope with tough events. When something bad happens, you still feel anger, grief, and pain, but you're able to keep going, both physically and psychologically. 
Resilience isn't about putting up with something tough or coping on your own. 
In fact, being able to reach out to others for support is a key part of being resilient.

When you have resilience, you harness the inner strength that helps you rebound from a setback or challenge, such as a job loss, an illness, a disaster, or a loved one's death. 
If you lack resilience, you might get stuck on problems or feel like a victim. 
You might feel burdened or turn to ways to cope that aren't healthy, such as drug or alcohol use, eating disorders, or risky behaviors.

Resilience won't make your problems go away, but it can help you see past them, find ways to enjoy life, and better handle stress. 
If you aren't as resilient as you'd like to be, you can learn skills to become more resilient.`,
  },
  {
    title: "Phase 5: Challenge Bias in Yourself",
    content: `As troubling as it is to admit, the way we perceive people and treat them is significantly correlated with the stereotypes we hold to be true, even in spite of our best intentions. 
We may consider ourselves to already be inclusive of others. Unfortunately, we may not be aware that some of the stereotypes we have learned have in fact sunk in, whether we wanted them to, or not. 
The good news is that it is possible to challenge those automatic, unconscious, reductive stereotypes so we can begin to treat people as the complex individuals that they are.

Steps to Challenge Bias:
1. We must be willing to accept that we do, in fact, have biases, and to make ourselves aware of them.
2. We must be determined not only to unearth our own stereotypes but also to challenge them.
3. We need to learn how to exchange those automatic biases for different, more inclusive, notions and challenge those prejudices before we act on them.

Strategies for Challenging Biases and Behaviors:
- Know your own biases!
- Priming – identify and utilize counter-stereotypic examples.
- Increase exposure and interaction with people from groups you have a bias against.
- Build relationships across differences.
- Ask questions! Avoid making assumptions about people.
- Acknowledge that differences exist and embrace those differences (vs. colorblindness or identity-blindness).
  In every space you are in, ask yourself:
  - Who is in this room?
  - Whose voice is being heard?
  - Whose voice(s) are missing from the conversation? And WHY?
- Get involved in your community:
  - Join a multicultural organization.
  - Attend a local meeting and see how you can be of service.
- Be willing to make mistakes and show up again anyway.`,
  },
];

const BiasChapterReader: React.FC = () => {
  const [current, setCurrent] = useState(0);


  const location = useLocation();
  useEffect(() => {
    const chapterMatch = location.pathname.match(/sub(\d+)/);
    if (chapterMatch) {
      const index = parseInt(chapterMatch[1]) - 1;
      if (!isNaN(index) && index >= 0 && index < biasChapters.length) {
        setCurrent(index);
      }
    }
  }, [location]);

  const progress = ((current + 1) / biasChapters.length) * 100;

  const nextChapter = () => current < biasChapters.length - 1 && setCurrent(current + 1);
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
          {biasChapters[current].title}
        </h2>
        {biasChapters[current].content.split("\n\n").map((para, i) => (
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

        {current < biasChapters.length - 1 ? (
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



export default BiasChapterReader;
