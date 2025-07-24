import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const chapters = [
  {
    title: "Phase 1: Understanding Social Responsibility",
    content: `Social responsibility is an ethical theory in which individuals are accountable for fulfilling their civic duty, and the actions of an individual must benefit the whole of society. In this way, there must be a balance between economic growth, the welfare of people, and the environment. If this equilibrium is maintained, then social responsibility is accomplished.

The theory of social responsibility is built on a system of ethics, in which decisions and actions must be ethically validated before proceeding. If the action or decision causes harm to society or the environment, then it would be considered to be socially irresponsible.

Moral values that are inherent in society create a distinction between right and wrong. In this way, social fairness is believed (by most) to be in the “right”, but more frequently than not this “fairness” is absent. Every individual has a responsibility to act in a manner that is beneficial to society and not solely to the individual.`,
  },
  {
    title: "Phase 2: The Role of Individuals",
    content: `An individual's role in shaping society contributes to the overall functioning and progression of that society. People are shaped by society as well, as construction in their individual cognitive, behavioural, and emotional abilities are based off of the social order. Individuals are important because they are the support beam to society. Those with good stable values disrupt chaos and give hope to society that we can all go back to normal. People also contain a vast amount of knowledge that lies in their heads ready to be tapped into for society's benefit.

The social environment is made up of a number of factors that determine individual lives. One way in which society can socially control and artificially segment and compartmentalize but at the same time develop unity is by this thing we call culture. Culture allows those within the societal structure to communicate and socialize with each other about their obtainable, official, regional, religious, and secular views, groups, and subgroups through shared beliefs, rituals, music, cultural customs, food, and through the usage of language. It is learned, socially acquired, and in essence, distinguishes key factors between groups of people or individuals.`,
  },
  {
    title: "Phase 3: Social Impact Assessment",
    content: `Social impact assessment (SIA) is now conceived as being the process of managing the social issues of development. There is consensus on what ‘good’ SIA practice is – it is participatory; it supports affected peoples, proponents, and regulatory agencies. It increases understanding of change and capacities to respond to change; it seeks to avoid and mitigate negative impacts and to enhance positive benefits across the life cycle of developments, and it emphasizes enhancing the lives of vulnerable and disadvantaged people.

We analyse the strengths, weaknesses, opportunities, and threats facing SIA. We assert that the SIA community needs to revisit core concepts, such as culture, community, power, human rights, gender, justice, place, resilience, and sustainable livelihoods.`,
  },
  {
    title: "Phase 4: Corporate Social Responsibility",
    content: `There have long been conflicting expectations of the nature of companies’ responsibilities to society. However, for those businesses that do undertake what might be termed “corporate social responsibility,” what is actually socially responsible behaviour as opposed to management of corporate image or other activity aimed predominantly at business benefits?

Corporate social responsibility (CSR) is a management concept that describes how a company contributes to the well-being of communities and society through environmental and social measures. CSR plays a crucial role in how brands are perceived by customers and their target audience. It may also help attract employees and investors who prioritize the CSR goals a company has identified. Learn about the importance of CSR and how it can impact the success of your business.`,
  },
  {
    title: "Phase 5: Community Engagement",
    content: `Community engagement is most effective when it involves a collaborative effort that brings together community members, organizations, and groups working towards a common goal. Collaboration fosters a sense of ownership and responsibility among community members and a shared commitment to achieving positive outcomes.

Collaboration leads to another essential principle of community engagement: empowerment. Empowerment involves providing community members with the tools, knowledge, and resources to participate in decision-making and problem-solving. This may include providing training or educational resources and creating opportunities for community members to take on leadership roles and become more involved.

Inclusivity is another vital principle of community engagement. Inclusivity involves ensuring all community members have a voice and an opportunity to participate in the process, including those who may be traditionally marginalized or underrepresented. Inclusion may involve reaching out to community members in different languages or through various channels and providing accommodations or support for those with disabilities or other special needs.

When you do not engage with the community, everyone loses. Community members, feeling powerless, rally against you. Your organization must deal with many more grievances than if you took a proactive approach.

A forward-thinking community engagement model establishes trust with communities from the outset. Your processes and community engagement strategy should consider what benefits all parties involved.`,
  },
];

const SocialChapter1Reader: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const match = location.pathname.match(/sub(\d+)/);
    if (match) {
      const index = parseInt(match[1]) - 1;
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
            className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition w-full md:w-auto"
          >
            Next Chapter
          </button>
        ) : (
          <div className="text-center w-full">
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

export default SocialChapter1Reader;
