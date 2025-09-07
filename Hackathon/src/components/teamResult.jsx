export default function TeamResult({ profiles }) {
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
            <div className="flex items-center space-x-4">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-14 h-14 rounded-full object-cover border border-gray-300"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{profile.name}</h4>
                <p className="text-gray-500 text-sm">{profile.username}</p>
                <p className="text-xs text-indigo-600">
                  {profile.role} · {profile.experience}
                </p>
                <p className="text-gray-600 text-sm">
                  Skills: {profile.skills.join(", ")}
                </p>
              </div>
            </div>

            <button className="px-4 py-2 bg-indigo-500 text-white rounded-md text-sm font-medium hover:bg-indigo-600 transition">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
