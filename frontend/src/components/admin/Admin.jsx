import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Admin() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll animations
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animate");
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add("animate-in");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Admin sections data
  const adminSections = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      ),
    },
    {
      id: "users",
      title: "Users",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: "songs",
      title: "Songs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      ),
    },
    {
      id: "artists",
      title: "Artists",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 2a6.5 6.5 0 0 0 0 13" />
          <path d="M2 8.5a6.5 6.5 0 0 0 13 0" />
          <path d="M15.5 14a6.5 6.5 0 0 0 0 13" />
          <path d="M9 14.5a6.5 6.5 0 0 0 13 0" />
        </svg>
      ),
    },
    {
      id: "organizations",
      title: "Organizations",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <path d="M9 9h6" />
          <path d="M9 12h6" />
          <path d="M9 15h6" />
        </svg>
      ),
    },
    {
      id: "licenses",
      title: "Licenses",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
          <path d="M9 9h1" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
        </svg>
      ),
    },
    {
      id: "settings",
      title: "Settings",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]">
      {/* Admin Header */}
      <header className={`transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} bg-black/80 backdrop-blur-md shadow-md border-b border-[#D4AF37]/20 padding py-6`}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
            Admin Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-black/50 border border-[#D4AF37]/30 rounded-lg px-4 py-2 text-[#E6D28C] placeholder-[#E6D28C]/50 focus:outline-none focus:border-[#D4AF37] transition-all duration-300 w-full md:w-auto"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <div className="flex items-center gap-2 bg-black/50 border border-[#D4AF37]/30 rounded-lg px-3 py-2 text-[#E6D28C] hover:border-[#D4AF37] transition-all duration-300 cursor-pointer group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#D4AF37] transition-colors duration-300">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="hidden md:inline group-hover:text-[#D4AF37] transition-colors duration-300">Admin</span>
            </div>
          </div>
        </div>
      </header>

      <div className="padding py-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="bg-black/60 backdrop-blur-sm rounded-xl border border-[#D4AF37]/20 shadow-lg overflow-hidden scroll-animate opacity-0 translate-y-10 transition-all duration-500 delay-100">
            <nav className="p-4">
              <ul className="flex flex-col gap-2">
                {adminSections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === section.id ? 'bg-gradient-to-r from-[#D4AF37]/20 to-[#E6D28C]/10 text-[#D4AF37] font-medium' : 'text-[#E6D28C]/80 hover:bg-black/40 hover:text-[#D4AF37]'}`}
                    >
                      <span className={`transition-transform duration-300 ${activeSection === section.id ? 'scale-110' : ''}`}>
                        {section.icon}
                      </span>
                      <span>{section.title}</span>
                      {activeSection === section.id && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-twinkle"></span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Quick Stats */}
          <div className="mt-6 bg-black/60 backdrop-blur-sm rounded-xl border border-[#D4AF37]/20 shadow-lg p-5 scroll-animate opacity-0 translate-y-10 transition-all duration-500 delay-200">
            <h3 className="text-[#E6D28C] font-medium mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20v-6" />
                <path d="M16 20v-10" />
                <path d="M8 20v-2" />
                <path d="M4 20v-4" />
                <path d="M20 20v-8" />
              </svg>
              Quick Stats
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[#E6D28C]/70 text-sm">Total Users</span>
                <span className="text-[#D4AF37] font-medium">1,245</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#E6D28C]/70 text-sm">Total Songs</span>
                <span className="text-[#D4AF37] font-medium">328</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#E6D28C]/70 text-sm">Total Artists</span>
                <span className="text-[#D4AF37] font-medium">87</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#E6D28C]/70 text-sm">Active Licenses</span>
                <span className="text-[#D4AF37] font-medium">156</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Dashboard Section */}
          {activeSection === "dashboard" && (
            <div className="space-y-6">
              {/* Welcome Card */}
              <div className="bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-sm rounded-xl border border-[#D4AF37]/20 shadow-lg p-6 scroll-animate opacity-0 translate-y-10 transition-all duration-500 delay-100">
                <h2 className="text-2xl font-semibold text-[#E6D28C] mb-3">Welcome to MCMN Admin</h2>
                <p className="text-[#E6D28C]/80 mb-4">Manage your music content, artists, and licenses from this central dashboard.</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <button className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black px-4 py-2 rounded-lg font-medium hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105 focus:outline-none">
                    View Analytics
                  </button>
                  <button className="border border-[#D4AF37] text-[#E6D28C] px-4 py-2 rounded-lg font-medium hover:bg-[#D4AF37]/10 transition-all duration-300 focus:outline-none">
                    Generate Reports
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 scroll-animate opacity-0 translate-y-10 transition-all duration-500 delay-200">
                {/* Users Card */}
                <div className="bg-black/60 backdrop-blur-sm rounded-xl border border-[#D4AF37]/20 shadow-lg p-5 hover:border-[#D4AF37]/50 transition-all duration-300 group">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[#E6D28C]/70 text-sm">Total Users</p>
                      <h3 className="text-2xl font-bold text-[#E6D28C] mt-1 group-hover:text-[#D4AF37] transition-colors duration-300">1,245</h3>
                    </div>
                    <div className="p-2 bg-[#D4AF37]/10 rounded-lg group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="text-green-500 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6-6 6 6" />
                        <path d="M6 12h12" />
                        <path d="m6 15 6 6 6-6" />
                      </svg>
                      12%
                    </span>
                    <span className="text-[#E6D28C]/60 ml-2">vs last month</span>
                  </div>
                </div>

                {/* Songs Card */}
                <div className="bg-black/60 backdrop-blur-sm rounded-xl border border-[#D4AF37]/20 shadow-lg p-5 hover:border-[#D4AF37]/50 transition-all duration-300 group">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[#E6D28C]/70 text-sm">Total Songs</p>
                      <h3 className="text-2xl font-bold text-[#E6D28C] mt-1 group-hover:text-[#D4AF37] transition-colors duration-300">328</h3>
                    </div>
                    <div className="p-2 bg-[#D4AF37]/10 rounded-lg group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18V5l12-2v13" />
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="16" r="3" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="text-green-500 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6-6 6 6" />
                        <path d="M6 12h12" />
                        <path d="m6 15 6 6 6-6" />
                      </svg>
                      8%
                    </span>
                    <span className="text-[#E6D28C]/60 ml-2">vs last month</span>
                  </div>
                </div>

                {/* Artists Card */}
                <div className="bg-black/60 backdrop-blur-sm rounded-xl border border-[#D4AF37]/20 shadow-lg p-5 hover:border-[#D4AF37]/50 transition-all duration-300 group">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[#E6D28C]/70 text-sm">Total Artists</p>
                      <h3 className="text-2xl font-bold text-[#E6D28C] mt-1 group-hover:text-[#D4AF37] transition-colors duration-300">87</h3>
                    </div>
                    <div className="p-2 bg-[#D4AF37]/10 rounded-lg group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8.5 2a6.5 6.5 0 0 0 0 13" />
                        <path d="M2 8.5a6.5 6.5 0 0 0 13 0" />
                        <path d="M15.5 14a6.5 6.5 0 0 0 0 13" />
                        <path d="M9 14.5a6.5 6.5 0 0 0 13 0" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="text-green-500 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6-6 6 6" />
                        <path d="M6 12h12" />
                        <path d="m6 15 6 6 6-6" />
                      </svg>
                      5%
                    </span>
                    <span className="text-[#E6D28C]/60 ml-2">vs last month</span>
                  </div>
                </div>

                {/* Licenses Card */}
                <div className="bg-black/60 backdrop-blur-sm rounded-xl border border-[#D4AF37]/20 shadow-lg p-5 hover:border-[#D4AF37]/50 transition-all duration-300 group">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[#E6D28C]/70 text-sm">Active Licenses</p>
                      <h3 className="text-2xl font-bold text-[#E6D28C] mt-1 group-hover:text-[#D4AF37] transition-colors duration-300">156</h3>
                    </div>
                    <div className="p-2 bg-[#D4AF37]/10 rounded-lg group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
                        <path d="M9 9h1" />
                        <path d="M9 13h6" />
                        <path d="M9 17h6" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="text-green-500 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6-6 6 6" />
                        <path d="M6 12h12" />
                        <path d="m6 15 6 6 6-6" />
                      </svg>
                      15%
                    </span>
                    <span className="text-[#E6D28C]/60 ml-2">vs last month</span>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-black/60 backdrop-blur-sm rounded-xl border border-[#D4AF37]/20 shadow-lg p-6 scroll-animate opacity-0 translate-y-10 transition-all duration-500 delay-300">
                <h3 className="text-xl font-semibold text-[#E6D28C] mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {/* Activity Item 1 */}
                  <div className="flex items-start gap-3 pb-4 border-b border-[#D4AF37]/10">
                    <div className="p-2 bg-[#D4AF37]/10 rounded-lg shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18V5l12-2v13" />
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="16" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#E6D28C]">New song uploaded: <span className="text-[#D4AF37] font-medium">"Tears Go Up To Heaven"</span></p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#E6D28C]/60 text-sm">by Susan Namin</span>
                        <span className="text-[#E6D28C]/40 text-xs">2 hours ago</span>
                      </div>
                    </div>
                    <NavLink to="/songs/tears-go-up-to-heaven" className="ml-auto text-[#D4AF37] text-sm hover:underline">
                      View
                    </NavLink>
                  </div>

                  {/* Activity Item 2 */}
                  <div className="flex items-start gap-3 pb-4 border-b border-[#D4AF37]/10">
                    <div className="p-2 bg-[#D4AF37]/10 rounded-lg shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#E6D28C]">New license purchased: <span className="text-[#D4AF37] font-medium">Cover Song License</span></p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#E6D28C]/60 text-sm">by Heaven Worship Church</span>
                        <span className="text-[#E6D28C]/40 text-xs">5 hours ago</span>
                      </div>
                    </div>
                    <NavLink to="/cover-song-copyright-licence" className="ml-auto text-[#D4AF37] text-sm hover:underline">
                      View
                    </NavLink>
                  </div>

                  {/* Activity Item 3 */}
                  <div className="flex items-start gap-3 pb-4 border-b border-[#D4AF37]/10">
                    <div className="p-2 bg-[#D4AF37]/10 rounded-lg shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#E6D28C]">New artist registered: <span className="text-[#D4AF37] font-medium">Sayar Sint</span></p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#E6D28C]/60 text-sm">Vocalist</span>
                        <span className="text-[#E6D28C]/40 text-xs">1 day ago</span>
                      </div>
                    </div>
                    <NavLink to="/artist" className="ml-auto text-[#D4AF37] text-sm hover:underline">
                      View
                    </NavLink>
                  </div>

                  {/* Activity Item 4 */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#D4AF37]/10 rounded-lg shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="16" height="16" x="4" y="4" rx="2" />
                        <path d="M9 9h6" />
                        <path d="M9 12h6" />
                        <path d="M9 15h6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#E6D28C]">New organization joined: <span className="text-[#D4AF37] font-medium">City Church Myanmar</span></p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#E6D28C]/60 text-sm">Church</span>
                        <span className="text-[#E6D28C]/40 text-xs">2 days ago</span>
                      </div>
                    </div>
                    <NavLink to="/organization" className="ml-auto text-[#D4AF37] text-sm hover:underline">
                      View
                    </NavLink>
                  </div>
                </div>
                <button className="w-full mt-4 border border-[#D4AF37]/30 text-[#E6D28C] py-2 rounded-lg hover:bg-[#D4AF37]/10 transition-all duration-300">
                  View All Activity
                </button>
              </div>
            </div>
          )}

          {/* Content for other sections */}
          {activeSection !== "dashboard" && (
            <div className="bg-black/60 backdrop-blur-sm rounded-xl border border-[#D4AF37]/20 shadow-lg p-6 scroll-animate opacity-0 translate-y-10 transition-all duration-500 delay-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#D4AF37]/10 rounded-lg">
                  {adminSections.find(section => section.id === activeSection)?.icon}
                </div>
                <h2 className="text-2xl font-semibold text-[#E6D28C]">
                  {adminSections.find(section => section.id === activeSection)?.title} Management
                </h2>
              </div>
              
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-16 h-16 mb-4 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3" />
                    <circle cx="18" cy="18" r="3" />
                    <path d="M18 14v1" />
                    <path d="M18 21v1" />
                    <path d="M22 18h-1" />
                    <path d="M15 18h-1" />
                    <path d="m21 15-.88.88" />
                    <path d="M15.88 20.12 15 21" />
                    <path d="m21 21-.88-.88" />
                    <path d="M15.88 15.88 15 15" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-[#E6D28C] mb-2">{adminSections.find(section => section.id === activeSection)?.title} Section</h3>
                <p className="text-[#E6D28C]/70 max-w-md mb-6">This section is under development. Coming soon with full functionality to manage {activeSection}.</p>
                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black px-4 py-2 rounded-lg font-medium hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105 focus:outline-none">
                    View Documentation
                  </button>
                  <button className="border border-[#D4AF37] text-[#E6D28C] px-4 py-2 rounded-lg font-medium hover:bg-[#D4AF37]/10 transition-all duration-300 focus:outline-none">
                    Request Access
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-md border-t border-[#D4AF37]/20 padding py-6 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#E6D28C]/60 text-sm">
            © 2023 MCMN Admin Dashboard. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <NavLink to="/" className="text-[#E6D28C]/60 hover:text-[#D4AF37] text-sm transition-colors duration-300">
              Privacy Policy
            </NavLink>
            <NavLink to="/" className="text-[#E6D28C]/60 hover:text-[#D4AF37] text-sm transition-colors duration-300">
              Terms of Service
            </NavLink>
            <NavLink to="/" className="text-[#E6D28C]/60 hover:text-[#D4AF37] text-sm transition-colors duration-300">
              Help Center
            </NavLink>
          </div>
        </div>
      </footer>

      {/* CSS for scroll animations */}
      <style jsx="true">{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
