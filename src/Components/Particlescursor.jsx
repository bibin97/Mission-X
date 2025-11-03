// src/components/ParticleCursor.jsx
import React, { useRef, useEffect } from "react";

export default function ParticleCursor({
  size = 28,
  color1 = "#0f766e",   // Tailwind teal-700 (new primary color)
  color2 = "#0d9488",   // Tailwind teal-600
  color3 = "#14b8a6",   // Tailwind teal-500 (for subtle outer blend)
  blur = 35,
  trailLength = 0.18,   // 0.1–0.3 for smoothness
  opacity = 0.85,
}) {
  const trailRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  // Smooth cursor animation (linear interpolation)
  const lerp = (a, b, n) => (1 - n) * a + n * b;

  useEffect(() => {
    let frame;
    const update = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, trailLength);
      pos.current.y = lerp(pos.current.y, target.current.y, trailLength);
      const cursor = trailRef.current;
      if (cursor) {
        cursor.style.transform = `translate3d(${pos.current.x - size / 2}px, ${pos.current.y - size / 2}px, 0)`;
      }
      frame = requestAnimationFrame(update);
    };

    const move = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);
    frame = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, [trailLength, size]);

  // Hide cursor effect on touch devices
  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch && trailRef.current) {
      trailRef.current.style.display = "none";
    }
  }, []);

  return (
    <div
      ref={trailRef}
      className="pointer-events-none fixed z-[9999]"
      style={{
        left: 0,
        top: 0,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color1} 25%, ${color2} 60%, ${color3} 90%)`,
        boxShadow: `
          0 0 ${blur}px ${blur / 2}px ${color1}55,
          0 0 ${blur * 1.2}px ${blur / 1.5}px ${color2}55
        `,
        mixBlendMode: "lighten",
        opacity: opacity,
        transform: "translate3d(-50%, -50%, 0)",
        transition: "transform 0.15s ease-out",
      }}
    />
  );
}
