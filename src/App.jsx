// src/App.jsx
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import Features from "./Pages/Features";
import Missions from "./Pages/Missions";
import Testimonials from "./Pages/Testimonials";
import CTA from "./Components/Cta";
import Footer from "./Components/Footer";

// --- Optimized Cursor Gradient Effect ---
function CursorTrailGradient() {
  const dot = useRef();
  const trail = useRef();
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef({ x: mouse.current.x, y: mouse.current.y });
  const rafId = useRef();

  useEffect(() => {
    let isMoving = false;
    let timeout;

    const handleMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      isMoving = true;
      clearTimeout(timeout);

      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      timeout = setTimeout(() => {
        isMoving = false;
        if (rafId.current) {
          cancelAnimationFrame(rafId.current);
          rafId.current = null;
        }
      }, 80);

      if (!rafId.current) {
        animate();
      }
    };

    const animate = () => {
      if (!isMoving) return;
      pos.current.x += (mouse.current.x - pos.current.x) * 0.18;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.18;
      if (trail.current) {
        trail.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed z-[90] left-0 top-0 w-1.5 h-1.5 rounded-full bg-teal-400"
        style={{ willChange: "transform", backfaceVisibility: "hidden" }}
      />
      <div
        ref={trail}
        className="pointer-events-none fixed z-[20] left-0 top-0 w-10 h-10 rounded-full"
        style={{
          background: "radial-gradient(circle, #0d948880 0%, transparent 75%)",
          filter: "blur(7px)",
          opacity: 0.32,
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      />
    </>
  );
}

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function App() {
  const app = useRef(null);

  useGSAP(() => {
    // Reveal animations
    const revealElements = gsap.utils.toArray(".reveal");
    if (revealElements.length) {
      gsap.set(revealElements, { opacity: 0, y: 60 });
      ScrollTrigger.batch(".reveal", {
        onEnter: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            stagger: 0.15,
            overwrite: "auto",
          });
        },
        start: "top 85%",
        once: true,
      });
    }
    // Scroll Progress Bar
    const progressBar = document.querySelector(".scroll-progress");
    if (progressBar) {
      gsap.to(progressBar, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.25,
        },
      });
    }
    // GSAP global config for smoother rendering
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });
    ScrollTrigger.config({
      limitCallbacks: true,
    });
  }, { scope: app });

  // GSAP anchor smooth scroll
  useEffect(() => {
    const handler = (e) => {
      const anchor = e.target.closest("a[href^='#']");
      if (
        anchor &&
        anchor.getAttribute("href") &&
        anchor.getAttribute("href").startsWith("#")
      ) {
        const href = anchor.getAttribute("href");
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navHeight = 90; // Adjust for your navbar!
          const y = target.getBoundingClientRect().top + window.scrollY - navHeight;
          gsap.to(window, { scrollTo: y, duration: 1, ease: "power2.inOut" });
        }
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div
      ref={app}
      className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-black overflow-x-hidden font-poppins"
    >
      {/* Custom cursor pointer and sliding gradient (optimized and low lag) */}
      <CursorTrailGradient />

      {/* Scroll Progress Indicator */}
      <div
        className="scroll-progress fixed top-0 left-0 h-1 bg-gradient-to-r from-teal-400 to-green-400 z-[9999] origin-left"
        style={{ width: "100%", transform: "scaleX(0)" }}
      />

      {/* Premium Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 ">
        <Hero />
        <Features />
        <Missions />
        <Testimonials />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
