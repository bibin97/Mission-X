import React, { useRef } from "react";
import PaperCurlMouseCard from "../Components/Mousetilt";

const missions = [
  {
    id: 1,
    name: "Mission 1: Algebra Core",
    detail:
      "Master linear equations, polynomials, and factorization with step-by-step guidance.",
    progress: 100,
    difficulty: "Beginner",
    duration: "2-3 days",
    topics: ["Linear Equations", "Polynomials", "Factorization"],
    gradient: "teal-700",
    icon: "📐",
  },
  {
    id: 2,
    name: "Mission 2: Geometry Mastery",
    detail:
      "Conquer triangles, circles, constructions and proofs with visual learning.",
    progress: 100,
    difficulty: "Intermediate",
    duration: "3-4 days",
    topics: ["Triangles", "Circles", "Constructions", "Proofs"],
    gradient: "teal-700",
    icon: "📏",
  },
  {
    id: 3,
    name: "Mission 3: Trigonometry Focus",
    detail:
      "Master ratios, identities, and real-world applications of trigonometry.",
    progress: 100,
    difficulty: "Advanced",
    duration: "4-5 days",
    topics: ["Ratios", "Identities", "Applications"],
    gradient: "teal-700",
    icon: "📊",
  },
];

export default function Missions() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="missions"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Responsive Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2 p-3 sm:p-5 text-center text-black">
          Mission X Missions
        </h1>
        <div className="text-center mb-12 sm:mb-16 md:mb-20"></div>

        {/* Mission Cards Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20 items-stretch">
          {missions.map((mission) => (
            <PaperCurlMouseCard
              key={mission.id}
              maxTilt={18}
              maxSkew={11}
              scale={1.07}
              bounce={0.23}
              friction={0.23}
              className="mission-card group relative bg-white backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-teal-700"
            >
              {/* Progress Bar - Top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 sm:h-2 bg-gradient-to-r from-teal-700 to-gray-600 rounded-t-2xl sm:rounded-t-3xl">
                <div
                  className={`h-full bg-gradient-to-r ${mission.gradient} transition-all duration-1000 ease-out shadow-lg`}
                  style={{ width: `${mission.progress}%` }}
                />
                <div className="absolute top-0 right-0 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-teal-500 rounded-full shadow-lg" />
              </div>

              {/* Difficulty Badge - Responsive */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                <span
                  className={`px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold border sm:border-2 ${
                    mission.difficulty === "Beginner"
                      ? "bg-green-500/20 text-teal-700 border-teal-700"
                      : mission.difficulty === "Intermediate"
                      ? "bg-green-500/20 text-teal-700 border-teal-700"
                      : "bg-green-500/20 text-teal-700 border-teal-700"
                  }`}
                >
                  {mission.difficulty}
                </span>
              </div>

              {/* Card Content - Responsive */}
              <div className="relative z-10 flex flex-col flex-grow">
                {/* Icon Section - Responsive */}
                <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6 cursor-pointer">
                  <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl bg-teal-700 flex items-center justify-center shadow-2xl border border-teal-600 transition-transform duration-300">
                    <span className="text-white text-2xl sm:text-3xl font-bold">
                      {mission.icon}
                    </span>
                  </div>
                </div>

                {/* Title and Duration - Responsive */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black transition-colors duration-500 mb-1 sm:mb-2">
                  {mission.name}
                </h3>
                <p className="text-black text-base sm:text-lg font-medium mb-2 sm:mb-3">
                  {mission.duration}
                </p>
                <p className="text-black leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base md:text-lg font-medium">
                  {mission.detail}
                </p>

                {/* Topics Section - Responsive */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">
                    Key Topics:
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {mission.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-white text-black rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress Section - Responsive */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <span className="text-base sm:text-lg font-bold text-black">
                      Progress
                    </span>
                    <span className="text-base sm:text-lg text-black font-bold">
                      {mission.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 border border-gray-600 sm:border-2">
                    <div
                      className={`h-full bg-gradient-to-r ${mission.gradient} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{ width: `${mission.progress}%` }}
                    />
                  </div>
                </div>

                {/* CTA Button - Responsive */}
                <div className="mt-auto">
                  <span className="flex items-center justify-center gap-2 w-full shadow-2xl transform transition-all duration-500 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full border border-teal-700 bg-teal-700 text-white hover:scale-105 cursor-pointer">
                    {mission.progress === 100 ? (
                      <>
                        <span className="text-xl sm:text-2xl">✓</span>
                        Completed
                      </>
                    ) : (
                      <>
                        <span className="text-xl sm:text-2xl"></span>
                        Start Mission
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Glow Effects - Hidden on mobile for performance */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-teal-700 to-green-500 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
              <div className="hidden sm:block absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-teal-700 to-green-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
            </PaperCurlMouseCard>
          ))}
        </div>
      </div>
    </section>
  );
}
