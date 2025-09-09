import React from "react";

export default function What_To_Expect_Section({ activeTab }) {
  return (
    <>
      {activeTab === "what to expect" && (
        <div className="scroll-animate opacity-0 translate-y-10 mt-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
                What To Expect
              </h2>
              <p className="text-[#E6D28C]/90 mt-4 font-jetbrains text-sm sm:text-base leading-relaxed">
                When you partner with Myanmar Christian Music Network, you can
                expect excellence, integrity, and dedication in everything we
                do. Our services are designed to meet the unique needs of
                Christian musicians and ministries in Myanmar.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="text-[#D4AF37] mr-3 mt-1">✓</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#E6D28C]">
                      Professional Quality
                    </h3>
                    <p className="text-[#E6D28C]/80 text-sm">
                      High-quality music production, distribution, and licensing
                      services that meet international standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#D4AF37] mr-3 mt-1">✓</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#E6D28C]">
                      Spiritual Integrity
                    </h3>
                    <p className="text-[#E6D28C]/80 text-sm">
                      All our work is guided by Christian principles and values,
                      ensuring that everything we do honors God.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#D4AF37] mr-3 mt-1">✓</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#E6D28C]">
                      Cultural Relevance
                    </h3>
                    <p className="text-[#E6D28C]/80 text-sm">
                      Services tailored to the unique cultural context of
                      Myanmar while connecting to the global Christian music
                      community.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#D4AF37] mr-3 mt-1">✓</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#E6D28C]">
                      Ongoing Support
                    </h3>
                    <p className="text-[#E6D28C]/80 text-sm">
                      Continuous guidance and support throughout your musical
                      journey, from creation to distribution and beyond.
                    </p>
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
