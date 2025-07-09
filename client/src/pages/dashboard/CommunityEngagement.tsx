function CommunityEngagement() {
  const engagementCards = [
    {
      title: "Ethical Decision-Making",
      description:
        "Learn how to make responsible choices in real-world scenarios through case studies and professional guidelines.",
      link: "https://www.acm.org/code-of-ethics",
      impact: "Boosts your professional credibility and trustworthiness.",
      actionTip: "Reflect on a real dilemma you faced and how you'd handle it now using ethical guidelines.",
    },
    {
      title: "Zambian Student Webinars & Meetups",
      description:
        "Join virtual events organized in Zambia across tech, health, social work, business administration—and connect with peers.",
      link: "https://www.eventbrite.com/d/zambia--lusaka/webinars/",
      impact: "Builds a sense of community and exposes you to real-world discussions.",
      actionTip: "Sign up for at least one webinar this month and participate actively.",
    },
    {
      title: "Zambian Professional & Mentor Connect",
      description:
        "Connect with Zambian professionals from ICT, business, health sciences, and social work for mentorship.",
      link: "https://www.linkedin.com/groups/14271555/",
      impact: "Gives you access to real advice from people with local and global experience.",
      actionTip: "Send a polite message to a professional asking for career insights or mentorship.",
    },
    {
      title: "ZICA Virtual Accountants Forum",
      description:
        "Join forums and webinars for students, professionals, and mentors in accounting, finance, and business admin.",
      link: "https://www.zica.co.zm/",
      impact: "Keeps you current with the accounting field in Zambia and improves your network.",
      actionTip: "Attend a virtual session and post a summary of what you learned on LinkedIn.",
    },
    {
      title: "Professional Conduct Resources",
      description:
        "Master workplace etiquette, communication, and diversity practices for a well-rounded career identity.",
      link: "https://www.coursera.org/learn/work-smarter-not-harder",
      impact: "Makes you stand out as a polished and respectful job candidate.",
      actionTip: "Practice one soft skill this week—like writing professional emails or time blocking.",
    },
    {
      title: "VSO Zambia – Youth Volunteer Program",
      description:
        "Apply as a youth volunteer in Zambia with VSO’s ICS program—engage in community development.",
      link: "https://www.vsointernational.org/volunteering",
      impact: "Helps develop empathy, leadership, and community problem-solving experience.",
      actionTip: "Apply to one volunteer opportunity and journal your experience weekly.",
    },
  ];

  return (
    <section className="px-6 py-12 min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Community Engagement & Ethical Growth
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Participate in meaningful actions that grow your values and career readiness.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagementCards.map((card, idx) => (
            <a
              key={idx}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 min-h-[240px] rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-[1.03]"
            >
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm mb-2">{card.description}</p>
              <p className="text-xs italic mb-1">
                🌍 <span className="font-medium">Why this matters:</span> {card.impact}
              </p>
              <p className="text-xs text-gray-700 group-hover:text-white leading-relaxed">
                ✅ <span className="font-medium">Next Step:</span> {card.actionTip}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityEngagement;
