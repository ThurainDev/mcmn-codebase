import React from "react";

export default function Who_We_Are_Section({ activeTab }) {
  return (
    <>
      {activeTab === "who we are" && (
        <div className="scroll-animate opacity-0 translate-y-10 mt-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
                Who We Are
              </h2>
              <p className="text-[#E6D28C]/90 mt-4 font-jetbrains text-sm sm:text-base leading-relaxed">
                We are a team of passionate musicians, producers, and industry
                professionals committed to elevating Christian music in Myanmar.
                Our diverse backgrounds and experiences unite under a common
                purpose: to glorify God through music and to support those who
                share this calling.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5">
                  <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                    Musicians & Artists
                  </h3>
                  <p className="text-[#E6D28C]/80 text-sm">
                    Professional musicians and artists with years of experience
                    in the Christian music industry.
                  </p>
                </div>
                <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5">
                  <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                    Producers & Engineers
                  </h3>
                  <p className="text-[#E6D28C]/80 text-sm">
                    Skilled producers and sound engineers dedicated to creating
                    high-quality Christian music.
                  </p>
                </div>
                <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5">
                  <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                    Industry Experts
                  </h3>
                  <p className="text-[#E6D28C]/80 text-sm">
                    Music industry professionals with expertise in distribution,
                    licensing, and copyright management.
                  </p>
                </div>
                <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5">
                  <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                    Ministry Leaders
                  </h3>
                  <p className="text-[#E6D28C]/80 text-sm">
                    Church and ministry leaders passionate about using music to
                    spread the Gospel throughout Myanmar.
                  </p>
                </div>
              </div>
              {/* Hover effect - hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)] */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
