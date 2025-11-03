// src/components/Features.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PaperCurlMouseCard from "../Components/Mousetilt";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    icon: "🚀",
    title: "25 Structured Missions",
    desc: "Clear chapter sets with measurable progress and momentum tracking.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    icon: "🤖",
    title: "AI Mentor 24×7",
    desc: "Instant answers and guided solutions whenever you're stuck.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    icon: "🧑‍🏫",
    title: "Expert Mentor Support",
    desc: "Personal guidance to deepen understanding at tough moments.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    icon: "🎯",
    title: "CBSE Exam Challenges",
    desc: "CBSE-aligned challenges to sharpen your exam skills.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
  },
  {
    icon: "🎁",
    title: "Exclusive Member Perks",
    desc: "Daily tips, early access, and special launch rewards.",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50",
  },
  {
    icon: "🌐",
    title: "Active Learning Community",
    desc: "Ask doubts in Maths, Science, and English for quick help.",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-teal-50 to-purple-50",
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll(".feature-card");
      const title = sectionRef.current.querySelector(".feature-title");

      gsap.set(cards, { opacity: 1, visibility: "visible" });
      gsap.set(title, { opacity: 1, visibility: "visible" });

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
        },
      });

      gsap.from(title, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      setTimeout(() => ScrollTrigger.refresh(), 100);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-[clamp(3rem,6vw,8rem)] overflow-hidden"
    >
      {/* Floating Background Decorations */}
      <div className="absolute inset-0 opacity-10 sm:opacity-20">
        <div className="absolute top-[10%] left-[8%] w-10 sm:w-16 lg:w-24 h-10 sm:h-16 lg:h-24 bg-gradient-to-r from-teal-700 to-green-700 rotate-45 border border-teal-700 **:animate-float" />
        <div
          className="absolute top-[25%] right-[8%] w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-gradient-to-r from-teal-700 to-green-700 rotate-12 border border-teal-700 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-[10%] left-[10%] w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-gradient-to-r from-teal-700 to-green-700 rotate-45 border border-teal-700 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-[clamp(2rem,4vw,4.5rem)]">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-teal-700 text-white text-[clamp(0.9rem,1vw,1.1rem)] font-bold mb-6 border border-teal-700 shadow-xl">
            <div className="w-3 sm:w-4 h-3 sm:h-4 bg-yellow-500 rounded-full animate-pulse border border-teal-700" />
            Premium Learning Ecosystem
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full animate-ping border border-teal-700" />
          </div>

          <h2 className="feature-title font-black tracking-tight text-[clamp(2rem,5vw,4rem)] leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-600 drop-shadow-xl">
            Why Students Choose Mission X
          </h2>

          <p className="mt-5 text-[clamp(1rem,1.5vw,1.4rem)] text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium">
            Experience the{" "}
            <span className="text-transparent bg-clip-text bg-teal-700 font-bold">
              premium future of education
            </span>{" "}
            with our platform designed to{" "}
            <span className="text-transparent bg-clip-text bg-teal-700 font-bold">
              maximize your potential
            </span>{" "}
            and accelerate your success.
          </p>
        </div>

        {/* Features Grid */}
       {/* Features Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(1rem,2vw,3rem)]">
  {items.map((item) => (
    <PaperCurlMouseCard
      key={item.title}
      maxTilt={15}
      maxSkew={10}
      scale={1.05}
      bounce={0.22}
      friction={0.8}
    >
      <div className="feature-card relative bg-white rounded-[1.25rem] shadow-2xl hover:shadow-3xl transition-all duration-700 p-[clamp(1rem,3vw,2.5rem)] hover:scale-[1.03] border border-teal-300/20">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
        />
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            {/* ✅ Changed icon background to teal-700 */}
            <div
              className="inline-flex items-center justify-center w-[clamp(3.5rem,5vw,5rem)] h-[clamp(3.5rem,5vw,5rem)] rounded-2xl bg-teal-700 shadow-xl mb-5 transition-transform duration-500 border border-teal-600"
            >
              <span className="text-white text-[clamp(1.6rem,3vw,2.2rem)]">
                {item.icon}
              </span>
            </div>
            <h3 className="text-[clamp(1.1rem,1.7vw,1.5rem)] font-extrabold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-[clamp(0.9rem,1.2vw,1.1rem)] text-gray-700 leading-relaxed font-medium">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    </PaperCurlMouseCard>
  ))}
</div>


        {/* Stats Section */}
        <div className="my-[clamp(4rem,8vw,8rem)] bg-white/90 backdrop-blur-xl rounded-3xl p-[clamp(1.5rem,4vw,3rem)] border border-teal-700/30 shadow-2xl gap-20">

          <h3 className="text-center text-[clamp(1.5rem,2.5vw,2rem)] font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-green-600 mb-[clamp(1.5rem,3vw,2.5rem)]">
            Our Premium Impact in Numbers
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[clamp(1rem,2vw,2.5rem)]">
            {[
              { stat: "95%", label: "Premium Success Rate", sub: "Students scoring 90+" },
              { stat: "25", label: "Premium Missions", sub: "Complete syllabus coverage" },
              { stat: "24/7", label: "Premium AI Support", sub: "Always available" },
              { stat: "10K+", label: "Premium Students", sub: "And growing daily" },
            ].map((data) => (
              <div key={data.stat} className="text-center group">
                <div className="text-[clamp(1.8rem,4vw,3rem)] font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-green-600 group-hover:scale-110 transition-transform duration-300">
                  {data.stat}
                </div>
                <div className="text-gray-900 font-semibold mt-1 text-[clamp(0.9rem,1.3vw,1.1rem)]">
                  {data.label}
                </div>
                <div className="text-gray-700 mt-1 text-[clamp(0.7rem,1vw,0.9rem)]">
                  {data.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
