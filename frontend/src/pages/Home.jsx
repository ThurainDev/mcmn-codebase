import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// hooks
import { usePageData } from "../hooks/usePageData";
// components
import What_We_Provide_Section from "../components/home/section/What_We_Provide_Section";
import Featured_Artists_Section from "../components/home/Featured-Artists-Section";
import Latest_Releases_Section from "../components/home/Latest-Releases-Section";
import Upcoming_Events_Section from "../components/home/Upcoming-Events-Section";
import Organizations_Section from "../components/home/Organizations-Section";
import Newsletter_Section from "../components/home/Newsletter-Section";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { data, loading, error } = usePageData('home');

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

  // Show loading state
  if (loading) {
    return (
      <div className="padding pt-[130px] pb-[30px] bg-black text-[#E6D28C] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#E6D28C] mx-auto mb-4"></div>
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="padding pt-[130px] pb-[30px] bg-black text-[#E6D28C] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-lg mb-4">Error loading page data</p>
          <p className="text-sm text-[#E6D28C]/70">{error}</p>
        </div>
      </div>
    );
  }

  // Show main content when data is loaded
  return (
    <>
      <div className="padding pt-[130px] pb-[30px] bg-black text-[#E6D28C]">
        {/* Hero Section */}
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="rounded-3xl h-[400px] md:h-[500px] flex flex-col justify-center items-center font-jetbrains relative overflow-hidden">
            {/* Rich black background base */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#0a0a0a] to-[#050505] z-0"></div>

            {/* Gold dust effect overlay */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] opacity-[0.03] mix-blend-overlay"></div>
              <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-[radial-gradient(ellipse_at_center,_#E6D28C_0%,_transparent_70%)] opacity-[0.04] mix-blend-overlay"></div>
              <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] opacity-[0.03] mix-blend-overlay"></div>
            </div>

            {/* Music notes pattern with gold tint */}
            <div className="absolute inset-0 bg-[url('/images/music-notes-pattern.png')] opacity-[0.08] mix-blend-color-dodge z-0"></div>

            {/* Diagonal gold accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.07] via-transparent to-transparent z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-[#E6D28C]/[0.05] z-0"></div>

            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#000_100%)] opacity-40 z-0"></div>

            <div className="relative z-10 text-center px-4">
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]">
                {data?.hero?.title || "Myanmar Christian Music Network"}
              </h1>
              <p className="text-lg md:text-xl text-[#E6D28C]/80 max-w-3xl mx-auto mb-8">
                {data?.hero?.subtitle || "Connecting Christian musicians, artists, and music lovers across Myanmar"}
              </p>
              <NavLink to={data?.hero?.ctaLink || "/about"}>
                <button className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black px-6 py-3 rounded-full text-base md:text-lg font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105">
                  {data?.hero?.ctaText || "Learn More"}
                </button>
              </NavLink>
            </div>

            {/* Enhanced animated elements */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-[#E6D28C]/30 to-[#D4AF37]/20 animate-float blur-[1px]"></div>
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-gradient-to-tr from-[#E6D28C]/25 to-[#D4AF37]/15 animate-twinkle blur-[1px]"></div>
            <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-gradient-to-bl from-[#E6D28C]/30 to-[#D4AF37]/20 animate-spin-slow blur-[1px]"></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-5 h-5 rounded-full bg-gradient-to-tl from-[#E6D28C]/20 to-[#D4AF37]/10 animate-float blur-[1px]"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-2/3 right-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-[#E6D28C]/25 to-[#D4AF37]/15 animate-twinkle blur-[1px]"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>

        {/* SECTION: What We Provide */}
        <What_We_Provide_Section />

        {/* SECTION: Featured Artists */}
        <Featured_Artists_Section />

        {/* SECTION: Latest Releases */}
        <Latest_Releases_Section />

        {/* SECTION: Upcoming Events */}
        <Upcoming_Events_Section />

        {/* SECTION: Organizations */}
        <Organizations_Section />

        {/* SECTION: Newsletter */}
        <Newsletter_Section />
      </div>

      {/* Add custom styles for scroll animations */}
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
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </>
  );
}
