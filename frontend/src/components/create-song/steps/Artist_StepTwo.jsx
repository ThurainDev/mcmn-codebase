import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { X, ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

export default function Artist_StepTwo() {
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
    navigate("/create-song/song-options"); // Go to next page
  };

  return (
    <>
      <div className="bg-black padding pt-[120px]">
        <div className="flex justify-between items-center">
          <h1 className="border-2 border-white rounded-2xl sm:rounded-3xl px-3 sm:px-4 py-1 text-white font-jetbrains text-sm sm:text-base">
            STEP 2 Of 3
          </h1>
          <Link to={"/create-song"}>
            <button
              className="p-2 hover:bg-[#2A2A2A] rounded-full transition-colors"
              aria-label="Close form"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" color="white" />
            </button>
          </Link>
        </div>

        <div className="mt-5 bg-[#1A1A1A] rounded-3xl p-5 sm:p-8">
          <h2 className="text-white font-jetbrains font-bold text-3xl sm:text-3xl mb-5">
            Let's find the perfect artist to create your song
          </h2>

          {/* Back and Next buttons */}
          <div className="flex justify-between items-center">
            {/* Back button */}
            <button
              type="button" // Prevent default form submission
              onClick={handleBack}
              className="bg-[#D9D9D9] text-[#1A1A1A] flex justify-center items-center gap-2 rounded-2xl px-10 py-2 font-jetbrains font-semibold text-sm sm:text-base hover:bg-gray-300 transition-colors"
              aria-label="Go back to previous page"
            >
              <ArrowLeftCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Back
            </button>

            {/* Next button */}
            <button
              type="button" // Prevent default form submission
              onClick={handleNext}
              className="bg-[#D9D9D9] text-[#1A1A1A] flex justify-center items-center gap-2 rounded-2xl px-10 py-2 font-jetbrains font-semibold text-sm sm:text-base hover:bg-gray-300 transition-colors"
              aria-label="Go to next page"
            >
              Next
              <ArrowRightCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
