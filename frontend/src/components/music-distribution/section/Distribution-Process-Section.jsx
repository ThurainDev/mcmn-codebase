import React from "react";

const Steps = [
  {
    id: 1,
    title: "Submit Your Music",
    description: "သင့်ရဲ့သီချင်းများနှင့် လိုအပ်သော အချက်အလက်များကို ပေးပို့ပါ",
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
          d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Review & Preparation",
    description:
      "ကျွန်ုပ်တို့မှ သင့်သီချင်းများကို စစ်ဆေးပြီး ဖြန့်ဖြူးရန် ပြင်ဆင်ပေးပါမည်",
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
          d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5-5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Global Distribution",
    description:
      "သင့်သီချင်းများကို ကမ္ဘာတစ်ဝှမ်းရှိ Digital Platforms များပေါ်သို့ ဖြန့်ဖြူးပေးပါမည်",
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
    id: 4,
    title: "Tracking & Reporting",
    description:
      "သင့်သီချင်းများ၏ စာရင်းအင်းများကို စောင့်ကြည့်ပြီး အစီရင်ခံစာများ ပေးပို့ပါမည်",
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
          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z"
        />
      </svg>
    ),
  },
];

export default function Distribution_Process_Section() {
  return (
    <>
      <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-[#111] rounded-2xl md:rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden p-6 md:p-8 lg:p-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient px-4 md:px-0">
            Distribution Process
          </h2>

          {/* Process Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line - Hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#E6D28C]/50 to-[#D4AF37]/50 hidden lg:block"></div>

            {/* Steps */}
            <div className="space-y-6 md:space-y-8 lg:space-y-0">
              {Steps.map((step, index) => (
                <div key={index} className="relative">
                  <div
                    className={`lg:flex items-center ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Circle for Desktop */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#111] border-4 border-[#E6D28C] z-10 hidden lg:flex items-center justify-center">
                      <span className="text-[#E6D28C] font-bold text-sm">
                        {step.id}
                      </span>
                    </div>

                    {/* Content */}
                    <div
                      className={`lg:w-1/2 ${
                        index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                      }`}
                    >
                      <div className="bg-black rounded-lg md:rounded-xl overflow-hidden border border-[#E6D28C]/20 p-4 md:p-6">
                        {/* Mobile Layout */}
                        <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4 lg:hidden">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E6D28C]/10 flex items-center justify-center text-lg md:text-xl font-bold text-[#E6D28C]">
                            {step.id}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg md:text-xl font-bold text-[#E6D28C] mb-2 leading-tight">
                              {step.title}
                            </h3>
                            <p className="text-sm md:text-base text-[#E6D28C]/70 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden lg:block">
                          <div
                            className={`flex items-center gap-4 mb-4 ${
                              index % 2 === 0 ? "justify-end" : "justify-start"
                            }`}
                          >
                            {index % 2 === 0 ? (
                              <>
                                <h3 className="text-xl font-bold text-[#E6D28C]">
                                  {step.title}
                                </h3>
                              </>
                            ) : (
                              <>
                                <h3 className="text-xl font-bold text-[#E6D28C]">
                                  {step.title}
                                </h3>
                              </>
                            )}
                          </div>
                          <p
                            className={`text-[#E6D28C]/70 leading-7 ${
                              index % 2 === 0 ? "text-right" : "text-left"
                            }`}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
