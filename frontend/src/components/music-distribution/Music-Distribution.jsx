import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// components | hero-section
import Hero_Section from "../hero-section/Hero_Section";
// components | tab
import Navigation_Tabs from "./tab/Navigation_Tabs";
// components | section
import About_Section from "./section/About-Section";
import Services_Section from "./section/Services-Section";
import Distribution_Process_Section from "./section/Distribution-Process-Section";
import Benefits_Section from "./section/Benefits-Section";
import Platforms_Section from "./section/Platforms-Section";
import FAQ_Section from "./section/FAQ-Section";

export default function Music_Distribution() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  // Handle scroll animations
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

  // Render the active section based on tab
  const renderActiveSection = () => {
    switch (activeTab) {
      case "about":
        return <About_Section />;
      case "services":
        return <Services_Section />;
      case "platforms":
        return <Platforms_Section />;
      case "process":
        return <Distribution_Process_Section />;
      case "benefits":
        return <Benefits_Section />;
      case "faq":
        return <FAQ_Section />;
      default:
        return <About_Section />;
    }
  };

  return (
    <>
      <div className="padding pt-[120px] pb-[30px] bg-black text-[#E6D28C]">
        {/* Hero Section */}
        <Hero_Section
          isVisible={isVisible}
          title={"Music Distribution"}
          description={
            "ကမ္ဘာတစ်ဝှမ်းရှိ Digital Music Platforms များပေါ်သို့ သင့်သီချင်းများကို ဖြန့်ဖြူးပေးပါမည်"
          }
        />

        {/* Navigation Tabs */}
        <Navigation_Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Content Container */}
        <div className="">
          <div className="max-w-full mx-auto">
            {/* Render the active section based on selected tab */}
            {renderActiveSection()}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-b from-[#0a0a0a] to-black py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate opacity-0 translate-y-10">
            <div className="bg-gradient-to-r from-[#111] to-[#0a0a0a] rounded-3xl border border-[#E6D28C]/20 shadow-[0_0_20px_rgba(230,210,140,0.1)] overflow-hidden p-8 md:p-12 relative">
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient font-jetbrains">
                  Ready to Share Your Music with the World?
                </h2>
                <p className="text-[#E6D28C]/80 text-lg mb-8 leading-relaxed">
                  သင့်ရဲ့သီချင်းများကို ကမ္ဘာတစ်ဝှမ်းရှိ နားဆင်သူများထံ
                  ရောက်ရှိစေရန် ယခုပင် စတင်လိုက်ပါ
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="text-sm md:text-base p-3 md:p-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black font-bold rounded-full">
                    <span className="flex items-center gap-2">
                      <span>Get Started Now</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                        className="transform group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <path
                          fill="currentColor"
                          d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
                        />
                      </svg>
                    </span>
                  </div>
                  <Link
                    to={"/contact"}
                    className="bg-black text-[#E6D28C] text-sm md:text-base p-3 md:p-6 rounded-full border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1 h-full"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for scroll animations */}
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
    </>
  );
}
