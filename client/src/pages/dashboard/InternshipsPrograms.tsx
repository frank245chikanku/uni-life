const internships = [
  {
    title: "Student Opportunities at Atlas Copco Zambia",
    field: "Engineering, Business & Technical Fields",
    company: "Atlas Copco",
    link: "https://www.atlascopco.com/en-zm/jobs/student-opportunities",
  },
];

function InternshipsPrograms() {
  return (
    <div className="px-10 py-12 w-full min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 flex flex-col items-center justify-center">
      <p className="font-bold text-3xl mb-8 text-center text-gray-800">
        Internship & Industrial Attachment Opportunities
      </p>

      <a
        href={internships[0].link}
        target="_blank"
        rel="noopener noreferrer"
        className="max-w-3xl w-full bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
      >
        <h3 className="font-semibold text-2xl mb-4">
          {internships[0].title}
        </h3>
        <p className="text-lg mb-2">
          <span className="font-semibold">Field:</span> {internships[0].field}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Company:</span> {internships[0].company}
        </p>
      </a>
    </div>
  );
}

export default InternshipsPrograms;
