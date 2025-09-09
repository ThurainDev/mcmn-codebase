import React from "react";
import { NavLink } from "react-router-dom";

export default function Church_Licence_Section() {
  return (
    <>
      <div
        id="church-licence"
        className="scroll-animate opacity-0 translate-y-10"
      >
        <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
            Church Licence
          </h2>
          <p className="text-[#E6D28C]/90 mt-4 font-jetbrains text-sm sm:text-base leading-relaxed">
            Our church licensing program provides comprehensive coverage for
            worship ministries to legally use, perform, and adapt songs in
            church services, events, and recordings. We offer flexible options
            to suit churches of all sizes.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 transition-all duration-300 flex flex-col h-full">
              <h3 className="text-xl font-bold text-[#E6D28C] mb-3 text-center">
                Basic
              </h3>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-[#E6D28C]">$99</span>
                <span className="text-[#E6D28C]/70">/year</span>
              </div>
              <ul className="space-y-2 flex-grow">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span className="text-[#E6D28C]/80 text-sm">
                    Sunday service performance rights
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span className="text-[#E6D28C]/80 text-sm">
                    Print/project lyrics for 100 songs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span className="text-[#E6D28C]/80 text-sm">
                    Record worship for church archives
                  </span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-[#E6D28C]/10 text-center">
                <span className="text-[#E6D28C]/70 text-sm">
                  For churches up to 100 members
                </span>
              </div>
            </div>

            <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute -right-10 top-5 bg-[#D4AF37] text-black text-xs font-bold py-1 px-10 transform rotate-45">
                POPULAR
              </div>
              <h3 className="text-xl font-bold text-[#E6D28C] mb-3 text-center">
                Standard
              </h3>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-[#E6D28C]">$199</span>
                <span className="text-[#E6D28C]/70">/year</span>
              </div>
              <ul className="space-y-2 flex-grow">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span className="text-[#E6D28C]/80 text-sm">
                    All Basic features
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span className="text-[#E6D28C]/80 text-sm">
                    Print/project lyrics for 500 songs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span className="text-[#E6D28C]/80 text-sm">
                    Live streaming rights
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span className="text-[#E6D28C]/80 text-sm">
                    Create custom arrangements
                  </span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-[#E6D28C]/10 text-center">
                <span className="text-[#E6D28C]/70 text-sm">
                  For churches with 100-500 members
                </span>
              </div>
            </div>

            <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 transition-all duration-300 flex flex-col h-full">
              <h3 className="text-xl font-bold text-[#E6D28C] mb-3 text-center">
                Premium
              </h3>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-[#E6D28C]">$349</span>
                <span className="text-[#E6D28C]/70">/year</span>
              </div>
              <ul className="space-y-2 flex-grow">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span className="text-[#E6D28C]/80 text-sm">
                    All Standard features
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span className="text-[#E6D28C]/80 text-sm">
                    Unlimited songs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span className="text-[#E6D28C]/80 text-sm">
                    Record and distribute worship albums
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span className="text-[#E6D28C]/80 text-sm">
                    Translation rights
                  </span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-[#E6D28C]/10 text-center">
                <span className="text-[#E6D28C]/70 text-sm">
                  For churches with 500+ members
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <NavLink to="/church-copyright-licence">
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
