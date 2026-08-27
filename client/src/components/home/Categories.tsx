import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Search,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import academic from "../../assets/academic.jpg";
import peer from "../../assets/peer-pressure.jpg";
import social from "../../assets/social-responsibility.jpg";
import financial from "../../assets/financial-strain.jpg";
import career from "../../assets/career-uncertainty.jpg";
import discrimination from "../../assets/discrimination.jpg";
import entrepreneurship from "../../assets/entrepreneurship.jpg";
import adjustment from "../../assets/independence.jpg";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:7000/api";

const categoryData = [
  {
    to: "/academics",
    image: academic,
    altText: "African university student studying",
    label: "Academic Integrity",
  },
  {
    to: "/peer",
    image: peer,
    altText: "African students experiencing peer pressure",
    label: "Peer Pressure",
  },
  {
    to: "/social",
    image: social,
    altText:
      "African young people participating in community activities",
    label: "Social Responsibility",
  },
  {
    to: "/financial",
    image: financial,
    altText: "African student managing personal finances",
    label: "Financial Strain",
  },
  {
    to: "/career",
    image: career,
    altText: "African student thinking about career opportunities",
    label: "Career Uncertainty",
  },
  {
    to: "/discrimination",
    image: discrimination,
    altText: "African students from different backgrounds",
    label: "Discrimination & Bias",
  },
  {
    to: "/entrepreneurship",
    image: entrepreneurship,
    altText:
      "African young people working on an entrepreneurial idea",
    label: "Entrepreneurship Uncertainty",
  },
  {
    to: "/adjustment",
    image: adjustment,
    altText:
      "African university student adapting to independent life",
    label: "Adjustment to Independence",
  },
];

interface QueryResult {
  queryId: string;
  name: string;
  queryType: string;
  query: string;
  response: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const Categories = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    queryType: "",
    query: "",
  });

  const [queryId, setQueryId] = useState("");
  const [trackPhone, setTrackPhone] = useState("");

  const [queryResult, setQueryResult] =
    useState<QueryResult | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [tracking, setTracking] = useState(false);

  const [message, setMessage] = useState("");

  /*
  ==========================================
  HANDLE FORM INPUT
  ==========================================
  */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /*
  ==========================================
  SUBMIT QUERY
  ==========================================
  */

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setMessage("");
    setQueryResult(null);

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.queryType ||
      !formData.query.trim()
    ) {
      setMessage("Please complete all fields.");
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch(`${API_URL}/queries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to submit query."
        );
      }

      /*
      Store generated Query ID
      */

      setQueryId(data.query.queryId);

      /*
      Automatically prepare tracking
      */

      setTrackPhone(formData.phone);

      /*
      Clear form
      */

      setFormData({
        name: "",
        phone: "",
        queryType: "",
        query: "",
      });

      setMessage(
        "Your query has been submitted successfully."
      );
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setSubmitting(false);
    }
  };

  /*
  ==========================================
  TRACK QUERY
  ==========================================
  */

  const handleTrackQuery = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setMessage("");
    setQueryResult(null);

    if (!queryId.trim() || !trackPhone.trim()) {
      setMessage(
        "Enter your Query ID and phone number."
      );
      return;
    }

    try {
      setTracking(true);

      const response = await fetch(
        `${API_URL}/queries/track`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            queryId,
            phone: trackPhone,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Query not found."
        );
      }

      setQueryResult(data.query);
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to find your query."
      );
    } finally {
      setTracking(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0b172a] px-4 py-14 sm:px-6 lg:px-8">

      {/* Background Decoration */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="mb-9 text-center">

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
            Student Life Guide
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What Are You Dealing With?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
            Explore the areas below and find guidance,
            information and practical support for your
            university journey.
          </p>

        </div>

        {/* ==========================================
            CATEGORY CARDS
        ========================================== */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {categoryData.map((category, index) => (
            <Link
              key={index}
              to={category.to}
              className="
                group overflow-hidden rounded-2xl
                border border-white/10
                bg-blue-500/5
                shadow-lg
                transition-all duration-300
                hover:-translate-y-1.5
                hover:border-orange-400/40
                hover:shadow-2xl
              "
            >

              <div className="relative p-2">

                <div
                  className="
                    pointer-events-none absolute
                    -inset-2 rounded-[1.75rem]
                    bg-blue-500/10
                    opacity-0 blur-2xl
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    relative overflow-hidden
                    rounded-[1.35rem]
                    border border-slate-200
                    bg-slate-100
                    shadow-md
                  "
                >

                  <div className="relative h-40 overflow-hidden">

                    <img
                      src={category.image}
                      alt={category.altText}
                      loading="lazy"
                      className="
                        h-full w-full object-cover
                        transition-transform duration-700
                        group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-[#06174f]/80
                        via-[#06174f]/20
                        to-transparent
                      "
                    />

                    <div className="absolute bottom-4 left-4 right-4">

                      <p
                        className="
                          mb-1 text-[9px]
                          font-bold uppercase
                          tracking-[0.18em]
                          text-white
                        "
                      >
                        Student Life Guide
                      </p>

                      <h3
                        className="
                          text-sm font-bold
                          leading-snug text-white
                          drop-shadow-lg
                        "
                      >
                        {category.label}
                      </h3>

                    </div>

                    <div
                      className="
                        absolute bottom-0 left-0
                        h-1 w-0
                        bg-orange-500
                        transition-all duration-300
                        group-hover:w-full
                      "
                    />

                  </div>

                </div>

              </div>

              <div className="px-5 pb-5 pt-2">

                <h3
                  className="
                    text-base font-semibold
                    leading-snug text-white
                    transition-colors duration-300
                    group-hover:text-orange-400
                  "
                >
                  {category.label}
                </h3>

                <div className="mt-3 flex items-center justify-between">

                  <span className="text-xs font-medium text-white">
                    Student Support
                  </span>

                  <span
                    className="
                      translate-x-[-5px]
                      text-xs font-semibold
                      text-orange-500
                      opacity-0
                      transition-all duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  >
                    Explore →
                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>

        {/* ==========================================
            QUERY SYSTEM
        ========================================== */}

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">

          {/* ==========================================
              QUERY HEADER + FORM
          ========================================== */}

          <div>

            <div className="mb-4 flex items-center gap-3">

              <div
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-lg
                  bg-orange-500/10
                  text-orange-500
                "
              >
                <MessageCircle size={17} />
              </div>

              <div>

                <p
                  className="
                    text-[10px] font-semibold
                    uppercase tracking-[0.15em]
                    text-orange-500
                  "
                >
                  Student Support
                </p>

                <h3 className="text-lg font-bold text-white">
                  Have a question?
                </h3>

              </div>

            </div>

            <p className="mb-4 text-xs leading-5 text-slate-400">
              Ask the UNI Life Guide team. Your Query ID
              will be generated automatically so you can
              track your response.
            </p>

            {/* ==========================================
                COMPACT INLINE FORM
            ========================================== */}

            <form
              onSubmit={handleSubmit}
              className="
                rounded-xl
                bg-white
                p-2.5
                sm:p-3
              "
            >

              <div className="flex flex-col gap-2 lg:flex-row lg:items-center">

                {/* NAME */}

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="
                    h-10 w-full
                    rounded-lg
                    border border-slate-200
                    bg-slate-50
                    px-3
                    text-xs text-slate-800
                    outline-none
                    placeholder:text-slate-400
                    focus:border-[#155A96]
                    lg:w-[18%]
                  "
                />

                {/* PHONE */}

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  required
                  className="
                    h-10 w-full
                    rounded-lg
                    border border-slate-200
                    bg-slate-50
                    px-3
                    text-xs text-slate-800
                    outline-none
                    placeholder:text-slate-400
                    focus:border-[#155A96]
                    lg:w-[20%]
                  "
                />

                {/* QUERY TYPE */}

                <select
                  name="queryType"
                  value={formData.queryType}
                  onChange={handleChange}
                  required
                  className="
                    h-10 w-full
                    rounded-lg
                    border border-slate-200
                    bg-slate-50
                    px-3
                    text-xs text-slate-700
                    outline-none
                    focus:border-[#155A96]
                    lg:w-[21%]
                  "
                >

                  <option value="">
                    Query type
                  </option>

                  <option value="Academic Support">
                    Academic Support
                  </option>

                  <option value="Career Guidance">
                    Career Guidance
                  </option>

                  <option value="Financial Support">
                    Financial Support
                  </option>

                  <option value="Student Life">
                    Student Life
                  </option>

                  <option value="General Enquiry">
                    General Enquiry
                  </option>

                </select>

                {/* QUESTION */}

                <input
                  type="text"
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  placeholder="Write your question..."
                  required
                  className="
                    h-10 w-full
                    rounded-lg
                    border border-slate-200
                    bg-slate-50
                    px-3
                    text-xs text-slate-800
                    outline-none
                    placeholder:text-slate-400
                    focus:border-[#155A96]
                    lg:flex-1
                  "
                />

                {/* SEND BUTTON */}

                <button
                  type="submit"
                  disabled={submitting}
                  className="
                    inline-flex h-10
                    shrink-0 items-center
                    justify-center gap-1.5
                    rounded-lg
                    bg-[#06264A]
                    px-4
                    text-xs font-semibold
                    text-white
                    transition
                    hover:bg-[#155A96]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >

                  <MessageCircle size={14} />

                  {submitting
                    ? "Sending..."
                    : "Send"}

                </button>

              </div>

              {/* FORM MESSAGE */}

              <div className="mt-2 flex items-center justify-between">

                <span className="text-[10px] text-slate-400">
                  Query ID generated after submission.
                </span>

                {message && (
                  <span
                    className={`text-[10px] font-medium ${
                      message.includes("successfully")
                        ? "text-emerald-500"
                        : "text-red-500"
                    }`}
                  >
                    {message}
                  </span>
                )}

              </div>

            </form>

          </div>

          {/* ==========================================
              SUCCESS / QUERY ID
          ========================================== */}

          {queryId && (
            <div
              className="
                mt-4 rounded-xl
                border border-emerald-400/20
                bg-emerald-400/10
                p-3
              "
            >

              <div className="flex items-center justify-between gap-3">

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-emerald-400"
                  />

                  <div>

                    <p className="text-xs font-semibold text-white">
                      Query submitted successfully
                    </p>

                    <p className="text-[10px] text-slate-300">
                      Save your Query ID to track your response.
                    </p>

                  </div>

                </div>

                <div
                  className="
                    shrink-0 rounded-lg
                    bg-[#071525]
                    px-3 py-1.5
                  "
                >
                  <span
                    className="
                      text-xs font-bold
                      tracking-wider
                      text-orange-400
                    "
                  >
                    {queryId}
                  </span>
                </div>

              </div>

            </div>
          )}

          {/* ==========================================
              TRACK QUERY
          ========================================== */}

          <div className="mt-5 border-t border-white/10 pt-5">

            <div className="mb-3 flex items-center gap-2">

              <div
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-lg
                  bg-blue-500/10
                  text-blue-400
                "
              >
                <Search size={15} />
              </div>

              <div>

                <h3 className="text-sm font-semibold text-white">
                  Track your query
                </h3>

                <p className="text-[10px] text-slate-400">
                  Enter your Query ID and phone number.
                </p>

              </div>

            </div>

            {/* TRACKING FORM */}

            <form
              onSubmit={handleTrackQuery}
              className="
                rounded-xl
                border border-white/10
                bg-[#071525]
                p-2.5
              "
            >

              <div className="flex flex-col gap-2 sm:flex-row">

                {/* QUERY ID */}

                <input
                  type="text"
                  value={queryId}
                  onChange={(e) =>
                    setQueryId(
                      e.target.value.toUpperCase()
                    )
                  }
                  placeholder="Query ID e.g. ULG-7F42K9"
                  className="
                    h-9 flex-1
                    rounded-lg
                    border border-white/10
                    bg-white/5
                    px-3
                    text-xs text-white
                    outline-none
                    placeholder:text-slate-500
                    focus:border-orange-500
                  "
                />

                {/* PHONE */}

                <input
                  type="tel"
                  value={trackPhone}
                  onChange={(e) =>
                    setTrackPhone(e.target.value)
                  }
                  placeholder="Phone number"
                  className="
                    h-9 flex-1
                    rounded-lg
                    border border-white/10
                    bg-white/5
                    px-3
                    text-xs text-white
                    outline-none
                    placeholder:text-slate-500
                    focus:border-orange-500
                  "
                />

                {/* TRACK */}

                <button
                  type="submit"
                  disabled={tracking}
                  className="
                    inline-flex h-9
                    items-center
                    justify-center
                    gap-1.5
                    rounded-lg
                    bg-orange-500
                    px-5
                    text-xs font-semibold
                    text-white
                    transition
                    hover:bg-orange-600
                    disabled:opacity-60
                  "
                >

                  <Search size={13} />

                  {tracking
                    ? "Checking..."
                    : "Track"}

                </button>

              </div>

            </form>

            {/* ==========================================
                TRACKING RESULT
            ========================================== */}

            {queryResult && (
              <div
                className="
                  mt-4 overflow-hidden
                  rounded-xl
                  border border-white/10
                  bg-white
                "
              >

                {/* RESULT HEADER */}

                <div
                  className="
                    flex flex-col gap-2
                    border-b border-slate-100
                    p-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >

                  <div>

                    <p
                      className="
                        text-[9px]
                        font-bold uppercase
                        tracking-wider
                        text-slate-400
                      "
                    >
                      Query ID
                    </p>

                    <p
                      className="
                        mt-1 text-sm
                        font-bold tracking-wide
                        text-[#06264A]
                      "
                    >
                      {queryResult.queryId}
                    </p>

                  </div>

                  <div>

                    {queryResult.status ===
                    "ANSWERED" ? (
                      <span
                        className="
                          inline-flex items-center
                          gap-1.5 rounded-full
                          bg-emerald-50
                          px-3 py-1.5
                          text-[10px]
                          font-semibold
                          text-emerald-700
                        "
                      >

                        <CheckCircle2 size={12} />

                        Answered

                      </span>
                    ) : (
                      <span
                        className="
                          inline-flex items-center
                          gap-1.5 rounded-full
                          bg-amber-50
                          px-3 py-1.5
                          text-[10px]
                          font-semibold
                          text-amber-700
                        "
                      >

                        <Clock3 size={12} />

                        {queryResult.status ===
                        "IN_REVIEW"
                          ? "In Review"
                          : "Pending"}

                      </span>
                    )}

                  </div>

                </div>

                {/* QUERY CONTENT */}

                <div className="p-4">

                  <p
                    className="
                      text-[9px]
                      font-bold uppercase
                      tracking-wider
                      text-slate-400
                    "
                  >
                    Your Query
                  </p>

                  <p
                    className="
                      mt-2 text-sm
                      leading-6
                      text-slate-700
                    "
                  >
                    {queryResult.query}
                  </p>

                  {/* RESPONSE */}

                  <div
                    className="
                      mt-4 rounded-xl
                      bg-slate-50 p-4
                    "
                  >

                    <p
                      className="
                        text-[9px]
                        font-bold uppercase
                        tracking-wider
                        text-orange-500
                      "
                    >
                      UNI Life Guide Response
                    </p>

                    {queryResult.response ? (
                      <p
                        className="
                          mt-2 text-sm
                          leading-6
                          text-slate-700
                        "
                      >
                        {queryResult.response}
                      </p>
                    ) : (
                      <p
                        className="
                          mt-2 text-sm
                          text-slate-400
                        "
                      >
                        Our team has not responded yet.
                        Please check again later using
                        your Query ID.
                      </p>
                    )}

                  </div>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Categories;