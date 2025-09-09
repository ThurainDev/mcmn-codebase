import React from "react";

const tabs = [
  {
    id: "courses",
    label: "Courses",
  },
  {
    id: "instructors",
    label: "Instructors",
  },
  // {
  //   id: "certificate",
  //   label: "Certificate",
  // },
  // {
  //   id: "testimonials",
  //   label: "Testimonials",
  // },
  // {
  //   id: "upcoming events",
  //   label: "Upcoming Events",
  // },
  {
    id: "contact",
    label: "Contact",
  },
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
                    ? "text-[#E6D28C] border-b-2 border-[#E6D28C]"
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
