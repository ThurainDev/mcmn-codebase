import React from "react";
import { MusicIcon } from "lucide-react";

const Feature_Cards = [
  {
    id: 1,
    title: "Project and Print Lyrics",
    description:
      "Project song lyrics or reproduce them in custom song and service sheets for congregational singing",
  },
  {
    id: 2,
    title: "Access Lyrics",
    description:
      "Easily access more than 200,000 song lyrics through SongSelect",
  },
  {
    id: 3,
    title: "Legal Protection",
    description:
      "Get legal protection for your cover songs and ensure proper royalty payments",
  },
  {
    id: 4,
    title: "Digital Distribution",
    description:
      "Distribute your cover songs on all major streaming platforms legally",
  },
  {
    id: 5,
    title: "Royalty Management",
    description:
      "We handle all royalty payments to original songwriters and publishers",
  },
  {
    id: 6,
    title: "Fast Processing",
    description:
      "Quick turnaround times to get your cover songs released faster",
  },
];

export default function Features_Section() {
  return (
    <>
      <div className="padding mt-5 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-[#111] rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
            What's Included
          </h2>

          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Cards */}
            {Feature_Cards.length &&
              Feature_Cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-black/50 rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1 p-6"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#E6D28C]/10 flex items-center justify-center">
                      <MusicIcon className="text-[#E6D28C]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#E6D28C] text-center mb-3 font-jetbrains">
                    {card.title}
                  </h3>
                  <p className="text-[#E6D28C]/70 text-center font-jetbrains">
                    {card.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
