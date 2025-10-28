import React, { useRef,  } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



export default function SlideButton({
  as = "button",
  href,
  children = "Click me",
  className = "",
  fillColor = "linear-gradient(135deg, #0d9488 0%, #10b981 100%)",
  baseBg = "#111827",
  baseText = "#fff",
  hoverText = "#0d9488",
  
}) {
  const Comp = as;
  const root = useRef(null);
  const fill = useRef(null);
  const label = useRef(null);
  const tlRef = useRef(null);

  useGSAP(() => {
    gsap.set(fill.current, { x: "-100%" }); // Start fill hidden left
    const tl = gsap.timeline({ paused: true, defaults: { ease: "power4.out" } });
    tl.to(fill.current, { x: "0%", duration: 0.33 }, 0)
      .to(label.current, { color: hoverText, duration: 0.18 }, 0.05);
    tlRef.current = tl;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      tl.progress(1).pause(0);
    }
  }, { scope: root });

  return (
    <Comp
      ref={root}
      href={as === "a" ? href : undefined}
      onMouseEnter={() => tlRef.current?.play()}
      onMouseLeave={() => tlRef.current?.reverse()}
      onFocus={() => tlRef.current?.play()}
      onBlur={() => tlRef.current?.reverse()}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-8 py-4 font-bold shadow-2xl border border-yellow-400/40 text-lg transition-all duration-500 hover:scale-110 ${className}`}
      style={{ background: baseBg, color: baseText, cursor: "pointer" }}
     
    >
      {/* Label above (z-10) */}
      <span ref={label} className="relative z-10 transition-colors">{children}</span>
      {/* Sliding fill gradient below label */}
      <span
        ref={fill}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: fillColor,
          filter: "blur(2px)",
          transition: "background 0.4s",
        }}
      />
    </Comp>
  );
}
