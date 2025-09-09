import React from "react";

export default function Navigation_Tabs({ activeTab, setActiveTab }) {
  return (
    <>
      <div className="padding scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-[#111] mt-10 mb-10 rounded-xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden">
          <div className="flex justify-center text-sm font-medium text-center">
            {/* Overview */}
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-3 sm:px-6 sm:py-4 transition-colors duration-300 ${
                activeTab === "overview"
                  ? "bg-[#E6D28C] rounded-xl text-black font-bold"
                  : "text-[#E6D28C] hover:bg-[#E6D28C]/10 rounded-xl"
              }`}
            >
              Overview
            </button>
            {/* Features */}
            <button
              onClick={() => setActiveTab("features")}
              className={`px-4 py-3 sm:px-6 sm:py-4 transition-colors duration-300 ${
                activeTab === "features"
                  ? "bg-[#E6D28C] rounded-xl text-black font-bold"
                  : "text-[#E6D28C] hover:bg-[#E6D28C]/10 rounded-xl"
              }`}
            >
              Features
            </button>
            {/* Licensing Process */}
            <button
              onClick={() => setActiveTab("process")}
              className={`px-4 py-3 sm:px-6 sm:py-4 transition-colors duration-300 ${
                activeTab === "process"
                  ? "bg-[#E6D28C] rounded-xl text-black font-bold"
                  : "text-[#E6D28C] hover:bg-[#E6D28C]/10 rounded-xl"
              }`}
            >
              Licensing Process
            </button>
            {/* FAQ */}
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-4 py-3 sm:px-6 sm:py-4 transition-colors duration-300 ${
                activeTab === "faq"
                  ? "bg-[#E6D28C] rounded-xl text-black font-bold"
                  : "text-[#E6D28C] hover:bg-[#E6D28C]/10 rounded-xl"
              }`}
            >
              FAQ
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
