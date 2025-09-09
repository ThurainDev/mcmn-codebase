import React, { act, useState, useEffect } from "react";
import tunes_academy_logo from "../../assets/tunes_academy_logo.jpg";
// components | tab
import Navigation_Tabs from "./tab/Navigation_Tabs";
// components | section
import Programs_We_Offer_Section from "./section/Programs-We-Offer-Section";
import Music_Lessons_We_Teach_Section from "./section/Music-Lessons-We-Teach-Section";
import Digital_Certificate_Section from "./section/Digital-Certificate-Section";
import Our_Instructors_Section from "./section/Our-Instructors-Section";
import Student_Testimonials_Section from "./section/Student-Testimonials-Section";
import Upcoming_Events_Section from "./section/Upcoming-Events-Section";
import FAQ_Section from "./section/FAQ-Section";
import Contact from "./section/Contact";

export default function MusicSchool() {
  const [activeTab, setActiveTab] = useState("courses");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // For scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          el.classList.add("animate-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="bg-[#1A2151] padding pt-[150px] pb-[30px] text-white min-h-screen">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-[#1A2151] opacity-90 z-0"></div>
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-8">
            {/* Enhanced Logo Section */}
            <div className="relative group">
              {/* Outer glow ring */}
              {/* <div className="absolute -inset-6 bg-gradient-to-r from-[#E6D28C]/30 via-[#F0E6B8]/40 to-[#E6D28C]/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse-slow opacity-60"></div> */}

              {/* Middle glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F0E6B8]/20 to-[#E6D28C]/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 animate-spin-very-slow opacity-80"></div>

              {/* Inner border ring */}
              {/* <div className="absolute -inset-2 border-2 border-[#E6D28C]/50 rounded-full group-hover:border-[#E6D28C]/80 transition-all duration-300"></div> */}

              {/* Rotating accent ring */}
              <div className="absolute -inset-3 border border-[#F0E6B8]/30 rounded-full animate-spin-slow"></div>

              {/* Logo container with enhanced styling */}
              <div className="relative overflow-hidden rounded-full">
                {/* Logo shadow */}
                <div className="absolute inset-0 bg-black/20 rounded-full transform translate-y-1 blur-sm"></div>

                {/* Main logo */}
                <img
                  src={tunes_academy_logo}
                  alt="Tunes Academy Logo"
                  className="relative w-[180px] md:w-[280px] lg:w-[320px] rounded-full shadow-2xl transform group-hover:scale-110 transition-all duration-500 border-4 border-[#E6D28C]/40 group-hover:border-[#E6D28C]/70"
                />

                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#1A2151]/20 rounded-full pointer-events-none"></div>

                {/* Shine effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shine"></div> */}
              </div>

              {/* Floating musical notes around logo */}
              <div className="absolute -top-4 -right-4 text-[#E6D28C] text-2xl animate-float-note-1 opacity-70">
                ♪
              </div>
              <div className="absolute -bottom-4 -left-4 text-[#F0E6B8] text-xl animate-float-note-2 opacity-60">
                ♫
              </div>
              <div className="absolute top-1/2 -left-10 text-[#E6D28C] text-lg animate-float-note-3 opacity-50">
                ♬
              </div>
              <div className="absolute top-1/4 -right-6 text-[#F0E6B8] text-lg animate-float-note-4 opacity-55">
                ♩
              </div>
            </div>

            {/* Text content remains the same */}
            <div className="relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent animate-gradient">
                TUNES ACADEMY
              </h1>
              <p className="mt-2 text-lg md:text-xl text-[#E6D28C]">
                Unlock your musical talent
              </p>
              <p className="mt-3 md:mt-5 font-jetbrains text-gray-300 max-w-3xl mx-auto text-sm md:text-base">
                Welcome to Tunes Academy, where we nurture musical talent
                through expert instruction and personalized learning paths. Our
                comprehensive programs cater to students of all ages and skill
                levels, providing the foundation for a lifelong appreciation and
                mastery of music.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Navigation_Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="">
          {/* SECTION: Programs we offer */}
          {activeTab === "courses" && <Programs_We_Offer_Section />}

          {/* SECTION: Music lessons we teach */}
          {/* {activeTab === "courses" && <Music_Lessons_We_Teach_Section />} */}

          {/* SECTION: FAQ */}
          {activeTab === "courses" && <FAQ_Section />}

          {/* SECTION: Our Instructors */}
          {activeTab === "instructors" && <Our_Instructors_Section />}

          {/* SECTION: Digital Certificate */}
          {/* {activeTab === "certificate" && <Digital_Certificate_Section />} */}

          {/* SECTION: Student Testimonials */}
          {/* {activeTab === "testimonials" && <Student_Testimonials_Section />} */}

          {/* SECTION: Upcoming Events */}
          {/* {activeTab === "upcoming events" && <Upcoming_Events_Section />} */}

          {/* SECTION: Contact */}
          {activeTab === "contact" && <Contact />}
        </div>
      </div>

      {/* CSS for scroll animations */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .scroll-animate {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

      {/* Enhanced CSS for logo animations */}
      <style jsx>{`
        /* Existing styles... */

        /* Logo-specific animations */
        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(1deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-very-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        @keyframes float-note-1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(15deg);
          }
          66% {
            transform: translateY(-5px) rotate(-10deg);
          }
        }

        @keyframes float-note-2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(-20deg);
          }
        }

        @keyframes float-note-3 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(10deg);
          }
          75% {
            transform: translateY(-15px) rotate(-15deg);
          }
        }

        @keyframes float-note-4 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          40% {
            transform: translateY(-6px) rotate(25deg);
          }
          80% {
            transform: translateY(-10px) rotate(-5deg);
          }
        }

        /* Animation classes */
        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 30s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-shine {
          animation: shine 2s ease-in-out;
        }

        .animate-float-note-1 {
          animation: float-note-1 6s ease-in-out infinite;
        }

        .animate-float-note-2 {
          animation: float-note-2 7s ease-in-out infinite;
        }

        .animate-float-note-3 {
          animation: float-note-3 8s ease-in-out infinite;
        }

        .animate-float-note-4 {
          animation: float-note-4 5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
