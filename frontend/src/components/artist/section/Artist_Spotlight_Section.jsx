import React from "react";
import { NavLink } from "react-router-dom";
// images
import artist_1 from "../../../assets/images/asyrday.jpg";

export default function Artist_Spotlight_Section({
  activeTab,
  featuredArtists,
}) {
  return (
    <>
      {activeTab === "spotlight" && (
        <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
          <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
              Artist Spotlight
            </h2>

            {featuredArtists.map((artist, index) => (
              <div
                key={index}
                className="mb-12 scroll-animate opacity-0 translate-y-10"
              >
                <div className="bg-black/50 p-6 rounded-xl border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3 flex justify-center">
                      <div className="w-48 h-48 rounded-full bg-[#E6D28C]/20 flex items-center justify-center overflow-hidden border-4 border-[#E6D28C]/30">
                        <img
                          src={artist_1}
                          alt={artist.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-2xl font-bold text-[#E6D28C] mb-2">
                        {artist.name}
                      </h3>
                      <p className="text-[#E6D28C]/70 mb-1">
                        Role: {artist.role}
                      </p>
                      <p className="text-[#E6D28C]/70 mb-4">
                        Genre: {artist.genre}
                      </p>
                      <p className="text-[#E6D28C]/90 mb-4">{artist.bio}</p>
                      <div className="mb-4">
                        <h4 className="text-[#E6D28C] font-bold mb-2">
                          Achievements:
                        </h4>
                        <ul className="list-disc list-inside text-[#E6D28C]/80">
                          {artist.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      <NavLink to={artist.link} className="inline-block">
                        <button className="px-6 py-2 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black rounded-full font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.3)] transition-all duration-300">
                          Full Profile
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
