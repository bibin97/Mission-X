import React, { useRef, useEffect } from "react";

export default function CursorTrailGradient() {
  const trailRef = useRef();

  useEffect(() => {
    const move = (e) => {
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={trailRef}
      className="pointer-events-none fixed z-[9999]"
      style={{
        left: 0,
        top: 0,
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "radial-gradient(circle, #134e4a 40%, #0d9488 90%, transparent 100%)",
        boxShadow: "0 0 32px 10px #0d948899",
        mixBlendMode: "lighten",
        opacity: 0.8,
        pointerEvents: "none"
      }}
    />
  );
}
