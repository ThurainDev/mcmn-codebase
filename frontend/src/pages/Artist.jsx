import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import artist_1 from "../assets/images/asyrday.jpg";
// components | tab
import Navigation_Tabs from "../components/artist/tab/Navigation_Tabs";
// components | section
import Hero_Section from "../components/hero-section/Hero_Section";
import Artists_Section from "../components/artist/section/Artists_Section";
import Artist_Spotlight_Section from "../components/artist/section/Artist_Spotlight_Section";
import Testimonials_Section from "../components/artist/section/Testimonials_Section";
import Upcoming_Events_Section from "../components/artist/section/Upcoming_Events_Section";

// Enhanced artist data with more details
const artists = [
  {
    name: "Artist 1",
    role: "Singer",
    genre: "Contemporary",
    image: { artist_1 },
    link: "/artists/susannamin",
    bio: "A talented vocalist with a passion for contemporary Christian music.",
    achievements: ["Album of the Year 2022", "Best New Artist 2021"],
  },
  {
    name: "Artist 2",
    role: "Composer",
    genre: "Worship",
    image: "/path-to-image2.jpg",
    link: "/artists/saw-david-paul",
    bio: "Renowned composer creating powerful worship music for churches across Myanmar.",
    achievements: ["Best Composition 2023", "Worship Leader Award"],
  },
  {
    name: "Artist 3",
    role: "Musician",
    genre: "Classical",
    image: "/path-to-image3.jpg",
    link: "/artists/susannamin",
    bio: "Classically trained musician bringing traditional elements to Christian music.",
    achievements: ["Classical Fusion Award", "Best Instrumental Performance"],
  },
  {
    name: "Artist 4",
    role: "Singer",
    genre: "Gospel",
    image: "/path-to-image4.jpg",
    link: "/artists/susannamin",
    bio: "Gospel singer with a powerful voice that touches hearts across the nation.",
    achievements: ["Gospel Voice Award", "Ministry Impact Recognition"],
  },
  {
    name: "Artist 5",
    role: "Singer",
    genre: "Contemporary",
    image: { artist_1 },
    link: "/artists/susannamin",
    bio: "Rising star in the contemporary Christian music scene with a unique style.",
    achievements: ["Breakthrough Artist 2023", "Youth Impact Award"],
  },
  {
    name: "Artist 6",
    role: "Composer",
    genre: "Hymnal",
    image: "/path-to-image2.jpg",
    link: "/artists/susannamin",
    bio: "Composer specializing in modern arrangements of traditional hymns.",
    achievements: ["Hymn Revival Award", "Traditional Excellence"],
  },
  {
    name: "Artist 7",
    role: "Musician",
    genre: "Fusion",
    image: "/path-to-image3.jpg",
    link: "/artists/susannamin",
    bio: "Innovative musician blending traditional Myanmar sounds with contemporary Christian music.",
    achievements: ["Cultural Fusion Award", "Innovative Arrangement"],
  },
  {
    name: "Artist 8",
    role: "Musician",
    genre: "Instrumental",
    image: "/path-to-image4.jpg",
    link: "/artists/susannamin",
    bio: "Instrumental artist creating peaceful and reflective Christian music.",
    achievements: ["Best Instrumental Album", "Meditation Music Award"],
  },
];

// Featured artists for spotlight section
const featuredArtists = artists.slice(0, 3);

export default function Artist() {
  const [activeTab, setActiveTab] = useState("artists");
  const [isVisible, setIsVisible] = useState(false);

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

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="padding pt-[120px] pb-[30px] bg-black text-[#E6D28C]">
        {/* Hero Section */}
        <Hero_Section
          isVisible={isVisible}
          title="Our Artists"
          description="Discover talented Christian musicians and artists from Myanmar"
        />

        {/* Navigation Tabs */}
        <Navigation_Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* SECTION: Artists */}
        <Artists_Section activeTab={activeTab} artists={artists} />

        {/* SECTION: Artist Spotlight */}
        <Artist_Spotlight_Section
          activeTab={activeTab}
          featuredArtists={featuredArtists}
        />

        {/* SECTION: Testimonials */}
        <Testimonials_Section activeTab={activeTab} />

        {/* SECTION: Upcoming Events */}
        <Upcoming_Events_Section activeTab={activeTab} />
      </div>

      {/* Add custom styles for animations */}
      <style jsx>{`
        .scroll-animate {
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </>
  );
}
