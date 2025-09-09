import React from "react";
import { NavLink } from "react-router-dom";

export default function Latest_Releases_Section() {
  return (
    <>
      <div className="mt-12 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-[#111] rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
            Latest Releases
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Song 1 */}
            <div className="bg-black rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="h-48 bg-gradient-to-b from-[#111] to-black flex items-center justify-center relative">
                <div className="w-32 h-32 bg-[#E6D28C]/10 rounded-lg flex items-center justify-center">
                  <span className="text-5xl">💿</span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                  <button className="w-16 h-16 rounded-full bg-[#E6D28C] text-black flex items-center justify-center">
                    <span className="text-2xl">▶️</span>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#E6D28C]">Song Title</h3>
                <p className="text-[#E6D28C]/70 text-sm mt-1">Artist Name</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#E6D28C]/60 text-xs">
                    Released: Jan 2023
                  </span>
                  <button className="text-[#E6D28C] hover:text-[#D4AF37] transition-colors duration-300">
                    <span className="text-xl">♡</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Song 2 */}
            <div className="bg-black rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="h-48 bg-gradient-to-b from-[#111] to-black flex items-center justify-center relative">
                <div className="w-32 h-32 bg-[#E6D28C]/10 rounded-lg flex items-center justify-center">
                  <span className="text-5xl">💿</span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                  <button className="w-16 h-16 rounded-full bg-[#E6D28C] text-black flex items-center justify-center">
                    <span className="text-2xl">▶️</span>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#E6D28C]">Song Title</h3>
                <p className="text-[#E6D28C]/70 text-sm mt-1">Artist Name</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#E6D28C]/60 text-xs">
                    Released: Feb 2023
                  </span>
                  <button className="text-[#E6D28C] hover:text-[#D4AF37] transition-colors duration-300">
                    <span className="text-xl">♡</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Song 3 */}
            <div className="bg-black rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="h-48 bg-gradient-to-b from-[#111] to-black flex items-center justify-center relative">
                <div className="w-32 h-32 bg-[#E6D28C]/10 rounded-lg flex items-center justify-center">
                  <span className="text-5xl">💿</span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                  <button className="w-16 h-16 rounded-full bg-[#E6D28C] text-black flex items-center justify-center">
                    <span className="text-2xl">▶️</span>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#E6D28C]">Song Title</h3>
                <p className="text-[#E6D28C]/70 text-sm mt-1">Artist Name</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#E6D28C]/60 text-xs">
                    Released: Mar 2023
                  </span>
                  <button className="text-[#E6D28C] hover:text-[#D4AF37] transition-colors duration-300">
                    <span className="text-xl">♡</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <NavLink to={"/song"}>
              <button className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black px-6 py-3 rounded-full text-base font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105">
                Browse All Songs
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
