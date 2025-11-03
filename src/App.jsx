// src/App.jsx
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import Features from "./Pages/Features";
import Missions from "./Pages/Missions";
import Testimonials from "./Pages/Testimonials";
import CTA from "./Components/Cta";
import Footer from "./Components/Footer";
import ParticleCursor from "./Components/Particlescursor"; // ✅ Proper import
export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-200 to bg-gray-400 text-black antialiased overflow-x-hidden">
      {/* Layered background cursor */}
      <ParticleCursor />

      {/* Fixed navbar always on top */}
      <Navbar />

      <main className="pt-10"> {/* Space for fixed navbar */}
        
            <Hero />
            <Features />
            <Missions />
            <Testimonials />
            <CTA />
      </main>

      {/* === Footer === */}
      <Footer />
    </div>
  );
}
