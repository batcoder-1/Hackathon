import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import LogoutButton from "./Logoutbtn";
import { useSelector } from "react-redux";
import Notifications from "./Notifications";
import { Menu, X } from "lucide-react";

function Header() {
  const authStatus = useSelector((state) => state.Auth.status);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", url: "/", active: true },
    { name: "Find Team", url: "/find-team", active: true },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-r from-purple-100/40 via-pink-100/30 to-pink-200/40 border-b border-white/20 shadow-lg">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Left */}
        <div className="flex items-center space-x-3 md:space-x-6">
          <Logo />
          <span className="text-lg md:text-xl font-bold text-purple-900">
            HackDevs
          </span>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-3">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <Link
                      to={item.url}
                      className="px-4 py-2 font-medium rounded-full text-purple-900 transition-all duration-300 ease-in-out hover:bg-black/10"
                    >
                      {item.name}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-3 md:space-x-6">
          {/* Search (hidden on xs) */}
          <div className="hidden sm:flex items-center bg-white/20 border border-white/20 rounded-full px-3 sm:px-4 py-1 backdrop-blur-md shadow-sm hover:shadow-md">
            <input
              type="text"
              placeholder="Search…"
              className="bg-transparent outline-none text-sm text-purple-900 placeholder-purple-700 w-32 sm:w-48 md:w-64"
            />
          </div>

          <Notifications />

          {/* Auth Buttons */}
          {authStatus ? (
            <div className="hidden sm:flex items-center space-x-3 md:space-x-4">
              <Link
                className="px-3 py-1 rounded-full bg-white/20 border border-white/20 text-purple-900 font-medium hover:bg-black/10"
                to="/profile"
              >
                Profile
              </Link>
              <LogoutButton className="px-3 py-1 rounded-full bg-pink-500 text-white font-medium hover:bg-pink-600" />
            </div>
          ) : (
            <Link
              className="hidden sm:block px-3 py-1 rounded-full bg-white/20 border border-white/20 text-purple-900 font-medium hover:bg-black/10"
              to="/signup"
            >
              Signup
            </Link>
          )}

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full bg-white/20 border border-white/20 text-purple-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/70 backdrop-blur-md border-t border-gray-200 px-4 py-3 space-y-2">
          {navItems.map(
            (item) =>
              item.active && (
                <Link
                  key={item.name}
                  to={item.url}
                  className="block px-3 py-2 rounded-md font-medium text-purple-900 hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
          )}
          {authStatus ? (
            <>
              <Link
                to="/profile"
                className="block px-3 py-2 rounded-md font-medium text-purple-900 hover:bg-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
              <LogoutButton className="block w-full text-left px-3 py-2 rounded-md bg-pink-500 text-white font-medium hover:bg-pink-600" />
            </>
          ) : (
            <Link
              to="/signup"
              className="block px-3 py-2 rounded-md font-medium text-purple-900 hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Signup
            </Link>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
