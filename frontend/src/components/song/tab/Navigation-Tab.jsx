import React from "react";

export default function Navigation_Tab({ activeTab, setActiveTab }) {
  return (
    <>
      <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="mt-10 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {/* Songs */}
            <button
              onClick={() => setActiveTab("songs")}
              className={`px-6 py-3 rounded-full text-base font-bold transition-all duration-300 ${
                activeTab === "songs"
                  ? "bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black shadow-[0_0_15px_rgba(230,210,140,0.3)]"
                  : "bg-black/50 text-[#E6D28C]/80 border border-[#E6D28C]/20 hover:border-[#E6D28C]/40"
              }`}
            >
              Songs
            </button>
            {/* Featured Songs */}
            <button
              onClick={() => setActiveTab("featured-songs")}
              className={`px-6 py-3 rounded-full text-base font-bold transition-all duration-300 ${
                activeTab === "featured-songs"
                  ? "bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black shadow-[0_0_15px_rgba(230,210,140,0.3)]"
                  : "bg-black/50 text-[#E6D28C]/80 border border-[#E6D28C]/20 hover:border-[#E6D28C]/40"
              }`}
            >
              Featured Songs
            </button>
            {/* Testimonials */}
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`px-6 py-3 rounded-full text-base font-bold transition-all duration-300 ${
                activeTab === "testimonials"
                  ? "bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black shadow-[0_0_15px_rgba(230,210,140,0.3)]"
                  : "bg-black/50 text-[#E6D28C]/80 border border-[#E6D28C]/20 hover:border-[#E6D28C]/40"
              }`}
            >
              Testimonials
            </button>
            {/* Upcoming Releases */}
            <button
              onClick={() => setActiveTab("events")}
              className={`px-6 py-3 rounded-full text-base font-bold transition-all duration-300 ${
                activeTab === "events"
                  ? "bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black shadow-[0_0_15px_rgba(230,210,140,0.3)]"
                  : "bg-black/50 text-[#E6D28C]/80 border border-[#E6D28C]/20 hover:border-[#E6D28C]/40"
              }`}
            >
              Upcoming Events
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
