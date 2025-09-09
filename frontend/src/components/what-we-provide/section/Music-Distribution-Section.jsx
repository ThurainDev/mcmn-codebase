import React from "react";
import { NavLink } from "react-router-dom";

export default function Music_Distribution_Section() {
  return (
    <>
      <div
        id="music-distribution"
        className="scroll-animate opacity-0 translate-y-10"
      >
        <div className="bg-[#111] p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-3 sm:pl-4 font-jetbrains">
            Music Distribution
          </h2>
          <p className="text-[#E6D28C]/90 mt-3 sm:mt-4 font-jetbrains text-sm sm:text-base leading-relaxed">
            Our music distribution service helps Christian artists in Myanmar
            reach global audiences through all major streaming platforms. We
            handle the technical aspects of distribution while ensuring you
            maintain full rights to your music and receive fair compensation.
          </p>

          {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 2 columns */}
          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-black/50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300">
              <h3 className="text-[#E6D28C] font-bold mb-2 text-sm sm:text-base">Global Reach</h3>
              <p className="text-[#E6D28C]/70 text-xs sm:text-sm leading-relaxed">
                Distribution to Spotify, Apple Music, YouTube Music, Amazon
                Music, and 150+ platforms worldwide.
              </p>
            </div>
            <div className="bg-black/50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300">
              <h3 className="text-[#E6D28C] font-bold mb-2 text-sm sm:text-base">
                Artist-Friendly Terms
              </h3>
              <p className="text-[#E6D28C]/70 text-xs sm:text-sm leading-relaxed">
                Keep 100% ownership of your music with transparent revenue
                sharing and no hidden fees.
              </p>
            </div>
            <div className="bg-black/50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300">
              <h3 className="text-[#E6D28C] font-bold mb-2 text-sm sm:text-base">
                Marketing Support
              </h3>
              <p className="text-[#E6D28C]/70 text-xs sm:text-sm leading-relaxed">
                Promotional assistance to help your music reach the right
                audience and maximize impact.
              </p>
            </div>
            <div className="bg-black/50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300">
              <h3 className="text-[#E6D28C] font-bold mb-2 text-sm sm:text-base">
                Detailed Analytics
              </h3>
              <p className="text-[#E6D28C]/70 text-xs sm:text-sm leading-relaxed">
                Access comprehensive streaming data and audience insights to
                grow your ministry.
              </p>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 text-center">
            <NavLink to="/music-distribution">
              <button className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                Learn More
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
