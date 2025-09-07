import React, { useEffect } from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/Coding.json";
import authservice from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../components/Store/Authslice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function checkSession() {
      try {
        const user = await authservice.getuser();
        if (user) {
          dispatch(login());
        }
      } catch (error) {
        console.log(error);
      }
    }
    checkSession();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Hero */}
      <main className="flex flex-col items-center text-center max-w-3xl mt-6 sm:mt-12">
        {/* Animation */}
        <div className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 mb-6">
          <Lottie animationData={heroAnimation} loop={true} />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-pink-800">
          Welcome to HackDevs!
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg md:text-xl max-w-lg sm:max-w-2xl">
          Ready to find your{" "}
          <span className="text-pink-600 font-semibold">Hackathon Partner</span>
          ? Connect, collaborate, and build something amazing together.
        </p>

        {/* Button */}
        <button
          onClick={() => (window.location.href = "/find-team")}
          className="mt-6 sm:mt-10 px-5 sm:px-8 py-2.5 sm:py-3 bg-pink-600 text-white rounded-full font-semibold text-base sm:text-lg shadow-md hover:bg-pink-700"
        >
          Find Your Team
        </button>
      </main>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-20 w-full max-w-5xl px-4">
        <div className="bg-white shadow-md rounded-xl px-6 py-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-pink-700">120+</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Hackathon Methods
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl px-6 py-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-pink-700">
            23.4K
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">Success Stories</p>
        </div>
        <div className="bg-white shadow-md rounded-xl px-6 py-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-pink-700">100%</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Collaboration Rate
          </p>
        </div>
      </section>
    </div>
  );
}
