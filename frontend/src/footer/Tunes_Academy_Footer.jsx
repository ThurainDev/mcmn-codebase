import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/MyanmarChristianMusicNetwork",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/myanmarchristianmusicnetwork",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@MyanmarChristianMusicNetwork",
  },
  {
    label: "Telegram",
    href: "https://t.me/MyanmarChristianMusicNetwork",
  },
];

const musicSchoolLinks = [
  {
    label: "Home",
    href: "/music-school",
  },
  {
    label: "Courses",
    href: "/music-school/courses",
  },
  {
    label: "Instructors",
    href: "/music-school/instructors",
  },
  {
    label: "Schedule",
    href: "/music-school/schedule",
  },
  {
    label: "Enrollment",
    href: "/music-school/enrollment",
  },
];

const contactInfo = [
  {
    label: "Address",
    value:
      "No.1126(A), Kantharyar 1st street, 35 Quarter, North Dagon Township, Yangon",
  },
  {
    label: "Phone",
    value: "+959 675917807, +959 428801606",
  },
  {
    label: "Email",
    value: "tunesacademy.info@gmail.com",
  },
];

const musicPrograms = [
  {
    label: "Piano Classes",
    href: "/music-school/piano",
  },
  {
    label: "Guitar Classes",
    href: "/music-school/guitar",
  },
  {
    label: "Vocal Training",
    href: "/music-school/vocal",
  },
  {
    label: "Drum Lessons",
    href: "/music-school/drums",
  },
  {
    label: "Violin Classes",
    href: "/music-school/violin",
  },
];

function socialLinkIcons(label) {
  const iconClass =
    "text-[#E6D28C] group-hover:text-white transition-all duration-300 group-hover:scale-110";

  switch (label) {
    case "Facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={iconClass}
        >
          <path
            fill="currentColor"
            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
          />
        </svg>
      );
    case "Instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={iconClass}
        >
          <path
            fill="currentColor"
            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
          />
        </svg>
      );
    case "YouTube":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={iconClass}
        >
          <path
            fill="currentColor"
            d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
          />
        </svg>
      );
    case "Telegram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={iconClass}
        >
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"
          />
        </svg>
      );
    default:
      return null;
  }
}

function contactInfoIcons(label) {
  const iconClass =
    "text-[#E6D28C] group-hover:text-white transition-all duration-300 mt-1 flex-shrink-0";

  switch (label) {
    case "Address":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className={iconClass}
        >
          <path
            fill="currentColor"
            d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
          />
        </svg>
      );
    case "Phone":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className={iconClass}
        >
          <path
            fill="currentColor"
            d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.32.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
          />
        </svg>
      );
    case "Email":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className={iconClass}
        >
          <path
            fill="currentColor"
            d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function Music_School_Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.9;
        if (isInView) {
          el.classList.add("animate-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A2151] via-[#141937] to-[#0F1429] font-jetbrains relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#E6D28C_0%,_transparent_70%)] opacity-[0.02] mix-blend-overlay"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-[radial-gradient(ellipse_at_center,_#E6D28C_0%,_transparent_70%)] opacity-[0.03] mix-blend-overlay"></div>
        </div>

        {/* Diagonal accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E6D28C]/[0.05] via-transparent to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-[#E6D28C]/[0.03] z-0"></div>

        {/* Main footer content */}
        <div className="relative z-10 py-8 sm:py-10 lg:py-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Column 1: Music School Info */}
            <div className="scroll-animate opacity-0 translate-y-10 sm:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <h2 className="text-lg sm:text-xl font-bold mb-3 bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent">
                  Tunes Academy
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Discover your musical potential with professional instruction
                  in a supportive Christian environment. Join our community of
                  passionate musicians.
                </p>
              </div>

              {/* Social Links */}
              <div className="mb-6">
                <h3 className="text-[#E6D28C] font-semibold mb-3 text-sm sm:text-base">
                  Follow Us
                </h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="p-2 rounded-lg bg-gradient-to-br from-[#E6D28C]/10 to-[#1A2151]/20 border border-[#E6D28C]/20 transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-[#E6D28C]/20 hover:to-[#1A2151]/30 hover:border-[#E6D28C]/40 hover:shadow-lg hover:shadow-[#E6D28C]/20 group active:scale-95"
                      aria-label={link.label}
                    >
                      {socialLinkIcons(link.label)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            {/* <div
              className="scroll-animate opacity-0 translate-y-10"
              style={{ transitionDelay: "100ms" }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {musicSchoolLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-[#E6D28C] transition-all duration-300 flex items-center gap-3 group py-1 px-2 rounded-md hover:bg-[#E6D28C]/5 active:bg-[#E6D28C]/10"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E6D28C]/70 group-hover:scale-125 group-hover:bg-[#E6D28C] transition-all duration-300"></span>
                      <span className="text-sm sm:text-base">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Column 3: Music Programs */}
            {/* <div
              className="scroll-animate opacity-0 translate-y-10"
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent">
                Music Programs
              </h3>
              <ul className="space-y-3">
                {musicPrograms.map((program) => (
                  <li key={program.href}>
                    <Link
                      to={program.href}
                      className="text-gray-300 hover:text-[#E6D28C] transition-all duration-300 flex items-center gap-3 group py-1 px-2 rounded-md hover:bg-[#E6D28C]/5 active:bg-[#E6D28C]/10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        className="text-[#E6D28C]/70 group-hover:text-[#E6D28C] transition-all duration-300 flex-shrink-0"
                      >
                        <path
                          fill="currentColor"
                          d="M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3z"
                        />
                      </svg>
                      <span className="text-sm sm:text-base">
                        {program.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Column 4: Contact Info */}
            <div
              className="col-span-3 scroll-animate opacity-0 translate-y-10"
              style={{ transitionDelay: "300ms" }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent">
                Contact Us
              </h3>
              <div className="space-y-4 sm:space-y-5">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-2 rounded-lg"
                  >
                    {contactInfoIcons(info.label)}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-[#E6D28C]/60 font-medium mb-1 uppercase tracking-wide">
                        {info.label}
                      </p>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed break-words">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E6D28C]/30 to-transparent my-6 sm:my-8"></div>
        </div>

        {/* Copyright section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-gray-400 text-center sm:text-left">
              <p className="text-xs sm:text-sm">
                © 2025 MCMN Music School. All Rights Reserved.
              </p>
            </div>
            {/* <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 sm:gap-x-6 gap-y-2">
              <Link
                to="/music-school/terms"
                className="text-gray-400 hover:text-[#E6D28C] transition-all duration-300 text-xs sm:text-sm py-1 px-2 rounded hover:bg-[#E6D28C]/5"
              >
                Terms of Service
              </Link>
              <Link
                to="/music-school/privacy"
                className="text-gray-400 hover:text-[#E6D28C] transition-all duration-300 text-xs sm:text-sm py-1 px-2 rounded hover:bg-[#E6D28C]/5"
              >
                Privacy Policy
              </Link>
              <Link
                to="/music-school/enrollment-policy"
                className="text-gray-400 hover:text-[#E6D28C] transition-all duration-300 text-xs sm:text-sm py-1 px-2 rounded hover:bg-[#E6D28C]/5"
              >
                Enrollment Policy
              </Link>
            </div> */}
          </div>
        </div>

        {/* Animated musical notes */}
        <div className="absolute bottom-1/4 left-1/4 w-4 h-4 text-[#E6D28C]/20 animate-float">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3z" />
          </svg>
        </div>
        <div className="absolute top-1/3 right-1/4 w-5 h-5 text-[#E6D28C]/15 animate-twinkle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3z" />
          </svg>
        </div>
        <div
          className="absolute top-2/3 right-1/3 w-3 h-3 text-[#E6D28C]/25 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3z" />
          </svg>
        </div>
      </footer>

      {/* Custom styles */}
      <style jsx>{`
        .scroll-animate {
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(180deg);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
