import React, { useState } from "react";

const chapters = [
  {
    title: "Phase 1: Understanding Assertiveness",
    content: `Being assertive is a core communication skill. Assertiveness can help you express yourself 
effectively and stand up for your point of view. It can also help you do this while respecting 
the rights and beliefs of others.

Being assertive can also help boost your self-esteem and earn others' respect. This can help 
with stress management. It may especially help you reduce stress if you tend to take on too 
many responsibilities because you have a hard time saying no.

Some people seem to be naturally assertive. But if you're not assertive, you can learn to be. 
Because assertiveness is based on mutual respect, it's an effective and diplomatic communication 
style. Being assertive shows that you respect yourself because you're willing to stand up for 
your interests and express your thoughts and feelings. It also demonstrates that you're aware of 
others' rights and willing to work on resolving conflicts.

Of course, it's not just what you say — your message — but also how you say it that's important. 
Assertive communication is direct and respectful. Being assertive gives you the best chance of 
successfully delivering your message. If you communicate in a way that's too passive or too 
aggressive, your message may get lost because people are too busy reacting to your delivery.`,
  },
  {
    title: "Phase 2: Active Listening Skills",
    content: `Active listening is a communication skill that involves going beyond simply hearing the words that another person speaks. 
It's about actively processing and seeking to understand the meaning and intent behind them. 
It requires being a mindful and focused participant in the communication process.

In communication, active listening is important because it keeps you engaged with your conversation partner in a positive way. 
It also makes the other person feel heard and valued. This skill is the foundation of a successful conversation in any setting—whether 
at work, at home, or in social situations.

Active listening techniques include:
- Being fully present in the conversation
- Showing interest by practicing good eye contact
- Noticing (and using) non-verbal cues
- Asking open-ended questions to encourage further responses
- Paraphrasing and reflecting back what has been said
- Listening to understand rather than to respond
- Withholding judgment and advice`,
  },
  {
    title: "Phase 3: The Pressure to Conform",
    content: `There are many aspects of life that pressure us to be conformed. Growing up, there is peer pressure. 
In many careers, people face the pressure to conform to long work hours. Friends often pressure us to 
go places and do things we wouldn’t do otherwise.

And there are spiritual pressures as well. Our spiritual enemies want to lead us away from godly living. 
One of their tactics is to pressure us to be conformed to them. It’s hard to resist. The corrupt values of the world 
are all around us, on TV, the Internet, Facebook, and movies. We live in a world that oozes forth with dishonesty, 
immorality, and ungodliness.

To conform as a preemptive strike against erasure is to live in a bubble that privileges only your way of thinking, 
foreclosing on the possibility of free expression and the force that fuels every single piece of art.`,
  },
  {
    title: "Phase 4: Encouraging Diverse Opinions",
    content: `Diversity of thought is the reality that there is more than one way to think about something. 
It’s understanding that the way each person interprets and interacts with the world is reflective 
of their unique identity, culture, and personal experiences. The greater variation in approaches to 
problems and unique perspectives, the greater the diversity of thought produced.

Diversity of thought elevates teams by fostering communication around individual perspectives and 
creating a posture of thinking that’s beyond yourself. It’s a key ingredient to candid conversation, 
innovation, and execution. Diversity of opinions and perspectives is paramount.

It’s not just about visible demographic diversity but also about actively welcoming a broad spectrum 
of thoughts, ideas, and viewpoints.`,
  },
  {
    title: "Phase 5: How to Say No",
    content: `If you have people-pleaser tendencies, it can be difficult to say no. Sometimes it's because you don't 
want to disappoint someone, or you're seeking approval. Many people hesitate to say no, even when they 
are over-stressed, over-booked, and just too busy to take on anything else.

If you struggle with this, then you’re not alone. But it's important to learn how to say no to people and 
their requests when you're at capacity or simply don't want to do the thing. Being unable to set boundaries 
and say no can contribute to more stress, which may eventually turn to resentment. Saying no is hard for many people. 
So, we blurt out yes to requests we’d rather decline — and frequently end up regretting it.

“We often believe that we are protecting other people by saying yes when we want to say no. But being transparent 
about our feelings, needs, and limits leads to healthier, more authentic relationships.

And saying no and honoring your feelings, needs, and limits also leads to a healthier you. Thankfully, saying no 
is a skill anyone can build. The key is to keep practicing.”`,
  },
];

const PeerChapter2Reader: React.FC = () => {
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
    const currentChapter = chapters[current];
    const contentToPrint = `
      <div>
        <h2>${currentChapter.title}</h2>
        ${currentChapter.content
          .split("\n\n")
          .map((para) => {
            if (para.trim().startsWith("-")) {
              const items = para
                .split("\n")
                .filter((line) => line.trim().startsWith("-"))
                .map((line) => `<li>${line.slice(1).trim()}</li>`)
                .join("");
              return `<ul>${items}</ul>`;
            }
            return `<p>${para}</p>`;
          })
          .join("")}
      </div>
    `;

    const printWindow = window.open("", "", "width=800,height=600");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${currentChapter.title}</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                padding: 20px;
                color: #1f2937;
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
              ul {
                padding-left: 20px;
                margin-bottom: 12px;
              }
              li {
                font-size: 16px;
                margin-bottom: 8px;
              }
            </style>
          </head>
          <body>${contentToPrint}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 h-[calc(100vh-4rem)] flex flex-col">
      <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
        <div
          className="bg-pink-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 overflow-y-scroll">
        <h2 className="font-bold text-3xl mb-6 text-center text-[#050505]">
          {chapters[current].title}
        </h2>
        {chapters[current].content.split("\n\n").map((para, idx) => {
          if (para.trim().startsWith("-")) {
            const items = para
              .split("\n")
              .map(line => line.trim())
              .filter(line => line.startsWith("-"))
              .map(line => line.slice(1).trim());
            return (
              <ul key={idx} className="list-disc ml-6 mb-4 text-lg leading-relaxed">
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }
          return (
            <p key={idx} className="mb-4 text-lg leading-relaxed whitespace-pre-wrap">
              {para}
            </p>
          );
        })}
      </div>

      <div className="mt-6 flex justify-between items-center flex-wrap gap-2">
        <button
          onClick={prevChapter}
          disabled={current === 0}
          className={`${
            current === 0
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

export default PeerChapter2Reader;
