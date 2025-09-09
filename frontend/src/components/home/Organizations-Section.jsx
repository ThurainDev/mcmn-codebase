import React from "react";
import { NavLink } from "react-router-dom";

export default function Organizations_Section() {
  return (
    <>
      <div className="mt-12 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-[#111] rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden">
          <div className="rounded-t-3xl h-[300px] md:h-[400px] flex flex-col justify-center items-center font-jetbrains relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-black to-[#111] z-0"></div>
            <div className="absolute inset-0 bg-[url('/images/music-notes-pattern.png')] opacity-5 z-0"></div>

            <div className="relative z-10 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
                Organizations
              </h1>
              <NavLink to={"/organizations"}>
                <button className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black px-5 py-2 rounded-full text-sm md:text-base font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
