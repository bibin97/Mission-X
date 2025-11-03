import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SlideButton from "../Components/Slidebutton";

gsap.registerPlugin(useGSAP);

export default function CTA() {
  const sectionRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  // ✅ Properly scoped GSAP animations
  useGSAP(() => {
    const ctx = gsap.context((self) => {
      gsap.from(self.selector(".cta-title"), {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(self.selector(".cta-content"), {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });
      gsap.from(self.selector(".cta-buttons"), {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      });
      gsap.from(self.selector(".cta-timer"), {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ✅ Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        else if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        else if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        else return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="join"
      className="relative py-20 sm:py-28 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* ✅ Subtle glowing accents */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-full blur-2xl animate-float border border-yellow-300/20" />
        <div
          className="absolute top-1/2 right-20 w-40 h-40 bg-gradient-to-r from-teal-700/10 to-green-700/10 rounded-full blur-3xl animate-float border border-teal-700/10"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="cta-content bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 md:p-14 text-center border border-teal-700 shadow-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-teal-700 border border-teal-700 text-white text-sm sm:text-base md:text-lg font-bold mb-8 shadow-lg animate-pulse">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full animate-ping border border-yellow-500" />
            <span>Premium Limited Time Offer</span>
          </div>

          {/* Title */}
          <h2 className="cta-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black mb-6 sm:mb-8 leading-tight">
            <span className="block text-transparent bg-clip-text bg-teal-700">
              Ready to Transform Your
            </span>
            <span className="block text-transparent bg-clip-text bg-teal-700">
              Math Journey?
            </span>
          </h2>

          {/* Description */}
          <p className="cta-content text-base sm:text-lg md:text-xl text-gray-800 mb-10 sm:mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Join thousands of students who are achieving{" "}
            <span className="text-teal-700 font-bold">90+ scores</span> with our{" "}
            <span className="text-teal-700 font-bold">
              AI-powered learning platform
            </span>
            .
          </p>

          {/* Timer */}
          <div className="cta-timer mb-10 sm:mb-12">
            <p className="text-black text-sm sm:text-base md:text-lg mb-4 font-semibold">
              ⏰ Offer expires in:
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {["Hours", "Minutes", "Seconds"].map((label, i) => {
                const value = [timeLeft.hours, timeLeft.minutes, timeLeft.seconds][i];
                return (
                  <div
                    key={label}
                    className="bg-teal-700 rounded-2xl p-4 sm:p-5 md:p-6 min-w-[80px] sm:min-w-[90px] md:min-w-[100px] border border-teal-500 shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2">
                      {String(value).padStart(2, "0")}
                    </div>
                    <div className="text-white/80 text-xs sm:text-sm font-semibold">
                      {label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Buttons */}
          <div className="cta-buttons flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center mb-10 sm:mb-12">
            <SlideButton
              as="a"
              href="https://wa.me/8281832158"
              baseBg="linear-gradient(135deg, #0d9488 0%, #10b981 100%)"
              fillColor="black"
              baseText="black"
              hoverText="white"
              className="shadow-xl hover:shadow-teal-700 transform hover:scale-105 transition-all duration-500 text-base sm:text-lg md:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-teal-700"
            >
              Join Free on WhatsApp
            </SlideButton>

            <SlideButton
              as="a"
              href="#missions"
              baseBg="black"
              fillColor="linear-gradient(135deg, #0d9488 0%, #10b981 100%)"
              baseText="white"
              hoverText="black"
              className="border-2 border-teal-700 hover:from-teal-700 hover:to-green-600 shadow-xl transform hover:scale-105 transition-all duration-500 text-base sm:text-lg md:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-full"
            >
              Explore Missions
            </SlideButton>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12">
            {[
              ["🔒", "100% Free to Join"],
              ["⚡", "Instant Access"],
              ["🎯", "No Credit Card Required"],
            ].map(([icon, text], i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-3 text-white p-5 bg-teal-700 rounded-2xl border border-teal-500/30"
              >
                <span className="text-2xl">{icon}</span>
                <span className="text-base font-semibold">{text}</span>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="cta-content text-gray-800 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            <p className="mb-2">
              <span className="font-bold text-teal-700">10,000+ students</span>{" "}
              have already joined and are on their way to scoring{" "}
              <span className="font-bold text-teal-700">90+</span>.
            </p>
            <p>
              Early members get{" "}
              <span className="font-bold text-teal-700">exclusive access</span>{" "}
              to premium missions and{" "}
              <span className="font-bold text-teal-700">special launch rewards</span>.
            </p>
          </div>

          {/* Urgency Message */}
          <div className="p-5 sm:p-6 bg-teal-700 rounded-2xl border border-teal-700 backdrop-blur-xl shadow-lg">
            <p className="text-white text-sm sm:text-base md:text-lg font-semibold">
              ⚠️ <strong className="text-black">Don't miss out!</strong> This
              limited-time offer expires soon. Join now to secure your spot and
              start your journey to <span className="text-black font-bold">90+</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
