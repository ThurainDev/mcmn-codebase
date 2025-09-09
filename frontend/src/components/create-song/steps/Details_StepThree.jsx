import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { X, ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

export default function Details_StepThree() {
  // Prompt 1
  let prompts_1 = [
    {
      id: 1,
      title: "Your relationship story",
    },
    {
      id: 2,
      title: "Favourite things about them",
    },
    {
      id: 3,
      title: "What they mean to you",
    },
    {
      id: 4,
      title: "Favourite things to do together",
    },
    {
      id: 5,
      title: "How they have shaped you",
    },
    {
      id: 6,
      title: "Inside jokes and funny stories",
    },
    {
      id: 7,
      title: "Advice you have for them",
    },
    {
      id: 8,
      title: "Other stories or memories",
    },
  ];
  // Prompt 1 select
  const [selectedPrompt_1, setSelectedPrompt_1] = useState("");
  const handlePrompt_1Select = (title) => {
    setSelectedPrompt_1((previous) => (previous === title ? "" : title));
  };
  // Text area for prompt 1
  const [prompt_1Text, setPrompt_1Text] = useState("");
  const handlePrompt_1TextChange = (e) => {
    setPrompt_1Text(e.target.value);
  };

  // Prompt 2
  let prompts_2 = [
    {
      id: 1,
      title: "Favourite memories together",
    },
    {
      id: 2,
      title: "Favourite things about them",
    },
    {
      id: 3,
      title: "What they mean to you",
    },
    {
      id: 4,
      title: "Favourite things to do together",
    },
    {
      id: 5,
      title: "How they have shaped you",
    },
    {
      id: 6,
      title: "Inside jokes and funny stories",
    },
    {
      id: 7,
      title: "Advice you have for them",
    },
    {
      id: 8,
      title: "Other stories or memories",
    },
  ];
  // Prompt 2 select
  const [selectedPrompt_2, setSelectedPrompt_2] = useState("");
  const handlePrompt_2Select = (title) => {
    setSelectedPrompt_2((previous) => (previous === title ? "" : title));
  };
  // Text area for prompt 2
  const [prompt_2Text, setPrompt_2Text] = useState("");
  const handlePrompt_2TextChange = (e) => {
    setPrompt_2Text(e.target.value);
  };

  // Add these state variables after other state declarations
  // Must have 1
  const [openMustHave1, setOpenMustHave1] = useState(false);
  const [mustHave1, setMustHave1] = useState("");
  const [mustHave_1, setMustHave_1] = useState("");
  // Must have 2
  const [mustHave2, setMustHave2] = useState("");
  const [mustHave_2, setMustHave_2] = useState("");
  // Must have 3
  const [mustHave3, setMustHave3] = useState("");
  const [mustHave_3, setMustHave_3] = useState("");

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
    const hasPromptContent =
      selectedPrompt_1 &&
      prompt_1Text.trim() !== "" &&
      selectedPrompt_2 &&
      prompt_2Text.trim() !== "";

    if (hasPromptContent) {
      navigate("/create-song/review");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black via-[#1A1A1A] to-black padding pt-[120px] pb-[20px] relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="flex justify-between items-center relative z-10">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 border-2 border-white/10 rounded-2xl sm:rounded-3xl px-3 sm:px-4 py-1 font-jetbrains text-sm sm:text-base backdrop-blur-sm">
            STEP 3 Of 3
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
          <div>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 font-jetbrains font-bold text-3xl sm:text-3xl mb-2 animate-gradient">
              Share your story
            </h2>
            <p className="text-[#868686] font-jetbrains text-sm sm:text-base">
              Choose two prompts to spark your memories and inspire your lyrics.
              Or, if you prefer, select “other” to share a free-form story.
            </p>
          </div>

          <div className="space-y-3">
            {/* Prompt 1 */}
            <div className="space-y-3 border-t-2 border-white/5 py-4 mt-5">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-jetbrains text-lg sm:text-lg md:text-xl">
                Select a prompt
              </h1>
              {/* Prompts */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {prompts_1.length &&
                  prompts_1.map((prompt, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handlePrompt_1Select(prompt.title)}
                      className={`flex items-center justify-center bg-black/50 rounded-2xl sm:rounded-2xl px-3 sm:px-4 py-2 cursor-pointer hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 backdrop-blur-sm border border-white/10 group hover:scale-105 ${
                        selectedPrompt_1 === prompt.title
                          ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 ring-2 ring-purple-500/50"
                          : ""
                      }`}
                    >
                      <span className="text-white/90 font-jetbrains text-sm sm:text-base md:text-base lg:text-lg group-hover:text-white transition-colors">
                        {prompt.title}
                      </span>
                    </button>
                  ))}
              </div>
              {/* Text Area for Prompt 1 */}
              {selectedPrompt_1 && (
                <div className="mt-4 space-y-2">
                  <label className="block text-white/80 font-jetbrains text-sm">
                    Tell us about {selectedPrompt_1.toLowerCase()}
                  </label>
                  <textarea
                    value={prompt_1Text}
                    onChange={handlePrompt_1TextChange}
                    placeholder="Share your story here..."
                    className="w-full min-h-[150px] bg-black/50 rounded-2xl px-4 py-3 text-white font-jetbrains text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-rose-500/50 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:shadow-[0_0_10px_rgba(244,63,94,0.1)] resize-y"
                  />
                </div>
              )}
            </div>

            {/* Prompt 2 */}
            <div className="space-y-3 border-t-2 border-white/5 py-4">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-jetbrains text-lg sm:text-lg md:text-xl">
                Select a prompt
              </h1>
              {/* Prompts */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {prompts_2.length &&
                  prompts_2.map((prompt, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handlePrompt_2Select(prompt.title)}
                      className={`flex items-center justify-center bg-black/50 rounded-2xl sm:rounded-2xl px-3 sm:px-4 py-2 cursor-pointer hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 backdrop-blur-sm border border-white/10 group hover:scale-105 ${
                        selectedPrompt_2 === prompt.title
                          ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 ring-2 ring-purple-500/50"
                          : ""
                      }`}
                    >
                      <span className="text-white/90 font-jetbrains text-sm sm:text-base md:text-base lg:text-lg group-hover:text-white transition-colors">
                        {prompt.title}
                      </span>
                    </button>
                  ))}
              </div>
              {/* Text Area for Prompt 2 */}
              {selectedPrompt_2 && (
                <div className="mt-4 space-y-2">
                  <label className="block text-white/80 font-jetbrains text-sm">
                    Tell us about {selectedPrompt_2.toLowerCase()}
                  </label>
                  <textarea
                    value={prompt_2Text}
                    onChange={handlePrompt_2TextChange}
                    placeholder="Share your story here..."
                    className="w-full min-h-[150px] bg-black/50 rounded-2xl px-4 py-3 text-white font-jetbrains text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-rose-500/50 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:shadow-[0_0_10px_rgba(244,63,94,0.1)] resize-y"
                  />
                </div>
              )}
            </div>

            {/* Must haves */}
            <div className="space-y-3 border-t-2 border-white/5 py-4">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-jetbrains text-lg sm:text-lg md:text-xl">
                Must haves
              </h1>
              <p className="text-[#868686] font-jetbrains text-sm sm:text-base">
                Share up to 3 details with context that you would absolutely
                like worked into your song.{" "}
                <span className=" italic">This is optional.</span>
              </p>

              {/* Must Have 1 */}
              <div className="mt-4 space-y-2">
                <div
                  onClick={() => setOpenMustHave1(!openMustHave1)}
                  className="flex justify-between"
                >
                  <h1
                    className={`text-transparent bg-clip-text bg-gradient-to-r font-jetbrains text-lg sm:text-lg md:text-xl  ${
                      selectedPrompt_1 &&
                      prompt_1Text.trim() !== "" &&
                      selectedPrompt_2 &&
                      prompt_2Text.trim() !== ""
                        ? "from-purple-500 to-pink-500"
                        : "text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={
                      !(
                        selectedPrompt_1 &&
                        prompt_1Text.trim() !== "" &&
                        selectedPrompt_2 &&
                        prompt_2Text.trim() !== ""
                      )
                    }
                  >
                    Detail 1
                  </h1>
                  <span
                    className="text-white transition-transform duration-300 transform"
                    style={{
                      transform: openMustHave1
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div>
                {openMustHave1 && (
                  <div>
                    <label className="block text-white/80 font-jetbrains text-sm pb-2">
                      In a few words, what is one detail that is important to
                      the story.
                    </label>
                    <textarea
                      value={mustHave1}
                      onChange={(e) => setMustHave1(e.target.value)}
                      placeholder="Share your first must-have detail..."
                      className="w-full min-h-[60px] bg-black/50 rounded-2xl px-4 py-3 text-white font-jetbrains text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-rose-500/50 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:shadow-[0_0_10px_rgba(244,63,94,0.1)] resize-y"
                    />
                    <label className="block text-white/80 font-jetbrains text-sm pb-2">
                      Why is this is so important to your story?
                    </label>
                    <textarea
                      value={mustHave_1}
                      onChange={(e) => setMustHave_1(e.target.value)}
                      placeholder="Share your first must-have detail..."
                      className="w-full min-h-[150px] bg-black/50 rounded-2xl px-4 py-3 text-white font-jetbrains text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-rose-500/50 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:shadow-[0_0_10px_rgba(244,63,94,0.1)] resize-y"
                    />
                  </div>
                )}
              </div>

              {/* Must Have 2 - Only shows if Must Have 1 has content */}
              {mustHave1 && mustHave_1 && (
                <div className="mt-4 space-y-2">
                  <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-jetbrains text-lg sm:text-lg md:text-xl">
                    Detail 2
                  </h1>
                  <label className="block text-white/80 font-jetbrains text-sm">
                    In a few words, what is one detail that is important to the
                    story.
                  </label>
                  <textarea
                    value={mustHave2}
                    onChange={(e) => setMustHave2(e.target.value)}
                    placeholder="Share your first must-have detail..."
                    className="w-full min-h-[60px] bg-black/50 rounded-2xl px-4 py-3 text-white font-jetbrains text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-rose-500/50 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:shadow-[0_0_10px_rgba(244,63,94,0.1)] resize-y"
                  />
                  <label className="block text-white/80 font-jetbrains text-sm">
                    Why is this is so important to your story?
                  </label>
                  <textarea
                    value={mustHave_2}
                    onChange={(e) => setMustHave_2(e.target.value)}
                    placeholder="Share your second must-have detail..."
                    className="w-full min-h-[150px] bg-black/50 rounded-2xl px-4 py-3 text-white font-jetbrains text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-rose-500/50 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:shadow-[0_0_10px_rgba(244,63,94,0.1)] resize-y"
                  />
                </div>
              )}

              {/* Must Have 3 - Only shows if Must Have 2 has content */}
              {mustHave2 && mustHave_2 && (
                <div className="mt-4 space-y-2">
                  <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-jetbrains text-lg sm:text-lg md:text-xl">
                    Detail 3
                  </h1>
                  <label className="block text-white/80 font-jetbrains text-sm">
                    In a few words, what is one detail that is important to the
                    story.
                  </label>
                  <textarea
                    value={mustHave3}
                    onChange={(e) => setMustHave3(e.target.value)}
                    placeholder="Share your first must-have detail..."
                    className="w-full min-h-[60px] bg-black/50 rounded-2xl px-4 py-3 text-white font-jetbrains text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-rose-500/50 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:shadow-[0_0_10px_rgba(244,63,94,0.1)] resize-y"
                  />
                  <label className="block text-white/80 font-jetbrains text-sm">
                    Why is this is so important to your story?
                  </label>
                  <textarea
                    value={mustHave_3}
                    onChange={(e) => setMustHave_3(e.target.value)}
                    placeholder="Share your third must-have detail..."
                    className="w-full min-h-[150px] bg-black/50 rounded-2xl px-4 py-3 text-white font-jetbrains text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-rose-500/50 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:shadow-[0_0_10px_rgba(244,63,94,0.1)] resize-y"
                  />
                </div>
              )}
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
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
