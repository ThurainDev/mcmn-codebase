import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import { Menu, X } from "lucide-react";

const menuItems = [
  {
    label: "About",
    path: "/about",
  },
  {
    label: "What We Provide",
    path: "/what-we-provide",
    hasDropdown: true,
  },
  // {
  //   label: "Artist",
  //   path: "/artist",
  // },
  // {
  //   label: "Song",
  //   path: "/song",
  // },
  // {
  //   label: "Organization",
  //   path: "/organization",
  // },
  {
    label: "Contact",
    path: "/contact",
  },
];

const whatWeProvideItems = [
  {
    label: "Music Distribution",
    path: "/music-distribution",
  },
  // {
  //   label: "Cover Song Licence",
  //   path: "/cover-song-copyright-licence",
  // },
  // {
  //   label: "Church Licence",
  //   path: "/church-copyright-licence",
  // },
  {
    label: "Tunes Academy",
    path: "/tunes-academy",
  },
  // {
  //   label: "Create Song",
  //   path: "/create-song",
  // },
];

export default function NavBar_2_Section({ scrolled, isVisible }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        className={`transition-all duration-300 flex justify-between items-center padding py-2 font-jetbrains relative z-30
  ${
    scrolled
      ? "bg-black/80 backdrop-blur-md shadow-md"
      : "bg-gradient-to-r from-[#050505] via-[#0a0a0a] to-[#050505]"
  }`}
      >
        {/* Logo */}
        <div
          className={`text-base sm:text-lg text-[#E6D28C] transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <NavLink to={"/"}>
            <div className="flex justify-center items-center gap-2 sm:gap-3 group hover:scale-105 transition-transform duration-300">
              <img
                src={Logo}
                alt="MCMN Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-transparent group-hover:border-[#D4AF37]/50 transition-all duration-300"
              />
              <span className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient hidden sm:block lg:block">
                Myanmar Christian Music Network
              </span>
              <span className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient block sm:hidden text-sm">
                MCMN
              </span>
            </div>
          </NavLink>
        </div>

        <div className="relative">
          {/* Desktop Menu */}
          <ul className="xl:flex hidden items-center gap-6 2xl:gap-10 text-[#E6D28C] text-sm xl:text-base">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                {item.hasDropdown ? (
                  <div ref={dropdownRef}>
                    <button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="flex items-center gap-1 text-[#E6D28C] hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none"
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive ? "text-[#D4AF37] font-semibold" : ""
                        }
                      >
                        {item.label}
                      </NavLink>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        className={`transform transition-transform duration-300 ${
                          showDropdown ? "rotate-180" : ""
                        }`}
                      >
                        <path fill="currentColor" d="m12 15l-5-5h10z" />
                      </svg>
                    </button>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>

                    {/* Desktop Dropdown Menu */}
                    {showDropdown && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setShowDropdown(false)}
                        />
                        <ul className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-md py-3 px-4 rounded-xl min-w-[250px] border border-[#D4AF37]/30 shadow-[0_10px_25px_rgba(0,0,0,0.5)] z-20 transform transition-all duration-300">
                          {whatWeProvideItems.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="py-2 hover:translate-x-2 transition-all duration-300"
                            >
                              <NavLink
                                to={subItem.path}
                                onClick={() => setShowDropdown(false)}
                                className="hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-3 p-2 rounded-lg hover:bg-[#D4AF37]/10"
                              >
                                <span className="w-2 h-2 rounded-full bg-[#D4AF37]/70"></span>
                                {subItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ) : (
                  <>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#D4AF37] font-semibold"
                          : "hover:text-[#D4AF37] transition-colors duration-300"
                      }
                    >
                      {item.label}
                    </NavLink>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          {showMenu && (
            <>
              {/* Mobile Menu Backdrop */}
              <div
                className="xl:hidden fixed inset-0 bg-black/40 backdrop-blur-md z-40 transition-opacity duration-300"
                onClick={() => setShowMenu(false)}
              />

              <div className="xl:hidden fixed left-0 right-0 top-[72px] bg-black/95 backdrop-blur-md border-t border-[#D4AF37]/20 shadow-2xl z-50 max-h-[calc(100vh-72px)] overflow-y-auto">
                <div className="padding py-6 space-y-4">
                  {menuItems.map((item, index) => {
                    if (item.label === "Home") return null; // Skip Home in mobile menu

                    return (
                      <div
                        key={index}
                        className="border-b border-[#D4AF37]/10 pb-3"
                      >
                        {item.hasDropdown ? (
                          <>
                            <button
                              onClick={() =>
                                setShowMobileDropdown(!showMobileDropdown)
                              }
                              className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-[#E6D28C] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300"
                            >
                              <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                  isActive ? "text-[#D4AF37] font-semibold" : ""
                                }
                              >
                                {item.label}
                              </NavLink>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                className={`transform transition-transform duration-300 ${
                                  showMobileDropdown ? "rotate-180" : ""
                                }`}
                              >
                                <path fill="currentColor" d="m12 15l-5-5h10z" />
                              </svg>
                            </button>

                            {/* Mobile Submenu */}
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                showMobileDropdown
                                  ? "max-h-96 opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <div className="ml-4 mt-2 space-y-2 border-l-2 border-[#D4AF37]/20 pl-4">
                                {whatWeProvideItems.map((subItem, subIndex) => (
                                  <NavLink
                                    key={subIndex}
                                    to={subItem.path}
                                    onClick={() => setShowMenu(false)}
                                    className="block py-2 px-3 rounded-lg text-sm text-[#E6D28C] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 hover:translate-x-1"
                                  >
                                    {subItem.label}
                                  </NavLink>
                                ))}
                              </div>
                            </div>
                          </>
                        ) : (
                          <NavLink
                            to={item.path}
                            onClick={() => setShowMenu(false)}
                            className={({ isActive }) =>
                              `block py-2 px-3 rounded-lg transition-all duration-300 ${
                                isActive
                                  ? "text-[#D4AF37] font-semibold bg-[#D4AF37]/10"
                                  : "text-[#E6D28C] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:translate-x-2"
                              }`
                            }
                          >
                            {item.label}
                          </NavLink>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* Menu Icon */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#E6D28C] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
            aria-label="Toggle navigation menu"
          >
            {showMenu ? (
              <X size={24} className="animate-pulse" />
            ) : (
              <Menu
                size={24}
                className="hover:scale-110 transition-transform duration-300"
              />
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
