import React from "react";
import { MusicIcon, Calendar } from "lucide-react";

export default function Features_Tab({ activeTab }) {
  return (
    <>
      {activeTab === "features" && (
        <div className="scroll-animate opacity-0 translate-y-10">
          <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4">
              License Features
            </h2>
            <p className="text-[#E6D28C]/90 mb-8 text-sm sm:text-base leading-relaxed">
              Our Church Copyright License includes a comprehensive set of
              features designed to meet all your worship ministry needs while
              ensuring full copyright compliance.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature Cards */}
              <div className="bg-black/50 rounded-3xl p-6 hover:shadow-[0_0_15px_rgba(230,210,140,0.15)] transition-all duration-300 border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 group">
                <div className="flex justify-center mb-4 text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    className="transition-transform duration-300 group-hover:scale-110"
                  >
                    <path
                      fill="currentColor"
                      d="M3.577 19.577V4.616q0-.672.472-1.144T5.192 3h9.77q.67 0 1.143.472q.472.472.472 1.144v.251q-.293.14-.533.32q-.24.179-.467.39v-.961q0-.27-.173-.443T14.96 4H5.192q-.269 0-.442.173t-.173.443v12.54L5.733 16h9.229q.269 0 .442-.173t.173-.442v-2.962q.227.212.467.39q.24.18.533.32v2.252q0 .67-.472 1.143q-.472.472-1.143.472H6.154zm3.5-6.077h3v-1h-3zm11.539-2q-1.039 0-1.77-.73T16.116 9t.73-1.77t1.77-.73q.486 0 .823.137t.677.461V1.5h3v1h-2V9q0 1.039-.731 1.77q-.731.73-1.77.73m-11.538-1h6v-1h-6zm0-3h6v-1h-6zm-2.5 8.5V4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#E6D28C] text-center mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  Project and Print Lyrics
                </h3>
                <p className="text-[#E6D28C]/70 text-center group-hover:text-[#E6D28C]/90 transition-colors duration-300">
                  Project song lyrics or reproduce them in custom song sheets
                  and service bulletins for congregational singing
                </p>
              </div>

              <div className="bg-black/50 rounded-3xl p-6 hover:shadow-[0_0_15px_rgba(230,210,140,0.15)] transition-all duration-300 border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 group">
                <div className="flex justify-center mb-4 text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    className="transition-transform duration-300 group-hover:scale-110"
                  >
                    <path
                      fill="currentColor"
                      d="M3.577 19.577V4.616q0-.672.472-1.144T5.192 3h9.77q.67 0 1.143.472q.472.472.472 1.144v.251q-.293.14-.533.32q-.24.179-.467.39v-.961q0-.27-.173-.443T14.96 4H5.192q-.269 0-.442.173t-.173.443v12.54L5.733 16h9.229q.269 0 .442-.173t.173-.442v-2.962q.227.212.467.39q.24.18.533.32v2.252q0 .67-.472 1.143q-.472.472-1.143.472H6.154zm3.5-6.077h3v-1h-3zm11.539-2q-1.039 0-1.77-.73T16.116 9t.73-1.77t1.77-.73q.486 0 .823.137t.677.461V1.5h3v1h-2V9q0 1.039-.731 1.77q-.731.73-1.77.73m-11.538-1h6v-1h-6zm0-3h6v-1h-6zm-2.5 8.5V4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#E6D28C] text-center mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  Access Song Database
                </h3>
                <p className="text-[#E6D28C]/70 text-center group-hover:text-[#E6D28C]/90 transition-colors duration-300">
                  Easily access more than 200,000 song lyrics through our
                  comprehensive worship song database
                </p>
              </div>

              <div className="bg-black/50 rounded-3xl p-6 hover:shadow-[0_0_15px_rgba(230,210,140,0.15)] transition-all duration-300 border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 group">
                <div className="flex justify-center mb-4 text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors duration-300">
                  <MusicIcon
                    size={40}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#E6D28C] text-center mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  Create Custom Arrangements
                </h3>
                <p className="text-[#E6D28C]/70 text-center group-hover:text-[#E6D28C]/90 transition-colors duration-300">
                  Legally create custom musical arrangements tailored to your
                  worship team's instrumentation and style
                </p>
              </div>

              <div className="bg-black/50 rounded-3xl p-6 hover:shadow-[0_0_15px_rgba(230,210,140,0.15)] transition-all duration-300 border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 group">
                <div className="flex justify-center mb-4 text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    className="transition-transform duration-300 group-hover:scale-110"
                  >
                    <path
                      fill="currentColor"
                      d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#E6D28C] text-center mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  Record Services
                </h3>
                <p className="text-[#E6D28C]/70 text-center group-hover:text-[#E6D28C]/90 transition-colors duration-300">
                  Record your worship services for shut-ins and archive purposes
                  with proper copyright coverage
                </p>
              </div>

              <div className="bg-black/50 rounded-3xl p-6 hover:shadow-[0_0_15px_rgba(230,210,140,0.15)] transition-all duration-300 border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 group">
                <div className="flex justify-center mb-4 text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    className="transition-transform duration-300 group-hover:scale-110"
                  >
                    <path
                      fill="currentColor"
                      d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#E6D28C] text-center mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  Stream Services
                </h3>
                <p className="text-[#E6D28C]/70 text-center group-hover:text-[#E6D28C]/90 transition-colors duration-300">
                  Live stream your worship services online with proper copyright
                  coverage (Premium and Enterprise licenses)
                </p>
              </div>

              <div className="bg-black/50 rounded-3xl p-6 hover:shadow-[0_0_15px_rgba(230,210,140,0.15)] transition-all duration-300 border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 group">
                <div className="flex justify-center mb-4 text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors duration-300">
                  <Calendar
                    size={40}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#E6D28C] text-center mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  Special Events Coverage
                </h3>
                <p className="text-[#E6D28C]/70 text-center group-hover:text-[#E6D28C]/90 transition-colors duration-300">
                  Use licensed songs in church-sponsored events, retreats, and
                  special programs throughout the year
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
