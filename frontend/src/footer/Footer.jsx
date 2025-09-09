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
  {
    label: "Viber",
    href: "https://invite.viber.com/?g2=AQBqyoGW9J5ObFC%2BgmWs8wyGVUjtJoCvEZyZAS%2BVuP1%2FeN2%2B8WaVC9x5WcZzlieQ",
  },
];

export function socialLinkIcons(label) {
  switch (label) {
    // Facebook
    case "Facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="text-[#E6D28C] group-hover:text-[#D4AF37] transition-all duration-300 group-hover:scale-110"
        >
          <path
            fill="currentColor"
            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
          />
        </svg>
      );
    // Instagram
    case "Instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="text-[#E6D28C] group-hover:text-[#D4AF37] transition-all duration-300 group-hover:scale-110"
        >
          <path
            fill="currentColor"
            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
          />
        </svg>
      );
    // YouTube
    case "YouTube":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="text-[#E6D28C] group-hover:text-[#D4AF37] transition-all duration-300 group-hover:scale-110"
        >
          <path
            fill="currentColor"
            d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
          />
        </svg>
      );
    // Telegram
    case "Telegram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="text-[#E6D28C] group-hover:text-[#D4AF37] transition-all duration-300 group-hover:scale-110"
        >
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"
          />
        </svg>
      );
    // Viber
    case "Viber":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="text-[#E6D28C] group-hover:text-[#D4AF37] transition-all duration-300 group-hover:scale-110"
        >
          <path
            fill="currentColor"
            d="M7.965 6.202a.82.82 0 0 0-.537.106h-.014c-.375.22-.713.497-1.001.823c-.24.277-.37.557-.404.827c-.02.16-.006.322.041.475l.018.01c.27.793.622 1.556 1.052 2.274a13.4 13.4 0 0 0 2.03 2.775l.024.034l.038.028l.023.027l.028.024a13.6 13.6 0 0 0 2.782 2.04c1.155.629 1.856.926 2.277 1.05v.006c.123.038.235.055.348.055a1.6 1.6 0 0 0 .964-.414c.325-.288.6-.627.814-1.004v-.007c.201-.38.133-.738-.157-.981A12 12 0 0 0 14.41 13c-.448-.243-.903-.096-1.087.15l-.393.496c-.202.246-.568.212-.568.212l-.01.006c-2.731-.697-3.46-3.462-3.46-3.462s-.034-.376.219-.568l.492-.396c.236-.192.4-.646.147-1.094a12 12 0 0 0-1.347-1.88a.75.75 0 0 0-.44-.263M12.58 5a.5.5 0 0 0 0 1c1.264 0 2.314.413 3.145 1.205c.427.433.76.946.978 1.508c.219.563.319 1.164.293 1.766a.5.5 0 0 0 1 .042a5.4 5.4 0 0 0-.361-2.17a5.4 5.4 0 0 0-1.204-1.854l-.01-.01C15.39 5.502 14.085 5 12.579 5"
          />
          <path
            fill="currentColor"
            d="M12.545 6.644a.5.5 0 0 0 0 1h.017c.912.065 1.576.369 2.041.868c.477.514.724 1.153.705 1.943a.5.5 0 0 0 1 .023c.024-1.037-.31-1.932-.972-2.646V7.83c-.677-.726-1.606-1.11-2.724-1.185l-.017-.002z"
          />
          <path
            fill="currentColor"
            d="M12.526 8.319a.5.5 0 1 0-.052.998c.418.022.685.148.853.317c.169.17.295.443.318.87a.5.5 0 1 0 .998-.053c-.032-.6-.22-1.13-.605-1.52c-.387-.39-.914-.58-1.512-.612"
          />
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M7.067 2.384a22.15 22.15 0 0 1 9.664 0l.339.075a5.16 5.16 0 0 1 3.872 3.763a19.7 19.7 0 0 1 0 9.7a5.16 5.16 0 0 1-3.872 3.763l-.34.075a22.2 22.2 0 0 1-6.077.499L8 22.633a.75.75 0 0 1-1.24-.435l-.439-2.622a5.16 5.16 0 0 1-3.465-3.654a19.7 19.7 0 0 1 0-9.7a5.16 5.16 0 0 1 3.872-3.763zm9.337 1.463a20.65 20.65 0 0 0-9.01 0l-.34.076A3.66 3.66 0 0 0 4.31 6.591a18.2 18.2 0 0 0 0 8.962a3.66 3.66 0 0 0 2.745 2.668l.09.02a.75.75 0 0 1 .576.608l.294 1.758l1.872-1.675a.75.75 0 0 1 .553-.19a20.7 20.7 0 0 0 5.964-.445l.339-.076a3.66 3.66 0 0 0 2.745-2.668c.746-2.94.746-6.021 0-8.962a3.66 3.66 0 0 0-2.745-2.668z"
            clip-rule="evenodd"
          />
        </svg>
      );
  }
}

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/what-we-provide",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const contactInfo = [
  {
    label: "Address",
    value:
      "Building A2, Room 804, Bo Ba Htoo Housing Complex I, Ward 48, North Dagon Township, Yangon",
  },
  {
    label: "Phone",
    value: "+959 799901085",
  },
  {
    label: "Email",
    value: "myanmarchristianmusicnetwork@gmail.com",
  },
];

export function contactInfoIcons(label) {
  switch (label) {
    // Address
    case "Address":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-[#E6D28C] mt-1 flex-shrink-0"
        >
          <path
            fill="currentColor"
            d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
          />
        </svg>
      );
    // Phone
    case "Phone":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="text-[#E6D28C] mt-1 flex-shrink-0"
        >
          <path
            fill="currentColor"
            d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.32.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
          />
        </svg>
      );
    // Email
    case "Email":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="text-[#E6D28C] mt-1 flex-shrink-0"
        >
          <path
            fill="currentColor"
            d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"
          />
        </svg>
      );
  }
}

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // For scroll animations
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
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#050505] via-[#0a0a0a] to-[#050505] font-jetbrains relative overflow-hidden">
        {/* Gold dust effect overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] opacity-[0.03] mix-blend-overlay"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] opacity-[0.03] mix-blend-overlay"></div>
        </div>

        {/* Diagonal gold accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.07] via-transparent to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-[#E6D28C]/[0.05] z-0"></div>

        {/* Main footer content */}
        <div className="relative z-10 py-8 sm:py-10 lg:py-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Column 1: Social */}
            <div className="scroll-animate opacity-0 translate-y-10 sm:col-span-1">
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
                Follow Us
              </h2>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.length &&
                  socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="p-2 rounded-lg bg-gradient-to-br from-[#E6D28C]/10 to-[#D4AF37]/5 border border-[#E6D28C]/20 transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-[#E6D28C]/20 hover:to-[#D4AF37]/10 hover:border-[#D4AF37]/40 hover:shadow-lg hover:shadow-[#D4AF37]/20 group active:scale-95"
                      aria-label={link.label}
                    >
                      {socialLinkIcons(link.label)}
                    </Link>
                  ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div
              className="scroll-animate opacity-0 translate-y-10 sm:col-span-1"
              style={{ transitionDelay: "100ms" }}
            >
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
                Quick Links
              </h2>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-[#E6D28C]/80 hover:text-[#D4AF37] transition-all duration-300 flex items-center gap-3 group py-1 px-2 rounded-md hover:bg-[#E6D28C]/5 active:bg-[#E6D28C]/10"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/70 group-hover:scale-125 group-hover:bg-[#D4AF37] transition-all duration-300"></span>
                      <span className="text-sm sm:text-base">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div
              className="scroll-animate opacity-0 translate-y-10 sm:col-span-2 lg:col-span-2"
              style={{ transitionDelay: "200ms" }}
            >
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
                Contact Us
              </h2>
              <div className="space-y-4 sm:space-y-5">
                {contactInfo.length &&
                  contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 group p-2 rounded-lg"
                    >
                      {contactInfoIcons(info.label)}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-[#E6D28C]/60 font-medium mb-1 uppercase tracking-wide">
                          {info.label}
                        </p>
                        <p className="text-sm sm:text-base text-[#E6D28C]/80 leading-relaxed break-words">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider with gold gradient */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E6D28C]/30 to-transparent my-6 sm:my-8"></div>
        </div>

        {/* Copyright section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-[#E6D28C]/70 text-center sm:text-left">
              <p className="text-xs sm:text-sm">
                © 2025 MCMN-MM.COM. All Rights Reserved.
              </p>
            </div>
            {/* <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 sm:gap-x-6 gap-y-2">
              <Link
                to="/faq"
                className="text-[#E6D28C]/70 hover:text-[#D4AF37] transition-all duration-300 text-xs sm:text-sm py-1 px-2 rounded hover:bg-[#E6D28C]/5"
              >
                FAQ
              </Link>
              <Link
                to="/copyright"
                className="text-[#E6D28C]/70 hover:text-[#D4AF37] transition-all duration-300 text-xs sm:text-sm py-1 px-2 rounded hover:bg-[#E6D28C]/5"
              >
                Copyright
              </Link>
              <Link
                to="/privacy"
                className="text-[#E6D28C]/70 hover:text-[#D4AF37] transition-all duration-300 text-xs sm:text-sm py-1 px-2 rounded hover:bg-[#E6D28C]/5"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-[#E6D28C]/70 hover:text-[#D4AF37] transition-all duration-300 text-xs sm:text-sm py-1 px-2 rounded hover:bg-[#E6D28C]/5"
              >
                Terms & Conditions
              </Link>
            </div> */}
          </div>
        </div>

        {/* Animated particles */}
        <div className="absolute bottom-1/4 left-1/4 w-6 h-6 rounded-full bg-gradient-to-br from-[#E6D28C]/20 to-[#D4AF37]/10 animate-float blur-[1px]"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-gradient-to-tr from-[#E6D28C]/15 to-[#D4AF37]/5 animate-twinkle blur-[1px]"></div>
        <div
          className="absolute top-2/3 right-1/3 w-5 h-5 rounded-full bg-gradient-to-bl from-[#E6D28C]/20 to-[#D4AF37]/10 animate-float blur-[1px]"
          style={{ animationDelay: "1s" }}
        ></div>
      </footer>

      {/* Add custom styles for scroll animations */}
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
            transform: translateY(-10px) rotate(180deg);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
}
