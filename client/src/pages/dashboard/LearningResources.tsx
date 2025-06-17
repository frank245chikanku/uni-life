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
    title: "FreeCodeCamp",
    topics: ["Web Development", "JavaScript", "APIs", "Data Structures"],
    link: "https://www.freecodecamp.org/",
    benefit: "Build real coding projects and earn certifications for free.",
    nextStep: "Start a certification path and build your portfolio project.",
  },
];

function LearningResources() {
  return (
    <div className="px-4 py-6 w-full flex flex-col min-h-screen bg-gray-50">
      <p className="font-bold text-2xl mb-6 text-center text-gray-800">
        Free Learning Resources
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {learningResources.map((resource, index) => (
          <a
            key={index}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-gradient-to-br from-white via-gray-100 to-white shadow-md hover:shadow-xl border border-gray-200 hover:bg-gradient-to-br hover:from-green-500 hover:to-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
            <p className="text-sm font-medium mb-1">Topics Covered:</p>
            <ul className="list-disc list-inside text-sm space-y-1 mb-2">
              {resource.topics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
            <p className="text-xs italic mb-1">📌 Why use this: <span className="font-medium">{resource.benefit}</span></p>
            <p className="text-xs text-gray-700">🎯 Next Step: {resource.nextStep}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default LearningResources;
