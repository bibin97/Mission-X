// src/components/Hero.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SlideButton from "../Components/Slidebutton";
import PaperCurlMouseCard from "../Components/Mousetilt";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const root = useRef(null);
  const rocket = useRef(null);
  const bgLayer = useRef(null);
  const particles = useRef(null);

  useGSAP(
    () => {
      // Text entrance animations
      gsap.from(".hero-title", { opacity: 0, y: 40, duration: 1.2, ease: "power3.out" });
      gsap.from(".hero-sub", { opacity: 0, y: 30, duration: 1, delay: 0.2, ease: "power3.out" });
      gsap.from(".hero-buttons", { opacity: 0, y: 20, duration: 0.8, delay: 0.4, ease: "power3.out" });
      gsap.from(".hero-features", { opacity: 0, y: 20, duration: 0.8, delay: 0.6, ease: "power3.out" });

      // Floating effect
      gsap.timeline({ repeat: -1, yoyo: true }).to(rocket.current, {
        y: -15,
        rotate: 3,
        duration: 2,
        ease: "power1.inOut",
      });

      // Parallax background
      gsap.to(bgLayer.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });

      // Floating particles
      gsap.to(".particle", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="hero"
      className="relative isolate flex items-center pt-12 sm:pt-36 md:pt-40 lg:pt-44 pb-0"
    >
      {/* Background Elements */}
      <div ref={bgLayer} className="pointer-events-none absolute inset-0 text-black">
        <div className="absolute top-16 left-8 sm:left-20 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-full blur-xl rotate-45 animate-float border border-yellow-500/20" />
        <div
          className="absolute top-32 right-8 sm:right-24 w-20 sm:w-28 h-20 sm:h-28 bg-gradient-to-r from-amber-500/10 to-yellow-600/10 rounded-lg blur-lg rotate-12 animate-float border border-amber-500/20"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-24 left-10 sm:left-24 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r from-yellow-600/10 to-amber-600/10 rounded-full blur-2xl rotate-45 animate-float border border-yellow-600/20"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-12 right-10 sm:right-20 w-24 sm:w-28 h-24 sm:h-28 bg-gradient-to-r from-amber-600/10 to-yellow-700/10 rounded-lg blur-xl rotate-12 animate-float border border-amber-600/20"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Floating Particles */}
      <div ref={particles} className="pointer-events-none absolute inset-0">
        {[
          ["top-1/4 left-1/4", "w-3 h-3"],
          ["top-1/3 right-1/3", "w-2 h-2"],
          ["bottom-1/4 left-1/3", "w-4 h-4"],
          ["top-1/2 right-1/4", "w-3 h-3"],
          ["top-3/4 left-1/2", "w-2 h-2"],
        ].map(([pos, size], i) => (
          <div
            key={i}
            className={`particle absolute ${pos} ${size} bg-teal-700 rounded-full opacity-70 shadow-lg animate-pulse border border-teal-700`}
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center relative z-10">
        {/* === Left Section === */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-3xl bg-teal-700 border border-teal-700 text-white text-sm sm:text-lg font-bold shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="w-3 sm:w-4 h-3 sm:h-4 bg-yellow-500 rounded-full animate-pulse" />
            Premium AI-Powered Learning
          </div>

          {/* Title */}
          <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
            <span className="block text-transparent bg-clip-text bg-teal-700 drop-shadow-2xl">Score 90+</span>
            <span className="block text-transparent bg-clip-text bg-teal-700 drop-shadow-2xl">in Maths</span>
            <span className="block text-black text-2xl sm:text-4xl md:text-5xl font-bold mt-3">
              in Just 25 Missions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-sub text-base sm:text-lg md:text-xl text-black leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Master mathematics with our{" "}
            <span className="text-transparent bg-clip-text bg-teal-700 font-bold">premium AI mentor</span>, expert
            guidance, and mission-based learning designed for{" "}
            <span className="text-transparent bg-clip-text bg-teal-700 font-bold">maximum confidence and speed</span>.
          </p>

          {/* Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
            <SlideButton
              as="a"
              href="#join"
              baseBg="linear-gradient(135deg, #0d9488 0%, #10b981 100%)"
              fillColor="black"
              hoverText="white"
              baseText="black"
              expandedWidth={240}
              collapsedWidth={180}
              className="font-black rounded-full text-sm sm:text-base"
            >
              Join WhatsApp
            </SlideButton>

            <SlideButton
              as="a"
              href="#missions"
              baseBg="black"
              fillColor="linear-gradient(135deg, #0d9488 0%, #10b981 100%)"
              hoverText="black"
              baseText="white"
              className="border-2 rounded-full font-bold text-sm sm:text-base"
            >
              Explore Missions
            </SlideButton>
          </div>

          {/* Feature Cards with PaperCurlMouseCard */}
          <div className="hero-features mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {[
              ["✓", "25 Premium Missions", "Complete syllabus with clear challenges"],
              ["AI", "Premium AI Mentor", "Instant answers and guided help"],
              ["👨‍🏫", "Expert Mentors", "Personalized support when you need it"],
              ["🌐", "Premium Community", "Collaborate and grow together"],
            ].map(([icon, title, desc], i) => (
              <PaperCurlMouseCard
                key={i}
                maxTilt={10}
                maxSkew={6}
                scale={1.02}
                bounce={0.25}
                friction={0.85}
                className="w-full"
              >
                <div className="group relative p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-white border border-teal-400/20 hover:border-teal-400/40 hover:shadow-xl transition-all duration-500 flex items-start gap-2.5 sm:gap-3">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-teal-700 rounded-md sm:rounded-lg flex items-center justify-center shadow-md border border-teal-300/30">
                    <span className="text-white text-xs sm:text-sm md:text-base font-bold">{icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-black text-sm sm:text-base leading-tight">{title}</p>
                    <p className="text-gray-700 text-xs sm:text-sm leading-snug">{desc}</p>
                  </div>
                </div>
              </PaperCurlMouseCard>
            ))}
          </div>
        </div>

        {/* === Right Animated Green Card === */}
        <div className="relative flex justify-center lg:justify-end">
          <div ref={rocket} className="relative z-10 scale-[0.8] sm:scale-90 md:scale-100">
            <div className="relative w-[240px] sm:w-[320px] md:w-[380px] lg:w-[420px] aspect-square mx-auto">
              {/* Main Card */}
              <div className="absolute inset-0 bg-teal-700 rounded-3xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-1000 border border-teal-700">
                <div className="absolute inset-4 bg-black/20 rounded-2xl backdrop-blur-sm border border-teal-700">
                  <div className="absolute top-8 left-6 right-6 h-16 sm:h-20 bg-gradient-to-r from-teal-700 to-green-700 rounded-2xl flex items-center justify-center shadow-lg border border-teal-700">
                    <span className="text-black text-2xl sm:text-3xl font-black">90+</span>
                  </div>
                  <div className="absolute top-32 left-6 right-6 space-y-2 sm:space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-2 sm:h-3 bg-gradient-to-r from-teal-900 to-green-700 rounded-full shadow-lg border border-teal-700" />
                    ))}
                  </div>
                  <div className="absolute bottom-6 sm:bottom-8 left-6 right-6 text-center">
                    <div className="text-black text-lg sm:text-2xl font-black">Mission X</div>
                    <div className="text-white text-sm sm:text-lg font-semibold">Premium 25 Missions</div>
                  </div>
                </div>
              </div>

              {/* Premium Floating Luxury Elements */}
              <div className="absolute -top-10 -right-6 w-20 h-20 bg-gradient-to-r from-teal-900 to-green-700 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce transform rotate-12 border border-yellow-300/40">
                <span className="text-black text-3xl font-bold">➕</span>
              </div>

              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-teal-900 to-green-700 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce transform -rotate-12 border border-amber-300/40"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="text-black text-2xl font-bold">➖</span>
              </div>

              <div
                className="absolute top-1/2 -left-8 w-14 h-14 bg-gradient-to-r from-teal-900 to-green-700 rounded-full flex items-center justify-center shadow-2xl animate-bounce transform rotate-45 border border-yellow-400/40"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-black text-xl font-bold">✖️</span>
              </div>

              <div
                className="absolute top-1/4 -right-8 w-12 h-12 bg-gradient-to-r from-teal-900 to-green-700 rounded-full flex items-center justify-center shadow-2xl animate-bounce transform -rotate-45 border border-amber-400/40"
                style={{ animationDelay: "1.5s" }}
              >
                <span className="text-black text-lg font-bold">➗</span>
              </div>
            </div>
          </div>

          {/* Premium Luxury Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/30 to-green-600/30 rounded-full blur-3xl scale-150 animate-pulse"></div>
          <div
            className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-yellow-500/20 rounded-full blur-2xl scale-125 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
