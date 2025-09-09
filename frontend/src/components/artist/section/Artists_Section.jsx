import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// images
import artist_1 from "../../../assets/images/asyrday.jpg";
// components | modal
import Artist_Modal from "../modal/Artist_Modal";

// roles
const roles = [
  {
    id: 1,
    name: "ALL",
  },
  {
    id: 2,
    name: "Singer",
  },
  {
    id: 3,
    name: "Composer",
  },
  {
    id: 4,
    name: "Musician",
  },
];

// genres
const genres = [
  {
    id: 1,
    name: "ALL",
  },
  {
    id: 2,
    name: "Contemporary",
  },
  {
    id: 3,
    name: "Worship",
  },
  {
    id: 4,
    name: "Classical",
  },
  {
    id: 5,
    name: "Gospel",
  },
  {
    id: 6,
    name: "Hymnal",
  },
  {
    id: 7,
    name: "Fusion",
  },
  {
    id: 8,
    name: "Instrumental",
  },
];

export default function Artists_Section({ activeTab, artists }) {
  const [roleFilter, setRoleFilter] = useState("ALL");
  const [genreFilter, setGenreFilter] = useState("ALL");
  const [search, setSearch] = useState("");
  const [selectedArtist, setSelectedArtist] = useState(null);

  const filtered = artists.filter(
    (artist) =>
      (roleFilter === "ALL" || artist.role === roleFilter) &&
      (genreFilter === "ALL" || artist.genre === genreFilter) &&
      artist.name.toLowerCase().includes(search.toLowerCase())
  );

  // Function to handle artist selection for modal
  const handleArtistClick = (artist, e) => {
    e.preventDefault();
    setSelectedArtist(artist);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedArtist(null);
  };

  return (
    <>
      {activeTab === "artists" && (
        <div className="mt-16 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
          <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
              Discover Our Artists
            </h2>

            {/* Enhanced Filters & Search */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              {/* Role and Genre Filter */}
              <div className="space-y-4">
                {/* Role */}
                <div>
                  <h3 className="text-[#E6D28C] font-bold mb-2">Role</h3>
                  <div className="flex gap-2 flex-wrap">
                    {roles.map((role, index) => (
                      <button
                        key={index}
                        onClick={() => setRoleFilter(role.name)}
                        className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                          roleFilter === role.name
                            ? "bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black font-bold"
                            : "bg-black/50 text-[#E6D28C]/80 border border-[#E6D28C]/20 hover:border-[#E6D28C]/40"
                        }`}
                      >
                        {role.name}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Genre */}
                <div>
                  <h3 className="text-[#E6D28C] font-bold mb-2">Genre</h3>
                  <div className="flex gap-2 flex-wrap">
                    {genres.map((genre, index) => (
                      <button
                        key={index}
                        onClick={() => setGenreFilter(genre.name)}
                        className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                          genreFilter === genre.name
                            ? "bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black font-bold"
                            : "bg-black/50 text-[#E6D28C]/80 border border-[#E6D28C]/20 hover:border-[#E6D28C]/40"
                        }`}
                      >
                        {genre.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Search */}
              <div className="relative w-full lg:w-64">
                <input
                  type="text"
                  placeholder="Search artists..."
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-[#E6D28C]/20 bg-black/30 text-[#E6D28C] placeholder-[#E6D28C]/50 focus:outline-none focus:border-[#E6D28C]/50 transition-all duration-300"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <span className="absolute left-3 top-3 text-[#E6D28C]/70">
                  🔍
                </span>
              </div>
            </div>

            {/* Enhanced Artist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((artist, index) => (
                <div
                  key={index}
                  onClick={(e) => handleArtistClick(artist, e)}
                  className="bg-black rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                >
                  {/* Image */}
                  <div className="h-48 bg-gradient-to-b from-[#111] to-black flex items-center justify-center">
                    <div className="w-36 h-36 rounded-full bg-[#E6D28C]/20 flex items-center justify-center overflow-hidden">
                      <img
                        src={artist_1}
                        alt={artist.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Profile */}
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold text-[#E6D28C]">
                      {artist.name}
                    </h3>
                    <p className="text-[#E6D28C]/70 text-sm mt-1">
                      Role: {artist.role}
                    </p>
                    <p className="text-[#E6D28C]/70 text-sm">
                      Genre: {artist.genre}
                    </p>
                    <NavLink to={"/artist-profile/susannamin"}>
                      <button className="mt-4 px-4 py-2 bg-[#111] text-[#E6D28C] rounded-full text-sm border border-[#E6D28C]/30 hover:bg-[#E6D28C] hover:text-black transition-all duration-300">
                        View Profile
                      </button>
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-10">
                <p className="text-[#E6D28C]/70 text-lg">
                  No artists found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Artist Modal */}
      <Artist_Modal selectedArtist={selectedArtist} closeModal={closeModal} />
    </>
  );
}
