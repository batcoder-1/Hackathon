import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/Coding.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center px-4 md:px-6 py-12 md:py-16">
      {/* Hero Section */}
      <main className="flex flex-col items-center text-center max-w-3xl mt-8 md:mt-12 relative">
        {/* Lottie Animation */}
        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mb-6">
          <Lottie animationData={heroAnimation} loop={true} />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-pink-800 drop-shadow-sm">
          Welcome to HackDevs!
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl">
          Ready to find your{" "}
          <span className="text-pink-600 font-semibold">Hackathon Partner</span>
          ? Connect, collaborate, and build something amazing together.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => (window.location.href = "/find-team")}
          className="mt-6 sm:mt-10 px-6 sm:px-8 py-2.5 sm:py-3 bg-pink-600 text-white rounded-full font-semibold text-base sm:text-lg shadow-md hover:bg-pink-700 transition"
        >
          Find Your Team
        </button>
      </main>

      {/* Stats Section */}
      <section className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10 md:gap-20 justify-center items-center mt-12 sm:mt-20 text-center w-full max-w-5xl">
        <div className="flex-1 min-w-[180px] bg-white shadow-md rounded-xl px-6 py-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-pink-700">120+</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Hackathon Methods
          </p>
        </div>
        <div className="flex-1 min-w-[180px] bg-white shadow-md rounded-xl px-6 py-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-pink-700">
            23.4K
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">Success Stories</p>
        </div>
        <div className="flex-1 min-w-[180px] bg-white shadow-md rounded-xl px-6 py-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-pink-700">100%</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Collaboration Rate
          </p>
        </div>
      </section>
    </div>
  );
}
