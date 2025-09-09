import React from "react";
import { NavLink } from "react-router-dom";

export default function Tunes_Academy_Section() {
  return (
    <>
      <div
        id="tunes-academy"
        className="scroll-animate opacity-0 translate-y-10"
      >
        <div className="bg-[#111] p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-3 sm:pl-4 font-jetbrains">
            Tunes Academy
          </h2>
          <p className="text-[#E6D28C]/90 mt-3 sm:mt-4 font-jetbrains text-sm sm:text-base leading-relaxed">
            Our music school offers comprehensive education in music production,
            performance, and ministry leadership. Learn from experienced
            Christian musicians and industry professionals in a supportive
            environment designed to develop your God-given talents.
          </p>

          {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 2 columns */}
          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-black/50 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)]">
              <div className="text-xl sm:text-2xl mb-2">🎸</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#E6D28C] mb-2">
                Instrument Training
              </h3>
              <p className="text-[#E6D28C]/80 text-xs sm:text-sm leading-relaxed">
                Professional instruction in guitar, piano, drums, bass, and
                vocals for worship ministry.
              </p>
            </div>
            <div className="bg-black/50 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)]">
              <div className="text-xl sm:text-2xl mb-2">🎚️</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#E6D28C] mb-2">
                Music Production
              </h3>
              <p className="text-[#E6D28C]/80 text-xs sm:text-sm leading-relaxed">
                Learn recording, mixing, and mastering techniques for
                professional-quality music production.
              </p>
            </div>
            <div className="bg-black/50 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)]">
              <div className="text-xl sm:text-2xl mb-2">📝</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#E6D28C] mb-2">
                Songwriting
              </h3>
              <p className="text-[#E6D28C]/80 text-xs sm:text-sm leading-relaxed">
                Develop your songwriting skills with guidance on lyrics, melody,
                harmony, and arrangement.
              </p>
            </div>
            <div className="bg-black/50 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)]">
              <div className="text-xl sm:text-2xl mb-2">🙏</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#E6D28C] mb-2">
                Worship Leadership
              </h3>
              <p className="text-[#E6D28C]/80 text-xs sm:text-sm leading-relaxed">
                Training in worship team dynamics, spiritual leadership, and
                service planning.
              </p>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 text-center">
            <NavLink to="/tunes-academy">
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
