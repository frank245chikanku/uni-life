import { useEffect, useState } from "react";
import axios from "axios";
import { ENDPOINT } from "../../api";
import { IIntership } from "../../types/interface";

const internships = [
  {
    title: "Student Opportunities at Atlas Copco Zambia",
    field: "Engineering, Business & Technical Fields",
    company: "Atlas Copco",
    link: "https://www.atlascopco.com/en-zm/jobs/student-opportunities",
  },
  {
    title: "Internships at UNDP Zambia",
    field: "Development, Policy, Administration",
    company: "United Nations Development Programme (UNDP)",
    link: "https://www.undp.org/zambia/jobs",
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
  const [loading, setLoading] = useState(false);
  const [internship, setInternship] = useState<IIntership[]>([]);

  const fetchInternships = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${ENDPOINT}/api/internship/get-all`);
      setInternship(res.data);
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInternships();
  }, []);

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

        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            🏢 Available Internship Listings
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {/* 1. Atlas Copco */}
            <a
              href={internships[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 p-6"
            >
              <h3 className="text-2xl font-semibold mb-3">{internships[0].title}</h3>
              <p className="text-md mb-1">
                <span className="font-medium">Field:</span> {internships[0].field}
              </p>
              <p className="text-md">
                <span className="font-medium">Company:</span> {internships[0].company}
              </p>
            </a>

            {/* 2. Dynamic card  */}
            {!loading && internship.length > 0 && (
              <div
                key={internship[0].title}
                className="block bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 p-6"
              >
                <h3 className="text-2xl font-semibold mb-3">{internship[0].title}</h3>
                <p className="text-md mb-1">
                  <span className="font-medium">Description:</span> {internship[0].description}
                </p>
                <p className="text-md mb-1">
                  <span className="font-medium">Address:</span> {internship[0].address}
                </p>
                <p className="text-md mb-3">
                  <span className="font-medium">Contact:</span> {internship[0].contact}
                </p>
                {internship[0].link && (
                  <a
                    href={internship[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium underline text-indigo-700 hover:text-white"
                  >
                    View Internship →
                  </a>
                )}
              </div>
            )}

            {/* 3. UNDP card last */}
            <a
              href={internships[1].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 p-6"
            >
              <h3 className="text-2xl font-semibold mb-3">{internships[1].title}</h3>
              <p className="text-md mb-1">
                <span className="font-medium">Field:</span> {internships[1].field}
              </p>
              <p className="text-md">
                <span className="font-medium">Company:</span> {internships[1].company}
              </p>
            </a>
          </div>

          {loading && (
            <p className="text-center text-lg text-purple-700">Loading data...</p>
          )}
        </div>

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
