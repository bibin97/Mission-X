// src/Components/Animation.jsx
import { useEffect } from "react";
import gsap from "gsap";

/**
 * useScroll3D - responsive + SSR-safe scroll animation hook
 */
function useScroll3D(entryClass) {
  entryClass = entryClass || ".auto-3d-scroll-card";

  useEffect(function () {
    if (typeof window === "undefined") return;

    let mm = null;
    let ScrollTriggerLocal = null;

    (async function loadPlugin() {
      try {
        const mod = await import("gsap/ScrollTrigger");
        ScrollTriggerLocal = (mod && (mod.ScrollTrigger || mod.default || mod)) || null;

        try {
          if (ScrollTriggerLocal && (!gsap || !gsap.plugins || !gsap.plugins.ScrollTrigger)) {
            gsap.registerPlugin(ScrollTriggerLocal);
          }
        } catch (regErr) {
          console.warn("GSAP plugin registration issue:", regErr?.message || regErr);
        }

        // make available globally (optional)
        if (typeof window !== "undefined" && ScrollTriggerLocal) {
          window.ScrollTrigger = window.ScrollTrigger || ScrollTriggerLocal;
        }

        startMatchMedia();
      } catch (err) {
        console.error("Failed to import ScrollTrigger:", err?.message || err);
      }
    })();

    function startMatchMedia() {
      // handle reduced motion
      try {
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          const cards = gsap.utils?.toArray(entryClass) || [];
          cards.forEach((c) => gsap.set(c, { rotateY: 0, opacity: 1, y: 0 }));
          return;
        }
      } catch (err) {
        console.warn("Reduced-motion handling error:", err);
      }

      try {
        mm = gsap.matchMedia();
      } catch (err) {
        console.warn("matchMedia creation failed:", err);
        mm = null;
      }

      if (!mm) {
        setupAnimationsFallback();
        return;
      }

      try {
        mm.add(
          {
            isDesktop: "(min-width: 1024px)",
            isTablet: "(min-width: 640px) and (max-width: 1023px)",
            isMobile: "(max-width: 639px)",
          },
          function (context) {
            const cond = context && context.conditions ? context.conditions : {};
            const isDesktop = !!cond.isDesktop;
            const isTablet = !!cond.isTablet;
            const isMobile = !!cond.isMobile;

            const maxRotate = isMobile ? 20 : isTablet ? 30 : 40;
            const yOffset = isMobile ? 30 : isTablet ? 40 : 50;
            const dur = isMobile ? 0.8 : 1.0;
            const start = isMobile ? "top 92%" : isTablet ? "top 88%" : "top 85%";

            const cards = gsap.utils?.toArray(entryClass) || [];
            cards.forEach((card, i) => {
              try {
                gsap.set(card, { transformStyle: "preserve-3d", backfaceVisibility: "hidden" });
                gsap.fromTo(
                  card,
                  { rotateY: i % 2 === 0 ? -maxRotate : maxRotate, opacity: 0, y: yOffset },
                  {
                    rotateY: 0,
                    opacity: 1,
                    y: 0,
                    duration: dur,
                    ease: "power3.out",
                    scrollTrigger: {
                      trigger: card,
                      start,
                      toggleActions: "play none none reverse",
                    },
                  }
                );
              } catch (animErr) {
                console.warn("Animation error:", animErr?.message || animErr);
              }
            });

            // cleanup for this media context
            return function cleanupContext() {
              try {
                const triggers =
                  (ScrollTriggerLocal && typeof ScrollTriggerLocal.getAll === "function"
                    ? ScrollTriggerLocal.getAll()
                    : window.ScrollTrigger?.getAll?.()) || [];
                triggers.forEach((t) => {
                  try {
                    t?.kill?.();
                  } catch (e) {
                    console.warn("Cleanup trigger kill failed:", e);
                  }
                });
              } catch (e) {
                console.warn("Cleanup context error:", e);
              }
            };
          }
        );
      } catch (err) {
        console.warn("matchMedia add failed:", err);
        setupAnimationsFallback();
      }
    }

    function setupAnimationsFallback() {
      try {
        const cards = gsap.utils?.toArray(entryClass) || [];
        cards.forEach((card, i) => {
          gsap.set(card, { transformStyle: "preserve-3d", backfaceVisibility: "hidden" });
          gsap.fromTo(
            card,
            { rotateY: i % 2 === 0 ? -30 : 30, opacity: 0, y: 40 },
            { rotateY: 0, opacity: 1, y: 0, duration: 1, ease: "power3.out" }
          );
        });
      } catch (err) {
        console.warn("Fallback animation error:", err);
      }
    }

    // cleanup on unmount
    return function cleanup() {
      try {
        const triggers =
          (ScrollTriggerLocal && typeof ScrollTriggerLocal.getAll === "function"
            ? ScrollTriggerLocal.getAll()
            : window.ScrollTrigger?.getAll?.()) || [];
        triggers.forEach((t) => {
          try {
            t?.kill?.();
          } catch (e) {
            console.warn("Cleanup kill error:", e);
          }
        });
      } catch (err) {
        console.warn("Global cleanup error:", err);
      }

      try {
        if (mm && typeof mm.revert === "function") mm.revert();
      } catch (err) {
        console.warn("MatchMedia revert error:", err);
      }
    };
  }, [entryClass]);
}

export default useScroll3D;
export { useScroll3D };
