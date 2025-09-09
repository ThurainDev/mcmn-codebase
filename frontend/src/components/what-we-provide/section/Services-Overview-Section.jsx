import React from "react";
import { Link } from "react-router-dom";

const services = [
  // Music Distribution
  {
    id: 1,
    name: "Music Distribution",
    description:
      "Get your music on all major streaming platforms and reach a global audience.",
    icon: "🎵",
    link: "/music-distribution",
  },
  // Cover Song Licence
  // {
  //   id: 2,
  //   name: "Cover Song Licence",
  //   description:
  //     "Legally cover songs with proper licensing and royalty management.",
  //   icon: "📝",
  //   link: "/cover-song-licence",
  // },
  // Church Licence
  // {
  //   id: 3,
  //   name: "Church Licence",
  //   description:
  //     "Comprehensive licensing solutions for churches and worship ministries.",
  //   icon: "⛪",
  //   link: "/church-licence",
  // },
  // Tunes Academy
  {
    id: 4,
    name: "Tunes Academy",
    description:
      "Learn music production, theory, and performance from industry professionals.",
    icon: "🎹",
    link: "/tunes-academy",
  },
  // Create Song
  // {
  //   id: 5,
  //   name: "Create Song",
  //   description:
  //     "Professional songwriting and production services for artists and ministries.",
  //   icon: "🎼",
  //   link: "/create-song",
  // },
];

export default function Services_Overview_Section() {
  return (
    <>
      <div className="mt-6 sm:mt-10 scroll-animate opacity-0 translate-y-10">
        <div className="bg-[#111] p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent font-jetbrains text-center">
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-[#E6D28C]/90 mb-6 sm:mb-8 font-jetbrains text-center max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            Myanmar Christian Music Network offers a comprehensive suite of
            services designed to support Christian musicians, churches, and
            ministries throughout Myanmar. From music distribution to licensing
            and education, we provide the tools and resources you need to
            create, share, and protect your music.
          </p>

          {/* Mobile: 1 column, Small screens: 2 columns, Large screens: 2 columns */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 font-jetbrains">
            {/* Services */}
            {services.length &&
              services.map((service, index) => (
                <Link to={service.link} key={service.id}>
                  <div className="bg-black h-full p-4 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center min-h-[160px] sm:min-h-[180px]">
                    <span className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3">
                      {service.icon}
                    </span>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#E6D28C] mb-1 sm:mb-2 leading-tight">
                      {service.name}
                    </h3>
                    <p className="text-[#E6D28C]/70 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
