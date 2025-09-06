import React from "react";  
export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-12">
      {/* Hero Section */}
      <main className="flex flex-col items-center text-center max-w-4xl mt-16 relative">
        {/* Illustrations (replace src with your own images) */}
        <img
          src="/images/chick.png"
          alt="Chick Illustration"
          className="hidden md:block absolute left-[-150px] bottom-0 w-40"
        />
        <img
          src="/images/penguin.png"
          alt="Penguin Illustration"
          className="hidden md:block absolute right-[-150px] bottom-0 w-44"
        />

        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Set goals{" "}
          <span className="bg-purple-200 text-purple-800 px-2 rounded-md text-lg align-middle">
            plan
          </span>{" "}
          Stay on track{" "}
          <span className="bg-purple-100 text-purple-700 px-2 rounded-md text-lg align-middle">
            step
          </span>{" "}
          Let time be your teammate{" "}
          <span className="bg-yellow-200 text-yellow-800 px-2 rounded-md text-lg align-middle">
            done
          </span>
        </h2>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl">
          Quests, challenges, and mini-victories are designed to help children learn to act with pleasure.
        </p>

        <button className="mt-8 px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition">
          Start the Quest
        </button>
      </main>

      {/* Stats Section */}
      <section className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center mt-16 text-center">
        <div>
          <h3 className="text-2xl font-bold">120+</h3>
          <p className="text-gray-600">Methods</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">23.4K</h3>
          <p className="text-gray-600">Successes</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">100%</h3>
          <p className="text-gray-600">Outcome</p>
        </div>
      </section>
    </div>
  );
}
