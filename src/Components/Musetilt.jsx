import { useRef, useEffect } from "react";

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

export default function PaperCurlMouseCard({
  children,
  className = "",
  maxTilt = 16,
  maxSkew = 10,      // Maximum skew, like a curl!
  scale = 1.05,
  bounce = 0.22,
  friction = 0.83,
  perspective = 900,
}) {
  const cardRef = useRef(null);
  const frame = useRef();
  const target = useRef({ x: 0, y: 0, sx: 0, sy: 0 });
  const velocity = useRef({ x: 0, y: 0, sx: 0, sy: 0 });
  const current = useRef({ x: 0, y: 0, sx: 0, sy: 0 });

  const animate = () => {
    ["x", "y", "sx", "sy"].forEach(axis => {
      const force = (target.current[axis] - current.current[axis]) * bounce;
      velocity.current[axis] = (velocity.current[axis] + force) * friction;
      current.current[axis] += velocity.current[axis];
      // Clamp tilt/skew for realism
      if (["x", "y"].includes(axis)) current.current[axis] = clamp(current.current[axis], -maxTilt, maxTilt);
      if (["sx", "sy"].includes(axis)) current.current[axis] = clamp(current.current[axis], -maxSkew, maxSkew);
    });

    const card = cardRef.current;
    if (card) {
      card.style.transform = `
        perspective(${perspective}px)
        rotateX(${current.current.x}deg)
        rotateY(${current.current.y}deg)
        skewX(${current.current.sy}deg)
        skewY(${current.current.sx}deg)
        scale(${scale})
      `;
    }
    frame.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Normalized fractions [-1,1]
    const fracX = (x - centerX) / centerX;
    const fracY = (y - centerY) / centerY;

    target.current.x = fracY * maxTilt;
    target.current.y = -fracX * maxTilt;
    // Skew increases near edges for curl
    target.current.sx = fracX * maxSkew;
    target.current.sy = fracY * maxSkew;
  };

  const handleMouseLeave = () => {
    target.current = { x: 0, y: 0, sx: 0, sy: 0 };
  };

  useEffect(() => {
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`will-change-transform transition-transform duration-150 ${className}`}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {children}
    </div>
  );
}
