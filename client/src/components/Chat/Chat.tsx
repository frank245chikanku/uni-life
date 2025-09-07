import { useState, useRef, useEffect } from "react";
import { MessageSquare, User, Loader2, Info } from "lucide-react";
import axios from "axios";

type Message = {
  role: "student" | "system";
  text: string;
  isHtml?: boolean;
};

type Profile = {
  name: string;
  course: string;
  interests: string;
  skills: string;
};

const CareerAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    name: "",
    course: "",
    interests: "",
    skills: "",
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Backend API call
  const fetchCareerSuggestions = async (profile: Profile) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:7000/api/careers/suggest-career",
        {
          name: profile.name,
          skills: profile.skills,
          interests: profile.interests,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const suggestions = response.data.suggestions || [];

      if (!suggestions.length) {
        return "⚠️ No career suggestions found. Please refine your details (e.g., add more skills or interests).";
      }

      return suggestions
        .map(
          (s: { career: string; reason: string }) =>
            `💼 **${s.career}**\n📌 ${s.reason}`
        )
        .join("\n\n");
    } catch (error) {
      console.error(error);
      return "🚨 Unable to fetch career suggestions. Please check your connection or try again later.";
    } finally {
      setLoading(false);
    }
  };

  const sendProfile = async () => {
    if (!profile.name || !profile.course) {
      setMessages((prev) => [
        ...prev,
        { role: "system", text: "⚠️ Please fill in your name and course before proceeding." },
      ]);
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        role: "student",
        text: `👤 Name: ${profile.name}\n🎓 Course: ${profile.course}\n💡 Interests: ${profile.interests || "N/A"}\n🛠 Skills: ${profile.skills || "N/A"}`,
      },
    ]);

    const response = await fetchCareerSuggestions(profile);

    setMessages((prev) => [...prev, { role: "system", text: response }]);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* Student Profile Section */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col">
        <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-gray-700">
          <User className="w-6 h-6 text-blue-500" /> Student Profile
        </h3>
        <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
          <Info className="w-4 h-4 text-blue-400" /> Fill in your details to get tailored career suggestions.
        </p>

        {["name", "course"].map((field) => (
          <label className="mb-3" key={field}>
            <span className="block text-gray-600 font-medium mb-1">
              {field[0].toUpperCase() + field.slice(1)}
            </span>
            <input
              type="text"
              value={(profile as any)[field]}
              onChange={(e) =>
                setProfile({ ...profile, [field]: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder={`Enter your ${field}`}
            />
          </label>
        ))}

        {["interests", "skills"].map((field) => (
          <label className="mb-3" key={field}>
            <span className="block text-gray-600 font-medium mb-1">
              {field[0].toUpperCase() + field.slice(1)}
            </span>
            <textarea
              value={(profile as any)[field]}
              onChange={(e) =>
                setProfile({ ...profile, [field]: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder={
                field === "interests"
                  ? "E.g. Artificial Intelligence, Web Development"
                  : "E.g. Python, React, Data Analysis"
              }
              rows={3}
            />
          </label>
        ))}

        <button
          onClick={sendProfile}
          disabled={loading}
          className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-medium rounded-full shadow-md hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin w-4 h-4" /> Generating...
            </>
          ) : (
            "Generate Career Suggestions"
          )}
        </button>
      </div>

      {/* Chat Section */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 mb-4 flex items-center justify-center gap-2">
          <MessageSquare className="w-6 h-6 text-blue-500" /> Career Progression Assistant
        </h2>

        <div className="flex-1 bg-gray-50 rounded-lg p-4 overflow-y-auto mb-4 h-[400px]">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex mb-3 ${
                msg.role === "student" ? "justify-end" : "justify-start"
              }`}
            >
              <span
                className={`px-4 py-2 rounded-2xl max-w-md text-sm leading-relaxed shadow whitespace-pre-line ${
                  msg.role === "student"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "bg-gradient-to-r from-green-400 to-blue-400 text-white"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
          <div ref={chatEndRef} />

          {!messages.length && !loading && (
            <p className="text-gray-400 italic text-center mt-40">
              💡 Fill in your profile and click <strong>“Generate Career Suggestions”</strong>.
            </p>
          )}

          {loading && (
            <p className="text-gray-500 italic text-center mt-40 animate-pulse">
              ⌛ Analyzing your profile and generating career suggestions...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerAssistant;
