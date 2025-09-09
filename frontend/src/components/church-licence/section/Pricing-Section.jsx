import React from "react";
import { NavLink } from "react-router-dom";

export default function Pricing_Section() {
  return (
    <>
      <div
        id="pricing-section"
        className="padding mt-8 pb-8 scroll-animate opacity-0 translate-y-10"
      >
        <div className="bg-[#111] rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent text-center">
            License Pricing
          </h2>
          <p className="text-[#E6D28C]/90 mb-8 text-center max-w-3xl mx-auto">
            Choose the license that best fits your church's size and needs. All
            licenses include our core features with additional benefits at
            higher tiers.
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Basic License */}
            <div className="bg-black/70 rounded-2xl overflow-hidden transition-transform duration-300 hover:transform hover:scale-[1.02] border border-[#E6D28C]/20 hover:border-[#E6D28C]/40 hover:shadow-[0_0_20px_rgba(230,210,140,0.2)]">
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                  Basic License
                </h3>
                <p className="text-[#E6D28C]/70 text-sm mb-4">
                  For small churches up to 100 attendees
                </p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-[#E6D28C]">$99</span>
                  <span className="text-[#E6D28C]/70 ml-2">/year</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-[#E6D28C]/80 text-sm">
                    <svg
                      className="w-4 h-4 mr-2 text-[#D4AF37]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Project and print lyrics
                  </li>
                  <li className="flex items-center text-[#E6D28C]/80 text-sm">
                    <svg
                      className="w-4 h-4 mr-2 text-[#D4AF37]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Access to song database
                  </li>
                  <li className="flex items-center text-[#E6D28C]/80 text-sm">
                    <svg
                      className="w-4 h-4 mr-2 text-[#D4AF37]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Record services for shut-ins
                  </li>
                  <li className="flex items-center text-[#E6D28C]/80 text-sm">
                    <svg
                      className="w-4 h-4 mr-2 text-[#D4AF37]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Basic email support
                  </li>
                </ul>
                <button className="w-full py-2 bg-transparent border border-[#E6D28C] text-[#E6D28C] rounded-full text-base font-bold hover:bg-[#E6D28C]/10 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>

            {/* Premium License */}
            <div className="bg-black/70 rounded-2xl overflow-hidden transition-transform duration-300 hover:transform hover:scale-[1.02] border border-[#E6D28C]/20 hover:border-[#E6D28C]/40 hover:shadow-[0_0_20px_rgba(230,210,140,0.2)] relative">
              <div className="absolute top-0 right-0 bg-[#D4AF37] text-black text-xs px-3 py-1 rounded-bl-lg font-bold">
                POPULAR
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                  Premium License
                </h3>
                <p className="text-[#E6D28C]/70 text-sm mb-4">
                  For medium churches with 101-500 attendees
                </p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-[#E6D28C]">
                    $199
                  </span>
                  <span className="text-[#E6D28C]/70 ml-2">/year</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-[#E6D28C]/80 text-sm">
                    <svg
                      className="w-4 h-4 mr-2 text-[#D4AF37]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    All Basic features
                  </li>
                  <li className="flex items-center text-[#E6D28C]/80 text-sm">
                    <svg
                      className="w-4 h-4 mr-2 text-[#D4AF37]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Live streaming rights
                  </li>
                  <li className="flex items-center text-[#E6D28C]/80 text-sm">
                    <svg
                      className="w-4 h-4 mr-2 text-[#D4AF37]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Custom arrangements
                  </li>
                  <li className="flex items-center text-[#E6D28C]/80 text-sm">
                    <svg
                      className="w-4 h-4 mr-2 text-[#D4AF37]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Priority support
                  </li>
                </ul>
                <button className="w-full py-2 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black rounded-full text-base font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>

            {/* Enterprise License */}
            <div className="bg-black/70 rounded-2xl overflow-hidden transition-transform duration-300 hover:transform hover:scale-[1.02] border border-[#E6D28C]/20 hover:border-[#E6D28C]/40 hover:shadow-[0_0_20px_rgba(230,210,140,0.2)]">
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                  Enterprise License
                </h3>
                <p className="text-[#E6D28C]/70 text-sm mb-4">
                  For large churches with 500+ attendees
                </p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-[#E6D28C]">
                    $299
                  </span>
                  <span className="text-[#E6D28C]/70 ml-2">/year</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-[#E6D28C]/80 text-sm">
                    <svg
                      className="w-4 h-4 mr-2 text-[#D4AF37]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    All Premium features
                  </li>
                  <li className="flex items-center text-[#E6D28C]/80 text-sm">
                    <svg
                      className="w-4 h-4 mr-2 text-[#D4AF37]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Multi-campus coverage
                  </li>
                  <li className="flex items-center text-[#E6D28C]/80 text-sm">
                    <svg
                      className="w-4 h-4 mr-2 text-[#D4AF37]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Dedicated account manager
                  </li>
                  <li className="flex items-center text-[#E6D28C]/80 text-sm">
                    <svg
                      className="w-4 h-4 mr-2 text-[#D4AF37]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Unlimited support
                  </li>
                </ul>
                <button className="w-full py-2 bg-transparent border border-[#E6D28C] text-[#E6D28C] rounded-full text-base font-bold hover:bg-[#E6D28C]/10 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-[#E6D28C]/70 mb-6">
              Need a custom solution for your church network or denomination?
              Contact us for special pricing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black px-6 py-3 rounded-full text-base font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105">
                Order Today
              </button>
              <NavLink to="/contact">
                <button className="bg-transparent border border-[#E6D28C] text-[#E6D28C] px-6 py-3 rounded-full text-base font-bold hover:bg-[#E6D28C]/10 transition-all duration-300">
                  Request Custom Quote
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
