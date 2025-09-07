import React from "react";
import logo from "../../src/assets/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center">
      {/* Logo Image */}
      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden   shadow-lg">
        <img
          src={logo}
          alt="HackDevs Logo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
