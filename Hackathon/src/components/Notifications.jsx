import React, { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";

export default function Notifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New follower: John Doe", read: false },
    { id: 2, message: "Your post got 5 new likes", read: true },
    { id: 3, message: "Project invitation from Alice", read: false },
    { id: 4, message: "New comment on your post", read: false },
    { id: 5, message: "Server maintenance scheduled", read: true },
  ]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredNotifications =
    activeTab === "all" ? notifications : notifications.filter((n) => n.read);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full relative"
      >
        <Bell className="w-7 h-7 text-purple-800" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notifications Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 min-w-[20rem] max-w-[95vw] bg-gray-900 rounded-2xl z-50 backdrop-blur-md overflow-hidden border border-pink-500/20">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-pink-500/30">
            <h3 className="font-semibold text-lg text-white">Notifications</h3>
            <button
              onClick={markAllAsRead}
              className="text-sm text-pink-400 hover:text-pink-500 font-medium transition"
            >
              Mark all as read
            </button>
          </div>

          {/* Tabs with Hover Capsule */}
          <div className="flex border-b border-pink-500/30 relative">
            <button
              className={`flex-1 py-3 text-center relative transition-all ${
                activeTab === "all"
                  ? "border-b-2 border-pink-400 font-semibold text-pink-400"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("all")}
            >
              <span className="relative z-10">All</span>
              <span className="absolute inset-0 rounded-full bg-gray-800/50 opacity-0 transition-opacity hover:opacity-100"></span>
            </button>
            <button
              className={`flex-1 py-3 text-center relative transition-all ${
                activeTab === "read"
                  ? "border-b-2 border-pink-400 font-semibold text-pink-400"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("read")}
            >
              <span className="relative z-10">Read</span>
              <span className="absolute inset-0 rounded-full bg-gray-800/50 opacity-0 transition-opacity hover:opacity-100"></span>
            </button>
          </div>

          {/* Notifications List */}
          <ul className="max-h-96 overflow-y-auto px-4 py-3 space-y-2">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((n) => (
                <li
                  key={n.id}
                  className={`flex items-center justify-start gap-3 px-4 py-3 cursor-pointer rounded-lg transition-all ${
                    n.read ? "text-gray-400" : "text-white font-medium"
                  } hover:bg-gray-800/50`}
                >
                  {/* Left red dot */}
                  {!n.read && (
                    <span className="w-3 h-3 bg-red-400 rounded-full flex-shrink-0"></span>
                  )}
                  <span className="truncate">{n.message}</span>
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-gray-500 text-center">
                No notifications
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
