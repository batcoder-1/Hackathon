import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import services from "../appwrite/configure";
import { useSelector } from "react-redux";

export default function Profile() {
  const userdata = useSelector((state) => state.Auth.userdata);
  const userId = userdata?.$id;
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    Username: "",
    Bio: "",
    profileImageId: "",
    Followers: 0,
    Following: 0,
    Skills: [],
    College: "",
    University: "",
    ResumeId: "",
    Github: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      setLoading(true);
      setError("");
      try {
        const { profile } = await services.getCurrentUserProfile();
        setProfile(profile);
        setForm({
          Username: profile.Username || "",
          Bio: profile.Bio || "",
          profileImageId: profile.profileImage || "",
          Followers: profile.Followers || 0,
          Following: profile.Following || 0,
          Skills: profile.Skills || [],
          College: profile.College || "",
          University: profile.University || "",
          ResumeId: profile.Resume || "",
          Github: profile.Github || "",
        });
      } catch (err) {
        setError("Failed to load profile");
      }
      setLoading(false);
    }
    if (userId) fetchProfile();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillsChange = (e) => {
    setForm((prev) => ({ ...prev, Skills: e.target.value.split(",") }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      await services.updateUser(userId, form);
      setSuccess("Profile updated successfully!");
      setEditMode(false);
      const { profile } = await services.getCurrentUserProfile();
      setProfile(profile);
    } catch (err) {
      setError("Failed to update profile");
    }
    setLoading(false);
  };

  if (loading && !profile)
    return <div className="text-center mt-10">Loading...</div>;
  if (error && !profile)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Profile Box */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-indigo-50 to-white shadow-xl rounded-2xl border border-indigo-100">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-10 space-y-6 md:space-y-0">
          {/* Left: Profile Image + Name + Username */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={profile?.profileImage || "https://i.pravatar.cc/150?img=3"}
              alt="Profile"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-indigo-400 shadow-lg"
            />
            <h2 className="mt-4 text-xl sm:text-2xl font-bold text-gray-800 text-center md:text-left">
              {profile?.Username || "No Name"}
            </h2>
            <p className="text-gray-500 text-sm text-center md:text-left">
              @{profile?.Username?.toLowerCase() || "username"}
            </p>
          </div>

          {/* Right: Stats + GitHub + Button + Bio */}
          <div className="flex-1 flex flex-col justify-start w-full">
            {/* Stats + GitHub + Edit Button */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                {/* Followers */}
                <div className="bg-indigo-100 w-28 sm:w-32 px-4 py-3 rounded-lg shadow-md text-center hover:bg-indigo-200 transition">
                  <p className="text-lg sm:text-xl font-bold text-indigo-700">
                    {profile?.Followers || 0}
                  </p>
                  <p className="text-gray-600 text-sm">Followers</p>
                </div>
                {/* Following */}
                <div className="bg-indigo-100 w-28 sm:w-32 px-4 py-3 rounded-lg shadow-md text-center hover:bg-indigo-200 transition">
                  <p className="text-lg sm:text-xl font-bold text-indigo-700">
                    {profile?.Following || 0}
                  </p>
                  <p className="text-gray-600 text-sm">Following</p>
                </div>
                {/* GitHub */}
                <a
                  href={profile?.Github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition"
                >
                  <FaGithub className="text-2xl sm:text-3xl" />
                  <span className="hidden sm:inline font-medium"></span>
                </a>
              </div>

              <button
                className="px-4 sm:px-5 py-2 sm:py-3 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 shadow-md transition w-full sm:w-auto"
                onClick={() => setEditMode((prev) => !prev)}
              >
                {editMode ? "Cancel" : "Edit Profile"}
              </button>
            </div>

            {/* Bio Section */}
            <div className="bg-indigo-50 p-4 sm:p-5 rounded-lg shadow-inner border border-indigo-100">
              <h3 className="text-gray-700 font-semibold mb-2">Bio</h3>
              {editMode ? (
                <textarea
                  name="Bio"
                  value={form.Bio}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  rows={3}
                />
              ) : (
                <p className="text-gray-600">{profile?.Bio}</p>
              )}
            </div>
            {success && <div className="text-green-600 mt-2">{success}</div>}
            {error && <div className="text-red-600 mt-2">{error}</div>}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="p-4 sm:p-6 bg-white shadow-lg rounded-xl border border-gray-200">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          Skills
        </h3>
        {editMode ? (
          <input
            type="text"
            name="Skills"
            value={form.Skills.join(",")}
            onChange={handleSkillsChange}
            className="w-full p-2 border rounded mb-2"
            placeholder="Comma separated skills"
          />
        ) : (
          <div className="flex flex-wrap gap-3">
            {(profile?.Skills || []).map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium text-sm hover:bg-indigo-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* College / University Section */}
      <div className="p-4 sm:p-6 bg-white shadow-lg rounded-xl border border-gray-200">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          College / University
        </h3>
        {editMode ? (
          <>
            <input
              type="text"
              name="College"
              value={form.College}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
              placeholder="College"
            />
            <input
              type="text"
              name="University"
              value={form.University}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="University"
            />
          </>
        ) : (
          <p className="text-gray-600">
            {profile?.College || profile?.University}
          </p>
        )}
      </div>

      {/* Resume Section */}
      <div className="p-4 sm:p-6 bg-white shadow-lg rounded-xl border border-gray-200">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          Resume
        </h3>
        {editMode ? (
          <input
            type="text"
            name="ResumeId"
            value={form.ResumeId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Resume file ID or URL"
          />
        ) : (
          <a
            href={profile?.Resume || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 sm:px-6 py-2 sm:py-3 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 shadow-md transition"
          >
            View Resume
          </a>
        )}
      </div>

      {/* Save Button */}
      {editMode && (
        <div className="flex justify-end">
          <button
            className="px-5 sm:px-6 py-2 sm:py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 shadow-md transition"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      )}
    </div>
  );
}
