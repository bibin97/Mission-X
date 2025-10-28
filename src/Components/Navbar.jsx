// src/components/Navbar.jsx
import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SlideButton from "../Components/Slidebutton";
import mxlogo from "../assets/mxlogo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useGSAP(() => {
    gsap.from(".navbar-brand", { opacity: 0, y: -20, duration: 0.8, ease: "power3.out" });
    gsap.from(".navbar-nav", { opacity: 0, y: -20, duration: 0.8, delay: 0.1, ease: "power3.out" });
    gsap.from(".navbar-cta", { opacity: 0, y: -20, duration: 0.8, delay: 0.2, ease: "power3.out" });
  }, { scope: navbarRef });

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#missions", label: "Missions" },
    { href: "#testimonials", label: "Reviews" },
  ];

  // Utility to close menu and allow navigation
  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header ref={navbarRef} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="navbar-brand flex items-center gap-2.5">
          <img
            src={mxlogo}
            alt="Mission X Logo"
            className="h-15 md:h-18 object-contain brightness-110 contrast-125 drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-nav hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-black font-semibold hover:text-teal-700 transition-colors duration-200 text-base"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="navbar-cta hidden md:block">
          <SlideButton
            as="a"
            href="#join"
            baseBg="black"
            fillColor="linear-gradient(135deg, #0d9488 0%, #10b981 100%)"
            hoverText="black"
            baseText="white"
            className="shadow-2xl hover:from-teal-700 hover:to-green-500 hover:shadow-teal-700 transform hover:scale-110 transition-all duration-500 text-lg px-8 py-4  border border-teal-400/40 font-bold rounded-full"
          >
            <span className="text-lg"></span>
            Join Premium
          </SlideButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col justify-center items-center">
            <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
            <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100 my-0.5'}`}></span>
            <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-4 bg-[#1a1d23] border-t border-white/5">
          <div className="flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white font-semibold transition-colors duration-300 hover:text-teal-400"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#join"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-700 to-teal-600 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleNavClick}
              >
                <span className="text-lg"></span>
                Join Premium
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
