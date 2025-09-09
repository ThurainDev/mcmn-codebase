import React from "react";

// Tab navigation options
const tabs = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "platforms", label: "Platforms" },
  { id: "process", label: "Process" },
  { id: "benefits", label: "Benefits" },
  { id: "faq", label: "FAQ" },
];

export default function Navigation_Tabs({ activeTab, setActiveTab }) {
  return (
    <>
      <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="flex overflow-x-auto hide-scrollbar gap-1 sm:gap-2 justify-start sm:justify-center mt-10 mb-10 border-b border-[#E6D28C]/20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 mx-1 sm:px-4 sm:mx-2 whitespace-nowrap text-base sm:text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-[#D4AF37] border-b-2 border-[#D4AF37]"
                  : "text-[#E6D28C]/70 hover:text-[#E6D28C]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
