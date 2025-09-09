import React from "react";
import { NavLink } from "react-router-dom";

export default function Cover_Song_Licence_Section() {
  return (
    <>
      <div
        id="cover-song-licence"
        className="scroll-animate opacity-0 translate-y-10"
      >
        <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
            Cover Song Licence
          </h2>
          <p className="text-[#E6D28C]/90 mt-4 font-jetbrains text-sm sm:text-base leading-relaxed">
            Our cover song licensing service simplifies the complex process of
            legally covering songs. We handle all the paperwork, royalty
            payments, and legal requirements so you can focus on creating
            beautiful renditions of your favorite songs.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start">
              <div className="text-[#D4AF37] mr-3 mt-1">✓</div>
              <div>
                <h3 className="text-lg font-bold text-[#E6D28C]">
                  Legal Protection
                </h3>
                <p className="text-[#E6D28C]/80 text-sm">
                  Ensure your cover songs are fully licensed and protected from
                  copyright claims.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-[#D4AF37] mr-3 mt-1">✓</div>
              <div>
                <h3 className="text-lg font-bold text-[#E6D28C]">
                  Royalty Management
                </h3>
                <p className="text-[#E6D28C]/80 text-sm">
                  We handle all royalty calculations and payments to original
                  songwriters and publishers.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-[#D4AF37] mr-3 mt-1">✓</div>
              <div>
                <h3 className="text-lg font-bold text-[#E6D28C]">
                  Streamlined Process
                </h3>
                <p className="text-[#E6D28C]/80 text-sm">
                  Simple application process with quick turnaround times for
                  licensing approval.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-[#D4AF37] mr-3 mt-1">✓</div>
              <div>
                <h3 className="text-lg font-bold text-[#E6D28C]">
                  Distribution Ready
                </h3>
                <p className="text-[#E6D28C]/80 text-sm">
                  Licensed covers can be immediately distributed through our
                  music distribution service.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <NavLink to="/cover-song-copyright-licence">
              <button className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black px-6 py-3 rounded-full text-base font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
