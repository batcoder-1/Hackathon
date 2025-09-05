import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import LogoutButton from "./Logoutbtn";
import Container from "./Container";
function Header() {
  const authStatus = true;

  const navItems = [
    { name: "Home", url: "/", active: true },
    { name: "Find Team", url: "/find-team", active: true },
    { name: "Notifications", url: "/notifications", active: true },
    { name: "Login", url: "/login", active: !authStatus },
    { name: "Signup", url: "/signup", active: !authStatus },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Nav */}
          <div className="flex items-center space-x-6">
            <Logo />
          <ul className="hidden md:flex items-center space-x-6">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <Link
                      to={item.url}
                      className="text-gray-700 hover:text-black font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>

        {/* Right: Search + Profile/Logout */}
        <div className="flex items-center space-x-4">
          {/* Search bar */}
          <div className="hidden sm:flex items-center bg-gray-100 rounded-lg px-3 py-1">
            <input
              type="text"
              placeholder="Search…"
              className="bg-transparent outline-none text-sm w-40 sm:w-56"
            />
          </div>

          {/* Profile + Logout */}
          {authStatus ? (
            <div className="flex items-center space-x-3">
              <Link
                to="/profile"
                className="text-gray-700 hover:text-black font-medium"
              >
                Profile
              </Link>
              <LogoutButton />
            </div>
          ) : (
            <Link
              to="/login"
              className="text-gray-700 hover:text-black font-medium"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
