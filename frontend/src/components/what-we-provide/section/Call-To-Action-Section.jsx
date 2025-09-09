import React from "react";
import { NavLink } from "react-router-dom";

export default function Call_To_Action_Section() {
  return (
    <>
      <div className="scroll-animate opacity-0 translate-y-10 mb-8">
        <div className="bg-gradient-to-br from-[#111] to-black p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/20 shadow-[0_0_20px_rgba(230,210,140,0.1)]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent text-center font-jetbrains">
            Ready to Get Started?
          </h2>
          <p className="text-[#E6D28C]/90 text-center max-w-3xl mx-auto font-jetbrains text-sm sm:text-base">
            Whether you're an individual artist, a church, or a ministry, we
            have services designed to help you create, share, and protect your
            music. Contact us today to discuss how we can support your musical
            journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <NavLink to="/contact">
              <button className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black px-6 py-3 rounded-full text-base font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                Contact Us
              </button>
            </NavLink>
            <NavLink to="/about">
              <button className="bg-transparent border border-[#E6D28C] text-[#E6D28C] px-6 py-3 rounded-full text-base font-bold hover:bg-[#E6D28C]/10 transition-all duration-300 w-full sm:w-auto">
                About Our Team
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
