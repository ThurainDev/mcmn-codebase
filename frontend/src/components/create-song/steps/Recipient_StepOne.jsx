import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { X, ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

export default function Recipient_StepOne() {
  // Recipient's Name
  const [recipientName, setRecipientName] = useState("");
  const handleRecipientNameChange = (e) => {
    setRecipientName(e.target.value);
  };
  // Who's this for?
  let whoThisFor = [
    {
      id: 1,
      title: "Wife",
    },
    {
      id: 2,
      title: "Husband",
    },
    {
      id: 3,
      title: "Partner",
    },
    {
      id: 4,
      title: "Boyfriend",
    },
    {
      id: 5,
      title: "Girlfriend",
    },
    {
      id: 6,
      title: "Mom",
    },
    {
      id: 7,
      title: "Dad",
    },
    {
      id: 8,
      title: "Parents",
    },
    {
      id: 9,
      title: "Daughter",
    },
    {
      id: 10,
      title: "Son",
    },
    {
      id: 11,
      title: "Children",
    },
    {
      id: 12,
      title: "Grandmother",
    },
    {
      id: 13,
      title: "Grandfather",
    },
    {
      id: 14,
      title: "Grandparents",
    },
    {
      id: 15,
      title: "Family",
    },
    {
      id: 16,
      title: "Friend",
    },
    {
      id: 17,
      title: "Other",
    },
  ];
  // Who's this for? select
  const [selectedWhoThisFor, setSelectedWhoThisFor] = useState("");
  const handleWhoThisForSelect = (title) => {
    setSelectedWhoThisFor((previous) => (previous === title ? "" : title));
  };

  // Occasions
  let occasions = [
    {
      id: 1,
      title: "Proposal",
    },
    {
      id: 2,
      title: "Anniversary",
    },
    {
      id: 3,
      title: "Birthday",
    },
    {
      id: 4,
      title: "Charistmas",
    },
    {
      id: 5,
      title: "Engagement",
    },
    {
      id: 6,
      title: "Father's Day",
    },
    {
      id: 7,
      title: "Mother's Day",
    },
    {
      id: 8,
      title: "Just Because",
    },
    {
      id: 9,
      title: "Memorial",
    },
    {
      id: 10,
      title: "Graduation",
    },
    {
      id: 11,
      title: "New Baby",
    },
    {
      id: 12,
      title: "Valentine's Day",
    },
    {
      id: 13,
      title: "Wedding",
    },
    {
      id: 14,
      title: "Other",
    },
  ];
  // Occasion select
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const handleOccasionSelect = (title) => {
    setSelectedOccasion((previous) => (previous === title ? "" : title));
  };

  // Navigate
  const navigate = useNavigate();
  // Back
  const handleBack = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate(-1); // Go back to previous page
  };
  // Next
  const handleNext = (e) => {
    e.preventDefault(); // Prevent default form submission
    const hasDatas = recipientName && selectedWhoThisFor && selectedOccasion;
    if (hasDatas) {
      navigate("/create-song/song-options"); // Go to next page
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black via-[#1A1A1A] to-black padding pt-[120px] pb-[20px] relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="flex justify-between items-center relative z-10">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 border-2 border-white/10 rounded-2xl sm:rounded-3xl px-3 sm:px-4 py-1 font-jetbrains text-sm sm:text-base backdrop-blur-sm">
            STEP 1 Of 3
          </h1>
          <Link to={"/create-song"}>
            <button
              className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 backdrop-blur-sm group"
              aria-label="Close form"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 group-hover:text-white group-hover:scale-110 transition-all" />
            </button>
          </Link>
        </div>

        <div className="mt-5 bg-black/40 backdrop-blur-md rounded-3xl p-5 sm:p-8 border border-white/10 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 font-jetbrains font-bold text-3xl sm:text-3xl mb-5 animate-gradient">
            Share the basics
          </h2>

          <form className="space-y-3">
            {/* Recipient's Name */}
            <div className="space-y-3 border-t-2 border-white/5 py-4 group">
              <label className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-jetbrains text-lg sm:text-lg">
                Recipient's Name
              </label>
              <input
                type="text"
                value={recipientName}
                onChange={handleRecipientNameChange}
                className="w-full bg-black/50 rounded-2xl px-4 py-2 text-white font-jetbrains text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:shadow-[0_0_10px_rgba(168,85,247,0.1)]"
                placeholder="Enter your full name or nickname"
              />
              <label className="text-[#868686] font-jetbrains flex items-center gap-2 group/check">
                <input
                  type="checkbox"
                  className="accent-purple-500"
                  value="name"
                />
                <span className="text-[#868686] font-jetbrains text-sm sm:text-base">
                  YES, mention their name in the song lyrics.
                </span>
              </label>
            </div>

            {/* Who's this for? */}
            <div className="space-y-3 border-t-2 border-white/5 py-4">
              <div className="flex items-center gap-3">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-jetbrains text-lg sm:text-lg md:text-xl">
                  Who's this for?
                </h1>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {whoThisFor.length &&
                  whoThisFor.map((who, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleWhoThisForSelect(who.title)}
                      className={`flex items-center justify-center bg-black/50 rounded-2xl sm:rounded-2xl px-3 sm:px-4 py-2 cursor-pointer hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 backdrop-blur-sm border border-white/10 group hover:scale-105 ${
                        selectedWhoThisFor === who.title
                          ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 ring-2 ring-purple-500/50"
                          : ""
                      }`}
                    >
                      <span className="text-white/90 font-jetbrains text-sm sm:text-base md:text-base lg:text-lg group-hover:text-white transition-colors">
                        {who.title}
                      </span>
                    </button>
                  ))}
              </div>
            </div>

            {/* Occasion */}
            <div className="space-y-3 border-t-2 border-white/5 py-4">
              <div className="flex items-center gap-3">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-jetbrains text-lg sm:text-lg md:text-xl">
                  Occasion
                </h1>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {occasions.length &&
                  occasions.map((occasion, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleOccasionSelect(occasion.title)}
                      className={`flex items-center justify-center bg-black/50 rounded-2xl sm:rounded-2xl px-3 sm:px-4 py-2 cursor-pointer hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 backdrop-blur-sm border border-white/10 group hover:scale-105 ${
                        selectedOccasion === occasion.title
                          ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 ring-2 ring-purple-500/50"
                          : ""
                      }`}
                    >
                      <span className="text-white/90 font-jetbrains text-sm sm:text-base md:text-base lg:text-lg group-hover:text-white transition-colors">
                        {occasion.title}
                      </span>
                    </button>
                  ))}
              </div>
            </div>

            {/* Back and Next buttons */}
            <div className="flex justify-between items-center mt-5">
              {/* Back button */}
              <button
                type="button"
                onClick={handleBack}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white flex justify-center items-center gap-2 rounded-2xl px-10 py-2 font-jetbrains font-semibold text-sm sm:text-base hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-105 group"
                aria-label="Go back to previous page"
              >
                <ArrowLeftCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-[-2px] transition-transform" />
                Back
              </button>

              {/* Next button */}
              <button
                type="button"
                onClick={handleNext}
                className={`flex justify-center items-center gap-2 rounded-2xl px-10 py-2 font-jetbrains font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 group ${
                  recipientName && selectedWhoThisFor && selectedOccasion
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    : "bg-gray-500/50 text-gray-300 cursor-not-allowed"
                }`}
                disabled={
                  !(recipientName && selectedWhoThisFor && selectedOccasion)
                }
                aria-label="Go to next page"
              >
                Next
                <ArrowRightCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
