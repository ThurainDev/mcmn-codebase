import React from "react";

export default function Upcoming_Events_Section() {
  return (
    <>
      <div className="scroll-animate opacity-0 translate-y-10">
        <div className="bg-gradient-to-b from-[#1A2151] via-[#1A2151] to-[#141937] rounded-3xl p-5 sm:p-8 border border-[#E6D28C]/20 shadow-[0_0_10px_rgba(230,210,140,0.15)] transition-all duration-500">
          <div className="border-[#E6D28C] border-t-2">
            {/* Title */}
            <div className="m-5 flex flex-col items-center text-center">
              <p className="text-[#E6D28C] font-jetbrains tracking-wider drop-shadow-md">
                MARK YOUR CALENDAR
              </p>
              <h1 className="text-white text-2xl sm:text-3xl pt-2 font-jetbrains font-bold bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent drop-shadow-lg">
                Upcoming Events & Workshops
              </h1>
              <p className="text-gray-300 mt-3 max-w-3xl font-jetbrains">
                Join us for special events, workshops, and performances
                throughout the year. These events provide valuable learning
                opportunities and chances to showcase your talents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Event 1 */}
              <div className="bg-gradient-to-b from-[#1A2151] to-[#141937] rounded-3xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-lg hover:shadow-[#E6D28C]/10 transition-all duration-300 group hover:translate-y-[-5px]">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-white text-xl font-jetbrains font-semibold group-hover:text-[#E6D28C] transition-colors duration-300">
                        Student Recital
                      </h3>
                      <p className="text-[#E6D28C] text-sm font-jetbrains mt-1">
                        Showcase your progress
                      </p>
                    </div>
                    <div className="bg-[#E6D28C]/10 rounded-lg p-2 text-center min-w-[60px]">
                      <p className="text-[#E6D28C] font-jetbrains font-bold text-xl">
                        15
                      </p>
                      <p className="text-[#E6D28C] font-jetbrains text-xs">
                        JUN
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 font-jetbrains text-sm group-hover:text-white transition-colors duration-300 mb-4">
                    Our quarterly student recital gives students the opportunity
                    to perform in front of an audience and showcase their
                    progress. All skill levels welcome!
                  </p>
                  <div className="flex items-center text-gray-300 text-sm font-jetbrains">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-[#E6D28C]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>MCMN Auditorium, Yangon</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm font-jetbrains mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-[#E6D28C]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                    <span>4:00 PM - 6:00 PM</span>
                  </div>
                  <button className="mt-6 bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] text-[#1A2151] rounded-full px-6 py-2 font-jetbrains font-semibold hover:shadow-lg hover:shadow-[#E6D28C]/20 hover:translate-y-[-2px] transition-all duration-300 w-full">
                    Register to Perform
                  </button>
                </div>
              </div>

              {/* Event 2 */}
              <div className="bg-gradient-to-b from-[#1A2151] to-[#141937] rounded-3xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-lg hover:shadow-[#E6D28C]/10 transition-all duration-300 group hover:translate-y-[-5px]">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-white text-xl font-jetbrains font-semibold group-hover:text-[#E6D28C] transition-colors duration-300">
                        Songwriting Workshop
                      </h3>
                      <p className="text-[#E6D28C] text-sm font-jetbrains mt-1">
                        Learn to write your own music
                      </p>
                    </div>
                    <div className="bg-[#E6D28C]/10 rounded-lg p-2 text-center min-w-[60px]">
                      <p className="text-[#E6D28C] font-jetbrains font-bold text-xl">
                        22
                      </p>
                      <p className="text-[#E6D28C] font-jetbrains text-xs">
                        JUN
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 font-jetbrains text-sm group-hover:text-white transition-colors duration-300 mb-4">
                    Join our special workshop led by professional songwriters.
                    Learn the fundamentals of lyric writing, melody creation,
                    and song structure in this hands-on session.
                  </p>
                  <div className="flex items-center text-gray-300 text-sm font-jetbrains">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-[#E6D28C]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>MCMN Studio Room, Yangon</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm font-jetbrains mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-[#E6D28C]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                    <span>2:00 PM - 5:00 PM</span>
                  </div>
                  <button className="mt-6 bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] text-[#1A2151] rounded-full px-6 py-2 font-jetbrains font-semibold hover:shadow-lg hover:shadow-[#E6D28C]/20 hover:translate-y-[-2px] transition-all duration-300 w-full">
                    Reserve Your Spot
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 mb-4">
              <button className="border border-[#E6D28C] text-[#E6D28C] rounded-full px-6 py-2 font-jetbrains font-semibold hover:bg-[#E6D28C]/10 transition-all duration-300">
                View All Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
