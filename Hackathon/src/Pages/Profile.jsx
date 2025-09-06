import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Profile() {
  const user = {
    name: "Shivang Kumar",
    username: "@shivang14d04",
    profilePic: "https://i.pravatar.cc/150?img=3",
    followers: 120,
    following: 80,
    github: "https://github.com/Shivang14d04",
    bio: "Passionate Web3 developer. Love building cool projects and exploring space!",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git", "GitHub"],
    college: "Indian Institute of Technology",
    resume: "https://example.com/Shivang_Kumar_Resume.pdf", // replace with actual PDF link
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 space-y-8">
      {/* Profile Box */}
      <div className="p-8 bg-gradient-to-r from-indigo-50 to-white shadow-xl rounded-2xl border border-indigo-100">
        <div className="flex items-start space-x-10">
          {/* Left: Profile Image + Name + Username */}
          <div className="flex flex-col items-center">
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-indigo-400 shadow-lg"
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              {user.name}
            </h2>
            <p className="text-gray-500 text-sm">{user.username}</p>
          </div>

          {/* Right: Stats + GitHub + Button + Bio */}
          <div className="flex-1 flex flex-col justify-start">
            {/* Stats + GitHub + Edit Button */}
            <div className="flex items-center justify-between mb-6">
              {/* Stats + GitHub */}
              <div className="flex items-center space-x-4">
                {/* Followers */}
                <div className="bg-indigo-100 w-32 px-5 py-3 rounded-lg shadow-md text-center hover:bg-indigo-200 transition">
                  <p className="text-xl font-bold text-indigo-700">
                    {user.followers}
                  </p>
                  <p className="text-gray-600 text-sm">Followers</p>
                </div>
                {/* Following */}
                <div className="bg-indigo-100 w-32 px-5 py-3 rounded-lg shadow-md text-center hover:bg-indigo-200 transition">
                  <p className="text-xl font-bold text-indigo-700">
                    {user.following}
                  </p>
                  <p className="text-gray-600 text-sm">Following</p>
                </div>
                {/* GitHub (same size as followers/following) */}
                <a
                  href={user.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-400 w-32 px-5 py-3 rounded-lg shadow-md flex flex-col items-center justify-center hover:bg-indigo-500 transition"
                >
                  <FaGithub className="text-3xl text-white mb-1" />
                  <span className="text-white text-sm">GitHub</span>
                </a>
              </div>

              {/* Edit Button */}
              <button className="px-5 py-3 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 shadow-md transition">
                Edit Profile
              </button>
            </div>

            {/* Bio Section */}
            <div className="bg-indigo-50 p-5 rounded-lg shadow-inner border border-indigo-100">
              <h3 className="text-gray-700 font-semibold mb-2">Bio</h3>
              <p className="text-gray-600">{user.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {user.skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium text-sm hover:bg-indigo-200 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* College / University Section */}
      <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          College / University
        </h3>
        <p className="text-gray-600">{user.college}</p>
      </div>

      {/* Resume Section */}
      <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Resume</h3>
        <a
          href={user.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 shadow-md transition"
        >
          View Resume
        </a>
      </div>
    </div>
  );
}
