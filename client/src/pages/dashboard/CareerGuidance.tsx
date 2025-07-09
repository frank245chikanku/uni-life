

const careers = [
  {
    title: "Business Administration Roles – Zambia",
    skills: ["Project Management", "Finance", "Human Resources", "Operations"],
    link: "https://zm.linkedin.com/jobs/business-administration-jobs",
    nextSkill: "Excel for Business & Budgeting",
    mentorTip:
      "Connect with an HR professional in Zambia via LinkedIn or your university career office.",
  },
  {
    title: "Social Work Opportunities – Zambia",
    skills: ["Community Development", "Counseling", "NGO Management"],
    link: "https://zm.linkedin.com/jobs/social-work-jobs",
    nextSkill: "Psychosocial Support and Case Management",
    mentorTip:
      "Attend webinars hosted by NGOs like Lifeline/Childline Zambia or reach out to social work alumni.",
  },
  {
    title: "Health Sciences & Public Health Jobs – Zambia",
    skills: ["Public Health", "Clinical Practice", "Health Education"],
    link: "https://zm.linkedin.com/jobs/health-science-jobs",
    nextSkill: "Data Collection & Analysis with DHIS2",
    mentorTip:
      "Shadow a local health outreach team or volunteer with community clinics.",
  },
  {
    title: "UI/UX Designer",
    skills: ["Figma", "Adobe XD", "Design Thinking"],
    link: "https://dribbble.com/jobs",
    nextSkill: "Accessibility Design (WCAG Standards)",
    mentorTip:
      "Join global UX mentorship programs like ADPList and share your design work on Behance.",
  },
  {
    title: "Mobile App Developer",
    skills: ["Flutter", "React Native", "Kotlin"],
    link: "https://remoteok.com/remote-mobile+developer-jobs",
    nextSkill: "Firebase Authentication & Storage",
    mentorTip:
      "Join Zambian Devs Slack or WhatsApp communities to ask real-world mobile dev questions.",
  },
  {
    title: "Zambian Tech Jobs (Go Zambia Jobs)",
    skills: ["General ICT", "Software Dev", "IT Support", "Networking"],
    link: "https://gozambiajobs.com/?search_keywords=it",
    nextSkill: "Networking with Cisco (CCNA Fundamentals)",
    mentorTip:
      "Engage with professionals from Tech Hub Zambia or BongoHive mentorship platforms.",
  },
];

const CareerGuidance = () => {
  return (
    <section className="px-6 py-12 min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Career Guidance & Skill Tracking
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Discover industry-relevant roles and build your future step by step.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, index) => (
            <a
              key={index}
              href={career.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 min-h-[240px] rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-[1.03]"
            >
              <h3 className="text-xl font-semibold mb-2">{career.title}</h3>

              <div className="mb-2">
                <p className="text-sm font-medium mb-1">Key Skills:</p>
                <ul className="list-disc list-inside text-sm space-y-0.5">
                  {career.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>

              <p className="text-sm italic mb-1">
                📌 <span className="font-medium">Next Skill:</span>{" "}
                {career.nextSkill}
              </p>

              <p className="text-xs text-gray-700 group-hover:text-white leading-relaxed">
                💡 <span className="font-medium">Mentor Tip:</span>{" "}
                {career.mentorTip}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerGuidance;
