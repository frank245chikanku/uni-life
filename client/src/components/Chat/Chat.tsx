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


  const fetchCareerSuggestions = async (profile: Profile) => {
    try {
      const response = await axios.post(
        "http://192.168.43.179:7000/api/careers/suggest-career",
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


      {showPersonality && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[450px] max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">🧠 Choose Your Personality Type</h3>
            <p className="mb-4 text-gray-600">Select the personality type that best describes you:</p>

            {[
              { id: "Type 1", label: "Type 1 – The Reformer (Principled, Purposeful, Self-Controlled)" },
              { id: "Type 2", label: "Type 2 – The Helper (Caring, Generous, People-Pleasing)" },
              { id: "Type 3", label: "Type 3 – The Achiever (Success-Oriented, Driven, Adaptive)" },
              { id: "Type 4", label: "Type 4 – The Individualist (Sensitive, Creative, Expressive)" },
              { id: "Type 5", label: "Type 5 – The Investigator (Perceptive, Innovative, Curious)" },
              { id: "Type 6", label: "Type 6 – The Loyalist (Committed, Responsible, Security-Oriented)" },
              { id: "Type 7", label: "Type 7 – The Enthusiast (Spontaneous, Fun-Loving, Adventurous)" },
              { id: "Type 8", label: "Type 8 – The Challenger (Confident, Decisive, Assertive)" },
              { id: "Type 9", label: "Type 9 – The Peacemaker (Easygoing, Accommodating, Trusting)" },
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => {
                  setProfile({ ...profile, personality: type.label });
                  setShowPersonality(false);
                }}
                className="w-full mb-2 px-4 py-2 text-left bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 text-gray-800 rounded-lg shadow-sm"
              >
                {type.label}
              </button>
            ))}

            <button
              onClick={() => setShowPersonality(false)}
              className="w-full mt-3 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
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
