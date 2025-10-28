import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SlideButton from "../Components/Slidebutton";

export default function CTA() {
  const sectionRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useGSAP(() => {
    gsap.from(".cta-title", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    });

    gsap.from(".cta-content", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    });

    gsap.from(".cta-buttons", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    });

    gsap.from(".cta-timer", {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      delay: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    });
  }, { scope: sectionRef });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }; // Reset for demo
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} id="join" className="relative py-32  overflow-hidden">
      {/* Premium Black Background */}
      {/* <div className="absolute inset-0 " />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,118,110,0.05),transparent_50%)]" /> */}
      
      {/* Premium Luxury Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-full blur-2xl transform rotate-45 animate-float border border-yellow-300/30" />
        <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-full blur-xl transform rotate-12 animate-float border border-amber-300/30" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-32 w-48 h-48 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-full blur-3xl transform rotate-45 animate-float border border-yellow-400/30" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-r from-amber-500/20 to-yellow-600/20 rounded-full blur-2xl transform rotate-12 animate-float border border-amber-400/30" style={{animationDelay: '3s'}} />
      </div>
      
      {/* Premium Floating Luxury Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gradient-to-r from-teal-700 to-green-500 rounded-full animate-ping shadow-lg border border-yellow-300/30" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gradient-to-r from-teal-400 to-yellow-500 rounded-full animate-ping shadow-lg border border-amber-300/30" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full animate-ping shadow-lg border border-yellow-400/30" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full animate-ping shadow-lg border border-amber-400/30" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-3/4 left-1/2 w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-ping shadow-lg border border-yellow-300/30" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="cta-content bg-white backdrop-blur-2xl rounded-3xl p-12 md:p-16 text-center border border-teal-700 shadow-3xl">
          {/* Premium Luxury Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-black backdrop-blur-xl border border-teal-700 text-white text-lg font-bold mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
            <div className="w-4 h-4  rounded-full animate-ping shadow-lg border border-teal-700" />
            <span className="text-2xl"></span>
            <span>Premium Limited Time Offer</span>
            <div className="w-3 h-3 bg-gradient-to-r from-teal-700 to-green-600 rounded-full animate-ping border border-black-300/30" />
          </div>

          <h2 className="cta-title text-5xl md:text-7xl font-black tracking-tight text-black mb-8">
            <span className="block text-transparent bg-clip-text bg-teal-700 drop-shadow-2xl">
              Ready to Transform Your
            </span>
            <span className="block text-transparent bg-clip-text bg-teal-700 drop-shadow-2xl">
              Math Journey?
            </span>
          </h2>

          <p className="cta-content text-2xl text-black mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
            Join thousands of students who are already achieving <span className="text-teal-700 font-bold">90+ scores</span> with our revolutionary <span className="text-teal-700 font-bold">AI-powered learning platform</span>.
          </p>

          {/* Unique Holographic Countdown Timer */}
          <div className="cta-timer mb-12">
            <p className="text-black text-lg mb-6 font-semibold">⏰ Holographic offer expires in:</p>
            <div className="flex justify-center gap-6">
              <div className="bg-teal-700 backdrop-blur-xl rounded-2xl p-6 min-w-[100px] border border-orange-400/40 shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-black text-white mb-2">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-white/80 text-sm font-semibold">Hours</div>
              </div>
              <div className="bg-teal-700 backdrop-blur-xl rounded-2xl p-6 min-w-[100px] border border-pink-400/40 shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-black text-white mb-2">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-white/80 text-sm font-semibold">Minutes</div>
              </div>
              <div className="bg-teal-700 backdrop-blur-xl rounded-2xl p-6 min-w-[100px] border border-rose-400/40 shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-black text-white mb-2">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-white/80 text-sm font-semibold">Seconds</div>
              </div>
            </div>
          </div>

          {/* Unique Holographic CTA Buttons */}
          <div className="cta-buttons flex flex-col sm:flex-row gap-8 justify-center mb-12">
            <SlideButton
              as="a"
              href="https://wa.me/8281832158"
              baseBg="black"
              fillColor="linear-gradient(135deg, #0d9488 0%, #10b981 100%)"
              baseText="white"
              hoverText="black"
              className="shadow-3xl hover:from-teal-700 hover:to-green-700 hover:shadow-teal-700 transform hover:scale-110 transition-all duration-500 text-xl px-12 py-6 rounded-full border border-teal-700"
            >
              <span className="flex items-center gap-3">
                <span className="text-3xl"></span>
                <span>Join Free on WhatsApp</span>
              </span>
            </SlideButton>

            <SlideButton
              as="a"
              href="#missions"
              baseBg="black"
              fillColor="linear-gradient(135deg, #0d9488 0%, #10b981 100%)"
              baseText="white"
              hoverText="black"
              className="border-2 border-teal-700 hover:from-teal-700 hover:to-green-600 shadow-3xl hover:shadow-teal-700 transform hover:scale-110 transition-all duration-500 text-xl px-12 py-6 rounded-full backdrop-blur-xl"
            >
              <span className="flex items-center gap-3">
                <span className="text-3xl"></span>
                <span>Explore Missions</span>
              </span>
            </SlideButton>
          </div>

          {/* Unique Holographic Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 font-Montserrat">
            <div className="flex items-center justify-center gap-3 text-white p-6 bg-teal-700  rounded-2xl border border-orange-400/30 backdrop-blur-xl">
              <span className="text-3xl">🔒</span>
              <span className="text-lg font-semibold">100% Free to Join</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white p-6 bg-teal-700  rounded-2xl border border-pink-400/30 backdrop-blur-xl">
              <span className="text-3xl">⚡</span>
              <span className="text-lg font-semibold">Instant Access</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white p-6 bg- bg-teal-700 rounded-2xl border border-rose-400/30 backdrop-blur-xl">
              <span className="text-3xl">🎯</span>
              <span className="text-lg font-semibold">No Credit Card Required</span>
            </div>
          </div>

          {/* Unique Holographic Social Proof */}
          <div className="cta-content text-black text-lg mb-8">
            <p className="mb-3">
              <span className="font-bold text-teal-700">10,000+ students</span> have already joined and are on their way to scoring <span className="font-bold text-teal-700">90+</span>
            </p>
            <p>
              Early members get <span className="font-bold text-teal-700">exclusive access</span> to premium missions and <span className="font-bold text-teal-700">special launch rewards</span>
            </p>
          </div>

          {/* Unique Holographic Urgency Message */}
          <div className="p-6 bg-teal-700 rounded-2xl border border-teal-700 backdrop-blur-xl shadow-2xl">
            <p className="text-white text-lg font-semibold">
              ⚠️ <strong className="text-black">Don't miss out!</strong> This limited-time holographic offer expires soon. Join now to secure your spot and start your journey to <span className="text-black font-bold">90+</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}