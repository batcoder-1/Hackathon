import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/Coding.json"; // Ensure you have a Lottie JSON file

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center px-6 py-16">
      {/* Hero Section */}
      <main className="flex flex-col items-center text-center max-w-3xl mt-12 relative">
        {/* Lottie Animation */}
        <div className="w-64 h-64 md:w-80 md:h-80 mb-6">
          <Lottie animationData={heroAnimation} loop={true} />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-pink-800 drop-shadow-sm">
          Welcome to HackDevs!
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-gray-700 text-xl max-w-2xl">
          Ready to find your{" "}
          <span className="text-pink-600 font-semibold">Hackathon Partner</span>
          ? Connect, collaborate, and build something amazing together.
        </p>

        {/* CTA Button */}
        <button className="mt-10 px-8 py-3 bg-pink-600 text-white rounded-full font-semibold text-lg shadow-md hover:bg-pink-700 transition">
          Find Your Team
        </button>
      </main>

      {/* Stats Section */}
      <section className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center mt-20 text-center">
        <div className="bg-white shadow-md rounded-xl px-6 py-4">
          <h3 className="text-3xl font-bold text-pink-700">120+</h3>
          <p className="text-gray-600">Hackathon Methods</p>
        </div>
        <div className="bg-white shadow-md rounded-xl px-6 py-4">
          <h3 className="text-3xl font-bold text-pink-700">23.4K</h3>
          <p className="text-gray-600">Success Stories</p>
        </div>
        <div className="bg-white shadow-md rounded-xl px-6 py-4">
          <h3 className="text-3xl font-bold text-pink-700">100%</h3>
          <p className="text-gray-600">Collaboration Rate</p>
        </div>
      </section>
    </div>
  );
}
