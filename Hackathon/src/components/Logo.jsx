import React from "react";
import logo from "../../public/vite.svg";

export default function Logo() {
  return (
    <div className="flex items-center">
      {/* Logo Image */}
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-pink-500 shadow-lg">
        <img
          src={logo}
          alt="HackDevs Logo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
