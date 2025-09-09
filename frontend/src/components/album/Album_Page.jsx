import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import song_1 from "../../assets/images/relate.jpeg";
import song_2 from "../../assets/images/rela.jpeg";
import background from "../../assets/images/pantine.jpg";

const credits = [
  { role: "Composer", name: "Susanna Min", link: "/artists/susannamin" },
  { role: "Harmony", name: "Purity", link: "/artists/purity" },
  { role: "Bass", name: "Titus Thway", link: "/musician/titus-thway" },
  {
    role: "Drum & Keyboard",
    name: "Saw David Paul",
    link: "/artists/saw-david-paul",
  },
  { role: "Guitar", name: "Joshua Jiang", link: "/artists/joshua-jiang" },
  {
    role: "Music Arrangement",
    name: "Htun Naung Sint",
    link: "artists/htun-naung-sint",
  },
  {
    role: "Mixing and Mastering",
    name: "Hsan Moe Htet",
    link: "musician/hsan-moe-htet",
  },
];

const albums = [
  {
    name: "Album Name",
    artist: "Susanna Min",
    image: song_1,
    link: "/albums/album-name", // Add album link
  },
  {
    name: "Album Name",
    artist: "Susanna Min",
    image: song_1,
    link: "/albums/album-name-2",
  },
  {
    name: "Album Name",
    artist: "Susanna Min",
    image: song_1,
    link: "/albums/album-name-3",
  },
  {
    name: "Album Name",
    artist: "Susanna Min",
    image: song_1,
    link: "/albums/album-name-4",
  },
];

const related = [
  {
    image: "/images/song-cover.jpg",
    name: "Song Name",
    artists: "Susanna Min and Mary Thway",
  },
  {
    image: "/images/song-cover.jpg",
    name: "Song Name",
    artists: "Susanna Min and Mary Thway",
  },
  {
    image: "/images/song-cover.jpg",
    name: "Song Name",
    artists: "Susanna Min and Mary Thway",
  },
  {
    image: "/images/song-cover.jpg",
    name: "Song Name",
    artists: "Susanna Min and Mary Thway",
  },
];

// Album details for lyrics and story sections
const albumDetails = {
  lyrics: [
    "Verse 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Chorus: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Verse 2: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Bridge: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ],
  story:
    "This album was created during a time of reflection and renewal. The artist drew inspiration from personal experiences and the beauty of nature. Each song represents a different chapter in a journey of self-discovery and growth. The production process took place over six months, with collaborations from various talented musicians across the country.",
  behindScenes: [
    {
      title: "Studio Sessions",
      description: "Recording took place at Golden Sound Studios over 3 weeks.",
    },
    {
      title: "Inspiration",
      description: "The album concept came during a retreat in the mountains.",
    },
    {
      title: "Challenges",
      description:
        "The team overcame technical difficulties and tight deadlines.",
    },
  ],
};

export default function Album_Page() {
  // State for navigation tabs
  const [activeTab, setActiveTab] = useState("overview");

  // State for scroll animations
  const [isVisible, setIsVisible] = useState({});

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".animate-on-scroll");

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.id;

        if (sectionTop < window.innerHeight * 0.75) {
          setIsVisible((prev) => ({ ...prev, [sectionId]: true }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="relative padding pt-[120px] pb-[30px] w-full h-[500px] md:h-[600px] overflow-hidden">
        {/* Blurred background image container */}
        <div
          className="absolute inset-0 bg-center bg-cover brightness-[0.2]"
          style={{ backgroundImage: `url(${background})` }}
        ></div>

        {/* Gold overlay pattern */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-yellow-600 to-yellow-300 mix-blend-overlay"></div>

        {/* Overlay Content with sharp borders */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10">
          {/* Left: Text */}
          <div className="text-white font-mono max-w-md md:max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent animate-gradient">
              Pan Tine
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              New Album Release From <br />
              <span className="text-yellow-400">The City Music</span>
            </p>
            <div className="mt-6 flex space-x-4">
              <button className="px-6 py-2 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-bold rounded hover:from-yellow-500 hover:to-yellow-300 transition duration-300 transform hover:scale-105">
                Listen Now
              </button>
              <button className="px-6 py-2 border-2 border-yellow-400 text-yellow-400 font-bold rounded hover:bg-yellow-400 hover:text-black transition duration-300 transform hover:scale-105">
                Share
              </button>
            </div>
          </div>

          {/* Right: Album Image */}
          <div className="mt-10 md:mt-0 animate-float">
            <img
              src={background} // Replace with your foreground (cover) image path
              alt="Album Cover"
              className="w-56 md:w-72 rounded-lg shadow-2xl border-2 border-yellow-400"
            />
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-20 bg-black text-white border-b border-yellow-400 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto hide-scrollbar py-4 space-x-8">
            {[
              { id: "overview", label: "Overview" },
              { id: "lyrics", label: "Lyrics" },
              { id: "story", label: "Story" },
              { id: "credits", label: "Credits" },
              { id: "related", label: "Related" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-3 py-2 font-medium text-sm rounded-md transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-yellow-400 text-black"
                    : "text-yellow-200 hover:text-yellow-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <>
            <section
              id="video-section"
              className="padding py-12 animate-on-scroll"
            >
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left: YouTube Video */}
                <div
                  className={`flex-shrink-0 w-full md:w-1/2 transition-all duration-1000 ${
                    isVisible["video-section"]
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-lg border-2 border-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/Fm49dzOzg9c?si=v2uBPIMxIP_l6O-t"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="z-10 relative"
                    ></iframe>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-yellow-300/20 pointer-events-none"></div>
                  </div>
                </div>

                {/* Right: Listen On Buttons */}
                <div
                  className={`w-full md:w-1/2 transition-all duration-1000 ${
                    isVisible["video-section"]
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  <h2 className="text-3xl font-mono mb-6 text-yellow-400 border-b-2 border-yellow-400 pb-2 inline-block">
                    Listen On
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Spotify", icon: "fab fa-spotify" },
                      { label: "iTunes", icon: "fas fa-music" },
                      { label: "YouTube", icon: "fab fa-youtube" },
                      { label: "Facebook", icon: "fab fa-facebook" },
                      { label: "Apple Music", icon: "fab fa-apple" },
                      { label: "SoundCloud", icon: "fab fa-soundcloud" },
                      { label: "Amazon Music", icon: "fab fa-amazon" },
                      { label: "Deezer", icon: "fas fa-play-circle" },
                      { label: "Tidal", icon: "fas fa-water" },
                      { label: "Pandora", icon: "fas fa-broadcast-tower" },
                    ].map((platform, index) => (
                      <button
                        key={index}
                        className="flex items-center gap-2 bg-black border border-yellow-400 hover:bg-yellow-400 text-yellow-400 hover:text-black px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 w-full transform hover:scale-105"
                      >
                        <i className={`${platform.icon} text-lg`}></i>
                        <span>{platform.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section
              id="songs-section"
              className="padding py-12 animate-on-scroll"
            >
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-yellow-400 border-b-2 border-yellow-400 pb-2 inline-block">
                  Songs
                </h2>

                <div
                  className={`space-y-4 transition-all duration-1000 ${
                    isVisible["songs-section"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {related.map((song, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between border border-yellow-400 p-4 bg-gray-900 hover:bg-black transition-all duration-300 rounded-md group transform hover:scale-[1.01] cursor-pointer"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="relative overflow-hidden rounded-md">
                          <img
                            src={song_2}
                            alt={related.name}
                            className="w-20 h-20 object-cover group-hover:scale-110 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-yellow-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                            {song.name}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {song.artists}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-yellow-300">
                          <i className="fas fa-play text-xs"></i>
                        </button>
                        <span className="text-xl text-yellow-400 group-hover:translate-x-2 transition-transform duration-300">
                          &rsaquo;
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Behind the Scenes Section */}
            <section
              id="behind-scenes"
              className="padding py-12 bg-gray-900 animate-on-scroll"
            >
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-yellow-400 border-b-2 border-yellow-400 pb-2 inline-block">
                  Behind The Scenes
                </h2>

                <div
                  className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 ${
                    isVisible["behind-scenes"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {albumDetails.behindScenes.map((item, index) => (
                    <div
                      key={index}
                      className="bg-black p-6 rounded-lg border border-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-500 hover:-translate-y-2"
                    >
                      <h3 className="text-xl font-bold mb-3 text-yellow-400">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Lyrics Tab */}
        {activeTab === "lyrics" && (
          <section className="padding py-12">
            <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-8 border border-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              <h2 className="text-3xl font-bold mb-8 text-yellow-400 border-b-2 border-yellow-400 pb-2 inline-block">
                Lyrics
              </h2>

              <div className="space-y-8 text-gray-200">
                {albumDetails.lyrics.map((verse, index) => (
                  <div key={index} className="leading-relaxed">
                    <p className="whitespace-pre-line">{verse}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Story Tab */}
        {activeTab === "story" && (
          <section className="padding py-12">
            <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-8 border border-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              <h2 className="text-3xl font-bold mb-8 text-yellow-400 border-b-2 border-yellow-400 pb-2 inline-block">
                Album Story
              </h2>

              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-200 leading-relaxed">
                  {albumDetails.story}
                </p>

                <div className="mt-8 p-6 bg-black rounded-lg border border-yellow-400">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">
                    Director's Note
                  </h3>
                  <p className="text-gray-300 italic">
                    "Creating this album was a journey of discovery and
                    collaboration. We wanted to capture the essence of the
                    artist's vision while creating something that resonates with
                    listeners on a deeper level."
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Credits Tab */}
        {activeTab === "credits" && (
          <section className="padding py-12">
            <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-8 border border-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              <h2 className="text-3xl font-bold mb-8 text-yellow-400 border-b-2 border-yellow-400 pb-2 inline-block">
                Credits
              </h2>

              <ul className="space-y-4 text-lg">
                {credits.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-3 border-b border-gray-700 hover:bg-black transition-colors duration-300 rounded"
                  >
                    <span className="text-gray-400">{item.role}</span>
                    {item.link ? (
                      <Link
                        to={item.link}
                        className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 hover:underline"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="text-white">{item.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Related Tab */}
        {activeTab === "related" && (
          <section className="padding py-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-yellow-400 border-b-2 border-yellow-400 pb-2 inline-block">
                Related Albums
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {albums.map((album, idx) => (
                  <Link
                    to={album.link}
                    key={idx}
                    className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(234,179,8,0.4)]"
                  >
                    <div className="relative overflow-hidden aspect-square">
                      <img
                        src={album.image}
                        alt={album.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/30 to-yellow-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {album.name}
                      </h3>
                      <p className="text-sm text-gray-400">{album.artist}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
