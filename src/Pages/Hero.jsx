// src/components/Hero.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SlideButton from "../Components/Slidebutton";
import PaperCurlMouseCard from "../Components/Musetilt";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const root = useRef(null);
  const rocket = useRef(null);
  const bgLayer = useRef(null);
  const particles = useRef(null);

  useGSAP(
    () => {
      // Enhanced animations
      gsap.from(".hero-title", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      });
      gsap.from(".hero-sub", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
      gsap.from(".hero-buttons", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      });
      gsap.from(".hero-features", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      });

      // Floating rocket animation
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
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
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
      className="relative isolate overflow-hidden min-h-screen flex items-center"
    >
      {/* Premium Black Background */}
      <div
        ref={bgLayer}
        className="pointer-events-none absolute inset-0 text-black"
      >
        <div className="absolute inset-0 " />

        {/* Premium Luxury Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-full blur-xl transform rotate-45 animate-float border border-yellow-500/20" />
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-amber-500/10 to-yellow-600/10 rounded-lg blur-lg transform rotate-12 animate-float border border-amber-500/20"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-yellow-600/10 to-amber-600/10 rounded-full blur-2xl transform rotate-45 animate-float border border-yellow-600/20"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-amber-600/10 to-yellow-700/10 rounded-lg blur-xl transform rotate-12 animate-float border border-amber-600/20"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Premium Floating Gold Particles */}
      <div ref={particles} className="pointer-events-none absolute inset-0">
        <div className="particle absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full opacity-80 shadow-lg animate-pulse border border-teal-700" />
        <div
          className="particle absolute top-1/3 right-1/3 w-2 h-2 bg-teal-700  rounded-full opacity-60 shadow-lg animate-pulse border border-tean-700"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="particle absolute bottom-1/4 left-1/3 w-4 h-4 bg-teal-700 rounded-full opacity-70 shadow-lg animate-pulse border border-teal-700"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="particle absolute top-1/2 right-1/4 w-3 h-3 bg-teal-700 rounded-full opacity-50 shadow-lg animate-pulse border border-teal-700"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="particle absolute top-3/4 left-1/2 w-2 h-2 bg-teal-700 rounded-full opacity-60 shadow-lg animate-pulse border border-teal-700"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-20 items-center relative z-10 mt-10">
        <div className="space-y-8">
          {/* Premium Luxury Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-black backdrop-blur-xl border border-black text-white text-lg font-bold mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="w-4 h-4 bg-teal-700 rounded-full animate-pulse shadow-lg border border-black-300/30" />
            <span className="text-2xl"></span>
            <span>Premium AI-Powered Learning</span>
            <div className="w-3 h-3 bg-teal-700 rounded-full animate-ping border border-black-300/30" />
          </div>

          {/* Premium Typography with Teal-Green Gradient */}
          <h1 className="hero-title text-6xl md:text-8xl font-black tracking-tight leading-tight">
            <span className="block text-transparent bg-clip-text bg-teal-700  drop-shadow-2xl font-m">
              Score 90+
            </span>
            <span className="block text-transparent bg-clip-text bg-teal-700 drop-shadow-2xl">
              in Maths
            </span>
            <span className="block text-black text-4xl md:text-6xl font-bold mt-4 drop-shadow-xl">
              in Just 25 Missions
            </span>
          </h1>

          <p className="hero-sub text-xl md:text-2xl text-black leading-relaxed max-w-2xl font-medium">
            Master mathematics with our{" "}
            <span className="text-transparent bg-clip-text bg-teal-700 font-bold">
              premium AI mentor
            </span>
            , expert guidance, and mission-based learning system designed for{" "}
            <span className="text-transparent bg-clip-text bg-teal-700 font-bold">
              maximum confidence and speed
            </span>
            .
          </p>

          {/* Premium Luxury Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-6">
  <SlideButton
    as="a"
    href="#join"
    baseBg="black"
    fillColor="linear-gradient(135deg, #0d9488 0%, #10b981 100%)"
    hoverText="black"
    baseText="white"
    expandedWidth={260}  // Number, not string
    collapsedWidth={200} // Number, not string
    className="font-black rounded-full"
  >
    <span className="flex items-center gap-2">
      <span className="text-2xl"></span>
      Join WhatsApp
    </span>
  </SlideButton>

  <SlideButton
    as="a"
    href="missions"
    baseBg="black"
    fillColor="linear-gradient(135deg, #0d9488 0%, #10b981 100%)"
    hoverText="black"
    baseText="white"
    className="border-2 rounded-full font-bold"
  >
    <span className="flex items-center gap-2">
      <span className="text-2xl"></span>
      Explore Missions
    </span>
  </SlideButton>
</div>


          {/* Premium Luxury Feature Cards */}
          <div className="hero-features mt-16">
            <div className="grid sm:grid-cols-2 gap-6 cursor-pointer">
              <div className="group relative p-6 rounded-2xl bg-white backdrop-blur-xl border border-teal-400/20 hover:border-teal-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-start gap-4">
                  <PaperCurlMouseCard
                    maxTilt={18} // less tilt for speed
                    maxSkew={11}
                    scale={1.07}
                    bounce={0.23} // fast snap back
                    friction={0.83} // quick friction
                    className="transition-transform duration-100"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-teal-300/30">
                      <span className="text-black text-xl font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">
                        25 Premium Missions
                      </p>
                      <p className="text-black-300 text-sm">
                        Complete syllabus coverage with clear, step-by-step
                        challenges
                      </p>
                    </div>
                  </PaperCurlMouseCard>
                </div>
              </div>

              <div className="group relative p-6 rounded-2xl bg-white backdrop-blur-xl border border-teal-400/20 hover:border-teal-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-start gap-4">
                  <PaperCurlMouseCard
                    maxTilt={18} // less tilt for speed
                    maxSkew={11}
                    scale={1.07}
                    bounce={0.23} // fast snap back
                    friction={0.83} // quick friction
                    className="transition-transform duration-100"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-teal-300/30">
                      <span className="text-black text-xl font-bold">AI</span>
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">
                        Premium AI Mentor
                      </p>
                      <p className="text-black text-sm">
                        Instant answers and guided solutions whenever you're
                        stuck
                      </p>
                    </div>
                  </PaperCurlMouseCard>
                </div>
              </div>

              <div className="group relative p-6 rounded-2xl bg-white backdrop-blur-xl border border-teal-400/20 hover:border-teal-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-start gap-4">
                  <PaperCurlMouseCard
                    maxTilt={18} // less tilt for speed
                    maxSkew={11}
                    scale={1.07}
                    bounce={0.23} // fast snap back
                    friction={0.83} // quick friction
                    className="transition-transform duration-100"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-700  rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-teal-300/30">
                      <span className="text-black text-xl">👨‍🏫</span>
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">
                        Expert Mentors
                      </p>
                      <p className="text-black text-sm">
                        Personal guidance when you need that extra support
                      </p>
                    </div>
                  </PaperCurlMouseCard>
                </div>
              </div>

              <div className="group relative p-6 rounded-2xl bg-white backdrop-blur-xl border border-teal-400/20 hover:border-teal-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-start gap-4">
                  <PaperCurlMouseCard
                    maxTilt={18} // less tilt for speed
                    maxSkew={11}
                    scale={1.07}
                    bounce={0.23} // fast snap back
                    friction={0.83} // quick friction
                    className="transition-transform duration-100"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-teal-300/30">
                      <span className="text-black text-xl">🌐</span>
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">
                        Premium Community
                      </p>
                      <p className="text-black text-sm">
                        Connect with peers for Maths, Science, and English help
                      </p>
                    </div>
                  </PaperCurlMouseCard>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Luxury Hero Visual */}
        <div className="relative">
          <div ref={rocket} className="relative z-10">
            <div className="w-96 h-96 mx-auto relative">
              {/* Premium Luxury Design */}
              <div className="absolute inset-0 bg-teal-700 rounded-3xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-1000 border border-teal-700">
                <div className="absolute inset-4 bg-black/20 rounded-2xl backdrop-blur-sm border border-teal-700">
                  <div className="absolute top-8 left-8 right-8 h-20 bg-gradient-to-r from-teal-700 to-green-700 rounded-2xl flex items-center justify-center shadow-lg border border-teal-700">
                    <span className="text-black text-3xl font-black">90+</span>
                  </div>
                  <div className="absolute top-32 left-8 right-8 space-y-3">
                    <div className="h-3 bg-gradient-to-r from-teal-900 to-green-700 rounded-full shadow-lg border border-teal-700"></div>
                    <div className="h-3 bg-gradient-to-r from-teal-900 to-green-700 rounded-full shadow-lg border border-teal-700"></div>
                    <div className="h-3 bg-gradient-to-r from-teal-900 to-green-700 rounded-full shadow-lg border border-teal-700"></div>
                    <div className="h-3 bg-gradient-to-r from-teal-900 to-green-700 rounded-full shadow-lg border border-teal-700"></div>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 text-center">
                    <div className="text-black text-2xl font-black">
                      Mission X
                    </div>
                    <div className="text-white text-lg font-semibold">
                      Premium 25 Missions
                    </div>
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
