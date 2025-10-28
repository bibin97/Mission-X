import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function useScroll3D(entryClass = ".auto-3d-scroll-card") {
  useEffect(() => {
    gsap.utils.toArray(entryClass).forEach((card, i) => {
      gsap.fromTo(
        card,
        { rotateY: i % 2 === 0 ? -40 : 40, opacity: 0, y: 50 },
        {
          rotateY: 0,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
    return () => ScrollTrigger.getAll().forEach(tr => tr.kill());
  }, [entryClass]);
}
export {useScroll3D}