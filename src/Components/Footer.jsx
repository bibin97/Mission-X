import React from "react";

export default function Footer() {
  return (
    <footer className="  border-gray-200 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-8 md:gap-10 border-b border-gray-200 pb-8 text-center">
          {[
            { label: "Home", href: "#hero" },
            { label: "Features", href: "#features" },
            { label: "Missions", href: "#missions" },
            { label: "Reviews", href: "#testimonials" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-gray-700 hover:text-teal-700 font-medium text-sm sm:text-base transition-all duration-300 group"
            >
              {item.label}
              {/* Hover underline effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-teal-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-10 text-center text-xs sm:text-sm text-black">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-teal-700">Mission X</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
