import React from "react";

export default function Our_Story_Section({ activeTab }) {
  return (
    <>
      {activeTab === "our story" && (
        <div className="scroll-animate opacity-0 translate-y-10 mt-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
                Our Story
              </h2>
              <p className="text-[#E6D28C]/90 mt-4 font-jetbrains text-sm sm:text-base leading-relaxed">
                Myanmar Christian Music Network was founded with a vision to
                connect Christian musicians, artists, and music lovers across
                Myanmar. Our journey began with a simple idea: to create a
                platform where Christian music could thrive, reaching hearts and
                minds throughout the country and beyond.
              </p>
              <p className="text-[#E6D28C]/90 mt-4 font-jetbrains text-sm sm:text-base leading-relaxed">
                Since our inception, we've grown into a vibrant community
                dedicated to promoting excellence in Christian music, providing
                resources for artists, and creating opportunities for
                collaboration and growth in the Myanmar Christian music scene.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
