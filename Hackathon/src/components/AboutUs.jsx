export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          About HackDevs
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6 space-y-10">
        {/* Mission Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-semibold">HackDevs</span>, our mission is
            to make hackathons more collaborative and impactful. Finding the
            right teammates is often the hardest part of joining a hackathon —
            and that’s the problem we solve.
          </p>
        </section>

        {/* What We Do */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            HackDevs uses{" "}
            <span className="font-semibold">AI-powered matchmaking</span> to
            help participants find the best teammates based on their skills,
            interests, and project goals. Whether you’re a beginner or an
            expert, our platform makes it easier to connect with people who
            complement your skills.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With smart recommendations, users can save time searching for
            teammates and instead focus on what matters most —{" "}
            <span className="italic">
              building amazing projects and innovating together
            </span>
            .
          </p>
        </section>

        {/* Team Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Meet the Team</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Naman */}
            {/* Naman */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800">Naman Dadinch</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Co-founder & Developer — Passionate about{" "}
                <span className="font-medium text-blue-600">
                  Artificial Intelligence
                </span>
                and{" "}
                <span className="font-medium text-blue-600">
                  Machine Learning
                </span>
                . Focused on building intelligent systems that can make
                hackathon collaboration smarter and more efficient. Currently
                pursuing studies as a{" "}
                <span className="italic">university student</span>.
              </p>
            </div>

            {/* Shivang */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800">
                Shivang Kumar Nayak
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
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
