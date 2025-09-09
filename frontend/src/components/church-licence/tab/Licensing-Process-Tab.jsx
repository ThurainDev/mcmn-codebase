import React from "react";

// Licensing steps data
const licensingSteps = [
  {
    id: 1,
    title: "Apply for License",
    description:
      "Complete our simple application form with your church details and requirements.",
  },
  {
    id: 2,
    title: "Select Coverage",
    description:
      "Choose the license coverage that best fits your church's needs and size.",
  },
  {
    id: 3,
    title: "Payment",
    description:
      "Complete the secure payment process for your selected license package.",
  },
  {
    id: 4,
    title: "Receive License",
    description:
      "Get your license documentation and access to our song database within 24 hours.",
  },
  {
    id: 5,
    title: "Start Using",
    description:
      "Begin legally using worship songs in your services and church activities.",
  },
];

export default function Licensing_Process_Tab({ activeTab }) {
  return (
    <>
      {activeTab === "process" && (
        <div className="scroll-animate opacity-0 translate-y-10">
          <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4">
              Licensing Process
            </h2>
            <p className="text-[#E6D28C]/90 mb-8 text-sm sm:text-base leading-relaxed">
              Getting your church properly licensed is simple and
              straightforward. Follow these steps to ensure your worship
              ministry is fully covered.
            </p>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {licensingSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-black/50 rounded-xl p-6 hover:shadow-[0_0_15px_rgba(230,210,140,0.15)] transition-all duration-300 border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 group"
                >
                  <div className="w-16 h-16 rounded-full bg-[#E6D28C]/10 flex items-center justify-center text-2xl font-bold text-[#E6D28C] mb-4 mx-auto group-hover:bg-[#E6D28C]/20 transition-all duration-300">
                    {index}
                  </div>
                  <h3 className="text-xl font-bold text-[#E6D28C] text-center mb-3 font-jetbrains group-hover:text-[#D4AF37] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#E6D28C]/70 text-center group-hover:text-[#E6D28C]/90 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-[#E6D28C]/90 mb-6">
                Ready to get your church properly licensed? Start the process
                today!
              </p>
              <button className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black px-6 py-3 rounded-full text-base font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105">
                Apply for License
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
