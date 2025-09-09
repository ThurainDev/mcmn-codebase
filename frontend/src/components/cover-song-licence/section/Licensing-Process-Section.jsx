import React from "react";

const Steps = [
  {
    id: 1,
    title: "Submit Song Details",
    description:
      "Provide information about the original song you want to cover, including title, artist, and your planned use.",
  },
  {
    id: 2,
    title: "License Processing",
    description:
      "We handle all the paperwork and secure the necessary permissions from copyright holders.",
  },
  {
    id: 3,
    title: "Release Your Cover",
    description:
      "Once approved, you'll receive your license documentation and can legally distribute your cover song.",
  },
];

export default function Licensing_Process_Section() {
  return (
    <>
      <div className="padding mt-8 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-[#111] rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Steps */}
            {Steps.length &&
              Steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-black/50 rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1 p-6 relative"
                >
                  <div className="w-16 h-16 rounded-full bg-[#E6D28C]/10 flex items-center justify-center text-2xl font-bold text-[#E6D28C] mb-4 mx-auto">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-[#E6D28C] text-center mb-3 font-jetbrains">
                    {step.title}
                  </h3>
                  <p className="text-[#E6D28C]/70 text-center">
                    {step.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
