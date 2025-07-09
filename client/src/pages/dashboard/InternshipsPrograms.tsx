
const internships = [
  {
    title: "Student Opportunities at Atlas Copco Zambia",
    field: "Engineering, Business & Technical Fields",
    company: "Atlas Copco",
    link: "https://www.atlascopco.com/en-zm/jobs/student-opportunities",
  },
];

const prepResources = [
  {
    title: "📄 CV Builder",
    description: "Create a professional resume using easy-to-edit templates.",
    link: "https://www.canva.com/resumes/",
    impact: "Makes your application stand out at a glance.",
    actionTip: "Update your CV today with relevant skills and recent experiences.",
  },
  {
    title: "🧠 Cover Letter Generator",
    description: "Generate personalized cover letters tailored to job roles.",
    link: "https://www.resumegenius.com/cover-letter-builder",
    impact: "Shows your motivation and fit for the role.",
    actionTip: "Use a cover letter template and tweak it for each job.",
  },
  {
    title: "🎤 Interview Practice Questions",
    description: "Practice common interview questions and job-specific ones.",
    link: "https://www.interviewbit.com/hr-interview-questions/",
    impact: "Improves your confidence and response clarity.",
    actionTip: "Record yourself answering 3 questions and review your answers.",
  },
];

function InternshipsPrograms() {
  return (
    <section className="px-6 py-12 bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-14">
        
        <header className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
            Internship & Industrial Attachment Opportunities
          </h2>
          <p className="text-gray-600 text-lg">
            Explore real-world opportunities and start your career journey.
          </p>
        </header>

        
        <a
          href={internships[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 p-6 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-3">{internships[0].title}</h3>
          <p className="text-md mb-1">
            <span className="font-medium">Field:</span> {internships[0].field}
          </p>
          <p className="text-md">
            <span className="font-medium">Company:</span> {internships[0].company}
          </p>
        </a>

        
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            🧰 Prepare to Apply
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {prepResources.map((resource, idx) => (
              <a
                key={idx}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-white hover:bg-indigo-600 hover:text-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-sm mb-2">{resource.description}</p>
                <p className="text-xs italic mb-1 text-gray-600 group-hover:text-white">
                  🌍 Why this matters: <span className="font-medium">{resource.impact}</span>
                </p>
                <p className="text-xs text-gray-700 group-hover:text-white">
                  ✅ Next Step: {resource.actionTip}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InternshipsPrograms;
