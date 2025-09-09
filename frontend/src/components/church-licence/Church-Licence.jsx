import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// components | tabs
import Navigation_Tabs from "./tab/Navigation-Tabs";
import Overview_Tab from "./tab/Overview-Tab";
import Features_Tab from "./tab/Features-Tab";
import Licensing_Process_Tab from "./tab/Licensing-Process-Tab";
import FAQ_Tab from "./tab/FAQ-Tab";
// components | section
import Hero_Section from "../hero-section/Hero_Section";
import Pricing_Section from "./section/Pricing-Section";

export default function ChurchLicence() {
  const [showPricing, setShowPricing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-[#E6D28C] min-h-screen">
      <div className="padding pt-[120px] pb-[30px]"></div>
      {/* Hero Section */}
      <div
        className={`transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="rounded-3xl flex flex-col justify-center items-center font-jetbrains relative overflow-hidden py-16 md:py-24">
          {/* Rich black background base */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#0a0a0a] to-[#050505] z-0"></div>

          {/* Gold dust effect overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] opacity-[0.03] mix-blend-overlay"></div>
            <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-[radial-gradient(ellipse_at_center,_#E6D28C_0%,_transparent_70%)] opacity-[0.04] mix-blend-overlay"></div>
            <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] opacity-[0.03] mix-blend-overlay"></div>
          </div>

          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#000_100%)] opacity-40 z-0"></div>

          {/* Enhanced animated elements */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-[#E6D28C]/30 to-[#D4AF37]/20 animate-float blur-[1px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-gradient-to-tr from-[#E6D28C]/25 to-[#D4AF37]/15 animate-twinkle blur-[1px]"></div>
          <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-gradient-to-bl from-[#E6D28C]/30 to-[#D4AF37]/20 animate-spin-slow blur-[1px]"></div>

          {/* Music note decorations */}
          <div
            className="absolute top-2/4 left-32 text-[#E6D28C]/20 text-6xl animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            ♪
          </div>
          <div
            className="absolute bottom-3 left-1/3 text-[#E6D28C]/20 text-5xl animate-float"
            style={{ animationDelay: "1.2s" }}
          >
            ♫
          </div>
          <div
            className="absolute top-3/4 right-1/4 text-[#E6D28C]/20 text-4xl animate-float"
            style={{ animationDelay: "0.8s" }}
          >
            ♩
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]">
              Church Copyright Licence
            </h1>
            <p className="text-lg md:text-xl text-[#E6D28C]/80 mb-8 max-w-3xl mx-auto">
              Legally use and reproduce worship songs in your church services
              with our comprehensive copyright licensing solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* View Pricing Button */}
              <button
                onClick={() => {
                  setShowPricing(true);
                  document
                    .getElementById("pricing-section")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black px-6 py-3 rounded-full text-base font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </button>
              {/* Contact Us Button */}
              <NavLink to="/contact">
                <button className="bg-transparent border border-[#E6D28C] text-[#E6D28C] px-6 py-3 rounded-full text-base font-bold hover:bg-[#E6D28C]/10 transition-all duration-300">
                  Contact Us
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <Navigation_Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tab Content */}
      <div className="padding mt-8">
        {/* Overview Tab */}
        <Overview_Tab activeTab={activeTab} />

        {/* Features Tab */}
        <Features_Tab activeTab={activeTab} />

        {/* Licensing Process Tab */}
        <Licensing_Process_Tab activeTab={activeTab} />

        {/* FAQ Tab */}
        <FAQ_Tab activeTab={activeTab} />
      </div>

      {/* Pricing Section */}
      <Pricing_Section />

      {/* CSS for scroll animations */}
      <style jsx>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
