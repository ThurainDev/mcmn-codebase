import React from "react";
import { NavLink } from "react-router-dom";

export default function Create_Song_Section() {
  return (
    <>
      <div id="create-song" className="scroll-animate opacity-0 translate-y-10">
        <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
            Create Song
          </h2>
          <p className="text-[#E6D28C]/90 mt-4 font-jetbrains text-sm sm:text-base leading-relaxed">
            Our song creation service pairs you with professional songwriters,
            producers, and musicians to bring your musical vision to life.
            Whether you need a complete song from scratch or help finishing an
            existing project, our team will work with you every step of the way.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start">
              <div className="text-[#D4AF37] mr-3 mt-1">✓</div>
              <div>
                <h3 className="text-lg font-bold text-[#E6D28C]">
                  Custom Songwriting
                </h3>
                <p className="text-[#E6D28C]/80 text-sm">
                  Professional songwriters will craft lyrics and melodies that
                  match your vision and message.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-[#D4AF37] mr-3 mt-1">✓</div>
              <div>
                <h3 className="text-lg font-bold text-[#E6D28C]">
                  Full Production
                </h3>
                <p className="text-[#E6D28C]/80 text-sm">
                  Complete arrangement, recording, mixing, and mastering
                  services with professional musicians.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-[#D4AF37] mr-3 mt-1">✓</div>
              <div>
                <h3 className="text-lg font-bold text-[#E6D28C]">
                  Collaborative Process
                </h3>
                <p className="text-[#E6D28C]/80 text-sm">
                  Work directly with our creative team throughout the entire
                  process with regular feedback opportunities.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-[#D4AF37] mr-3 mt-1">✓</div>
              <div>
                <h3 className="text-lg font-bold text-[#E6D28C]">
                  Full Rights
                </h3>
                <p className="text-[#E6D28C]/80 text-sm">
                  You retain full ownership of your finished song with clear
                  copyright documentation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <NavLink to="/create-song">
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
