// src/components/Missions.jsx
import React, { useRef } from "react";
import SlideButton from "../Components/Slidebutton";
import PaperCurlMouseCard from "../Components/Musetilt"; // NOTE: Use new improved version!

const missions = [
  { 
    id: 1, 
    name: "Mission 1: Algebra Core", 
    detail: "Master linear equations, polynomials, and factorization with step-by-step guidance.",
    progress: 100,
    difficulty: "Beginner",
    duration: "2-3 days",
    topics: ["Linear Equations", "Polynomials", "Factorization"],
    gradient: "from-teal-700 to-green-500",
    icon: "📐"
  },
  { 
    id: 2, 
    name: "Mission 2: Geometry Mastery", 
    detail: "Conquer triangles, circles, constructions and proofs with visual learning.",
    progress: 100,
    difficulty: "Intermediate",
    duration: "3-4 days",
    topics: ["Triangles", "Circles", "Constructions", "Proofs"],
    gradient: "from-teal-700 to-green-500",
    icon: "📏"
  },
  { 
    id: 3, 
    name: "Mission 3: Trigonometry Focus", 
    detail: "Master ratios, identities, and real-world applications of trigonometry.",
    progress: 100,
    difficulty: "Advanced",
    duration: "4-5 days",
    topics: ["Ratios", "Identities", "Applications"],
    gradient: "from-teal-700 to-green-500",
    icon: "📊"
  },
];

export default function Missions() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} id="missions" className="relative py-32 ">
      <div className="relative mx-auto max-w-7xl px-4">
        <h1 className="text-4xl font-extrabold mt-2 p-5 text-center">Mission X Missions</h1>
        <div className="text-center mb-20">
          
        </div>

        {/* Mission Cards Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-20 items-stretch">
          {missions.map((mission) => (
            <PaperCurlMouseCard
              key={mission.id}
              maxTilt={18}
              maxSkew={11}
              scale={1.07}
              bounce={0.23}
              friction={0.23}
              className="mission-card group relative bg-white backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 bg-white p-5"
            >
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-700 to-gray-600">
                <div
                  className={`h-full bg-gradient-to-r ${mission.gradient} transition-all duration-1000 ease-out shadow-lg`}
                  style={{ width: `${mission.progress}%` }}
                />
                <div className="absolute top-0 right-0 w-2 h-2 bg-teal-500 rounded-full shadow-lg" />
              </div>
              
              {/* Difficulty Badge */}
              <div className="absolute top-6 right-6">
                <span
                  className={`px-4 py-2 rounded-2xl text-sm font-bold border-2 ${
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

              {/* Card Content */}
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex items-center gap-6 mb-6 cursor-pointer">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${mission.gradient} flex items-center justify-center shadow-2xl border-2 border-white/20`}
                  >
                    <span className="text-3xl transition-transform duration-300">
                      {mission.icon}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-black transition-colors duration-500">
                  {mission.name}
                </h3>
                <p className="text-black text-lg font-medium">
                  {mission.duration}
                </p>
                <p className="text-black leading-relaxed mb-8 text-lg font-medium">
                  {mission.detail}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-bold text-black mb-4">Key Topics:</h4>
                  <div className="flex flex-wrap gap-3">
                    {mission.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white text-black rounded-xl text-sm font-semibold border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-black">Progress</span>
                    <span className="text-lg text-black font-bold">{mission.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 border-2 border-gray-600">
                    <div
                      className={`h-full bg-gradient-to-r ${mission.gradient} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{ width: `${mission.progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-auto">
                  
                    <span className="flex items-center justify-center gap-2 w-full shadow-2xl  transform  transition-all duration-500 text-lg px-8 py-4 rounded-full border border-black bg-black text-white">
                      {mission.progress === 100 ? (
                        <>
                          <span className="text-2xl"></span>
                          Completed
                        </>
                      ) : (
                        <>
                          <span className="text-2xl"></span>
                          Start Mission
                        </>
                      )}
                    </span>
                  
                </div>
              </div>

              {/* Glow Effects */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-teal-700 to-green-500 rounded-full blur-2xl opacity-0 transition-opacity duration-700" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-teal-700 to-green-500 rounded-full blur-xl opacity-0 transition-opacity duration-700" />
            </PaperCurlMouseCard>
          ))}
        </div>

        {/* ... any summary or extra code ... */}
      </div>
    </section>
  );
}
