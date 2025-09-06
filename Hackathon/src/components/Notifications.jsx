import React, { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";

export default function Notifications() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, message: "New follower: John Doe" },
    { id: 2, message: "Your post got 5 new likes" },
    { id: 3, message: "Project invitation from Alice" },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100 transition relative"
      >
        <Bell className="w-6 h-6 text-gray-700" />
        {/* Red Dot Indicator */}
        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
      </button>

      {/* Notifications Dropdown */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-80 bg-white shadow-lg rounded-xl border border-gray-200 z-50">
          <h3 className="px-4 py-3 font-semibold text-gray-800 border-b">
            Notifications
          </h3>
          <ul className="max-h-60 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((n) => (
                <li
                  key={n.id}
                  className="px-4 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  {n.message}
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-gray-500">No notifications</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
