

const careers = [
  {
    title: "Business Administration Roles – Zambia",
    skills: ["Project Management", "Finance", "Human Resources", "Operations"],
    link: "https://jobsearchzm.com/", // Job Search Zambia
    nextSkill: "Excel for Business & Budgeting",
    mentorTip:
      "Register on Job Search Zambia and filter for internships or entry-level Business roles in your field.",
  },
  {
    title: "Social Work Opportunities – Zambia",
    skills: ["Community Development", "Counseling", "NGO Management"],
    link: "https://www.greatzambiajobs.com/job-categories/junior-job-fresh-graduate-entry-level-jobs-in-zambia-62",
    nextSkill: "Psychosocial Support and Case Management",
    mentorTip:
      "Use Great Zambia Jobs and search under 'Junior/Fresh Graduate' to find opportunities in social work and NGO roles.",
  },
  {
    title: "Health Sciences & Public Health Jobs – Zambia",
    skills: ["Public Health", "Clinical Practice", "Health Education"],
    link: "https://jobwebzambia.com/", // JobWebZambia
    nextSkill: "Data Collection & Analysis with DHIS2",
    mentorTip:
      "Check JobWebZambia for health and NGO job categories, especially internships or graduate level opportunities.",
  },
  {
    title: "IT Focused Entry Level Jobs",
    skills: ["Design Thinking"],
    link: "https://www.zambiajob.com/", // Zambiajob.com
    nextSkill: "Accessibility Design (WCAG Standards)",
    mentorTip:
      "Use Zambiajob.com to search design or IT-related roles and build your portfolio on platforms like Behance.",
  },
  {
    title: "Entry-Level Jobs for Students – Zambia",
    skills: ["Internships", "Graduate Trainee Programs", "Part-time Roles", "Volunteer Opportunities"],
    link: "https://www.greatzambiajobs.com/job-categories/junior-job-fresh-graduate-entry-level-jobs-in-zambia-62",
    nextSkill: "Workplace Communication & Professional Etiquette",
    mentorTip:
      "Regularly check Great Zambia Jobs’ 'Fresh Graduate / Entry Level' section for new postings across all fields. Also, ask your university career office to link you with internship opportunities.",
  },

  {
    title: "Student-Focused Jobs – Zambia",
    skills: ["Support Services", "Administration", "Campus Operations"],
    link: "https://jobsinzambia.alljobspo.com/Student-jobs-in-zambia", // Alljobspo student jobs
    nextSkill: "Coordination and Student Engagement",
    mentorTip:
      "Explore the Student Jobs section on Alljobspo.com for roles like Student Support Lead or Supervisory positions in student services.",
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
