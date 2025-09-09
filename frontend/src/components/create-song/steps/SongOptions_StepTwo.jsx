import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  X,
  ArrowLeftCircle,
  ArrowRightCircle,
  MessageCircleQuestion,
} from "lucide-react";

export default function SongOptions_StepTwo() {
  // Genres
  let genres = [
    {
      id: 1,
      title: "Acoustic Pop",
    },
    {
      id: 2,
      title: "Country",
    },
    {
      id: 3,
      title: "Songwriter",
    },
    {
      id: 4,
      title: "Folk",
    },
    {
      id: 5,
      title: "Rap/Hip Hop",
    },
    {
      id: 6,
      title: "Rock",
    },
    {
      id: 7,
      title: "Christian",
    },
    {
      id: 8,
      title: "R&B",
    },
    {
      id: 9,
      title: "Spanish",
    },
  ];
  // Genre Select
  const [selectedGenre, setSelectedGenre] = useState("");
  const handleGenreSelect = (title) => {
    setSelectedGenre((previous) => (previous === title ? "" : title));
  };
  // Genre Details Box
  const [showGenreDetailsBox, setShowGenreDetailsBox] = useState(false);
  const handleGenreDetailsBoxClick = () => {
    setShowGenreDetailsBox(!showGenreDetailsBox);
  };

  // Vocal Styles
  let vocalStyles = [
    {
      id: 1,
      title: "Female",
    },
    {
      id: 2,
      title: "Male",
    },
    {
      id: 3,
      title: "No Preference",
    },
  ];
  // Vocal Style Select
  const [selectedVocalStyle, setSelectedVocalStyle] = useState("");
  const handleVocalStyleSelect = (title) => {
    setSelectedVocalStyle((previous) => (previous === title ? "" : title));
  };

  // Vibes
  let vibes = [
    {
      id: 1,
      title: "Happy",
    },
    {
      id: 2,
      title: "Lighthearted",
    },
    {
      id: 3,
      title: "Comical",
    },
    {
      id: 4,
      title: "Heartfelt",
    },
    {
      id: 5,
      title: "Uplifting",
    },
    {
      id: 6,
      title: "Romantic",
    },
    {
      id: 7,
      title: "Reflective",
    },
    {
      id: 8,
      title: "Somber",
    },
  ];
  // Vibe Select
  const [selectedVibe, setSelectedVibe] = useState("");
  const handleVibeSelect = (title) => {
    setSelectedVibe((previous) => (previous === title ? "" : title));
  };
  // Vibe Details Box
  const [showVibeDetailsBox, setShowVibeDetailsBox] = useState(false);
  const handleVibeDetailsBoxClick = () => {
    setShowVibeDetailsBox(!showVibeDetailsBox);
  };

  // Tempos
  let tempos = [
    {
      id: 1,
      title: "Slow",
    },
    {
      id: 2,
      title: "Medium",
    },
    {
      id: 3,
      title: "Up-Tempo",
    },
  ];
  // Tempo Select
  const [selectedTempo, setSelectedTempo] = useState("");
  const handleTempoSelect = (title) => {
    setSelectedTempo((previous) => (previous === title ? "" : title));
  };
  // Tempo Details Box
  const [showTempoDetailsBox, setShowTempoDetailsBox] = useState(false);
  const handleTempoDetailsBoxClick = () => {
    setShowTempoDetailsBox(!showTempoDetailsBox);
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
    const hasDatas =
      selectedGenre && selectedVocalStyle && selectedVibe && selectedTempo;
    if (hasDatas) {
      navigate("/create-song/details"); // Go to next page
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black via-[#1A1A1A] to-black padding pt-[120px] pb-[20px] relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="flex justify-between items-center relative z-10">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 border-2 border-white/10 rounded-2xl sm:rounded-3xl px-3 sm:px-4 py-1 font-jetbrains text-sm sm:text-base backdrop-blur-sm">
            STEP 2 Of 3
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
            Song Characteristics
          </h2>

          <div className="space-y-3">
            {/* Genre */}
            <div className="space-y-3 border-t-2 border-white/5 py-4">
              {/* Title */}
              <div className="flex items-center gap-3">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-jetbrains text-lg sm:text-lg md:text-xl">
                  Select a genre
                </h1>
                <button
                  onClick={handleGenreDetailsBoxClick}
                  className="hover:bg-white/10 rounded-full p-2 transition-all duration-300 backdrop-blur-sm group"
                  aria-label="Show genre details"
                >
                  <MessageCircleQuestion className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all" />
                </button>
              </div>
              {/* Genre Details Box */}
              {showGenreDetailsBox && (
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 mt-2 border border-white/10">
                  <div className="text-white font-jetbrains space-y-2">
                    <h3 className="font-bold text-lg">Genre Details</h3>
                    <p className="text-sm text-[#868686]">
                      The genre you select will determine the overall style and
                      sound of your custom song:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>
                        <span className="font-bold">Acoustic Pop:</span> Light,
                        melodic tunes with acoustic instruments | Combines
                        catchy melodies with intimate, softer instrumentation.
                      </li>
                      <li>
                        <span className="font-bold">Country:</span> Storytelling
                        with traditional country elements | Simple harmonies
                        accompanied by string instruments with an American South
                        feel.
                      </li>
                      <li>
                        <span className="font-bold">Songwriter:</span> Personal,
                        intimate compositions | Stripped-down acoustic guitars
                        or piano paired with storytelling.
                      </li>
                      <li>
                        <span className="font-bold">Folk:</span> Traditional,
                        acoustic-based music | Rustic, storyteller vocals backed
                        by traditional acoustic instrumentation.
                      </li>
                      <li>
                        <span className="font-bold">Rap/Hip Hop:</span>{" "}
                        Rhythm-based with spoken lyrics | Rhythmic, non-melodic
                        vocals built on top of percussion-driven beats.
                      </li>
                      <li>
                        <span className="font-bold">Rock:</span> Guitar-driven
                        with strong beats | Energetic and edgy vocals driven by
                        full-band instrumentation.
                      </li>
                      <li>
                        <span className="font-bold">Christian:</span>{" "}
                        Faith-based inspirational music | Inspired by Christian
                        faith, focusing on worship, praise, or biblical
                        overtones.
                      </li>
                      <li>
                        <span className="font-bold">R&B:</span> Smooth, soulful
                        melodies | Soulful vocals infused with groovy rhythms
                        influenced by jazz, hip-hop, and gospel.
                      </li>
                      <li>
                        <span className="font-bold">Spanish:</span>{" "}
                        Latin-influenced rhythms and style | A blend of music
                        genres and rhythmic styles with lyrics in Spanish.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <p className="text-[#868686] font-jetbrains text-sm sm:text-base">
                This is the foundation of your song.
              </p>
              {/* Genre Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {genres.length &&
                  genres.map((genre, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleGenreSelect(genre.title)}
                      className={`flex items-center justify-center bg-black/50 rounded-2xl sm:rounded-2xl px-3 sm:px-4 py-2 cursor-pointer hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 backdrop-blur-sm border border-white/10 group hover:scale-105 ${
                        selectedGenre === genre.title
                          ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 ring-2 ring-purple-500/50"
                          : ""
                      }`}
                    >
                      <span className="text-white/90 font-jetbrains text-sm sm:text-base md:text-base lg:text-lg group-hover:text-white transition-colors">
                        {genre.title}
                      </span>
                    </button>
                  ))}
              </div>
            </div>

            {/* Vocal Style */}
            <div className="space-y-3 border-t-2 border-white/5 py-4">
              <div>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-jetbrains text-lg sm:text-lg md:text-xl">
                  Select a vocal style
                </h1>
              </div>
              <p className="text-[#868686] font-jetbrains text-sm sm:text-base">
                How should the voice sound?
              </p>
              {/* Vocal Style Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {vocalStyles.length &&
                  vocalStyles.map((vocalStyle, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleVocalStyleSelect(vocalStyle.title)}
                      className={`flex items-center justify-center bg-black/50 rounded-2xl sm:rounded-2xl px-3 sm:px-4 py-2 cursor-pointer hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 backdrop-blur-sm border border-white/10 group hover:scale-105 ${
                        selectedVocalStyle === vocalStyle.title
                          ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 ring-2 ring-purple-500/50"
                          : ""
                      }`}
                    >
                      <span className="text-white/90 font-jetbrains text-sm sm:text-base md:text-base lg:text-lg group-hover:text-white transition-colors">
                        {vocalStyle.title}
                      </span>
                    </button>
                  ))}
              </div>
            </div>

            {/* Vibe */}
            <div className="space-y-3 border-t-2 border-white/5 py-4">
              {/* Title */}
              <div className="flex items-center gap-3">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-jetbrains text-lg sm:text-lg md:text-xl">
                  Select a vibe
                </h1>
                <button
                  onClick={handleVibeDetailsBoxClick}
                  className="hover:bg-[#2A2A2A] rounded-full p-2 transition-colors"
                  aria-label="Show genre details"
                >
                  <MessageCircleQuestion color="white" />
                </button>
              </div>
              {/* Vibe Details Box */}
              {showVibeDetailsBox && (
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 mt-2 border border-white/10">
                  <div className="text-white font-jetbrains space-y-2">
                    <h3 className="font-bold text-lg">Vibe Details</h3>
                    <p className="text-sm text-[#868686]">
                      The vibe you select will determine the overall style and
                      sound of your custom song:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>
                        <span className="font-bold">Happy:</span> Bright,
                        positive, and sure to bring a smile.
                      </li>
                      <li>
                        <span className="font-bold">Lighthearted:</span> Fun and
                        carefree, with a lively bounce.
                      </li>
                      <li>
                        <span className="font-bold">Comical:</span> Highlight
                        your funny stories and memories in a playful yet
                        tasteful way.
                      </li>
                      <li>
                        <span className="font-bold">Heartfelt:</span> Sincere
                        and emotional, highlights all the feels.
                      </li>
                      <li>
                        <span className="font-bold">Uplifting:</span> Energetic
                        and perky, driven by inspirational messages.
                      </li>
                      <li>
                        <span className="font-bold">Romantic:</span> Soft and
                        intimate, it's undeniably a love song.
                      </li>
                      <li>
                        <span className="font-bold">Reflective:</span> Nostalgic
                        and memory-evoking, it focuses on the past.
                      </li>
                      <li>
                        <span className="font-bold">Somber:</span> Serious and
                        touching, often conveys a sense of sorrow or longing.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <p className="text-[#868686] font-jetbrains text-sm sm:text-base">
                This is the foundation of your song.
              </p>
              {/* Vibe Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {vibes.length &&
                  vibes.map((vibe, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleVibeSelect(vibe.title)}
                      className={`flex items-center justify-center bg-black/50 rounded-2xl sm:rounded-2xl px-3 sm:px-4 py-2 cursor-pointer hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 backdrop-blur-sm border border-white/10 group hover:scale-105 ${
                        selectedVibe === vibe.title
                          ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 ring-2 ring-purple-500/50"
                          : ""
                      }`}
                    >
                      <span className="text-white/90 font-jetbrains text-sm sm:text-base md:text-base lg:text-lg group-hover:text-white transition-colors">
                        {vibe.title}
                      </span>
                    </button>
                  ))}
              </div>
            </div>

            {/* Tempo */}
            <div className="space-y-3 border-t-2 border-white/5 py-4">
              {/* Title */}
              <div className="flex items-center gap-3">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-jetbrains text-lg sm:text-lg md:text-xl">
                  Select a tempo
                </h1>
                <button
                  onClick={handleTempoDetailsBoxClick}
                  className="hover:bg-[#2A2A2A] rounded-full p-2 transition-colors"
                  aria-label="Show genre details"
                >
                  <MessageCircleQuestion color="white" />
                </button>
              </div>
              {/* Tempo Details Box */}
              {showTempoDetailsBox && (
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 mt-2 border border-white/10">
                  <div className="text-white font-jetbrains space-y-2">
                    <h3 className="font-bold text-lg">Tempo Details</h3>
                    <p className="text-sm text-[#868686]">
                      The tempo you select will determine the overall style and
                      sound of your custom song:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>
                        <span className="font-bold">Slow:</span> Gives your song
                        an intimate feeling and lets the lyrics really breathe.
                      </li>
                      <li>
                        <span className="font-bold">Medium:</span> Gives your
                        song a relaxed yet engaging listening experience.
                      </li>
                      <li>
                        <span className="font-bold">Up-Tempo:</span> Gives your
                        song plenty of energy while still packing a meaningful
                        punch.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <p className="text-[#868686] font-jetbrains text-sm sm:text-base">
                This is the place of your song.
              </p>
              {/* Tempo Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tempos.length &&
                  tempos.map((tempo, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleTempoSelect(tempo.title)}
                      className={`flex items-center justify-center bg-black/50 rounded-2xl sm:rounded-2xl px-3 sm:px-4 py-2 cursor-pointer hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 backdrop-blur-sm border border-white/10 group hover:scale-105 ${
                        selectedTempo === tempo.title
                          ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 ring-2 ring-purple-500/50"
                          : ""
                      }`}
                    >
                      <span className="text-white/90 font-jetbrains text-sm sm:text-base md:text-base lg:text-lg group-hover:text-white transition-colors">
                        {tempo.title}
                      </span>
                    </button>
                  ))}
              </div>
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
                selectedGenre &&
                selectedVocalStyle &&
                selectedVibe &&
                selectedTempo
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  : "bg-gray-500/50 text-gray-300 cursor-not-allowed"
              }`}
              disabled={
                !(
                  selectedGenre &&
                  selectedVocalStyle &&
                  selectedVibe &&
                  selectedTempo
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
