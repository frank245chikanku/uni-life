
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    LockKeyhole,
    MessageCircle,
    Send,
} from "lucide-react";

const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:7000/api";

interface QueryResponse {
    queryId: string;
    securityCode?: string;
}

const queryCategories = [
    "Academic Integrity",
    "Peer Pressure",
    "Social Responsibility",
    "Financial Strain",
    "Career Uncertainty",
    "Discrimination & Bias",
    "Entrepreneurship Uncertainty",
    "Adjustment to Independence",
    "General Enquiry",
];

const QuerySend = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        queryType: "",
        subject: "",
        query: "",
    });

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [submittedQuery, setSubmittedQuery] =
        useState<QueryResponse | null>(null);



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

        setError("");
    };



    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setError("");

        if (
            !formData.name.trim() ||
            !formData.phone.trim() ||
            !formData.queryType ||
            !formData.subject.trim() ||
            !formData.query.trim()
        ) {
            setError("Please complete all required fields.");
            return;
        }

        try {
            setSubmitting(true);

            const response = await fetch(`${API_URL}/queries`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    phone: formData.phone.trim(),
                    queryType: formData.queryType,
                    query: `${formData.subject.trim()}\n\n${formData.query.trim()}`,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Unable to submit your query."
                );
            }

            setSubmittedQuery({
                queryId: data.query.queryId,
                securityCode: data.query.securityCode,
            });

            setFormData({
                name: "",
                phone: "",
                queryType: "",
                subject: "",
                query: "",
            });
        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
        } finally {
            setSubmitting(false);
        }
    };



    if (submittedQuery) {
        return (
            <div className="min-h-screen bg-[#f7f9fc] text-[#06264A]">
                <main className="mx-auto flex min-h-[calc(100vh-80px)] max-w-5xl items-center px-4 py-10 sm:px-6">

                    <div className="mx-auto w-full max-w-xl">

                        {/* BACK */}

                        <button
                            type="button"
                            onClick={() => navigate("/query")}
                            className="
                mb-5
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-slate-500
                transition
                hover:text-[#155A96]
              "
                        >
                            <ArrowLeft size={15} />
                            Query Centre
                        </button>



                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(6,38,74,0.07)]">


                            <div className="border-b border-slate-100 px-5 py-5 sm:px-7">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                        <CheckCircle2 size={20} />
                                    </div>

                                    <div>

                                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#155A96]">
                                            Query Centre
                                        </p>

                                        <h1 className="mt-1 text-lg font-bold text-[#06264A]">
                                            Query submitted
                                        </h1>

                                    </div>

                                </div>

                            </div>



                            <div className="p-5 sm:p-7">

                                <p className="text-sm leading-6 text-slate-500">
                                    Your question has been received by the
                                    UNI Life Guide team. Keep the details below
                                    safe to check your response later.
                                </p>



                                <div className="mt-5 rounded-xl border border-[#dbe5f4] bg-[#f7faff] px-4 py-4">

                                    <div className="flex items-center justify-between gap-4">

                                        <div>

                                            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                                                Query ID
                                            </p>

                                            <p className="mt-1.5 text-lg font-bold tracking-wider text-[#06264A]">
                                                {submittedQuery.queryId}
                                            </p>

                                        </div>

                                        <MessageCircle
                                            size={18}
                                            className="text-[#155A96]"
                                        />

                                    </div>

                                </div>



                                {submittedQuery.securityCode && (
                                    <div className="mt-3 rounded-xl border border-orange-100 bg-orange-50 px-4 py-4">

                                        <div className="flex items-start gap-3">

                                            <LockKeyhole
                                                size={16}
                                                className="mt-0.5 shrink-0 text-orange-500"
                                            />

                                            <div>

                                                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-orange-600">
                                                    Security Code
                                                </p>

                                                <p className="mt-1.5 text-lg font-bold tracking-[0.18em] text-[#06264A]">
                                                    {submittedQuery.securityCode}
                                                </p>

                                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                                    Use this code together with your
                                                    Query ID when checking your response.
                                                </p>

                                            </div>

                                        </div>

                                    </div>
                                )}



                                <div className="mt-5 flex items-start gap-3 border-t border-slate-100 pt-4">

                                    <LockKeyhole
                                        size={13}
                                        className="mt-0.5 shrink-0 text-[#155A96]"
                                    />

                                    <p className="text-xs leading-5 text-slate-500">
                                        Keep your Query ID and security code
                                        private. You will need both to access
                                        your query response.
                                    </p>

                                </div>



                                <div className="mt-5 grid gap-2 sm:grid-cols-2">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            navigate("/query/check", {
                                                state: {
                                                    queryId: submittedQuery.queryId,
                                                    securityCode:
                                                        submittedQuery.securityCode,
                                                },
                                            })
                                        }
                                        className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-[#06264A]
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-[#155A96]
                    "
                                    >
                                        Check Query
                                        <ArrowRight size={15} />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => navigate("/query")}
                                        className="
                      inline-flex
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      text-[#06264A]
                      transition
                      hover:bg-slate-50
                    "
                                    >
                                        Back to Query Centre
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </main>
            </div>
        );
    }



    return (
        <div className="min-h-screen bg-[#f7f9fc] text-[#06264A]">

            <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">



                <button
                    type="button"
                    onClick={() => navigate("/query")}
                    className="
            mb-7
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-slate-500
            transition
            hover:text-[#155A96]
          "
                >
                    <ArrowLeft size={15} />
                    Back to Query Centre
                </button>



                <div className="mx-auto mb-8 max-w-2xl text-center">

                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf3fa] text-[#155A96]">

                        <MessageCircle
                            size={20}
                            strokeWidth={2}
                        />

                    </div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#155A96]">
                        Student Queries
                    </p>

                    <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-[#06264A] sm:text-3xl">
                        Submit a New Query
                    </h1>

                    <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">
                        Tell us what you need help with. Our team will
                        review your question and respond through the
                        Query Centre.
                    </p>

                </div>



                <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_45px_rgba(6,38,74,0.06)]">


                    <div className="flex items-center justify-between border-b border-slate-100 bg-[#fbfcfe] px-5 py-4 sm:px-6">

                        <div>

                            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#155A96]">
                                Query Details
                            </p>

                            <h2 className="mt-1 text-sm font-bold text-[#06264A]">
                                Tell us about your question
                            </h2>

                        </div>

                        <span className="hidden text-xs text-slate-400 sm:block">
                            * Required
                        </span>

                    </div>


                    <form
                        onSubmit={handleSubmit}
                        className="p-5 sm:p-6"
                    >



                        <div>

                            <div className="mb-3 flex items-center gap-2">

                                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#edf3fa] text-[9px] font-bold text-[#155A96]">
                                    01
                                </span>

                                <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                                    Your details
                                </span>

                            </div>

                            <div className="grid gap-4 md:grid-cols-2">



                                <div>

                                    <label
                                        htmlFor="name"
                                        className="mb-1.5 block text-sm font-semibold text-[#06264A]"
                                    >
                                        Full name{" "}
                                        <span className="text-orange-500">*</span>
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        autoComplete="name"
                                        required
                                        className="
                      h-11
                      w-full
                      rounded-lg
                      border border-slate-200
                      bg-white
                      px-3.5
                      text-sm
                      text-[#06264A]
                      outline-none
                      transition
                      placeholder:text-slate-400
                      hover:border-slate-300
                      focus:border-[#155A96]
                      focus:ring-4
                      focus:ring-[#155A96]/10
                    "
                                    />

                                </div>



                                <div>

                                    <label
                                        htmlFor="phone"
                                        className="mb-1.5 block text-sm font-semibold text-[#06264A]"
                                    >
                                        Phone number{" "}
                                        <span className="text-orange-500">*</span>
                                    </label>

                                    <input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="e.g. 097 123 4567"
                                        autoComplete="tel"
                                        required
                                        className="
                      h-11
                      w-full
                      rounded-lg
                      border border-slate-200
                      bg-white
                      px-3.5
                      text-sm
                      text-[#06264A]
                      outline-none
                      transition
                      placeholder:text-slate-400
                      hover:border-slate-300
                      focus:border-[#155A96]
                      focus:ring-4
                      focus:ring-[#155A96]/10
                    "
                                    />

                                </div>

                            </div>

                        </div>


                        <div className="my-6 border-t border-slate-100" />



                        <div>

                            <div className="mb-3 flex items-center gap-2">

                                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#edf3fa] text-[9px] font-bold text-[#155A96]">
                                    02
                                </span>

                                <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                                    Query information
                                </span>

                            </div>


                            <div className="grid gap-4 md:grid-cols-[210px_1fr]">


                                <div>

                                    <label
                                        htmlFor="queryType"
                                        className="mb-1.5 block text-sm font-semibold text-[#06264A]"
                                    >
                                        Category{" "}
                                        <span className="text-orange-500">*</span>
                                    </label>

                                    <select
                                        id="queryType"
                                        name="queryType"
                                        value={formData.queryType}
                                        onChange={handleChange}
                                        required
                                        className="
                      h-11
                      w-full
                      rounded-lg
                      border border-slate-200
                      bg-white
                      px-3
                      text-sm
                      text-[#06264A]
                      outline-none
                      transition
                      hover:border-slate-300
                      focus:border-[#155A96]
                      focus:ring-4
                      focus:ring-[#155A96]/10
                    "
                                    >

                                        <option value="">
                                            Select category
                                        </option>

                                        {queryCategories.map((category) => (
                                            <option
                                                key={category}
                                                value={category}
                                            >
                                                {category}
                                            </option>
                                        ))}

                                    </select>

                                </div>



                                <div>

                                    <label
                                        htmlFor="subject"
                                        className="mb-1.5 block text-sm font-semibold text-[#06264A]"
                                    >
                                        Subject{" "}
                                        <span className="text-orange-500">*</span>
                                    </label>

                                    <input
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Briefly describe what your question is about"
                                        required
                                        className="
                      h-11
                      w-full
                      rounded-lg
                      border border-slate-200
                      bg-white
                      px-3.5
                      text-sm
                      text-[#06264A]
                      outline-none
                      transition
                      placeholder:text-slate-400
                      hover:border-slate-300
                      focus:border-[#155A96]
                      focus:ring-4
                      focus:ring-[#155A96]/10
                    "
                                    />

                                </div>

                            </div>



                            <div className="mt-4">

                                <div className="mb-1.5 flex items-center justify-between">

                                    <label
                                        htmlFor="query"
                                        className="text-sm font-semibold text-[#06264A]"
                                    >
                                        Your question{" "}
                                        <span className="text-orange-500">*</span>
                                    </label>

                                    <span
                                        className={`text-xs ${formData.query.length >= 900
                                                ? "text-orange-500"
                                                : "text-slate-400"
                                            }`}
                                    >
                                        {formData.query.length}/1000
                                    </span>

                                </div>

                                <textarea
                                    id="query"
                                    name="query"
                                    value={formData.query}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 1000) {
                                            handleChange(e);
                                        }
                                    }}
                                    placeholder="Write your question clearly. Include any details that may help our team understand what you need."
                                    required
                                    rows={5}
                                    className="
                    w-full
                    resize-none
                    rounded-lg
                    border border-slate-200
                    bg-white
                    px-3.5
                    py-3
                    text-sm
                    leading-6
                    text-[#06264A]
                    outline-none
                    transition
                    placeholder:text-slate-400
                    hover:border-slate-300
                    focus:border-[#155A96]
                    focus:ring-4
                    focus:ring-[#155A96]/10
                  "
                                />

                            </div>

                        </div>


                        <div className="mt-5 rounded-lg border border-[#e4ebf4] bg-[#f8fafc] px-4 py-3">

                            <div className="flex items-start gap-3">

                                <LockKeyhole
                                    size={15}
                                    className="mt-0.5 shrink-0 text-[#155A96]"
                                />

                                <div>

                                    <p className="text-xs font-semibold text-[#06264A]">
                                        Keep your query details safe
                                    </p>

                                    <p className="mt-0.5 text-xs leading-5 text-slate-500">
                                        After submission, you will receive a
                                        unique Query ID and security code. You
                                        will need both to check your response.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {error && (
                            <div className="mt-4 rounded-lg border border-red-100 bg-red-50 px-3.5 py-2.5">

                                <p className="text-xs font-medium text-red-600">
                                    {error}
                                </p>

                            </div>
                        )}



                        <div className="mt-5 flex flex-col-reverse gap-2 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">

                            <button
                                type="button"
                                onClick={() => navigate("/query")}
                                className="
                  inline-flex
                  h-10
                  items-center
                  justify-center
                  rounded-lg
                  border border-slate-200
                  bg-white
                  px-5
                  text-sm
                  font-semibold
                  text-[#06264A]
                  transition
                  hover:bg-slate-50
                "
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="
                  inline-flex
                  h-10
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-[#06264A]
                  px-6
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#155A96]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
                            >

                                <Send size={15} />

                                {submitting
                                    ? "Submitting..."
                                    : "Submit Query"}

                                {!submitting && (
                                    <ArrowRight size={15} />
                                )}

                            </button>

                        </div>

                    </form>

                </div>



                <div className="mt-4 flex items-center justify-center gap-2 text-center">

                    <LockKeyhole
                        size={11}
                        className="shrink-0 text-slate-400"
                    />

                    <p className="text-xs text-slate-400">
                        Your contact details are used only to manage
                        and respond to your query.
                    </p>

                </div>

            </main>

        </div>
    );
};

export default QuerySend;
