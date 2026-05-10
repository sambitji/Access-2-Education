// frontend/src/pages/TestPage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClipboardList, AlertCircle, RefreshCw } from "lucide-react";
import toast from "react-hot-toast";
import api from "../services/api";
import useAuthStore from "../store/authStore";
import AptitudeTest from "../components/AptitudeTest/AptitudeTest";
import LoadingSpinner from "../components/LoadingSpinner";

export default function TestPage() {
  const navigate           = useNavigate();
  const { user }           = useAuthStore();
  const [sections, setSections]   = useState(null);
  const [loading, setLoading]     = useState(true);
  const [started, setStarted]     = useState(false);
  const [error, setError]         = useState(null);

  // Already test diya aur cooldown hai toh redirect
  useEffect(() => {
    if (user?.learning_style) {
      // Check karo retake allowed hai?
    }
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await api.get("/test/questions");
      setSections(res.data.sections);
    } catch (err) {
      const msg = err.response?.data?.detail || "Failed to load questions.";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner fullScreen message="Questions load ho rahe hain..." />;

  if (error) return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="text-center">
        <AlertCircle size={48} className="text-red-400 mx-auto mb-4" />
        <p className="text-white text-lg mb-2">Something went wrong</p>
        <p className="text-gray-400 text-sm mb-6">{error}</p>
        <button onClick={fetchQuestions}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white
                     px-6 py-2.5 rounded-xl mx-auto transition">
          <RefreshCw size={16}/> Try again
        </button>
      </div>
    </div>
  );

  // Instructions screen
  if (!started) return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="max-w-xl w-full">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ClipboardList size={32} className="text-indigo-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Aptitude Test</h1>
            <p className="text-gray-400 text-sm">
              This test helps the model identify your learning style
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label:"Questions",  value:"25" },
              { label:"Sections",   value:"5" },
              { label:"Time Limit", value:"30 min" },
            ].map((s,i) => (
              <div key={i} className="bg-gray-800 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-indigo-400">{s.value}</p>
                <p className="text-gray-400 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="space-y-3 mb-8">
            <h3 className="text-white font-semibold">Instructions:</h3>
            {sections?.[0]?.questions && [
              "Attempt all 25 questions — there are 5 sections in total",
              "Choose one answer for each question",
              "Each correct answer is 20 points — no negative marking",
              "Do not close the test before finishing — the timer will continue",
              "You cannot retake the test for 30 days after submission",
            ].map((inst, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-gray-400">
                <span className="w-5 h-5 bg-indigo-900/50 text-indigo-400 rounded-full
                                 flex items-center justify-center text-xs shrink-0 mt-0.5">
                  {i+1}
                </span>
                {inst}
              </div>
            ))}
          </div>

          <button onClick={() => setStarted(true)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                       py-3.5 rounded-xl transition text-lg">
            Start Test →
          </button>

          {user?.learning_style && (
            <button onClick={() => navigate("/test/result")}
              className="w-full mt-3 text-gray-400 hover:text-white text-sm transition">
              View previous result
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return <AptitudeTest sections={sections} />;
}