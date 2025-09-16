import { useState, useRef, useEffect } from "react";
import { MessageSquare, User, Loader2, Brain } from "lucide-react";
import axios from "axios";

type Message = {
  role: "student" | "system";
  text?: string;
  structuredContent?: JSX.Element[];
};

type Profile = {
  name: string;
  course: string;
  interests: string;
  skills: string;
  personality?: string;
};

const CareerAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    name: "",
    course: "",
    interests: "",
    skills: "",
    personality: "",
  });
  const [showPersonality, setShowPersonality] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // --- Backend URL (auto-switch between localhost & Wi-Fi IP) ---
  const backendURL =
    window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
      ? "http://localhost:7000"
      : "http://192.168.43.179:7000"; // your laptop Wi-Fi IP

  // --- Fetch Suggestions ---
  const fetchCareerSuggestions = async (profile: Profile) => {
    try {
      const response = await axios.post(
        `${backendURL}/api/careers/suggest-career`,
        profile,
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data.suggestions || [];
    } catch (error) {
      console.error(error);
      return [];
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
        text: `👤 Name: ${profile.name}\n🎓 Course: ${profile.course}\n💡 Interests: ${profile.interests || "N/A"}\n🛠 Skills: ${profile.skills || "N/A"}\n🧠 Personality: ${profile.personality || "Not provided"}`,
      },
    ]);

    setLoading(true);
    try {
      const suggestions = await fetchCareerSuggestions(profile);

      if (!suggestions.length) {
        setMessages((prev) => [
          ...prev,
          { role: "system", text: "⚠️ No career suggestions found. Please refine your details." },
        ]);
        return;
      }

      const structuredContent = suggestions.map((s: any, idx: number) => (
        <div key={idx} className="mb-4 p-4 border rounded-lg bg-green-50 text-gray-800 shadow">
          <h3 className="font-bold text-lg mb-1">💼 {idx + 1}. {s.career}</h3>
          <p>📌 <strong>Reason:</strong> {s.reason}</p>

          <div className="mt-2 mb-2">
            <p className="text-sm font-medium">Career Fit Score: {s.fitScore || 75}%</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                style={{ width: `${s.fitScore || 75}%` }}
              />
            </div>
          </div>

          <p className="mt-2 mb-1">📚 <strong>Free Resources:</strong></p>
          <ul className="list-disc list-inside mb-2">
            {s.resources.map((r: any, i: number) => (
              <li key={i}>
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {r.name}
                </a>
              </li>
            ))}
          </ul>

          <p>➡️ <strong>Next Step:</strong> {s.nextStep}</p>
        </div>
      ));

      setMessages((prev) => [...prev, { role: "system", structuredContent }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "system", text: "🚨 Unable to fetch career suggestions. Please try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* Left Panel - Profile */}
      <div className="lg:col-span-1 flex flex-col gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 h-[500px] overflow-y-auto flex flex-col">
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-gray-700">
            <User className="w-6 h-6 text-blue-500" /> Student Profile
          </h3>

          {["name", "course", "interests", "skills"].map((field) => (
            <label className="mb-3 block" key={field}>
              <span className="block text-gray-600 font-medium mb-1">
                {field[0].toUpperCase() + field.slice(1)}
              </span>
              <input
                type="text"
                value={(profile as any)[field]}
                onChange={(e) => setProfile({ ...profile, [field]: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder={`Enter your ${field}`}
              />
            </label>
          ))}

          {/* Personality */}
          <label className="mb-3 block">
            <span className="block text-gray-600 font-medium mb-1">Personality</span>
            <input
              type="text"
              value={profile.personality}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
              placeholder="Take the personality test"
            />
          </label>

          <button
            onClick={() => setShowPersonality(true)}
            className="mt-3 px-4 py-2 bg-purple-400 text-black font-medium rounded-lg hover:opacity-90 flex items-center gap-2"
          >
            <Brain className="w-4 h-4" /> Take Personality Test
          </button>

          <button
            onClick={sendProfile}
            disabled={loading}
            className="mt-4 w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-medium rounded-full shadow-md hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-4 h-4" /> Generating...
              </>
            ) : (
              "Generate Career Suggestions"
            )}
          </button>

          {/* Inline Snapshot */}
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 border rounded-2xl shadow-md p-4">
            <h4 className="font-bold text-lg mb-2">📋 Profile Snapshot</h4>
            <p><strong>👤 Name:</strong> {profile.name || "Not provided"}</p>
            <p><strong>🎓 Course:</strong> {profile.course || "Not provided"}</p>
            <p><strong>💡 Interests:</strong> {profile.interests || "Not provided"}</p>
            <p><strong>🛠 Skills:</strong> {profile.skills || "Not provided"}</p>
            <p><strong>🧠 Personality:</strong> {profile.personality || "Not taken"}</p>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col h-[500px]">
        <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 mb-4 flex items-center justify-center gap-2">
          <MessageSquare className="w-6 h-6 text-blue-500" /> Career Progression Assistant
        </h2>

        <div className="flex-1 overflow-y-auto bg-gray-50 rounded-lg p-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex mb-3 ${msg.role === "student" ? "justify-end" : "justify-start"}`}>
              {msg.structuredContent ? (
                <div className="px-4 py-2 rounded-2xl max-w-xl shadow bg-white">
                  {msg.structuredContent}
                </div>
              ) : (
                <span
                  className={`px-4 py-2 rounded-2xl max-w-md text-sm leading-relaxed shadow whitespace-pre-line ${msg.role === "student"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "bg-gradient-to-r from-green-400 to-blue-400 text-white"
                    }`}
                >
                  {msg.text}
                </span>
              )}
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

      {/* Personality Test Modal */}
      {showPersonality && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[400px]">
            <h3 className="text-xl font-bold mb-4">🧠 Quick Personality Test</h3>
            <p className="mb-2">Do you prefer working more with:</p>
            <button
              onClick={() => {
                setProfile({ ...profile, personality: "People-oriented" });
                setShowPersonality(false);
              }}
              className="w-full mb-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              👥 People
            </button>
            <button
              onClick={() => {
                setProfile({ ...profile, personality: "Data-oriented" });
                setShowPersonality(false);
              }}
              className="w-full mb-2 px-4 py-2 bg-purple-500 text-white rounded-lg"
            >
              📊 Data
            </button>
            <button
              onClick={() => setShowPersonality(false)}
              className="w-full mt-2 px-4 py-2 bg-gray-300 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerAssistant;
