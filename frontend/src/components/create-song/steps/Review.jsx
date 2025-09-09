import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

export default function Review() {
  // Navigate
  const navigate = useNavigate();
  // Back
  const handleBack = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate(-1); // Go back to previous page
  };
  // Next
  const handleNext = (e) => {
    e.preventDefault();
    // Check if two prompts are selected and filled
    navigate("/create-song/review");
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black via-[#1A1A1A] to-black padding pt-[120px] pb-[20px] relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="flex justify-end items-center relative z-10">
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
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 font-jetbrains font-bold text-3xl sm:text-3xl mb-2 animate-gradient">
            Everything look good?
          </h2>

          <div className="space-y-3">
            <div className="space-y-3 border-t-2 border-white/5 py-4 mt-5">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-jetbrains text-lg sm:text-lg md:text-xl">
                Prompt 1
              </h1>
              <p className="text-[#868686] font-jetbrains text-sm sm:text-base">
                Choose two prompts to spark your memories and inspire your
                lyrics. Or, if you prefer, select “other” to share a free-form
                story.
              </p>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-jetbrains text-lg sm:text-lg md:text-xl">
                Story
              </h1>
              <p className="text-[#868686] font-jetbrains text-sm sm:text-base">
                Choose two prompts to spark your memories and inspire your
                lyrics. Or, if you prefer, select “other” to share a free-form
                story.
              </p>
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
              {/* <button
                type="button"
                className={`flex justify-center items-center gap-2 rounded-2xl px-10 py-2 font-jetbrains font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 group ${
                  selectedPrompt_1 &&
                  prompt_1Text.trim() !== "" &&
                  selectedPrompt_2 &&
                  prompt_2Text.trim() !== ""
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    : "bg-gray-500/50 text-gray-300 cursor-not-allowed"
                }`}
                disabled={
                  !(
                    selectedPrompt_1 &&
                    prompt_1Text.trim() !== "" &&
                    selectedPrompt_2 &&
                    prompt_2Text.trim() !== ""
                  )
                }
                aria-label="Go to next page"
              >
                Next
                <ArrowRightCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
