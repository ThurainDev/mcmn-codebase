import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// components | sections
import Services_Overview_Section from "../components/what-we-provide/section/Services-Overview-Section";
import Music_Distribution_Section from "../components/what-we-provide/section/Music-Distribution-Section";
import Cover_Song_Licence_Section from "../components/what-we-provide/section/Cover-Song-Licence-Section";
import Church_Licence_Section from "../components/what-we-provide/section/Church-Licence-Section";
import Tunes_Academy_Section from "../components/what-we-provide/section/Tunes-Academy-Section";
import Create_Song_Section from "../components/what-we-provide/section/Create-Song-Section";
import Consultation_Services_Section from "../components/what-we-provide/section/Consultation-Services-Section";
import Call_To_Action_Section from "../components/what-we-provide/section/Call-To-Action-Section";

export default function WhatWeProvide() {
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
      <div className="padding pt-[130px] pb-[30px] bg-black text-[#E6D28C]">
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
                What We Provide
              </h1>
              <p className="text-lg md:text-xl text-[#E6D28C]/80 max-w-3xl mx-auto mb-6">
                Comprehensive services for Christian musicians and ministries in
                Myanmar
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

        {/* SECTION: Services Overview */}
        <Services_Overview_Section />

        {/* Left Side - Content */}
        <div className="flex flex-col lg:flex-row mt-10 gap-8">
          <div className="w-full space-y-8">
            {/* SECTION: Music Distribution */}
            <Music_Distribution_Section />

            {/* SECTION: Cover Song Licence */}
            {/* <Cover_Song_Licence_Section /> */}

            {/* SECTION: Church Licence */}
            {/* <Church_Licence_Section /> */}

            {/* SECTION: Music School */}
            <Tunes_Academy_Section />

            {/* SECTION: Create Song */}
            {/* <Create_Song_Section /> */}

            {/* SECTION: Consultation Services */}
            {/* <Consultation_Services_Section /> */}

            {/* SECTION: Call to Action */}
            {/* <Call_To_Action_Section /> */}
          </div>

          {/* Right Side - Navigation */}
          {/* <div className="hidden lg:block lg:w-[25%] xl:w-[20%] lg:sticky lg:top-[120px] h-fit">
            <div className="bg-[#111] p-6 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
              <h3 className="font-jetbrains text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent mb-4">
                Our Services
              </h3>
              <div className="border-l-4 border-[#D4AF37] p-4 flex flex-col gap-4">
                <HashLink
                  smooth
                  to="#music-distribution"
                  className="font-jetbrains text-sm sm:text-base text-[#E6D28C]/80 hover:text-[#E6D28C] transition-colors"
                >
                  Music Distribution
                </HashLink>
                <HashLink
                  smooth
                  to="#cover-song-licence"
                  className="font-jetbrains text-sm sm:text-base text-[#E6D28C]/80 hover:text-[#E6D28C] transition-colors"
                >
                  Cover Song Licence
                </HashLink>
                <HashLink
                  smooth
                  to="#church-licence"
                  className="font-jetbrains text-sm sm:text-base text-[#E6D28C]/80 hover:text-[#E6D28C] transition-colors"
                >
                  Church Licence
                </HashLink>
                <HashLink
                  smooth
                  to="#music-school"
                  className="font-jetbrains text-sm sm:text-base text-[#E6D28C]/80 hover:text-[#E6D28C] transition-colors"
                >
                  Music School
                </HashLink>
                <HashLink
                  smooth
                  to="#create-song"
                  className="font-jetbrains text-sm sm:text-base text-[#E6D28C]/80 hover:text-[#E6D28C] transition-colors"
                >
                  Create Song
                </HashLink>
                <HashLink
                  smooth
                  to="#consultation"
                  className="font-jetbrains text-sm sm:text-base text-[#E6D28C]/80 hover:text-[#E6D28C] transition-colors"
                >
                  Consultation
                </HashLink>
              </div>
              <div className="mt-8 p-4 bg-black/50 rounded-xl border border-[#E6D28C]/5">
                <p className="text-[#E6D28C]/70 text-sm italic">
                  "Our mission is to empower Christian musicians in Myanmar with
                  the tools, resources, and support they need to share their
                  message through music."
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Add custom styles for scroll animations */}
      <style jsx>{`
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
