import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function Modal({ selectedPartner, setSelectedPartner }) {
  return (
    <>
      {selectedPartner && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center px-4 transition-all duration-300">
          <div
            className="relative bg-gradient-to-b from-[#111] to-[#0a0a0a] rounded-3xl shadow-[0_0_30px_rgba(230,210,140,0.2)] p-8 max-w-md w-full border border-[#E6D28C]/20 transform transition-all duration-500 animate-in"
            style={{
              "--animate-in-duration": "0.5s",
              "--animate-in-timing": "ease-out",
              "--animate-in-from-opacity": "0",
              "--animate-in-to-opacity": "1",
              "--animate-in-from-transform": "translateY(20px)",
              "--animate-in-to-transform": "translateY(0)",
            }}
          >
            <button
              onClick={() => setSelectedPartner(null)}
              className="absolute top-4 right-4 text-[#E6D28C]/70 text-2xl hover:text-[#E6D28C] transition-colors duration-300"
            >
              ×
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0a0a0a] to-[#111] flex items-center justify-center mb-4 border-2 border-[#E6D28C]/20 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
                <img
                  src={selectedPartner.logo}
                  alt={selectedPartner.name}
                  className="w-20 h-20 object-contain rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 text-[#E6D28C]">
                {selectedPartner.name}
              </h3>
              <p className="text-sm mb-3 text-[#E6D28C]/80">
                Every Sunday {selectedPartner.times?.join(", ")}
              </p>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E6D28C]/30 to-transparent my-4"></div>

              <p className="text-[#E6D28C]/80 text-sm mb-4 italic">
                "{selectedPartner.description}"
              </p>

              <div className="grid grid-cols-2 gap-4 w-full mb-4">
                <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#E6D28C]/10">
                  <p className="text-[#E6D28C]/60 text-xs mb-1">Founded</p>
                  <p className="text-[#E6D28C] font-semibold">
                    {selectedPartner.founded || "N/A"}
                  </p>
                </div>
                <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#E6D28C]/10">
                  <p className="text-[#E6D28C]/60 text-xs mb-1">Members</p>
                  <p className="text-[#E6D28C] font-semibold">
                    {selectedPartner.members || "N/A"}
                  </p>
                </div>
              </div>

              <div className="text-left text-sm space-y-3 w-full bg-[#0a0a0a] p-4 rounded-lg border border-[#E6D28C]/10">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-[#E6D28C]/80">
                    {selectedPartner.address}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-[#E6D28C]/80">
                    {selectedPartner.phone}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span className="text-[#E6D28C]/80">
                    {selectedPartner.email}
                  </span>
                </div>
              </div>

              {selectedPartner.events && (
                <div className="w-full mt-4">
                  <p className="text-[#E6D28C] text-sm font-semibold mb-2">
                    Regular Events
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {selectedPartner.events.map((event, index) => (
                      <span
                        key={index}
                        className="bg-[#0a0a0a] text-[#E6D28C]/70 text-xs px-3 py-1 rounded-full border border-[#E6D28C]/10"
                      >
                        {event}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E6D28C]/30 to-transparent my-4"></div>

              <div className="text-sm font-semibold mb-2 text-[#E6D28C]">
                Connect Online
              </div>
              <div className="flex justify-center gap-6 text-2xl">
                {selectedPartner.links?.facebook && (
                  <a
                    href={selectedPartner.links.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#E6D28C]/70 hover:text-[#E6D28C] transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaFacebook />
                  </a>
                )}
                {selectedPartner.links?.youtube && (
                  <a
                    href={selectedPartner.links.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#E6D28C]/70 hover:text-[#E6D28C] transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaYoutube />
                  </a>
                )}
                {selectedPartner.links?.instagram && (
                  <a
                    href={selectedPartner.links.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#E6D28C]/70 hover:text-[#E6D28C] transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaInstagram />
                  </a>
                )}
                {selectedPartner.links?.tiktok && (
                  <a
                    href={selectedPartner.links.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#E6D28C]/70 hover:text-[#E6D28C] transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaTiktok />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
