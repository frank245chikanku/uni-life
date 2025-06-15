
const careers = [
    {
      title: "Web Developer",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      link: "https://www.linkedin.com/jobs/web-developer-jobs/",
    },
    {
      title: "Data Analyst",
      skills: ["Python", "SQL", "Excel", "Power BI"],
      link: "https://www.indeed.com/q-data-analyst-jobs.html",
    },
    {
      title: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "Design Thinking"],
      link: "https://dribbble.com/jobs",
    },
    {
      title: "Mobile App Developer",
      skills: ["Flutter", "React Native", "Kotlin"],
      link: "https://remoteok.com/remote-mobile+developer-jobs",
    },
    {
      title: "Zambian Tech Jobs (Go Zambia Jobs)",
      skills: ["General ICT", "Software Dev", "IT Support", "Networking"],
      link: "https://gozambiajobs.com/?search_keywords=it&search_location&search_categories%5B0%5D=35&filter_job_type%5B0%5D=advert&filter_job_type%5B1%5D=consultancy&filter_job_type%5B2%5D=freelance&filter_job_type%5B3%5D=full-time&filter_job_type%5B4%5D=internship&filter_job_type%5B5%5D=part-time&filter_job_type%5B6%5D=tender-notice&filter_job_type%5B7%5D=temporary&filter_job_type%5B8%5D",
    },
    {
      title: "Zambian Opportunities (Jobweb Zambia)",
      skills: ["Engineering", "Admin", "Accounting", "ICT"],
      link: "https://www.jobwebzambia.com/jobs/",
    },
  ];
  

const CareerGuidance = () => {
  return (
    <div className="px-4 py-6 w-full flex flex-col min-h-screen">
      <p className="font-bold text-2xl mb-6 text-center">
        Career Guidance and Skill Tracking
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {careers.map((career, index) => (
          <a
            key={index}
            href={career.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg shadow hover:bg-gradient-to-br from-blue-400 to-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <h3 className="font-semibold text-lg mb-2">{career.title}</h3>
            <p className="text-sm font-medium">Key Skills:</p>
            <ul className="list-disc list-inside text-sm">
              {career.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CareerGuidance;
