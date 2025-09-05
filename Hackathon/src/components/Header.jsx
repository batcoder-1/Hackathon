import React from "react";
import { Link } from "react-router-dom";
import { Bell } from "lucide-react";  // Notifications icon
import Logo from "./Logo";
import LogoutButton from "./Logoutbtn";

function Header() {
  const authStatus = true;

  const navItems = [
    { name: "Home", url: "/", active: true },
    { name: "Find Team", url: "/find-team", active: true },
  ];

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left: Logo + Brand */}
        <div className="flex items-center space-x-2">
          <Logo />
          <span className="text-xl font-bold text-white">HackDevs</span>
        </div>

        {/* Middle: Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map(
            (item) =>
              item.active && (
                <li key={item.name}>
                  <Link
                    to={item.url}
                    className="text-white/90 hover:text-white font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              )
          )}
        </ul>

        {/* Right: Search + Notifications + Profile */}
        <div className="flex items-center space-x-6">
          {/* Search */}
          <div className="hidden sm:flex items-center bg-white/20 rounded-full px-4 py-1 backdrop-blur-sm">
            <input
              type="text"
              placeholder="Search…"
              className="bg-transparent outline-none text-sm text-white placeholder-white/70 w-48 sm:w-64"
            />
          </div>

          {/* Notifications Icon */}
          <Link
            to="/notifications"
            className="text-white/90 hover:text-white transition-colors"
          >
            <Bell className="w-6 h-6" />
          </Link>

          {/* Profile/Logout */}
          {authStatus ? (
            <div className="flex items-center space-x-4">
              <Link
                to="/profile"
                className="text-white/90 hover:text-white font-medium"
              >
                Profile
              </Link>
              <LogoutButton />
            </div>
          ) : (
            <Link
              to="/signup"
              className="text-white/90 hover:text-white font-medium"
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
