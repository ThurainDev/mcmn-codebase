import React from "react";

// Sample upcoming releases
const upcomingReleases = [
  {
    title: "ကောင်းကင်ဘုံမှတေးသီချင်း",
    releaseDate: "December 15, 2023",
    artist: "Various Artists",
    type: "Album",
  },
  {
    title: "မေတ္တာရှင်",
    releaseDate: "January 5, 2024",
    artist: "Nay Lin",
    type: "Single",
  },
  {
    title: "ဘုရားသခင်၏ကျေးဇူးတော်",
    releaseDate: "February 10, 2024",
    artist: "Htet Htet",
    type: "EP",
  },
];

export default function Upcoming_Releases_Section({ activeTab }) {
  return (
    <>
      {activeTab === "events" && (
        <div className="mt-16 mb-16 scroll-animate opacity-0 translate-y-10">
          <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
              Upcoming Releases
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="border-b border-[#E6D28C]/20">
                    <th className="py-3 px-4 text-left text-[#E6D28C]">
                      Title
                    </th>
                    <th className="py-3 px-4 text-left text-[#E6D28C]">
                      Artist
                    </th>
                    <th className="py-3 px-4 text-left text-[#E6D28C]">Type</th>
                    <th className="py-3 px-4 text-left text-[#E6D28C]">
                      Release Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingReleases.map((release, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#E6D28C]/10 hover:bg-[#E6D28C]/5 transition-colors"
                    >
                      <td className="py-4 px-4 text-[#E6D28C]/90">
                        {release.title}
                      </td>
                      <td className="py-4 px-4 text-[#E6D28C]/70">
                        {release.artist}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-block px-2 py-1 rounded-full text-xs ${
                            release.type === "Album"
                              ? "bg-[#D4AF37]/20 text-[#E6D28C]"
                              : release.type === "EP"
                              ? "bg-[#9370DB]/20 text-[#E6D28C]"
                              : "bg-[#4682B4]/20 text-[#E6D28C]"
                          }`}
                        >
                          {release.type}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-[#E6D28C]/70">
                        {release.releaseDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
