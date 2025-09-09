import React, { useState, useEffect, act } from "react";
// components | hero-section
import Hero_Section from "../components/hero-section/Hero_Section";
// components | tabs
import Navigation_Tabs from "../components/organization/tab/Navigation-Tabs";
// components | section
import Partner_Organizations_Section from "../components/organization/section/Partner_Organizations_Section";
import Testimonials_Section from "../components/organization/section/Testimonials_Section";
import Collaborative_Events_Section from "../components/organization/section/Collaborative_Events_Section";
import Join_Us_Section from "../components/organization/section/Join_Us_Section";

export default function Organization() {
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("partners");

  const handleCardClick = (partner) => {
    setSelectedPartner(partner);
  };

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
      <div className="padding pt-[120px] pb-[30px] bg-black text-[#E6D28C]">
        {/* Hero Section */}
        <Hero_Section
          isVisible={isVisible}
          title={"Our Partners"}
          description={
            "Discover the churches and organizations that collaborate with Myanmar Christian Music Network"
          }
        />

        {/* Navigation Tabs */}
        <Navigation_Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* SECTION: Partner Organizations */}
        <Partner_Organizations_Section
          activeTab={activeTab}
          selectedPartner={selectedPartner}
          setSelectedPartner={setSelectedPartner}
          handleCardClick={handleCardClick}
        />

        {/* SECTION: Testimonials */}
        {activeTab === "testimonials" && <Testimonials_Section />}

        {/* SECTION: Collaborative Events */}
        {activeTab === "events" && <Collaborative_Events_Section />}

        {/* SECTION: Join Us */}
        {activeTab === "join" && <Join_Us_Section />}
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
    </>
  );
}
