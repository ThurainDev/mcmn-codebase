import React from "react";
import { NavLink } from "react-router-dom";

const items = [
  // Music Distribution
  {
    id: 1,
    title: "Music Distribution",
    description:
      "We provide music distribution services to help artists reach a global audience.",
    link: "/music-distribution",
    icon: "🎵",
  },
  // Cover Song Licence
  // {
  //   id: 2,
  //   title: "Cover Song Licence",
  //   description:
  //     "We provide cover song licence services to help artists get recognition for their covers.",
  //   link: "/cover-song-copyright-licence",
  //   icon: "📝",
  // },
  // Church Licence
  // {
  //   id: 3,
  //   title: "Church Licence",
  //   description:
  //     "We provide church licence services to help churches get recognition for their music.",
  //   link: "/church-copyright-licence",
  //   icon: "⛪",
  // },
  // Tunes Academy
  {
    id: 4,
    title: "Tunes Academy",
    description:
      "We provide tunes academy services to help students learn to play the instrument.",
    link: "/tunes-academy",
    icon: "🎹",
  },
  // Create Song
  // {
  //   id: 5,
  //   title: "Create Song",
  //   description:
  //     "We provide create song services to help artists create their own music.",
  //   link: "/create-song",
  //   icon: "🎼",
  // },
];

export default function What_We_Provide_Section() {
  return (
    <>
      <div className="mt-12 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-[#111] rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden">
          <div className="rounded-t-3xl h-[300px] md:h-[400px] flex flex-col justify-center items-center font-jetbrains relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-black to-[#111] z-0"></div>
            <div className="absolute inset-0 bg-[url('/images/music-notes-pattern.png')] opacity-5 z-0"></div>

            <div className="relative z-10 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
                What We Provide
              </h1>
              <NavLink to={"/what-we-provide"}>
                <button className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black px-5 py-2 rounded-full text-sm md:text-base font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </NavLink>
            </div>
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 p-6 md:p-8 font-jetbrains">
            {items.length &&
              items.map((item, index) => (
                <NavLink key={item.id} to={item.link}>
                  <div className="flex flex-col h-full">
                    <button className="bg-black text-[#E6D28C] text-sm md:text-base lg:text-xl p-3 md:p-6 rounded-xl border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1 h-full">
                      {/* <span className="block text-3xl mb-2">🎵</span> */}
                      {item.title}
                    </button>
                  </div>
                </NavLink>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
