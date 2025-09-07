import { Github, Twitter, Linkedin } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white">HackDevs</h2>
            <p className="mt-2 text-sm text-gray-400">
              Building innovative solutions with modern tech 🚀
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Connect With Us
            </h3>
            <div className="space-y-4">
              {/* Naman */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="font-medium text-gray-200">Naman Dadhich</span>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/batcoder-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="w-5 h-5 hover:text-white" />
                  </a>
                  <a
                    href="https://twitter.com/roger5364"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter className="w-5 h-5 hover:text-white" />
                  </a>
                  <a
                    href="https://linkedin.com/in/naman"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="w-5 h-5 hover:text-white" />
                  </a>
                </div>
              </div>

              {/* Shivang */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="font-medium text-gray-200">
                  Shivang Kumar Nayak
                </span>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/Shivang14d04"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="w-5 h-5 hover:text-white" />
                  </a>
                  <a
                    href="https://x.com/Shivang141204"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter className="w-5 h-5 hover:text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shivang-kumar-64aa6428b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="w-5 h-5 hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} HackDevs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
