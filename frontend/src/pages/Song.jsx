import React, { useState, useEffect } from "react";
// components | tab
import Navigation_Tab from "../components/song/tab/Navigation-Tab";
// components | sections
import Song_Collection_Section from "../components/song/section/Song-Collection-Section";
import Featured_Songs_Section from "../components/song/section/Featured-Songs-Section";
import Testimonials_Section from "../components/song/section/Testimonials-Section";
import Upcoming_Releases_Section from "../components/song/section/Upcoming-Releases-Section";

export default function Song() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAlphabet, setSelectedAlphabet] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("songs");
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedAlphabet, searchQuery]);

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
      {/* Hero Section with Gold/Black Theme */}
      <div className="padding pt-[120px] pb-[30px] bg-black text-[#E6D28C]">
        {/* Hero Section */}
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="rounded-3xl h-[300px] md:h-[400px] flex flex-col justify-center items-center font-jetbrains relative overflow-hidden">
            {/* Rich black background base */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#0a0a0a] to-[#050505] z-0"></div>

            {/* Gold dust effect overlay */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] opacity-[0.03] mix-blend-overlay"></div>
              <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-[radial-gradient(ellipse_at_center,_#E6D28C_0%,_transparent_70%)] opacity-[0.04] mix-blend-overlay"></div>
              <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] opacity-[0.03] mix-blend-overlay"></div>
            </div>

            {/* Enhanced music notes pattern with gold tint */}
            <div className="absolute inset-0 bg-[url('/images/music-notes-pattern.png')] opacity-[0.08] mix-blend-color-dodge z-0"></div>

            {/* Diagonal gold accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.07] via-transparent to-transparent z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-[#E6D28C]/[0.05] z-0"></div>

            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#000_100%)] opacity-40 z-0"></div>

            <div className="relative z-10 text-center px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]">
                Songs Collection
              </h1>
              <p className="text-lg md:text-xl text-[#E6D28C]/80 max-w-3xl mx-auto">
                Explore our library of Christian songs in Myanmar language
              </p>
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

        {/* Navigation Tabs */}
        <Navigation_Tab activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Song Collection Section */}
        <Song_Collection_Section activeTab={activeTab} />

        {/* Featured Songs Section */}
        <Featured_Songs_Section
          activeTab={activeTab}
          // openSongModal={openSongModal}
        />

        {/* Testimonials Section */}
        <Testimonials_Section activeTab={activeTab} />

        {/* Upcoming Releases */}
        <Upcoming_Releases_Section activeTab={activeTab} />
      </div>
    </>
  );
}
