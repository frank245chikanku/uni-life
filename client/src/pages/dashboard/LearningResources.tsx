

const learningResources: {
  title: string;
  topics: string[];
  link: string;
  benefit: string;
  nextStep: string;
}[] = [
    {
      title: "Business Administration & Social Work Courses",
      topics: ["Leadership", "Project Management", "Community Development", "Social Policy"],
      link: "https://www.coursera.org/courses?query=business%20administration%20social%20work",
      benefit: "Upskill with accredited short courses from top universities.",
      nextStep: "Enroll in one course and aim to complete a certificate this month.",
    },
    {
      title: "Engineering & Computer Science Resources",
      topics: ["Electrical Engineering", "Mechanical Design", "Algorithms", "Systems Programming"],
      link: "https://ocw.mit.edu/",
      benefit: "Access world-class MIT curriculum completely free.",
      nextStep: "Pick one subject from MIT OCW and follow it weekly.",
    },
    {
      title: "Free e-Learning Books & Scholar Articles",
      topics: ["Academic Textbooks", "Free Standard eBooks", "Open Access Journals", "Research Papers"],
      link: "https://www.pdfdrive.com/",
      benefit: "Explore thousands of academic eBooks and research guides for free.",
      nextStep: "Download one book on your area of study and take weekly notes.",
    },
    {
      title: "Standard Research Sites for Students",
      topics: ["ResearchGate", "ERIC (Education)", "JSTOR (Free Access)", "Academia.edu"],
      link: "https://www.researchgate.net/",
      benefit: "Connect with academic networks and access peer-reviewed research.",
      nextStep: "Search for three research papers related to your field.",
    },
    {
      title: "Health Sciences Research Resources",
      topics: ["Nursing", "Food & Nutrition", "Environmental Health", "Public Health Journals"],
      link: "https://www.ncbi.nlm.nih.gov/pmc/",
      benefit: "Stay updated with the latest global health publications and case studies.",
      nextStep: "Read one article weekly and summarize it in your own words.",
    },
    {
      title: "Infosys Springboard",
topics: ["Digital Skills", "Technology", "AI", "Career Development"],
link: "https://infyspringboard.us.onwingspan.com/web/en/page/home",
benefit: "Access a wide range of free courses and resources to enhance your digital and professional skills.",
nextStep: "Sign up, explore learning paths, and start earning recognized certificates to boost your career."

    },
  ];

function LearningResources() {
  return (
    <section className="px-6 py-12 min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Free Learning Resources
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Access free, credible tools to grow your academic and technical skills.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningResources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 min-h-[240px] rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-[1.03]"
            >
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>

              <div className="mb-2">
                <p className="text-sm font-medium mb-1">Topics Covered:</p>
                <ul className="list-disc list-inside text-sm space-y-0.5">
                  {resource.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
              </div>

              <p className="text-xs italic mb-1">
                📌 <span className="font-medium">Why use this:</span> {resource.benefit}
              </p>

              <p className="text-xs text-gray-700 group-hover:text-white leading-relaxed">
                🎯 <span className="font-medium">Next Step:</span> {resource.nextStep}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningResources;
