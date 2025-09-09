import React from "react";

const Services = [
  {
    id: 1,
    description: "Digital music platforms များသို့ သီချင်းဖြန့်ချီခြင်း",
  },
  {
    id: 2,
    description: "YouTube channel partner program လျှောက်ပေးခြင်း",
  },
  {
    id: 3,
    description:
      "Music platforms တွေပေါ်မှာ Artist accounts များလျှောက်ပေးခြင်း (Example: Spotify Blue Mark, YouTube Official Artist Channel)",
  },
  {
    id: 4,
    description:
      "တေးသီချင်းများရဲ့ Digital မူပိုင်များရရှိအောင် ဆောင်ရွက်ပေးခြင်း (Example: YouTube Content ID/ FB/ IG)",
  },
  {
    id: 5,
    description: "Any others တခြားသောအရာများလည်း လုပ်ဆောင်ပေးလျက်ရှိပါတယ်။",
  },
];

export default function Services_Section() {
  // from icones.js.org website
  function MiChevronRight(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        className="flex-shrink-0"
        {...props}
      >
        <path
          fill="currentColor"
          d="M9.293 18.707a1 1 0 0 1 0-1.414L14.586 12L9.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0"
        ></path>
      </svg>
    );
  }
  return (
    <>
      <div className="mt-8 md:mt-12 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-[#111] rounded-2xl md:rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden p-6 md:p-8 lg:p-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient px-4 md:px-0">
            လက်ရှိ MCMN မှာပြုလုပ်ပေးနေတဲ့အရာများ
          </h2>

          {/* Services */}
          <ul className="space-y-3 md:space-y-4 max-w-4xl mx-auto">
            {Services.length &&
              Services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-start md:items-center gap-3 md:gap-4 p-3 md:p-4 bg-black/50 rounded-lg md:rounded-xl border border-[#E6D28C]/20"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#E6D28C]/10 flex items-center justify-center mt-1 md:mt-0 flex-shrink-0">
                    <MiChevronRight className="text-[#E6D28C] text-sm md:text-base" />
                  </div>
                  <span className="text-[#E6D28C]/90 text-sm md:text-base leading-relaxed flex-1">
                    {service.description}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
