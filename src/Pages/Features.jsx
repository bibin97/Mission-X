// src/components/Features.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PaperCurlMouseCard from "../Components/Musetilt";
// ✅ Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    icon: "🚀",
    title: "25 Structured Missions",
    desc: "Clear chapter sets with measurable progress and momentum tracking.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    icon: "🤖",
    title: "AI Mentor 24×7",
    desc: "Instant answers and guided solutions whenever you're stuck.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    icon: "🧑‍🏫",
    title: "Expert Mentor Support",
    desc: "Personal guidance to deepen understanding at tough moments.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50"
  },
  {
    icon: "🎯",
    title: "CBSE Exam Challenges",
    desc: "CBSE‑aligned challenges to sharpen your exam skills.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50"
  },
  {
    icon: "🎁",
    title: "Exclusive Member Perks",
    desc: "Daily tips, early access, and special launch rewards.",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50"
  },
  {
    icon: "🌐",
    title: "Active Learning Community",
    desc: "Ask doubts in Maths, Science, and English for quick help.",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-teal-50 to-purple-50"
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll(".feature-card");
      const title = sectionRef.current.querySelector(".feature-title");

      // ✅ Set elements visible by default
      gsap.set(cards, { opacity: 1, visibility: "visible" });
      gsap.set(title, { opacity: 1, visibility: "visible" });

      // Animate cards
      gsap.from(cards, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        }
      });

      // Animate title
      gsap.from(title, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        }
      });

      setTimeout(() => ScrollTrigger.refresh(), 100);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="relative py-32 ">
      {/* Premium Black Background */}
      {/* <div className="absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(34,197,94,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,118,110,0.05),transparent_50%)]" /> */}

      {/* Premium Luxury Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-r from-teal-700 to-green-700 transform rotate-45 animate-float border border-yellow-400/30" />
        <div className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-r from-teal-700 to-green-700 transform rotate-12 animate-float border border-amber-400/30" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-32 w-32 h-32 bg-gradient-to-r from-teal-700 to-green-700 transform rotate-45 animate-float border border-yellow-500/30" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-r from-teal-700 to-green-700 transform rotate-12 animate-float border border-amber-500/30" style={{animationDelay: '3s'}} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Premium Luxury Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-black backdrop-blur-xl border border-teal-400/30 text-white text-lg font-bold mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="w-4 h-4 bg-green-700  rounded-full animate-pulse shadow-lg border border-teal-700/30" />
            <span className="text-2xl"></span>
            Premium Learning Ecosystem
            <div className="w-3 h-3 bg-green-700 rounded-full animate-ping border border-teal-300/30" />
          </div>

          <h2 className="feature-title text-5xl md:text-7xl font-black tracking-tight">
            <span className="block text-transparent bg-clip-text bg-teal-700 drop-shadow-2xl">
              Why Students Choose
            </span>
            <span className="block text-transparent bg-clip-text bg-teal-700 drop-shadow-2xl">
              Mission X
            </span>
          </h2>

          <p className="mt-8 text-2xl text-blsck max-w-4xl mx-auto font-medium leading-relaxed">
            Experience the <span className="text-transparent bg-clip-text bg-teal-700 font-bold">premium future of education</span> with our luxury learning platform designed to <span className="text-transparent bg-clip-text bg-teal-700 font-bold">maximize your potential</span> and accelerate your success.
          </p>
        </div>

        {/* Premium Luxury Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12  cursor-pointer">
         {items.map((item) => (
  <PaperCurlMouseCard
    key={item.title}
    maxTilt={18}
    maxSkew={11}
    scale={1.07}
    bounce={0.23}
    friction={0.83}
    className="transition-transform duration-100"
  >
    <div className="feature-card group relative bg-white min-h-[340px] max-h-[340px] flex flex-col justify-between p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:border-teal-400/40 overflow-hidden transform hover:scale-105 hover:-rotate-1">
      {/* Premium Luxury Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

      {/* Premium Floating Elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-700 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce border border-teal-300/30" />
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-700 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce border border-green-300/30" style={{animationDelay: '0.5s'}} />

      {/* Content */}
      <div className="relative z-10">
        {/* Premium Icon with Luxury Design */}
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-teal-700 shadow-2xl mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
          <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
        </div>

        {/* Title with Premium Typography */}
        <h3 className="text-2xl font-black text-black mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-700 group-hover:to-green-500 transition-all duration-500">
          {item.title}
        </h3>

        {/* Description with Premium Styling */}
        <p className="text-black leading-relaxed text-lg group-hover:text-teal-700 transition-colors duration-500 font-medium">
          {item.desc}
        </p>
      </div>

      {/* Premium Glow Effects */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-teal-400/20 to-green-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  </PaperCurlMouseCard>
))}


        </div>

        {/* Premium Stats Section with Luxury Design */}
        <div className="mt-32 bg-white backdrop-blur-xl rounded-3xl p-12 border border-teal-700 shadow-2xl">
          <h3 className="text-3xl font-black text-black text-center mb-12">
            <span className="text-transparent bg-clip-text bg-teal-700 ">
              Our Premium Impact in Numbers
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 ">
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-teal-700 group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-teal-700 to-green-700 rounded-full animate-pulse border border-teal-700" />
              </div>
              <div className="text-black font-bold mt-3 text-lg">Premium Success Rate</div>
              <div className="text-black text-sm mt-1">Students scoring 90+</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-teal-700  group-hover:scale-110 transition-transform duration-300">25</div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-teal-700 to-green-500 rounded-full animate-pulse border border-teal-700" />
              </div>
              <div className="text-black font-bold mt-3 text-lg">Premium Missions</div>
              <div className="text-black text-sm mt-1">Complete syllabus coverage</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-teal-700 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-teal-700 to-green-500 rounded-full animate-pulse border border-teal-700" />
              </div>
              <div className="text-black font-bold mt-3 text-lg">Premium AI Support</div>
              <div className="text-black text-sm mt-1">Always available</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-teal-700 group-hover:scale-110 transition-transform duration-300">10K+</div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-b from-teal-700 to-green-500 rounded-full animate-pulse border bg-gradient-to-b from-teal-700 to-green-500" />
              </div>
              <div className="text-black font-bold mt-3 text-lg">Premium Students</div>
              <div className="text-black text-sm mt-1">And growing daily</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
