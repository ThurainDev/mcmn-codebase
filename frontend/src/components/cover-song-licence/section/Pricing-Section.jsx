import React, { useState } from "react";
import { LucideArrowDownCircle } from "lucide-react";

export default function Pricing_Section() {
  const [showPricing, setShowPricing] = useState(false);
  return (
    <>
      <div className="padding mt-8 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-[#111] rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] p-8 md:p-12">
          {/* Pricing & Order Today Button */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            {/* Pricing Button */}
            <button
              onClick={() => setShowPricing(!showPricing)}
              className="w-full sm:w-auto bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black rounded-full px-8 py-3 font-semibold font-jetbrains flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105"
            >
              VIEW PRICING
              <LucideArrowDownCircle size={20} />
            </button>

            {/* Order Today Button */}
            <button className="w-full sm:w-auto bg-black border border-[#E6D28C]/50 text-[#E6D28C] rounded-full px-8 py-3 font-semibold font-jetbrains hover:bg-[#E6D28C]/10 transition-all duration-300">
              ORDER TODAY
            </button>
          </div>

          {/* Pricing Menu */}
          {showPricing && (
            <div className="w-full mt-10 bg-black border border-[#E6D28C]/20 rounded-xl shadow-[0_0_15px_rgba(230,210,140,0.1)] z-50 transition-all duration-500">
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-6 font-jetbrains bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent pb-2 border-b border-[#E6D28C]/20">
                  Pricing: Cover Song Copyright Licence
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Basic Licence */}
                  <div className="bg-[#111] text-[#E6D28C]/90 rounded-xl p-6 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 font-jetbrains">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold text-[#E6D28C]">
                        Basic License
                      </h4>
                      <span className="text-2xl font-bold bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent">
                        $99
                      </span>
                    </div>
                    <p className="text-sm text-[#E6D28C]/70 mb-5">
                      Perfect for beginners
                    </p>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-[#E6D28C]"
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
                        Up to 5 cover songs
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-[#E6D28C]"
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
                        Basic distribution
                      </li>
                    </ul>
                  </div>

                  {/* Pro License */}
                  <div className="bg-[#111] text-[#E6D28C]/90 rounded-xl p-6 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 font-jetbrains relative overflow-hidden transform hover:-translate-y-1">
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black text-xs px-3 py-1 rounded-bl-lg font-semibold">
                      Popular
                    </div>
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold text-[#E6D28C]">
                        Pro License
                      </h4>
                      <span className="text-2xl font-bold bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent">
                        $199
                      </span>
                    </div>
                    <p className="text-sm text-[#E6D28C]/70 mb-5">
                      For professional artists
                    </p>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-[#E6D28C]"
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
                        Up to 15 cover songs
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-[#E6D28C]"
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
                        Priority distribution
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-[#E6D28C]"
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
                        Marketing support
                      </li>
                    </ul>
                  </div>

                  {/* Enterprise License */}
                  <div className="bg-[#111] text-[#E6D28C]/90 rounded-xl p-6 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 font-jetbrains">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold text-[#E6D28C]">
                        Enterprise Licence
                      </h4>
                      <span className="text-2xl font-bold bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent">
                        $299
                      </span>
                    </div>
                    <p className="text-sm text-[#E6D28C]/70 mb-5">
                      For large organizations
                    </p>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-[#E6D28C]"
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
                        Unlimited cover songs
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-[#E6D28C]"
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
                        Premium distribution
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-[#E6D28C]"
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
                        Dedicated support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
