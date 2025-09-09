import React from "react";

const instruments = [
  {
    id: 1,
    name: "Acoustic Guitar",
  },
  {
    id: 2,
    name: "Electric Guitar",
  },
  {
    id: 3,
    name: "Bass Guitar",
  },
  {
    id: 4,
    name: "Ukulele",
  },
  {
    id: 5,
    name: "Piano",
  },
  {
    id: 6,
    name: "Violin",
  },
  {
    id: 7,
    name: "Drum",
  },
  {
    id: 8,
    name: "Vocal",
  },
  {
    id: 9,
    name: "Music Theory",
  },
  {
    id: 10,
    name: "ABRSM Preparation",
  },
];

export default function Music_Lessons_We_Teach_Section() {
  return (
    <>
      <div className="mt-16">
        <div className="scroll-animate opacity-0 translate-y-10">
          <div className="bg-gradient-to-b from-[#1A2151] via-[#1A2151] to-[#141937] rounded-3xl p-5 sm:p-8 border border-[#E6D28C]/20 shadow-[0_0_10px_rgba(230,210,140,0.15)] transition-all duration-500">
            <div className="border-[#E6D28C] border-t-2">
              <div className="mt-5 flex flex-col md:flex-row">
                {/* Left Side */}
                <div className="space-y-3 w-full md:w-[25%] pr-5 mb-8 md:mb-0">
                  <p className="text-[#E6D28C] font-jetbrains tracking-wider">
                    MUSIC LESSONS WE TEACH
                  </p>
                  <h1 className="text-white text-2xl font-jetbrains font-bold bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent animate-gradient">
                    Find out which instrument you or your child can start
                    learning!
                  </h1>
                  <p className="text-[#E6D28C] font-jetbrains tracking-wider">
                    Explore our wide range of instrument lessons taught by
                    professional musicians and educators.
                  </p>
                  {/* <div>
                    <button className="bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] text-[#1A2151] rounded-full px-6 py-2 font-jetbrains font-semibold hover:shadow-lg hover:shadow-[#E6D28C]/20 hover:translate-y-[-2px] transition-all duration-300">
                      View All Instruments
                    </button>
                  </div> */}
                </div>

                {/* Right Side */}
                <div className="w-full md:w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {instruments.length &&
                    instruments.map((instrument, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-b from-[#1A2151] to-[#141937] rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 hover:shadow-lg hover:shadow-[#E6D28C]/10 transition-all duration-300 group hover:translate-y-[-5px]"
                      >
                        <div className="text-[#E6D28C] w-12 h-12 mb-2 group-hover:scale-110 transition-all duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M13.75 2a.75.75 0 0 0-1.5 0v12.536A4.75 4.75 0 1 0 13.75 18V6.243A6.74 6.74 0 0 0 19 8.75a.75.75 0 0 0 0-1.5A5.25 5.25 0 0 1 13.75 2" />
                          </svg>
                        </div>
                        <h1 className="text-white text-xl mt-2 font-jetbrains font-semibold group-hover:text-[#E6D28C] transition-colors duration-300">
                          {instrument.name}
                        </h1>
                        {/* <p className="text-gray-300 mt-2 font-jetbrains group-hover:text-white transition-colors duration-300">
                          Violin, Fiddle, Viola, Cello, Bass, Harp
                        </p> */}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
