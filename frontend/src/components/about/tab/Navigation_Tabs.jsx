import React, { lazy } from "react";

const tabs = [
  {
    id: "our story",
    label: "Our Story",
  },
  {
    id: "who we are",
    label: "Who We Are",
  },
  {
    id: "what to expect",
    label: "What To Expect",
  },
  {
    id: "mission & vision",
    label: "Mission & Vision",
  },
  // {
  //   id: "join us",
  //   label: "Join Us",
  // },
];

export default function Navigation_Tabs({ activeTab, setActiveTab }) {
  return (
    <>
      <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="flex overflow-x-auto hide-scrollbar gap-1 sm:gap-2 justify-start sm:justify-center mt-10 mb-10 border-b border-[#E6D28C]/20">
          {tabs.length &&
            tabs.map((tab, index) => (
              <button
                key={index}
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
