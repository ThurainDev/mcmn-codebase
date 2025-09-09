import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import songs from "../../../data/songs.json"; // your JSON data

const categories = ["Praise", "Worship", "Soaking", "Christmas"];
const myanmarAlphabet = [
  "က",
  "ခ",
  "ဂ",
  "ဃ",
  "င",
  "စ",
  "ဆ",
  "ဇ",
  "ဈ",
  "ည",
  "ဋ",
  "ဌ",
  "ဍ",
  "ဎ",
  "ဏ",
  "တ",
  "ထ",
  "ဒ",
  "ဓ",
  "န",
  "ပ",
  "ဖ",
  "ဗ",
  "ဘ",
  "မ",
  "ယ",
  "ရ",
  "လ",
  "ဝ",
  "သ",
  "ဟ",
  "ဠ",
  "အ",
];
const ITEMS_PER_PAGE = 40;

export default function Song_Collection_Section({ activeTab }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAlphabet, setSelectedAlphabet] = useState("");
  const [showAlphabetDropdown, setShowAlphabetDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dropdownRef = useRef(null);

  const filteredSongs = songs
    .filter((song) => {
      if (selectedCategory !== "All" && song.category !== selectedCategory) {
        return false;
      }
      if (selectedAlphabet) {
        // More robust Myanmar character matching
        const firstChar = [...song.title][0]; // Get first character using array spread
        return firstChar === selectedAlphabet;
      }
      return true;
    })
    .filter((song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  const totalPages = Math.ceil(filteredSongs.length / ITEMS_PER_PAGE);
  const paginatedSongs = filteredSongs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Add this useEffect for handling clicks outside the dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowAlphabetDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {activeTab === "songs" && (
        <div className="mt-16 scroll-animate opacity-0 translate-y-10">
          <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
              Song Collection
            </h2>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["All", ...categories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black font-medium"
                      : "bg-black/50 text-[#E6D28C] border-[#E6D28C]/30 hover:border-[#E6D28C]/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search and Alphabet Dropdown */}
            <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
              {/* Search Input */}
              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search by name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 rounded-lg bg-black/50 border border-[#E6D28C]/20 focus:border-[#E6D28C]/50 focus:outline-none text-[#E6D28C] w-full md:w-64 transition-all duration-300"
                />
                <span className="absolute left-3 top-3.5 text-[#E6D28C]/50">
                  🔍
                </span>
              </div>

              {/* Myanmar Alphabet Dropdown */}
              <div
                className="relative inline-block text-left w-full md:w-auto"
                ref={dropdownRef}
              >
                <button
                  className={`px-4 py-3 border rounded-lg bg-black/50 text-[#E6D28C] hover:border-[#E6D28C]/50 transition-all duration-300 w-full md:w-auto flex justify-between items-center ${
                    selectedAlphabet
                      ? "border-[#E6D28C]/70"
                      : "border-[#E6D28C]/30"
                  }`}
                  onClick={() => setShowAlphabetDropdown(!showAlphabetDropdown)}
                >
                  <span>{selectedAlphabet || "Search by က - အ"}</span>
                  <span className="ml-2">▼</span>
                </button>

                {showAlphabetDropdown && (
                  <div className="absolute z-50 mt-2 w-64 max-h-64 overflow-y-auto bg-[#111] border border-[#E6D28C]/20 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] p-4 right-0 md:right-30">
                    <div className="grid grid-cols-6 gap-2">
                      {/* Add clear button */}
                      <button
                        onClick={() => {
                          setSelectedAlphabet("");
                          setShowAlphabetDropdown(false);
                        }}
                        className="col-span-6 text-sm px-2 py-1 mb-2 rounded bg-[#E6D28C]/10 text-[#E6D28C] hover:bg-[#E6D28C]/20 transition-colors"
                      >
                        Clear Filter
                      </button>

                      {myanmarAlphabet.map((char) => (
                        <button
                          key={char}
                          onClick={() => {
                            setSelectedAlphabet(char);
                            setShowAlphabetDropdown(false);
                            setSearchQuery(""); // Optional: clear search on alphabet filter
                          }}
                          className={`text-sm px-2 py-1 rounded hover:bg-[#E6D28C]/10 text-[#E6D28C] transition-colors ${
                            selectedAlphabet === char ? "bg-[#E6D28C]/20" : ""
                          }`}
                        >
                          {char}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Songs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {paginatedSongs.map((song, index) => (
                <Link key={index} to={`/songs/${index}`}>
                  <div className="p-4 bg-black/50 border border-[#E6D28C]/10 rounded-xl shadow-sm hover:shadow-[0_0_15px_rgba(230,210,140,0.15)] hover:border-[#E6D28C]/30 transition-all duration-300 text-center text-lg font-medium text-[#E6D28C] group">
                    <div className="group-hover:text-[#D4AF37] transition-colors">
                      {song.title}
                    </div>
                    <div className="mt-2 text-xs text-[#E6D28C]/60 bg-[#E6D28C]/10 inline-block px-2 py-1 rounded-full">
                      {song.category}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-2 text-sm">
              {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded-full transition-all duration-300 ${
                      pageNum === currentPage
                        ? "bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black font-medium"
                        : "border border-[#E6D28C]/30 text-[#E6D28C] hover:border-[#E6D28C]/50"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
