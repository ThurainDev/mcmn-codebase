import React from "react";

export default function Mission_And_Vision_Section({ activeTab }) {
  return (
    <>
      {activeTab === "mission & vision" && (
        <div className="scroll-animate opacity-0 translate-y-10 mt-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
                Our Mission & Vision
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="bg-black/50 p-6 rounded-xl border border-[#E6D28C]/10">
                  <h3 className="text-xl font-bold text-[#E6D28C] mb-3 border-b border-[#E6D28C]/20 pb-2">
                    Our Mission
                  </h3>
                  <p className="text-[#E6D28C]/80 text-sm leading-relaxed">
                    To empower Christian musicians in Myanmar by providing
                    professional resources, education, and platforms that enable
                    them to create, distribute, and share music that glorifies
                    God and reaches hearts across the nation and beyond.
                  </p>
                </div>
                <div className="bg-black/50 p-6 rounded-xl border border-[#E6D28C]/10">
                  <h3 className="text-xl font-bold text-[#E6D28C] mb-3 border-b border-[#E6D28C]/20 pb-2">
                    Our Vision
                  </h3>
                  <p className="text-[#E6D28C]/80 text-sm leading-relaxed">
                    To see Myanmar Christian music flourish nationally and
                    internationally, with artists creating excellent music that
                    impacts culture, strengthens the church, and brings the
                    message of Christ to new audiences through innovative and
                    authentic expressions of worship and testimony. "Music has
                    the power to touch hearts and transform lives. Our mission
                    is to harness this power for God's glory in Myanmar."
                  </p>
                </div>
              </div>
              {/* Hover effect - hover:border-[#E6D28C]/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(230,210,140,0.15)] */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
