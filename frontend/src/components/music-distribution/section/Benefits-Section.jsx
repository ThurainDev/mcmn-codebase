import React from "react";

const Benefits = [
  {
    id: 1,
    title: "Global Reach",
    description:
      "ကမ္ဘာတစ်ဝှမ်းရှိ နားဆင်သူများထံ သင့်သီချင်းများ ရောက်ရှိစေခြင်း",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        className="text-[#E6D28C]"
      >
        <path
          fill="currentColor"
          d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.21.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Revenue Generation",
    description: "သင့်သီချင်းများမှ ဝင်ငွေရရှိနိုင်ခြင်း",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        className="text-[#E6D28C]"
      >
        <path
          fill="currentColor"
          d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Content Protection",
    description: "သင့်သီချင်းများကို မူပိုင်ခွင့်ကာကွယ်ပေးခြင်း",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        className="text-[#E6D28C]"
      >
        <path
          fill="currentColor"
          d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4m0 10.99h7c-.53 4.12-3.28 7.79-7 8.93V12H5V6.3l7-3.11v8.8z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Professional Presence",
    description: "ပရော်ဖက်ရှင်နယ် အနုပညာရှင်အဖြစ် ရပ်တည်နိုင်ခြင်း",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        className="text-[#E6D28C]"
      >
        <path
          fill="currentColor"
          d="M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3h-6z"
        />
      </svg>
    ),
  },
];

export default function Benefits_Section() {
  return (
    <>
      <div className="mt-8 md:mt-12 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-xl md:rounded-2xl lg:rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_20px_rgba(230,210,140,0.1)] overflow-hidden p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="text-center mb-6 md:mb-8 lg:mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[#E6D28C] via-[#D4AF37] to-[#E6D28C] bg-clip-text text-transparent animate-gradient px-4 md:px-0">
              Benefits of Digital Distribution
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
            {Benefits.length &&
              Benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-black/90 to-black/70 rounded-lg md:rounded-xl overflow-hidden border border-[#E6D28C]/20 p-4 sm:p-5 md:p-6"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-3 md:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#E6D28C]/20 to-[#D4AF37]/20 flex items-center justify-center border border-[#E6D28C]/30">
                      <div className="text-lg sm:text-xl md:text-2xl">
                        {benefit.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#E6D28C] mb-2 sm:mb-3 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#E6D28C]/80 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-[#E6D28C]/10 to-transparent rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
          </div>

          {/* Mobile CTA Section */}
          <div className="mt-8 md:mt-12 text-center block sm:hidden">
            <div className="bg-gradient-to-r from-[#E6D28C]/10 to-[#D4AF37]/10 rounded-lg p-4 border border-[#E6D28C]/20">
              <p className="text-sm text-[#E6D28C]/80 leading-relaxed">
                Start your digital music distribution journey today and reach
                millions of listeners worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
