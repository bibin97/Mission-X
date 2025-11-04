import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PaperCurlMouseCard from "../Components/Mousetilt";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      content:
        "Mission X took me from struggling with math to scoring 95+! The AI mentor made every topic simple and fun.",
      achievement: "Top Scorer",
      avatar: "👩‍🎓",
      author: "Arushi Singh",
      role: "Student, CBSE",
    },
    {
      id: 2,
      rating: 5,
      content:
        "The missions helped me gain confidence faster than any book. The visuals were next level!",
      achievement: "Confidence Booster",
      avatar: "👨‍🏫",
      author: "Mr. Kumar",
      role: "Math Teacher",
    },
    {
      id: 3,
      rating: 4,
      content:
        "From algebra to geometry, the content is perfect. The WhatsApp community keeps you on track.",
      achievement: "Full Syllabus Completion",
      avatar: "👩‍💻",
      author: "Priya Verma",
      role: "NEET Aspirant",
    },
    {
      id: 4,
      rating: 5,
      content:
        "I love the instant answers from the premium AI mentor. Super easy to learn!",
      achievement: "Fastest Doubt Solving",
      avatar: "🧑‍🎓",
      author: "Rohit Sharma",
      role: "High School Student",
    },
    {
      id: 5,
      rating: 4,
      content:
        "The interactive cards made learning math so fun! My child actually enjoys practice time.",
      achievement: "Parent Approved",
      avatar: "👧",
      author: "Mehak Bansal",
      role: "Parent",
    },
    {
      id: 6,
      rating: 5,
      content:
        "I improved my math score by 20 points in one month. The missions are game changers!",
      achievement: "Rapid Improvement",
      avatar: "👨‍💼",
      author: "Aditya Menon",
      role: "Engineering Prep",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".testimonial-card");
      gsap.set(cards, { opacity: 1, y: 0 });
      gsap.from(cards, {
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative z-10 text-black py-20 sm:py-28 md:py-32 overflow-hidden overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Section Header === */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm sm:text-base font-semibold mb-4">
            <span className="w-2 h-2 bg-teal-700 rounded-full animate-pulse" />
            Trusted by 10,000+ Students
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-green-600 mb-3 leading-tight">
            What Students & Parents Say
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Real reviews from learners who improved their confidence and results
            through Mission X.
          </p>
        </div>

        {/* === Testimonials Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-24 sm:mb-32">
          {testimonials.map((t) => (
            <PaperCurlMouseCard
              key={t.id}
              maxTilt={16}
              maxSkew={8}
              scale={1.03}
              bounce={0.25}
              friction={0.85}
            >
              <article className="testimonial-card bg-white border border-teal-700 rounded-2xl shadow-xl hover:shadow-2xl p-6 sm:p-8 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400 text-base sm:text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="text-xs sm:text-sm px-3 py-1 bg-teal-50 text-teal-700 rounded-full font-semibold border border-teal-700">
                      🏆 {t.achievement}
                    </div>
                  </div>

                  <blockquote className="text-gray-900 italic text-sm sm:text-base md:text-lg leading-relaxed mb-5">
                    “{t.content}”
                  </blockquote>
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-md bg-gradient-to-r from-teal-700 to-green-600 border border-teal-200">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">{t.author}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{t.role}</p>
                  </div>
                </div>
              </article>
            </PaperCurlMouseCard>
          ))}
        </div>

        {/* === Stats Section === */}
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="rounded-3xl border border-teal-700 p-4 sm:p-6 md:p-10 text-center shadow-lg bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
              {[
                { num: "10,000+", label: "Happy Students", sub: "and counting" },
                { num: "4.9/5", label: "Average Rating", sub: "from 2,000+ reviews" },
                { num: "95%", label: "Success Rate", sub: "scored 90+ consistently" },
                { num: "25", label: "Avg Days", sub: "to complete syllabus" },
              ].map((d, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-green-600 leading-tight mb-2 sm:mb-3">
                    {d.num}
                  </div>
                  <div className="font-semibold text-black text-sm sm:text-base md:text-lg leading-snug mb-1">
                    {d.label}
                  </div>
                  <div className="text-black text-xs sm:text-sm md:text-base leading-snug">
                    {d.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
