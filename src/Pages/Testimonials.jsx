import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PaperCurlMouseCard from "../Components/Musetilt"; // <-- Use your paper curl component!

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".testimonial-card", {
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: false
      }
    });
    gsap.from(".testimonial-title", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });
  }, { scope: sectionRef });

  const testimonials = [
    {
      id: 1,
      rating: 5,
      content: "Mission X took me from struggling with math to scoring a 95+! The AI mentor made every topic feel easy.",
      achievement: "Top Scorer",
      avatar: "👩‍🎓",
      author: "Arushi Singh",
      role: "Student, CBSE",
    },
    {
      id: 2,
      rating: 5,
      content: "The animated lessons and step-by-step missions kept me motivated. I understood concepts faster than ever before.",
      achievement: "Confidence Booster",
      avatar: "👨‍🏫",
      author: "Mr. Kumar",
      role: "Math Teacher",
    },
    {
      id: 3,
      rating: 4,
      content: "From algebra to geometry, the missions are perfectly crafted. The WhatsApp community helped me stay on track.",
      achievement: "Full Syllabus Completion",
      avatar: "👩‍💻",
      author: "Priya Verma",
      role: "NEET Aspirant",
    },
    {
      id: 4,
      rating: 5,
      content: "Loved the quick answers and instant help from the premium AI mentor. Highly recommended for all learners!",
      achievement: "Fastest Doubt Solving",
      avatar: "🧑‍🎓",
      author: "Rohit Sharma",
      role: "High School Student",
    },
    {
      id: 5,
      rating: 4,
      content: "The interactive cards and real progress bars made math fun. I actually look forward to new missions!",
      achievement: "Enjoyed Learning",
      avatar: "👧",
      author: "Mehak Bansal",
      role: "Parent",
    },
    {
      id: 6,
      rating: 5,
      content: "I improved my math score by 20 points in just one month. These missions are a game changer!",
      achievement: "Rapid Improvement",
      avatar: "👨‍💼",
      author: "Aditya Menon",
      role: "Engineering Prep",
    },
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 text-black">
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-teal-700 rounded-full animate-pulse" />
            Trusted by 10,000+ Students
          </div>
          <h2 className="testimonial-title text-4xl md:text-6xl font-black">
            <span className="text-transparent bg-clip-text bg-teal-700">
              What Parents and Students
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-teal-700">
              Say About Mission X
            </span>
          </h2>
          <p className="mt-6 text-lg text-black max-w-3xl mx-auto">
            Real stories from real students and parents who transformed their learning journey with Mission X.
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <PaperCurlMouseCard
                          key={testimonials.id}
                          maxTilt={18}
                          maxSkew={11}
                          scale={1.07}
                          bounce={0.23}
                          friction={0.83}
                          className="mission-card group relative bg-white backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 bg-white p-5"
                        >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }, (_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <blockquote className="text-black leading-relaxed mb-6 italic">
                “{t.content}”
              </blockquote>
              <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold mb-4 border border-teal-400/30">
                🏆 {t.achievement}
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-700 to-green-700 rounded-full flex items-center justify-center text-2xl shadow-lg border border-teal-400/30">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{t.author}</h4>
                  <p className="text-black text-sm">{t.role}</p>
                </div>
              </div>
            </PaperCurlMouseCard>
          ))}
        </div>
        {/* Stats */}
        <div className="bg-white backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-teal-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["10,000+", "Happy Students", "And counting"],
              ["4.9/5", "Average Rating", "Based on 2,500+ reviews"],
              ["95%", "Success Rate", "Students scoring 90+"],
              ["25", "Days Average", "To complete syllabus"]
            ].map(([num, label, sub], i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-teal-700">{num}</div>
                <div className="text-black font-semibold mt-2">{label}</div>
                <div className="text-sm text-black mt-1">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
