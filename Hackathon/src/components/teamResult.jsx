export default function TeamResult() {
  // Example dummy profiles
  const profiles = [
    {
      id: 1,
      username: "@johnDoe",
      name: "John Doe",
      photo: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      username: "@janeSmith",
      name: "Jane Smith",
      photo: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      username: "@alexCoder",
      name: "Alex Coder",
      photo: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 1,
      username: "@johnDoe",
      name: "John Doe",
      photo: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      username: "@janeSmith",
      name: "Jane Smith",
      photo: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      username: "@alexCoder",
      name: "Alex Coder",
      photo: "https://i.pravatar.cc/150?img=5",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
        Matching Profiles
      </h3>

      <div className="space-y-4">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 transition"
          >
            {/* Left: Profile pic + name + username */}
            <div className="flex items-center space-x-4">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-14 h-14 rounded-full object-cover border border-gray-300"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{profile.name}</h4>
                <p className="text-gray-500 text-sm">{profile.username}</p>
              </div>
            </div>

            {/* Right: optional action button */}
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-md text-sm font-medium hover:bg-indigo-600 transition">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
