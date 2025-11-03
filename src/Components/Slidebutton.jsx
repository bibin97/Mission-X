// Slidebutton.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function SlideButton({
  as = "button",
  href,
  children,
  className = "",
  fillColor = "linear-gradient(135deg,#0d9488, #10b981)",
  baseBg = "#111827",
  baseText = "#fff",
  hoverText = "#000",
}) {
  const Comp = as;
  const root = useRef(null);
  const fill = useRef(null);
  const label = useRef(null);
  const tlRef = useRef(null);

  useGSAP(() => {
    if (!fill.current) return;
    gsap.set(fill.current, { x: "-100%" });
    const tl = gsap.timeline({ paused: true, defaults: { ease: "power4.out" } });
    tl.to(fill.current, { x: "0%", duration: 0.36 }, 0).to(label.current, { color: hoverText, duration: 0.18 }, 0.05);
    tlRef.current = tl;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 font-semibold shadow transition-transform duration-200 ${className}`}
      style={{ background: baseBg, color: baseText, minWidth: 140 }}
    >
      <span ref={label} className="relative z-10">{children}</span>
      <span ref={fill} aria-hidden="true" className="absolute inset-0 z-0" style={{ background: fillColor, filter: "blur(2px)" }} />
    </Comp>
  );
}
