const careers = [
  {
    title: "Business Administration Roles – Zambia",
    skills: ["Project Management", "Finance", "Human Resources", "Operations"],
    link: "https://zm.linkedin.com/jobs/business-administration-jobs",
    nextSkill: "Excel for Business & Budgeting",
    mentorTip: "Connect with an HR professional in Zambia via LinkedIn or your university career office.",
  },
  {
    title: "Social Work Opportunities – Zambia",
    skills: ["Community Development", "Counseling", "NGO Management"],
    link: "https://zm.linkedin.com/jobs/social-work-jobs",
    nextSkill: "Psychosocial Support and Case Management",
    mentorTip: "Attend webinars hosted by NGOs like Lifeline/Childline Zambia or reach out to social work alumni.",
  },
  {
    title: "Health Sciences & Public Health Jobs – Zambia",
    skills: ["Public Health", "Clinical Practice", "Health Education"],
    link: "https://zm.linkedin.com/jobs/health-science-jobs",
    nextSkill: "Data Collection & Analysis with DHIS2",
    mentorTip: "Shadow a local health outreach team or volunteer with community clinics.",
  },
  {
    title: "UI/UX Designer",
    skills: ["Figma", "Adobe XD", "Design Thinking"],
    link: "https://dribbble.com/jobs",
    nextSkill: "Accessibility Design (WCAG Standards)",
    mentorTip: "Join global UX mentorship programs like ADPList and share your design work on Behance.",
  },
  {
    title: "Mobile App Developer",
    skills: ["Flutter", "React Native", "Kotlin"],
    link: "https://remoteok.com/remote-mobile+developer-jobs",
    nextSkill: "Firebase Authentication & Storage",
    mentorTip: "Join Zambian Devs Slack or WhatsApp communities to ask real-world mobile dev questions.",
  },
  {
    title: "Zambian Tech Jobs (Go Zambia Jobs)",
    skills: ["General ICT", "Software Dev", "IT Support", "Networking"],
    link: "https://gozambiajobs.com/?search_keywords=it",
    nextSkill: "Networking with Cisco (CCNA Fundamentals)",
    mentorTip: "Engage with professionals from Tech Hub Zambia or BongoHive mentorship platforms.",
  },
];

const CareerGuidance = () => {
  return (
    <div className="px-4 py-6 w-full flex flex-col min-h-screen bg-gray-50">
      <p className="font-bold text-2xl mb-6 text-center text-gray-800">
        Career Guidance and Skill Tracking
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {careers.map((career, index) => (
          <a
            key={index}
            href={career.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-gradient-to-br from-white via-gray-100 to-white shadow-md hover:shadow-xl border border-gray-200 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <h3 className="font-semibold text-lg mb-2">{career.title}</h3>
            <p className="text-sm font-medium mb-1">Key Skills:</p>
            <ul className="list-disc list-inside text-sm space-y-1 mb-2">
              {career.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
            <p className="text-sm italic mb-1">
              📌 Next Skill to Learn: <span className="font-semibold">{career.nextSkill}</span>
            </p>
            <p className="text-xs text-gray-700">
              💡 Mentorship Tip: {career.mentorTip}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CareerGuidance;
