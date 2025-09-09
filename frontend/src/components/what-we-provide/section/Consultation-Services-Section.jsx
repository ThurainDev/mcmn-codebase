import React from "react";
import { NavLink } from "react-router-dom";

export default function Consultation_Services_Section() {
  return (
    <>
      <div
        id="consultation"
        className="scroll-animate opacity-0 translate-y-10"
      >
        <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
            Consultation Services
          </h2>
          <p className="text-[#E6D28C]/90 mt-4 font-jetbrains text-sm sm:text-base leading-relaxed">
            Our consultation services provide expert guidance for artists,
            churches, and ministries looking to enhance their music ministry.
            Our team of industry professionals offers personalized advice
            tailored to your specific needs and goals.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300">
              <h3 className="text-[#E6D28C] font-bold mb-2">
                Artist Development
              </h3>
              <p className="text-[#E6D28C]/70 text-sm">
                Career planning, branding, and strategic guidance for Christian
                artists and musicians.
              </p>
            </div>
            <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300">
              <h3 className="text-[#E6D28C] font-bold mb-2">Ministry Growth</h3>
              <p className="text-[#E6D28C]/70 text-sm">
                Strategies for developing and expanding your church's music and
                worship ministry.
              </p>
            </div>
            <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300">
              <h3 className="text-[#E6D28C] font-bold mb-2">
                Technical Consulting
              </h3>
              <p className="text-[#E6D28C]/70 text-sm">
                Advice on equipment, software, and technical setup for recording
                and live performance.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-[#111] to-black p-6 rounded-xl border border-[#E6D28C]/20">
            <h3 className="text-xl font-bold text-center bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent mb-4">
              Book a Consultation
            </h3>
            <p className="text-[#E6D28C]/80 text-center mb-4">
              Schedule a one-on-one consultation with our experts to discuss
              your specific needs and goals.
            </p>
            <div className="text-center">
              <NavLink to="/contact">
                <button className="bg-transparent border border-[#E6D28C] text-[#E6D28C] px-6 py-3 rounded-full text-base font-bold hover:bg-[#E6D28C]/10 transition-all duration-300">
                  Contact Us
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
