import React from "react";
import { NavLink } from "react-router-dom";
// images
import artist_1 from "../../../assets/images/asyrday.jpg";

export default function Artist_Modal({ selectedArtist, closeModal }) {
  return (
    <>
      {selectedArtist && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#111] rounded-xl border border-[#E6D28C]/20 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#E6D28C]">
                  {selectedArtist.name}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-[#E6D28C]/70 hover:text-[#E6D28C] text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3">
                  <div className="rounded-xl overflow-hidden border border-[#E6D28C]/20">
                    <img
                      src={artist_1}
                      alt={selectedArtist.name}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-[#E6D28C]/70 text-sm">Role</h3>
                      <p className="text-[#E6D28C]">{selectedArtist.role}</p>
                    </div>

                    <div>
                      <h3 className="text-[#E6D28C]/70 text-sm">Genre</h3>
                      <p className="text-[#E6D28C]">{selectedArtist.genre}</p>
                    </div>

                    <div>
                      <h3 className="text-[#E6D28C]/70 text-sm">Biography</h3>
                      <p className="text-[#E6D28C]">{selectedArtist.bio}</p>
                    </div>

                    <div>
                      <h3 className="text-[#E6D28C]/70 text-sm">
                        Achievements
                      </h3>
                      <ul className="list-disc list-inside text-[#E6D28C]">
                        {selectedArtist.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <NavLink
                      to={"/artist-profile/susannamin"}
                      className="inline-block"
                    >
                      <button className="px-6 py-2 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black rounded-full font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.3)] transition-all duration-300">
                        Visit Full Profile
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
