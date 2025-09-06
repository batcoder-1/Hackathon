import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell } from "lucide-react";
import Logo from "./Logo";
import LogoutButton from "./Logoutbtn";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.Auth.status);
  const location = useLocation();

  const navItems = [
    { name: "Home", url: "/", active: true },
    { name: "Find Team", url: "/find-team", active: true },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-r from-purple-100/40 via-pink-100/30 to-pink-200/40 border-b border-white/20 shadow-lg">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left: Logo + Brand + Nav */}
        <div className="flex items-center space-x-6">
          <Logo />
          <span className="text-xl font-bold text-purple-900">HackDevs</span>

          {/* Nav Pills with glassmorphism and hover effects */}
          <ul className="hidden md:flex items-center space-x-3">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <Link
                      to={item.url}
                      className={`relative px-5 py-2 font-medium rounded-full transition-all duration-300 ease-in-out
                        before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300
                        before:bg-gradient-to-r before:from-purple-500/50 before:via-pink-400/50 before:to-pink-300/50
                        before:opacity-0 before:scale-90
                        hover:before:opacity-100 hover:before:scale-100 hover:shadow-lg hover:scale-105
                        ${
                          location.pathname === item.url
                            ? "text-white before:opacity-100 before:scale-100 shadow-md"
                            : "text-purple-900 hover:text-white"
                        }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>

        {/* Right: Search + Notifications + Profile */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Search */}
          <div className="hidden sm:flex items-center bg-white/20 border border-white/20 rounded-full px-4 py-1 backdrop-blur-md shadow-sm transition-all hover:shadow-md">
            <input
              type="text"
              placeholder="Search…"
              className="bg-transparent outline-none text-sm text-purple-900 placeholder-purple-700 w-48 sm:w-64"
            />
          </div>

          {/* Notifications */}
          <Link
            to="/notifications"
            className="text-purple-900 hover:text-purple-700 transition-colors"
          >
            <Bell className="w-6 h-6" />
          </Link>

          {/* Profile/Logout */}
          {authStatus ? (
            <div className="flex items-center space-x-3 md:space-x-4">
              <Link
                to="/profile"
                className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-purple-900 font-medium transition-all hover:bg-gradient-to-r hover:from-purple-400/40 hover:via-pink-300/40 hover:to-pink-200/40 hover:text-white hover:shadow-lg"
              >
                Profile
              </Link>
              <LogoutButton />
            </div>
          ) : (
            <Link
              to="/signup"
              className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-purple-900 font-medium transition-all hover:bg-gradient-to-r hover:from-purple-400/40 hover:via-pink-300/40 hover:to-pink-200/40 hover:text-white hover:shadow-lg"
            >
              Signup
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
