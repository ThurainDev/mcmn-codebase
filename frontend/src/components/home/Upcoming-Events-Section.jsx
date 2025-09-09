import React from "react";
import { NavLink } from "react-router-dom";

export default function Upcoming_Events_Section() {
  return (
    <>
      <div className="mt-12 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-[#111] rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
            Upcoming Events
          </h2>

          <div className="space-y-4">
            {/* Event 1 */}
            <div className="bg-black rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
              <div className="w-full md:w-32 h-32 bg-gradient-to-br from-[#111] to-black rounded-xl flex flex-col items-center justify-center border border-[#E6D28C]/30 shrink-0">
                <span className="text-[#E6D28C] text-3xl font-bold">15</span>
                <span className="text-[#E6D28C]/70 text-lg">APR</span>
                <span className="text-[#E6D28C]/50 text-sm mt-1">2023</span>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-[#E6D28C]">
                  Worship Night
                </h3>
                <p className="text-[#E6D28C]/70 text-sm md:text-base mt-2">
                  Join us for a night of worship and fellowship with special
                  guest performances.
                </p>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-4 md:items-center">
                  <span className="text-[#E6D28C]/60 text-xs md:text-sm">
                    📍 Yangon Community Center
                  </span>
                  <span className="text-[#E6D28C]/60 text-xs md:text-sm">
                    ⏰ 6:00 PM - 9:00 PM
                  </span>
                </div>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black rounded-full text-sm font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105 shrink-0">
                RSVP
              </button>
            </div>

            {/* Event 2 */}
            <div className="bg-black rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
              <div className="w-full md:w-32 h-32 bg-gradient-to-br from-[#111] to-black rounded-xl flex flex-col items-center justify-center border border-[#E6D28C]/30 shrink-0">
                <span className="text-[#E6D28C] text-3xl font-bold">22</span>
                <span className="text-[#E6D28C]/70 text-lg">APR</span>
                <span className="text-[#E6D28C]/50 text-sm mt-1">2023</span>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-[#E6D28C]">
                  Music Workshop
                </h3>
                <p className="text-[#E6D28C]/70 text-sm md:text-base mt-2">
                  Learn songwriting and music production techniques from
                  industry professionals.
                </p>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-4 md:items-center">
                  <span className="text-[#E6D28C]/60 text-xs md:text-sm">
                    📍 MCMN Music School
                  </span>
                  <span className="text-[#E6D28C]/60 text-xs md:text-sm">
                    ⏰ 10:00 AM - 4:00 PM
                  </span>
                </div>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black rounded-full text-sm font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105 shrink-0">
                Register
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-black text-[#E6D28C] px-6 py-3 rounded-full text-base font-bold border border-[#E6D28C]/30 hover:border-[#E6D28C] transition-all duration-300">
              View All Events
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
