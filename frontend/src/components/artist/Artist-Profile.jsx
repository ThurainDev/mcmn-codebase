import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
// images
import profile from "../../assets/images/susannamin.jpg";
import background from "../../assets/images/background.jpeg";
import albumss from "../../assets/images/pantine.jpg";

const albums = [
  {
    id: 1,
    title: "No Longer Bound",
    image: "/images/album1.jpg",
    link: "/album/1",
    year: "2022",
    tracks: 12,
  },
  {
    id: 2,
    title: "Free Spirit",
    image: "/images/album2.jpg",
    link: "/album/2",
    year: "2020",
    tracks: 10,
  },
  {
    id: 3,
    title: "Echoes",
    image: "/images/album3.jpg",
    link: "/album/3",
    year: "2018",
    tracks: 8,
  },
  {
    id: 4,
    title: "The Journey",
    image: "/images/album4.jpg",
    link: "/album/4",
    year: "2016",
    tracks: 9,
  },
];

const songs = [
  {
    id: 1,
    title: "အထက်သို့တက်သောမျက်ရည်",
    link: "/songs/tears-go-up-to-heaven",
    album: "No Longer Bound",
    year: "2022",
  },
  {
    id: 2,
    title: "ကျွန်နုပ်ရဲ့ပန်းတိုင်",
    link: "/songs/tears-go-up-to-heaven",
    album: "No Longer Bound",
    year: "2022",
  },
  {
    id: 3,
    title: "တိုး၍",
    link: "/songs/tears-go-up-to-heaven",
    album: "Free Spirit",
    year: "2020",
  },
  {
    id: 4,
    title: "အမြင့်ဆုံးသောဘုရား",
    link: "/songs/tears-go-up-to-heaven",
    album: "Free Spirit",
    year: "2020",
  },
  {
    id: 5,
    title: "အမြင့်ဆုံးသောဘုရား",
    link: "/songs/tears-go-up-to-heaven",
    album: "Echoes",
    year: "2018",
  },
  {
    id: 6,
    title: "အမြင့်ဆုံးသောဘုရား",
    link: "/songs/tears-go-up-to-heaven",
    album: "Echoes",
    year: "2018",
  },
  {
    id: 7,
    title: "အမြင့်ဆုံးသောဘုရား",
    link: "/songs/tears-go-up-to-heaven",
    album: "The Journey",
    year: "2016",
  },
  {
    id: 8,
    title: "အမြင့်ဆုံးသောဘုရား",
    link: "/songs/tears-go-up-to-heaven",
    album: "The Journey",
    year: "2016",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Pastor John",
    role: "Senior Pastor, Grace Church",
    text: "Susanna's music has been a blessing to our congregation. Her songs speak directly to the heart and bring people closer to God.",
    image: "/images/testimonial1.jpg",
  },
  {
    id: 2,
    name: "Mary Thant",
    role: "Worship Leader",
    text: "Working with Susanna has been an incredible journey. Her dedication to excellence and her heart for worship inspire everyone around her.",
    image: "/images/testimonial2.jpg",
  },
  {
    id: 3,
    name: "David Aung",
    role: "Music Producer",
    text: "Susanna brings a unique blend of traditional Myanmar sounds with contemporary Christian music. Her artistic vision is refreshing and powerful.",
    image: "/images/testimonial3.jpg",
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Worship Night",
    date: "June 15, 2023",
    location: "Yangon Community Church",
    link: "/events/worship-night",
  },
  {
    id: 2,
    title: "Album Release Concert",
    date: "July 22, 2023",
    location: "Myanmar Convention Center",
    link: "/events/album-release",
  },
  {
    id: 3,
    title: "Youth Conference",
    date: "August 5-7, 2023",
    location: "Mandalay Christian Center",
    link: "/events/youth-conference",
  },
];

export default function Artist_Profile() {
  const [view, setView] = useState("albums");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    setIsVisible(true);

    // For scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          el.classList.add("animate-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openAlbumModal = (album) => {
    setSelectedAlbum(album);
  };

  const closeAlbumModal = () => {
    setSelectedAlbum(null);
  };

  return (
    <>
      <div className="w-full bg-black text-[#E6D28C]">
        {/* Top Banner with Gold/Black Theme */}
        <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden">
          {/* Rich black background base */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#0a0a0a] to-[#050505] z-0"></div>

          {/* Gold dust effect overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] opacity-[0.03] mix-blend-overlay"></div>
            <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-[radial-gradient(ellipse_at_center,_#E6D28C_0%,_transparent_70%)] opacity-[0.04] mix-blend-overlay"></div>
          </div>

          {/* Enhanced music notes pattern with gold tint */}
          <div className="absolute inset-0 bg-[url('/images/music-notes-pattern.png')] opacity-[0.08] mix-blend-color-dodge z-0"></div>

          <img
            src={background}
            alt="Background"
            className="w-full h-full object-cover opacity-40 z-10 relative"
          />

          {/* Animated decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-[#E6D28C]/30 to-[#D4AF37]/20 animate-float blur-[1px] z-20"></div>
          <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-gradient-to-tr from-[#E6D28C]/25 to-[#D4AF37]/15 animate-twinkle blur-[1px] z-20"></div>

          {/* Profile Picture */}
          <div
            className={`absolute -bottom-20 left-6 sm:left-12 md:left-20 z-30 transition-all duration-500 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-[#D4AF37]/30 bg-black overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <img
                src={profile}
                alt="Susanna Min"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Info Section with Gold/Black Theme */}
        <div className="mt-24 px-4 sm:px-8 md:px-16 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Bio with Animation */}
          <div className="scroll-animate opacity-0 translate-y-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent font-jetbrains">
              Susanna Min
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#E6D28C]/80 text-sm">
                Christian Worship Artist
              </span>
              <span className="w-1 h-1 rounded-full bg-[#D4AF37]"></span>
              <span className="text-[#E6D28C]/80 text-sm">Songwriter</span>
              <span className="w-1 h-1 rounded-full bg-[#D4AF37]"></span>
              <span className="text-[#E6D28C]/80 text-sm">Vocalist</span>
            </div>
            <p className="text-[#E6D28C]/90 text-sm max-w-4xl leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it...
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-[#111] border border-[#D4AF37]/20 rounded-full text-xs text-[#E6D28C]/90">
                Worship
              </span>
              <span className="px-3 py-1 bg-[#111] border border-[#D4AF37]/20 rounded-full text-xs text-[#E6D28C]/90">
                Contemporary
              </span>
              <span className="px-3 py-1 bg-[#111] border border-[#D4AF37]/20 rounded-full text-xs text-[#E6D28C]/90">
                Myanmar
              </span>
              <span className="px-3 py-1 bg-[#111] border border-[#D4AF37]/20 rounded-full text-xs text-[#E6D28C]/90">
                Gospel
              </span>
            </div>
          </div>

          {/* Right Column: Contact with Animation */}
          <div className="scroll-animate opacity-0 translate-y-10 w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent font-jetbrains">
              Connect With Me
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <a
                href="https://music.apple.com"
                target="_blank"
                className="flex items-center gap-2 bg-black text-[#E6D28C] py-3 px-4 rounded-lg text-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:shadow-[0_0_10px_rgba(212,175,55,0.2)] transition-all duration-300"
              >
                <i className="fab fa-apple text-lg"></i> Apple Music
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                className="flex items-center gap-2 bg-black text-[#E6D28C] py-3 px-4 rounded-lg text-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:shadow-[0_0_10px_rgba(212,175,55,0.2)] transition-all duration-300"
              >
                <i className="fab fa-spotify text-lg"></i> Spotify
              </a>
              <a
                href="https://amazon.com/music"
                target="_blank"
                className="flex items-center gap-2 bg-black text-[#E6D28C] py-3 px-4 rounded-lg text-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:shadow-[0_0_10px_rgba(212,175,55,0.2)] transition-all duration-300"
              >
                <i className="fab fa-amazon text-lg"></i> Amazon
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="flex items-center gap-2 bg-black text-[#E6D28C] py-3 px-4 rounded-lg text-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:shadow-[0_0_10px_rgba(212,175,55,0.2)] transition-all duration-300"
              >
                <i className="fab fa-youtube text-lg"></i> YouTube
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                className="flex items-center gap-2 bg-black text-[#E6D28C] py-3 px-4 rounded-lg text-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:shadow-[0_0_10px_rgba(212,175,55,0.2)] transition-all duration-300"
              >
                <i className="fab fa-facebook text-lg"></i> Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="flex items-center gap-2 bg-black text-[#E6D28C] py-3 px-4 rounded-lg text-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:shadow-[0_0_10px_rgba(212,175,55,0.2)] transition-all duration-300"
              >
                <i className="fab fa-instagram text-lg"></i> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Artist Spotlight Section - New */}
      <div className="bg-gradient-to-b from-black to-[#0a0a0a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="scroll-animate opacity-0 translate-y-10">
            <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
                Artist Spotlight
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#E6D28C]/90 text-sm leading-relaxed mb-4">
                    Susanna Min is one of Myanmar's most beloved Christian
                    worship leaders and songwriters. With a heart for authentic
                    worship and a passion for creating music that bridges
                    traditional Myanmar sounds with contemporary Christian
                    music, Susanna has been inspiring believers across the
                    country for over a decade.
                  </p>
                  <p className="text-[#E6D28C]/90 text-sm leading-relaxed mb-4">
                    Her journey began in a small church in Yangon, where she led
                    worship from a young age. Today, her music reaches thousands
                    across Myanmar and beyond, bringing messages of hope, faith,
                    and God's love to listeners everywhere.
                  </p>
                  <div className="mt-6">
                    <h3 className="text-lg font-bold text-[#E6D28C] mb-3">
                      Musical Influences
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-black/50 border border-[#D4AF37]/20 rounded-full text-xs text-[#E6D28C]/90">
                        Traditional Myanmar Music
                      </span>
                      <span className="px-3 py-1 bg-black/50 border border-[#D4AF37]/20 rounded-full text-xs text-[#E6D28C]/90">
                        Hillsong Worship
                      </span>
                      <span className="px-3 py-1 bg-black/50 border border-[#D4AF37]/20 rounded-full text-xs text-[#E6D28C]/90">
                        Bethel Music
                      </span>
                      <span className="px-3 py-1 bg-black/50 border border-[#D4AF37]/20 rounded-full text-xs text-[#E6D28C]/90">
                        Elevation Worship
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-black/30 p-5 rounded-xl border border-[#E6D28C]/10">
                  <h3 className="text-lg font-bold text-[#E6D28C] mb-3">
                    Artist Statement
                  </h3>
                  <blockquote className="text-[#E6D28C]/80 text-sm italic border-l-2 border-[#D4AF37] pl-4 leading-relaxed">
                    "My greatest desire is to create music that helps people
                    encounter God in a personal and transformative way. Every
                    song I write is a prayer, every performance an act of
                    worship. I believe music has the power to transcend barriers
                    and speak directly to the heart, and I'm honored to use this
                    gift to glorify God and serve His people in Myanmar and
                    beyond."
                  </blockquote>
                  <p className="text-right text-[#E6D28C] mt-3 text-sm">
                    — Susanna Min
                  </p>

                  <div className="mt-6">
                    <h3 className="text-lg font-bold text-[#E6D28C] mb-3">
                      Career Highlights
                    </h3>
                    <ul className="text-[#E6D28C]/80 text-sm space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#D4AF37] mr-2">✓</span>
                        <span>Released 4 worship albums since 2016</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#D4AF37] mr-2">✓</span>
                        <span>
                          Led worship at major conferences across Myanmar
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#D4AF37] mr-2">✓</span>
                        <span>
                          Collaborated with international worship artists
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#D4AF37] mr-2">✓</span>
                        <span>
                          Mentored young worship leaders and songwriters
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Toggle Buttons */}
      <div className="bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto p-6 text-[#E6D28C]">
          {/* Toggle Buttons with Enhanced Styling */}
          <div className="flex gap-4 mb-6 scroll-animate opacity-0 translate-y-10">
            <button
              onClick={() => setView("albums")}
              className={`rounded-full px-6 py-2 text-sm font-jetbrains transition-all duration-300 ${
                view === "albums"
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#E6D28C] text-black shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                  : "bg-black text-[#E6D28C] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60"
              }`}
            >
              Albums ({albums.length})
            </button>
            <button
              onClick={() => setView("songs")}
              className={`rounded-full px-6 py-2 text-sm font-jetbrains transition-all duration-300 ${
                view === "songs"
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#E6D28C] text-black shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                  : "bg-black text-[#E6D28C] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60"
              }`}
            >
              Songs ({songs.length})
            </button>
            <button
              onClick={() => setView("events")}
              className={`rounded-full px-6 py-2 text-sm font-jetbrains transition-all duration-300 ${
                view === "events"
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#E6D28C] text-black shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                  : "bg-black text-[#E6D28C] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60"
              }`}
            >
              Events ({upcomingEvents.length})
            </button>
          </div>

          {/* Conditional View with Enhanced Styling */}
          <div className="scroll-animate opacity-0 translate-y-10">
            {view === "albums" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {albums.map((album) => (
                  <div
                    key={album.id}
                    onClick={() => openAlbumModal(album)}
                    className="rounded-xl overflow-hidden bg-[#111] border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={albumss}
                        alt={album.title}
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                        <span className="text-[#E6D28C] text-sm">
                          View Details
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-[#E6D28C] font-bold">
                        {album.title}
                      </h3>
                      <div className="flex justify-between items-center mt-2 text-xs text-[#E6D28C]/70">
                        <span>{album.year}</span>
                        <span>{album.tracks} tracks</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : view === "songs" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {songs.map((song) => (
                  <Link
                    key={song.id}
                    to={song.link}
                    className="p-4 bg-[#111] border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 rounded-xl hover:bg-[#111]/80 transition-all duration-300 hover:shadow-[0_0_10px_rgba(212,175,55,0.1)]"
                  >
                    <h3 className="text-[#E6D28C] font-bold mb-2">
                      {song.title}
                    </h3>
                    <div className="flex justify-between text-xs text-[#E6D28C]/70">
                      <span>Album: {song.album}</span>
                      <span>{song.year}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <Link
                    key={event.id}
                    to={event.link}
                    className="p-6 bg-[#111] border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 rounded-xl hover:bg-[#111]/80 transition-all duration-300 hover:shadow-[0_0_10px_rgba(212,175,55,0.1)]"
                  >
                    <h3 className="text-[#E6D28C] font-bold text-lg mb-2">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-[#E6D28C]/80">
                      <div className="flex items-center gap-2">
                        <i className="far fa-calendar text-[#D4AF37]"></i>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fas fa-map-marker-alt text-[#D4AF37]"></i>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="inline-block px-4 py-2 border border-[#D4AF37]/30 rounded-full text-xs text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors duration-300">
                        View Details
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Testimonials Section - New */}
      <div className="bg-gradient-to-b from-[#0a0a0a] to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
          <div className="scroll-animate opacity-0 translate-y-10">
            <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains text-center">
                What People Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/10 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)]"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#111] overflow-hidden border border-[#D4AF37]/30">
                        <img
                          src={profile}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-[#E6D28C] font-bold">
                          {testimonial.name}
                        </h3>
                        <p className="text-[#E6D28C]/70 text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#E6D28C]/80 text-sm italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Releases - New */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
          <div className="scroll-animate opacity-0 translate-y-10">
            <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
                Coming Soon
              </h2>
              <div className="relative overflow-hidden rounded-xl aspect-video">
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#0a0a0a] to-[#050505] z-0"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] opacity-[0.05] mix-blend-overlay"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#E6D28C] mb-2">
                    New Album: "Faithful Journey"
                  </h3>
                  <p className="text-[#E6D28C]/80 mb-6 max-w-2xl">
                    A collection of worship songs inspired by God's faithfulness
                    through life's journey
                  </p>
                  <div className="text-[#D4AF37] text-lg font-bold">
                    Coming September 2023
                  </div>
                  <div className="mt-8">
                    <button className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#E6D28C] text-black rounded-full font-bold text-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300">
                      Join the Waitlist
                    </button>
                  </div>
                </div>
                <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-[#E6D28C]/30 to-[#D4AF37]/20 animate-float blur-[1px] z-5"></div>
                <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-gradient-to-tr from-[#E6D28C]/25 to-[#D4AF37]/15 animate-twinkle blur-[1px] z-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Album Modal */}
      {selectedAlbum && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#111] rounded-2xl border border-[#E6D28C]/20 shadow-[0_0_30px_rgba(212,175,55,0.2)] max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent">
                  {selectedAlbum.title}
                </h2>
                <button
                  onClick={closeAlbumModal}
                  className="text-[#E6D28C] hover:text-[#D4AF37] transition-colors"
                >
                  <X />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={albumss}
                    alt={selectedAlbum.title}
                    className="w-full h-auto rounded-xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(0,0,0,0.3)]"
                  />
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-[#E6D28C]/80">
                      <div>Released: {selectedAlbum.year}</div>
                      <div>{selectedAlbum.tracks} tracks</div>
                    </div>
                    <div className="flex gap-3">
                      <NavLink
                        to={"/artists/artistname/album-name"}
                        className="text-[#E6D28C] hover:text-[#D4AF37] transition-colors"
                      >
                        <i className="fab fa-spotify text-xl">Album Page</i>
                      </NavLink>
                      <a
                        href="#"
                        className="text-[#E6D28C] hover:text-[#D4AF37] transition-colors"
                      >
                        <i className="fab fa-apple text-xl"></i>
                      </a>
                      <a
                        href="#"
                        className="text-[#E6D28C] hover:text-[#D4AF37] transition-colors"
                      >
                        <i className="fab fa-youtube text-xl"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#E6D28C] mb-4">
                    Album Tracks
                  </h3>
                  <div className="space-y-3">
                    {songs
                      .filter((song) => song.album === selectedAlbum.title)
                      .map((song, index) => (
                        <div
                          key={song.id}
                          className="flex items-center p-3 bg-black/50 rounded-lg border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 transition-all duration-300"
                        >
                          <div className="w-8 text-center text-[#D4AF37]">
                            {index + 1}
                          </div>
                          <div className="flex-grow">
                            <div className="text-[#E6D28C]">{song.title}</div>
                          </div>
                          <div className="flex gap-2">
                            <button className="text-[#E6D28C]/70 hover:text-[#D4AF37] transition-colors">
                              <i className="fas fa-play"></i>
                            </button>
                            <Link
                              to={song.link}
                              className="text-[#E6D28C]/70 hover:text-[#D4AF37] transition-colors"
                            >
                              <i className="fas fa-info-circle"></i>
                            </Link>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-[#E6D28C] mb-4">
                      About this Album
                    </h3>
                    <p className="text-[#E6D28C]/80 text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam
                      nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod,
                      nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget
                      aliquam nisl nisl sit amet nisl.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-bold text-[#E6D28C] mb-2">Credits</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm text-[#E6D28C]/70">
                        <div>Producer: John Smith</div>
                        <div>Mixing: Jane Doe</div>
                        <div>Mastering: Mike Johnson</div>
                        <div>Artwork: Sarah Lee</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
