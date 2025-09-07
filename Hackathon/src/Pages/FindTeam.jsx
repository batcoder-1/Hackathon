import React, { useState } from "react";
import TeamResult from "../components/teamResult";
import { User, Code, Briefcase } from "lucide-react"; 
import filter from "../file";

export default function FindTeam() {
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [profiles, setProfiles] = useState([]); // 🔹 new state
  const [loading, setLoading] = useState(false);

  async function runFilter() {
    try {
      setLoading(true);
      const result = await filter({ role, skills, experience });
      console.log("AI Response:", result);
      setProfiles(result); // 🔹 save AI profiles
    } catch (error) {
      console.error("Filter error:", error);
      setProfiles([]); // fallback
    }
  }

  const handleProceed = async (e) => {
    e.preventDefault();
    await runFilter();
    setIsSubmitted(true);
    console.log({ role, skills, experience });
  };

  if (isSubmitted) {
    return <TeamResult profiles={profiles} />; // 🔹 pass profiles as prop
  }
if (loading) {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-indigo-600 animate-pulse">
        Loading...
      </h1>
    </div>
  );
}
  return (
    <div className="max-w-3xl mx-auto mt-12 p-8 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 shadow-xl rounded-2xl border border-gray-200">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">
        🔍 Find Your <span className="text-indigo-600">Teammate</span>
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Fill out the details below to find teammates that match your preferences.
      </p>

      <form className="space-y-8" onSubmit={handleProceed}>
        {/* Role Input */}
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <User className="w-5 h-5 mr-2 text-indigo-500" />
            Role / Type of Person
          </label>
          <input
            type="text"
            placeholder="e.g., Web Developer, Data Analyst"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            required
          />
        </div>

        {/* Skills Input */}
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <Code className="w-5 h-5 mr-2 text-indigo-500" />
            Skills Required
          </label>
          <input
            type="text"
            placeholder="e.g., HTML, React, Python"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            required
          />
          <p className="text-gray-500 text-sm mt-1">
            Separate multiple skills with commas
          </p>
        </div>

        {/* Experience Input */}
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <Briefcase className="w-5 h-5 mr-2 text-indigo-500" />
            Experience Level
          </label>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            required
          >
            <option value="">Select experience level</option>
            <option value="0-1 years">0-1 years</option>
            <option value="1-3 years">1-3 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="5+ years">5+ years</option>
          </select>
        </div>

        {/* Proceed Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition transform hover:scale-105"
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
}
