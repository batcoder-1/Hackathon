export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          About HackDevs
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Mission Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-gray-800 text-center text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            At <span className="font-semibold">HackDevs</span>, our mission is
            to make hackathons more collaborative and impactful. Finding the
            right teammates is often the hardest part of joining a hackathon —
            and that’s the problem we solve.
          </p>
        </section>

        {/* What We Do */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
            What We Do
          </h2>
          <p className="text-gray-800 text-center text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            HackDevs uses{" "}
            <span className="font-semibold">AI-powered matchmaking</span> to
            help participants find the best teammates based on their skills,
            interests, and project goals. Whether you’re a beginner or an
            expert, our platform makes it easier to connect with people who
            complement your skills.
          </p>
          <p className="text-gray-800 text-center text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            With smart recommendations, users can save time searching for
            teammates and instead focus on what matters most —{" "}
            <span className="italic">
              building amazing projects and innovating together
            </span>
            .
          </p>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-center">
            Meet the Team
          </h2>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
            {/* Naman */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                Naman Dadinch
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Co-founder & Developer — Passionate about{" "}
                <span className="font-medium text-blue-600">
                  Artificial Intelligence
                </span>{" "}
                and{" "}
                <span className="font-medium text-blue-600">
                  Machine Learning
                </span>
                . Focused on building intelligent systems that make hackathon
                collaboration smarter and more efficient. Currently pursuing
                studies as a <span className="italic">university student</span>.
              </p>
            </div>

            {/* Shivang */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                Shivang Kumar Nayak
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Co-founder & Developer — Passionate about{" "}
                <span className="font-medium text-purple-600">Web3</span> and{" "}
                <span className="font-medium text-purple-600">
                  Blockchain Technology
                </span>
                . Dedicated to exploring decentralized solutions and creating
                impactful projects that bring people together. Currently
                pursuing studies as a{" "}
                <span className="italic">university student</span>.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
