import { useEffect, useState } from "react";
import axios from "axios";
import { ENDPOINT } from "../../api";
import { IIntership } from "../../types/interface";
import {
  BriefcaseBusiness,
  Building2,
  ExternalLink,
  FileText,
  GraduationCap,
  MapPin,
  Phone,
  Target,
  Users,
} from "lucide-react";

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
    title: "CV Builder",
    description:
      "Create a professional CV using easy-to-edit templates that clearly present your education, skills and experience.",
    link: "https://www.canva.com/resumes/",
    impact: "Helps employers quickly understand your qualifications.",
    actionTip:
      "Update your CV with your latest education, certifications, skills and experience.",
    icon: FileText,
  },
  {
    title: "Cover Letter Generator",
    description:
      "Create personalized cover letters that explain your motivation and show why you are a strong candidate.",
    link: "https://www.resumegenius.com/cover-letter-builder",
    impact: "Shows your motivation and connection to the opportunity.",
    actionTip:
      "Customize your cover letter for every organization and position.",
    icon: Target,
  },
  {
    title: "Interview Practice Questions",
    description:
      "Practice common interview questions and prepare clear, confident answers before attending an interview.",
    link: "https://www.interviewbit.com/hr-interview-questions/",
    impact: "Improves confidence, communication and response clarity.",
    actionTip:
      "Practice answering at least three interview questions out loud.",
    icon: Users,
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
      console.error("Error fetching internships:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInternships();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 px-6 py-12">
      <div className="mx-auto max-w-6xl space-y-14">

        {/* ================= HEADER ================= */}
        <header className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md">
            <BriefcaseBusiness className="h-7 w-7 text-purple-600" />
          </div>

          <h2 className="mb-2 text-4xl font-extrabold text-gray-800">
            Internship & Industrial
            <span className="block text-purple-600">
              Attachment Opportunities
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore real-world opportunities and take the next step toward
            building practical experience and your career.
          </p>
        </header>

        {/* ================= INTERNSHIP LISTINGS ================= */}
        <div>
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">
              🏢 Available Internship Listings
            </h2>

            <p className="text-gray-600">
              Find opportunities that can help you gain practical experience
              and prepare for the workplace.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

            {/* ================= STATIC INTERNSHIPS ================= */}
            {internships.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[290px] flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-purple-600 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 transition-colors duration-300 group-hover:bg-white/20">
                    <GraduationCap className="h-6 w-6 text-purple-600 group-hover:text-white" />
                  </div>

                  <ExternalLink className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
                </div>

                {/* Label */}
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-purple-600 group-hover:text-purple-100">
                  Internship Opportunity
                </p>

                {/* Title */}
                <h3 className="mb-4 text-xl font-bold leading-snug text-gray-800 group-hover:text-white">
                  {item.title}
                </h3>

                {/* Information */}
                <div className="space-y-3 text-sm text-gray-600 group-hover:text-purple-50">
                  <div className="flex items-start gap-2">
                    <BriefcaseBusiness className="mt-0.5 h-4 w-4 shrink-0 text-purple-500 group-hover:text-purple-100" />

                    <p>
                      <span className="font-semibold text-gray-800 group-hover:text-white">
                        Field:
                      </span>{" "}
                      {item.field}
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-500 group-hover:text-purple-100" />

                    <p>
                      <span className="font-semibold text-gray-800 group-hover:text-white">
                        Company:
                      </span>{" "}
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 group-hover:text-white">
                    View Opportunity
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}

            {/* ================= DYNAMIC INTERNSHIPS ================= */}
            {!loading &&
              internship.map((item, index) => (
                <div
                  key={item.title || index}
                  className="group flex min-h-[290px] flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-purple-600 hover:shadow-2xl"
                >
                  {/* Icon */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 transition-colors duration-300 group-hover:bg-white/20">
                      <BriefcaseBusiness className="h-6 w-6 text-purple-600 group-hover:text-white" />
                    </div>

                    {item.link && (
                      <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-white" />
                    )}
                  </div>

                  {/* Label */}
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-purple-600 group-hover:text-purple-100">
                    Internship Opportunity
                  </p>

                  {/* Title */}
                  <h3 className="mb-4 text-xl font-bold leading-snug text-gray-800 group-hover:text-white">
                    {item.title}
                  </h3>

                  {/* Information */}
                  <div className="space-y-3 text-sm text-gray-600 group-hover:text-purple-50">
                    {item.description && (
                      <div className="flex items-start gap-2">
                        <FileText className="mt-0.5 h-4 w-4 shrink-0 text-purple-500 group-hover:text-purple-100" />

                        <p>
                          <span className="font-semibold text-gray-800 group-hover:text-white">
                            Description:
                          </span>{" "}
                          {item.description}
                        </p>
                      </div>
                    )}

                    {item.address && (
                      <div className="flex items-start gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-purple-500 group-hover:text-purple-100" />

                        <p>
                          <span className="font-semibold text-gray-800 group-hover:text-white">
                            Address:
                          </span>{" "}
                          {item.address}
                        </p>
                      </div>
                    )}

                    {item.contact && (
                      <div className="flex items-start gap-2">
                        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-purple-500 group-hover:text-purple-100" />

                        <p>
                          <span className="font-semibold text-gray-800 group-hover:text-white">
                            Contact:
                          </span>{" "}
                          {item.contact}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Bottom Action */}
                  {item.link && (
                    <div className="mt-auto pt-6">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 underline group-hover:text-white"
                      >
                        View Internship
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
          </div>

          {/* Loading */}
          {loading && (
            <div className="py-8 text-center">
              <p className="text-lg font-medium text-purple-700">
                Loading opportunities...
              </p>
            </div>
          )}

          {/* Empty State */}
          {!loading && internship.length === 0 && (
            <p className="mt-6 text-center text-sm text-gray-500">
              More opportunities will appear here as they become available.
            </p>
          )}
        </div>

        {/* ================= PREPARE TO APPLY ================= */}
        <div>
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">
              🧰 Prepare to Apply
            </h2>

            <p className="text-gray-600">
              Strengthen your application before applying for an opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {prepResources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <a
                  key={index}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[290px] flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:shadow-2xl"
                >
                  {/* Icon */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 transition-colors duration-300 group-hover:bg-white/20">
                      <Icon className="h-6 w-6 text-indigo-600 group-hover:text-white" />
                    </div>

                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-white">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-5 text-sm leading-6 text-gray-600 group-hover:text-indigo-50">
                    {resource.description}
                  </p>

                  {/* Impact */}
                  <div className="mb-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-indigo-600 group-hover:text-indigo-100">
                      Why this matters
                    </p>

                    <p className="text-sm leading-5 text-gray-600 group-hover:text-white">
                      {resource.impact}
                    </p>
                  </div>

                  {/* Next Step */}
                  <div className="mt-auto border-t border-gray-100 pt-4 group-hover:border-indigo-400">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500 group-hover:text-indigo-100">
                      Next Step
                    </p>

                    <p className="text-sm leading-5 text-gray-700 group-hover:text-white">
                      {resource.actionTip}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InternshipsPrograms;