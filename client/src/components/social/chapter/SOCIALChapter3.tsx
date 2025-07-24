import React, { useState } from "react";

const chapters = [
  {
    title: "Listening Circles",
    content: `Listening circles are a powerful tool for fostering deep understanding and connection within 
a group. This practice encourages participants to listen actively and attentively to each 
other without interruption, allowing each person to speak their truth in a safe and respectful 
environment.

Listening circles promote empathy, respect, and mutual learning, as they create 
space for diverse perspectives to be heard and valued. By engaging in listening circles, 
individuals can strengthen their communication skills, resolve conflicts, and build stronger, 
more inclusive communities.`,
  },
  {
    title: "Finding Meaning in Service",
    content: `“Only a life lived for others is a life worthwhile.” These words show how serving others can give our lives purpose and joy. 
In a world focused on personal goals, service stands out. It lets us help others and make a real difference in their lives.

Service isn’t just about being nice. It’s about choosing to help with all your heart, showing you care. 
By serving this way, we can make everyone’s life better. And we find ourselves growing and feeling more satisfied too.

Meaningful service experiences can change our lives deeply. They help us impact others positively. And they help us feel our lives are more meaningful.

Helping others means more than just the actions we take. It’s about seeing the worth in what we do, even the small things. Every bit of help can start a chain reaction, reaching others and inspiring further good deeds.

Service helps us discover who we are. By helping others, we find our unique skills and understand our passions. As we keep serving, we see what really matters and how we can help the world.

“Service is not just about giving; it is about discovering who we are and what we are capable of.”

Getting involved in meaningful service expands our perspectives. It fosters empathy and understanding of our diverse world. These experiences make us more thoughtful and caring.

When we find our service purpose, we feel deeply satisfied. Making a positive difference fills us with joy. We see how serving can change both the receiver and the giver.`,
  },
  {
    title: "Order and Chaos",
    content: `Life is a constant interplay between order and chaos, two forces that shape your existence and potential for growth. Order represents structure,
predictability, and stability—the foundation of your routines and the mastery of what you already know. Chaos, on the other hand, is the realm of the unknown,
where uncertainty and opportunity reside, offering the chance to learn, grow, and transform.

As students, your task is to find a balance between these forces. Too much order leads to stagnation, while too much chaos breeds confusion and overwhelm. True growth occurs when you step into chaos with courage,
armed with the stability that order provides, transforming the unknown into new strengths and competencies.

In navigating this dynamic, you not only build yourself but also discover meaning and purpose, creating a life that is both stable and adventurous.`,
  },
  {
    title: "The Value of Truth",
    content: `Truth is not merely about stating facts—it’s a profound commitment to aligning your words and actions with reality, no matter how uncomfortable or challenging that reality may be.
Truth is what keeps chaos at bay and prevents order from becoming tyrannical; it’s the foundation upon which trust, integrity, and meaning are built.

As students, telling the truth means being honest about your strengths and weaknesses, facing your failures without excuses, and striving to express your genuine thoughts,
even when it’s difficult. By living truthfully, you cultivate personal responsibility, strengthen your character, and create a stable ground from which you can grow and contribute to the world meaningfully.

While the path of truth is demanding, it is also the path that leads to freedom, resilience, and a life of deep significance.`,
  },
  {
    title: "Finding Your Place in the Community",
    content: `Finding your place in the community, as Jordan B. Peterson might suggest, begins with taking responsibility for yourself and then extending that responsibility outward. 
A community thrives when individuals contribute their unique skills and perspectives while also respecting the shared structure that holds it together.

As students, your role is to identify your strengths, cultivate them with discipline, and use them to support and uplift those around you. 
This process requires humility to learn from others, courage to confront challenges, and honesty to acknowledge where you can improve.

By striving to make meaningful contributions, you not only grow as an individual but also help build a stronger, more cohesive community—one where your efforts ripple outward,
creating a network of trust, collaboration, and shared purpose.`,
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
