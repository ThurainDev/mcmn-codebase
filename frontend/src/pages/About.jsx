import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// components | about | tab
import Navigation_Tabs from "../components/about/tab/Navigation_Tabs";
// components | about | section
import Hero_Section from "../components/hero-section/Hero_Section";
import Our_Story_Section from "../components/about/section/Our_Story_Section";
import Who_We_Are_Section from "../components/about/section/Who_We_Are_Section";
import What_To_Expect_Section from "../components/about/section/What_To_Expect_Section";
import Mission_And_Vision_Section from "../components/about/section/Mission_And_Vision_Section";
import Join_Us_Section from "../components/about/section/Join_Us_Section";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("our story");

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
          title="About Us"
          description="Discover the story, mission, and vision behind Myanmar Christian Music Network"
        />

        {/* Navigation Tabs */}
        <Navigation_Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* SECTION */}
        {/* SECTION: Our Story */}
        <Our_Story_Section activeTab={activeTab} />

        {/* SECTION: Who We Are */}
        <Who_We_Are_Section activeTab={activeTab} />

        {/* SECTION: What To Expect */}
        <What_To_Expect_Section activeTab={activeTab} />

        {/* SECTION: Mission And Vision */}
        <Mission_And_Vision_Section activeTab={activeTab} />

        {/* SECTION: Join Us */}
        {/* <Join_Us_Section activeTab={activeTab} /> */}
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
