import React, { useState } from "react";

// Sample featured songs data
const featuredSongs = [
  {
    title: "အလင်းရောင်",
    category: "Praise",
    artist: "Min Aung",
    coverImage: "/images/song1.jpg",
    description: "A powerful praise song about God's light in darkness",
  },
  {
    title: "ကျွန်ုပ်သည်ဘုရားသခင်ကိုချစ်သည်",
    category: "Worship",
    artist: "Su Su",
    coverImage: "/images/song2.jpg",
    description: "A heartfelt worship song expressing love for God",
  },
  {
    title: "နှလုံးသားမှစကား",
    category: "Soaking",
    artist: "Kyaw Kyaw",
    coverImage: "/images/song3.jpg",
    description: "A peaceful soaking song for prayer and meditation",
  },
];

export default function Featured_Songs_Section({ activeTab }) {
  const [selectedSong, setSelectedSong] = useState(null);

  const openSongModal = (song) => {
    setSelectedSong(song);
  };

  const closeSongModal = () => {
    setSelectedSong(null);
  };
  return (
    <>
      {activeTab === "featured-songs" && (
        <div className="mt-16 scroll-animate opacity-0 translate-y-10">
          <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
              Featured Songs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredSongs.map((song, index) => (
                <div
                  key={index}
                  className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(230,210,140,0.15)] group cursor-pointer"
                  onClick={() => openSongModal(song)}
                >
                  <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                    <div className="w-full h-40 bg-gradient-to-br from-[#111] to-[#333] flex items-center justify-center">
                      <span className="text-4xl">🎵</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#E6D28C] mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {song.title}
                  </h3>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[#E6D28C]/70 text-sm">
                      {song.artist}
                    </span>
                    <span className="bg-[#D4AF37]/20 text-[#E6D28C] text-xs px-2 py-1 rounded-full">
                      {song.category}
                    </span>
                  </div>
                  <p className="text-[#E6D28C]/60 text-sm line-clamp-2">
                    {song.description}
                  </p>
                  <button className="mt-4 w-full py-2 bg-gradient-to-r from-[#E6D28C]/20 to-[#D4AF37]/20 hover:from-[#E6D28C]/30 hover:to-[#D4AF37]/30 border border-[#E6D28C]/30 rounded-lg text-[#E6D28C] text-sm transition-all duration-300">
                    Listen Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Song Modal */}
      {selectedSong && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#111] rounded-2xl border border-[#E6D28C]/20 shadow-[0_0_30px_rgba(230,210,140,0.2)] max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent">
                  {selectedSong.title}
                </h2>
                <button
                  onClick={closeSongModal}
                  className="text-[#E6D28C]/70 hover:text-[#E6D28C] text-xl"
                >
                  ✕
                </button>
              </div>
              <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-lg">
                <div className="w-full h-48 bg-gradient-to-br from-[#111] to-[#333] flex items-center justify-center">
                  <span className="text-6xl">🎵</span>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#E6D28C]/70">Artist</span>
                  <span className="text-[#E6D28C]">{selectedSong.artist}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#E6D28C]/70">Category</span>
                  <span className="bg-[#D4AF37]/20 text-[#E6D28C] text-xs px-2 py-1 rounded-full">
                    {selectedSong.category}
                  </span>
                </div>
              </div>
              <p className="text-[#E6D28C]/80 mb-6">
                {selectedSong.description}
              </p>
              <div className="flex space-x-3">
                <button className="flex-1 py-3 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] rounded-lg text-black font-medium hover:opacity-90 transition-opacity">
                  Play Now
                </button>
                <button className="flex-1 py-3 bg-transparent border border-[#E6D28C]/50 rounded-lg text-[#E6D28C] hover:border-[#E6D28C] transition-colors">
                  Add to Playlist
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
