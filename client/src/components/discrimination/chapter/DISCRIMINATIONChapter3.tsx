import React, { useState } from "react";

const chapters = [
  {
    title: "Challenge Assumptions",
    content: `Assumptions are quickly propagated for a number of reasons: fear, change, facing a new experience, or confronting the inconceivable. Many of these assumptions serve the purpose of gently coaxing you back into your comfort zone as a way to reduce that anxiety. In other words, they act as barriers to new thinking or solutions. They are dangerous. But they are also easily identifiable via five common verbal cues. “It can’t be done. It’s impossible.” “There isn’t enough time, or money” – or some other vital resource. “We tried it last year and it didn’t work.” “The client will never buy it.” “They are not giving me the support I need.”

The difference from the word ‘assumption’ signals the moment you become aware that you are taking something for granted or treating a belief as fact or truth. The goal for leaders is to raise individual and organizational consciousness in identifying key assumptions and converting them to ‘truth assumptions’ – those which have been surfaced, explored, and tested – in order to make faster, smarter decisions.`
  },
  {
    title: "Don’t Internalize Negativity",
    content: `Thinking is one of the main tools we use to navigate life. It helps us implement actions and strategize, it helps us survive, and it can also keep us trapped in unproductive patterns.
The first thing to accept is that you are not your thoughts. You are a being who thinks.

Thoughts are interpretations of the world around us and they are not always fact or reality. Therefore, if we understand that thoughts are our brain’s way of processing the world, we can also accept that it is possible to examine our thoughts objectively to determine what beliefs, thinking, and mental models we need to unlearn or resist.

You should care about what you internalize because you become what you think. Lao Tzu said it like this: “Watch your thoughts, they become your words; watch your words, they become your actions; watch your actions, they become your habits; watch your habits, they become your character; watch your character, it becomes your destiny.”

Lately, I have been thinking about it like this: my thinking is like the destination I enter into my GPS. If it is programmed with negative beliefs and mindsets, then my thinking and actions are going to take me in that direction. However, if I examine my negative thought patterns and/or resist internalizing negative thoughts, then it is like entering a new destination for my thoughts and actions to follow.

If we are what we eat, then we also are what we think. Therefore, we need to assess whether we have practices in place that can help us examine our thoughts and prevent internalizing negativity.`
  },
  {
    title: "Encourage Open Dialogue",
    content: `Before you announce your decision, make sure you have a clear and logical explanation for it. How did you arrive at your decision? What criteria did you use? What evidence did you consider? What assumptions did you make? By sharing your reasoning, you show respect for your audience and invite them to understand your perspective. You also demonstrate your critical thinking skills and show that you are open to scrutiny and challenge.

Acknowledge uncertainties and limitations

No decision is perfect or risk-free. There are always uncertainties, trade-offs, and limitations involved. Instead of hiding or ignoring them, acknowledge them openly and honestly. This shows that you are aware of the complexity and nuance of the situation and that you have considered different scenarios and outcomes. It also shows that you are humble and realistic, not arrogant or dogmatic. By acknowledging uncertainties and limitations, you invite others to share their concerns and insights and help you address them.

Seek diverse and dissenting views

One of the best ways to encourage open dialogue is to actively seek diverse and dissenting views. Ask for feedback from people who have different backgrounds, experiences, and perspectives. Encourage them to challenge your assumptions, point out flaws, and offer alternatives. Listen to them with curiosity and respect, not defensiveness or hostility. By seeking diverse and dissenting views, you show that you value diversity and dissent and that you are willing to learn and improve your decision.`
  },
  {
    title: "Practice Humility",
    content: `Don’t think you’re too good for everything you do. People who have big egos tend to think that they deserve to be working at a better place, to be dating someone better, or even to be hanging out with people who are interesting and cooler. But your life is your life, and if you want better things, then you have to work to reach for them, instead of assuming the attitude that you’re not getting treated fairly. To practice humility, work to accept the life you have while striving for more without complaining.

If you adopt the attitude that you’re too cool for school, people will become allergic to you. Instead, work to be grateful for what you have and work to earn more, if that’s what you want.

Be an optimist. People who practice humility are naturally optimistic because they don’t waste their time complaining about all of the bad things that have happened to them or dreading the future. Instead, they’re grateful for what they have and they expect good things to happen in the future. Humble people don’t expect to be given good things on a silver platter, but they do believe that good things will happen to them if they work hard enough.

Work on being excited about all of the things the future holds instead of expecting catastrophe to strike at any moment.

Though it’s a good idea to be prepared for the worst, you should work on finding the silver lining in almost every situation.`
  },
  {
    title: "Stay Grounded in Facts",
    content: `Staying grounded is important because it helps us to maintain balance, stability, and a sense of connection to reality amidst life’s ups and downs. It allows us to make clearer decisions, manage stress more effectively, and maintain a healthy perspective on life. Staying spiritually grounded can be an important aspect of maintaining overall well-being and a sense of connection to oneself and the world around you.

Here’s why being grounded is important:

- Clarity and Focus: When we’re grounded, we’re better able to focus on the task at hand without being distracted by unnecessary worries or thoughts. This clarity enhances productivity and helps you achieve your goals more effectively.
- Emotional Stability: Grounding techniques can help regulate emotions, allowing us to respond to situations calmly and rationally rather than reacting impulsively or emotionally. This emotional stability improves relationships and reduces conflicts.
- Stress Management: Grounding techniques such as deep breathing or mindfulness, can help reduce stress and anxiety by bringing your attention to the present moment and alleviating worries about the past or future.
- Physical Health: Being grounded can have physical benefits too, such as improved sleep, reduced muscle tension, and lower blood pressure. These contribute to overall well-being and longevity.
- Spiritual Connection: Some people find that staying grounded helps them feel more connected to themselves, others, and the world around them. This sense of connection can provide a deeper meaning and purpose in life.`
  }
];

const ChapterReader: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const progress = ((current + 1) / chapters.length) * 100;

  const next = () => current < chapters.length - 1 && setCurrent(current + 1);
  const prev = () => current > 0 && setCurrent(current - 1);
  const restart = () => setCurrent(0);

  const printContent = () => {
    const printWindow = window.open("", "", "width=800,height=600");
    if (!printWindow) return;

    const htmlContent = `
      <html>
        <head>
          <title>${chapters[current].title}</title>
          <style>
            body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
            h2 { font-size: 24px; margin-bottom: 16px; }
            p, li { font-size: 16px; margin-bottom: 12px; }
            ul { padding-left: 20px; }
          </style>
        </head>
        <body>
          <h2>${chapters[current].title}</h2>
          ${chapters[current].content
        .split(/\n\n|-\s/)
        .map((block) =>
          block.trim().startsWith("-")
            ? `<ul>${block
              .split("\n")
              .map((li) => `<li>${li.replace(/^- /, "").trim()}</li>`)
              .join("")}</ul>`
            : `<p>${block.trim()}</p>`
        )
        .join("")}
        </body>
      </html>`;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
        <div
          className="bg-pink-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <h2 className="text-3xl font-bold mb-4">{chapters[current].title}</h2>

      {chapters[current].content.split("\n\n").map((para, i) =>
        para.trim().startsWith("-") ? (
          <ul key={i} className="list-disc pl-6 mb-4">
            {para
              .split("\n")
              .map((li, idx) => (
                <li key={idx} className="mb-2 text-lg leading-relaxed">
                  {li.replace(/^- /, "")}
                </li>
              ))}
          </ul>
        ) : (
          <p key={i} className="mb-4 text-lg leading-relaxed whitespace-pre-wrap">
            {para}
          </p>
        )
      )}

      <div className="mt-6 flex justify-between items-center flex-wrap gap-2">
        <button
          onClick={prev}
          disabled={current === 0}
          className={`${current === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-800 text-white hover:bg-gray-900"
            } font-semibold px-6 py-2 rounded-lg shadow transition`}
        >
          Previous
        </button>

        <button
          onClick={printContent}
          className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
        >
          📄 Print / Save
        </button>

        {current < chapters.length - 1 ? (
          <button
            onClick={next}
            className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
          >
            Next Chapter
          </button>
        ) : (
          <div className="text-center w-full mt-4">
            <p className="text-green-600 font-semibold mb-4">🎉 You’ve completed all chapters!</p>
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

export default ChapterReader;
