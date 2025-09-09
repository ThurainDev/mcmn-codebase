import React, { useState, useEffect } from "react";
// components | sections
import Introduction_Section from "./section/Introduction-Section";
import Features_Section from "./section/Features-Section";
import Licensing_Process_Section from "./section/Licensing-Process-Section";
import FAQ_Section from "./section/FAQ-Section";
import Pricing_Section from "./section/Pricing-Section";
// New imports for enhanced functionality
import { NavLink } from "react-router-dom";
import { MusicIcon, Award, FileCheck, Globe, Users } from "lucide-react";

export default function CoverSongLicence() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
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
    handleScroll(); // Check on initial load

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sample success stories data
  const successStories = [
    {
      artist: "Min Aung",
      song: "ကျွန်ုပ်သည်ဘုရားသခင်ကိုချစ်သည်",
      quote:
        "The licensing process was incredibly smooth. Within two weeks, my cover song was fully licensed and ready for distribution.",
      image: "/images/success-story-1.jpg",
    },
    {
      artist: "Nway Oo",
      song: "အလင်းရောင်",
      quote:
        "Thanks to MCMN's cover song license, I was able to legally release my rendition and it's now reaching thousands of listeners.",
      image: "/images/success-story-2.jpg",
    },
    {
      artist: "Thiri Maung",
      song: "တရားမူရာတော်",
      quote:
        "The team guided me through every step of the licensing process, making what seemed complex incredibly simple.",
      image: "/images/success-story-3.jpg",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Enhanced Hero Section */}
      <div className="padding pt-[120px] pb-[30px]">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="rounded-3xl bg-gradient-to-r from-[#050505] via-[#0a0a0a] to-[#050505] border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden p-8 md:p-12 relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/images/music-notes-pattern.png')] opacity-5 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.07] via-transparent to-transparent z-0"></div>

            {/* Enhanced animated elements */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-[#E6D28C]/30 to-[#D4AF37]/20 animate-float blur-[1px]"></div>
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-gradient-to-tr from-[#E6D28C]/25 to-[#D4AF37]/15 animate-twinkle blur-[1px]"></div>
            <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-gradient-to-bl from-[#E6D28C]/30 to-[#D4AF37]/20 animate-spin-slow blur-[1px]"></div>

            <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto">
              {/* Title and Description */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-jetbrains bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]">
                Cover Song Copyright Licence
              </h1>
              <p className="text-lg md:text-xl text-[#E6D28C]/80 max-w-3xl mx-auto">
                Get legal permission to record and distribute cover songs while
                ensuring original artists and songwriters receive proper
                compensation for their work.
              </p>
              <div className="flex justify-center">
                <div className="h-1 w-24 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] rounded-full"></div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
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

        {/* Navigation Tabs - New Section */}
        <div className="padding scroll-animate opacity-0 translate-y-10 transition-all duration-1000 mt-10">
          <div className="bg-[#111] rounded-xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden">
            <div className="flex flex-wrap justify-center text-sm md:text-base font-medium text-center">
              {/* Overview */}
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-3 py-3 sm:px-5 sm:py-4 transition-colors duration-300 ${
                  activeTab === "overview"
                    ? "bg-[#E6D28C] rounded-xl text-black font-bold"
                    : "text-[#E6D28C] hover:bg-[#E6D28C]/10 rounded-xl"
                }`}
              >
                Overview
              </button>
              {/* Features */}
              <button
                onClick={() => setActiveTab("features")}
                className={`px-3 py-3 sm:px-5 sm:py-4 transition-colors duration-300 ${
                  activeTab === "features"
                    ? "bg-[#E6D28C] rounded-xl text-black font-bold"
                    : "text-[#E6D28C] hover:bg-[#E6D28C]/10 rounded-xl"
                }`}
              >
                Features
              </button>
              {/* Process */}
              <button
                onClick={() => setActiveTab("process")}
                className={`px-3 py-3 sm:px-5 sm:py-4 transition-colors duration-300 ${
                  activeTab === "process"
                    ? "bg-[#E6D28C] rounded-xl text-black font-bold"
                    : "text-[#E6D28C] hover:bg-[#E6D28C]/10 rounded-xl"
                }`}
              >
                Licensing Process
              </button>
              {/* FAQ */}
              <button
                onClick={() => setActiveTab("faq")}
                className={`px-3 py-3 sm:px-5 sm:py-4 transition-colors duration-300 ${
                  activeTab === "faq"
                    ? "bg-[#E6D28C] rounded-xl text-black font-bold"
                    : "text-[#E6D28C] hover:bg-[#E6D28C]/10 rounded-xl"
                }`}
              >
                FAQ
              </button>
              {/* Success Stories - New Tab */}
              <button
                onClick={() => setActiveTab("success")}
                className={`px-3 py-3 sm:px-5 sm:py-4 transition-colors duration-300 ${
                  activeTab === "success"
                    ? "bg-[#E6D28C] rounded-xl text-black font-bold"
                    : "text-[#E6D28C] hover:bg-[#E6D28C]/10 rounded-xl"
                }`}
              >
                Success Stories
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="scroll-animate opacity-0 translate-y-10">
              <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4">
                  About Our Cover Song Licensing
                </h2>
                <p className="text-[#E6D28C]/90 mb-6 text-sm sm:text-base leading-relaxed">
                  Our Cover Song Copyright License provides legal coverage for
                  artists to record and distribute cover versions of songs. With
                  our service, you can focus on your creative expression while
                  we handle the complex legal requirements to ensure original
                  songwriters and publishers receive proper compensation.
                </p>
                <p className="text-[#E6D28C]/90 mb-6 text-sm sm:text-base leading-relaxed">
                  We understand the importance of creative freedom in music, and
                  our mission is to make copyright compliance simple and
                  affordable for artists of all levels. Our licenses are
                  designed to give you peace of mind while supporting the
                  original creators who inspire your work.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-[#E6D28C] mb-4">
                    Why Choose Our License?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)]">
                      <div className="text-[#D4AF37] mb-3">
                        <Award size={24} />
                      </div>
                      <h4 className="text-lg font-bold text-[#E6D28C] mb-2">
                        Comprehensive Coverage
                      </h4>
                      <p className="text-[#E6D28C]/80 text-sm">
                        Our licenses provide complete legal protection for your
                        cover songs across all distribution platforms.
                      </p>
                    </div>
                    <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)]">
                      <div className="text-[#D4AF37] mb-3">
                        <Users size={24} />
                      </div>
                      <h4 className="text-lg font-bold text-[#E6D28C] mb-2">
                        Affordable for All Artists
                      </h4>
                      <p className="text-[#E6D28C]/80 text-sm">
                        Tiered pricing ensures artists at any stage of their
                        career can afford proper licensing.
                      </p>
                    </div>
                    <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)]">
                      <div className="text-[#D4AF37] mb-3">
                        <Globe size={24} />
                      </div>
                      <h4 className="text-lg font-bold text-[#E6D28C] mb-2">
                        Global Distribution Ready
                      </h4>
                      <p className="text-[#E6D28C]/80 text-sm">
                        Our licenses allow you to distribute your cover songs
                        worldwide on all major platforms.
                      </p>
                    </div>
                    <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)]">
                      <div className="text-[#D4AF37] mb-3">
                        <FileCheck size={24} />
                      </div>
                      <h4 className="text-lg font-bold text-[#E6D28C] mb-2">
                        Easy Compliance
                      </h4>
                      <p className="text-[#E6D28C]/80 text-sm">
                        Simple application process with clear guidance makes
                        copyright compliance straightforward.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-[#E6D28C]/90 mb-4">
                    For full details about our license terms and conditions:
                  </p>
                  <NavLink
                    to={"/cover-song-copyright-licence-terms-of-agreement"}
                    className={
                      "inline-block bg-transparent border border-[#E6D28C] text-[#E6D28C] px-6 py-3 rounded-full text-base font-bold hover:bg-[#E6D28C]/10 transition-all duration-300"
                    }
                  >
                    View License Agreement
                  </NavLink>
                </div>
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === "features" && <Features_Section />}

          {/* Licensing Process Tab */}
          {activeTab === "process" && <Licensing_Process_Section />}

          {/* FAQ Tab */}
          {activeTab === "faq" && <FAQ_Section />}

          {/* Success Stories Tab - New Section */}
          {activeTab === "success" && (
            <div className="scroll-animate opacity-0 translate-y-10">
              <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
                  Success Stories
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {successStories.map((story, index) => (
                    <div
                      key={index}
                      className="scroll-animate opacity-0 translate-y-10 bg-black/50 rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1"
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="h-48 bg-[#0a0a0a] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                        <div className="absolute bottom-4 left-4 z-20">
                          <h3 className="text-xl font-bold text-[#E6D28C]">
                            {story.artist}
                          </h3>
                          <p className="text-[#E6D28C]/80 text-sm">
                            "{story.song}"
                          </p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="text-3xl text-[#D4AF37] mb-4">❝</div>
                        <p className="text-[#E6D28C]/80 italic">
                          {story.quote}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <h3 className="text-xl font-bold text-[#E6D28C] mb-4">
                    Share Your Success Story
                  </h3>
                  <button className="px-6 py-3 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black rounded-full font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.3)] transition-all duration-300">
                    Submit Your Story
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SECTION: Introduction */}
        <Introduction_Section />
      </div>

      {/* Pricing Section with ID for scrolling */}
      <div id="pricing-section">
        <Pricing_Section />
      </div>

      {/* Enhanced Call to Action Section */}
      <div className="padding mt-8 pb-16 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-gradient-to-r from-[#050505] via-[#0a0a0a] to-[#050505] rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden p-8 md:p-12 relative">
          <div className="absolute inset-0 bg-[url('/images/music-notes-pattern.png')] opacity-5 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.05] via-transparent to-transparent z-0"></div>

          {/* Animated elements */}
          <div className="absolute top-1/4 right-1/5 w-3 h-3 rounded-full bg-gradient-to-bl from-[#E6D28C]/30 to-[#D4AF37]/20 animate-twinkle blur-[1px]"></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-4 h-4 rounded-full bg-gradient-to-tl from-[#E6D28C]/20 to-[#D4AF37]/10 animate-float blur-[1px]"
            style={{ animationDelay: "1.5s" }}
          ></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
              Ready to License Your Cover Songs?
            </h2>
            <p className="text-[#E6D28C]/80 text-lg mb-8">
              Get started today and ensure your cover songs are properly
              licensed and ready for distribution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black px-8 py-3 rounded-full text-base md:text-lg font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105">
                Get Your License Now
              </button>
              <NavLink to="/contact">
                <button className="bg-transparent border border-[#E6D28C] text-[#E6D28C] px-8 py-3 rounded-full text-base md:text-lg font-bold hover:bg-[#E6D28C]/10 transition-all duration-300">
                  Contact Our Team
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}
