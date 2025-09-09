import React from "react";
import { NavLink } from "react-router-dom";

export default function Featured_Artists_Section() {
  return (
    <>
      <div className="mt-12 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-[#111] rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
            Featured Artists
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Artist 1 */}
            <div className="bg-black rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-b from-[#111] to-black flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#E6D28C]/20 flex items-center justify-center text-4xl">
                  🎤
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#E6D28C]">
                  Artist Name
                </h3>
                <p className="text-[#E6D28C]/70 text-sm mt-2">
                  Genre: Contemporary
                </p>
                <button className="mt-4 px-4 py-2 bg-[#111] text-[#E6D28C] rounded-full text-sm border border-[#E6D28C]/30 hover:bg-[#E6D28C] hover:text-black transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>

            {/* Artist 2 */}
            <div className="bg-black rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-b from-[#111] to-black flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#E6D28C]/20 flex items-center justify-center text-4xl">
                  🎸
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#E6D28C]">
                  Artist Name
                </h3>
                <p className="text-[#E6D28C]/70 text-sm mt-2">Genre: Worship</p>
                <button className="mt-4 px-4 py-2 bg-[#111] text-[#E6D28C] rounded-full text-sm border border-[#E6D28C]/30 hover:bg-[#E6D28C] hover:text-black transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>

            {/* Artist 3 */}
            <div className="bg-black rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-b from-[#111] to-black flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#E6D28C]/20 flex items-center justify-center text-4xl">
                  🎻
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#E6D28C]">
                  Artist Name
                </h3>
                <p className="text-[#E6D28C]/70 text-sm mt-2">
                  Genre: Classical
                </p>
                <button className="mt-4 px-4 py-2 bg-[#111] text-[#E6D28C] rounded-full text-sm border border-[#E6D28C]/30 hover:bg-[#E6D28C] hover:text-black transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>

            {/* Artist 4 */}
            <div className="bg-black rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-b from-[#111] to-black flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#E6D28C]/20 flex items-center justify-center text-4xl">
                  🥁
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#E6D28C]">
                  Artist Name
                </h3>
                <p className="text-[#E6D28C]/70 text-sm mt-2">Genre: Gospel</p>
                <button className="mt-4 px-4 py-2 bg-[#111] text-[#E6D28C] rounded-full text-sm border border-[#E6D28C]/30 hover:bg-[#E6D28C] hover:text-black transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <NavLink to={"/artist"}>
              <button className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black px-6 py-3 rounded-full text-base font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105">
                View All Artists
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
