import React from "react";
import { MdEvent } from "react-icons/md";

// Upcoming collaborative events
const collaborativeEvents = [
  {
    title: "Worship Leaders Conference",
    date: "June 15-17, 2023",
    location: "The City Yangon",
    description:
      "A three-day conference for worship leaders from all partner organizations.",
  },
  {
    title: "United Worship Night",
    date: "July 30, 2023",
    location: "Hallahlujah Worship Center",
    description:
      "An evening of worship featuring teams from multiple partner churches.",
  },
  {
    title: "Youth Music Workshop",
    date: "August 12, 2023",
    location: "The Arrow",
    description: "Training for young musicians from partner organizations.",
  },
];

export default function Collaborative_Events_Section() {
  return (
    <>
      <div className="scroll-animate opacity-0 translate-y-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
              Collaborative Events
            </h2>
            <p className="text-[#E6D28C]/90 mt-4 font-jetbrains text-sm sm:text-base leading-relaxed">
              Explore upcoming events organized in collaboration with our
              partner organizations. These events bring together worship teams,
              musicians, and believers from across Myanmar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborativeEvents.map((event, index) => (
              <div
                key={index}
                className="bg-[#111] rounded-xl overflow-hidden border border-[#E6D28C]/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(230,210,140,0.2)] hover:border-[#E6D28C]/20 group"
              >
                <div className="h-24 bg-gradient-to-r from-[#0a0a0a] to-[#111] flex items-center justify-center border-b border-[#E6D28C]/10 group-hover:from-[#0a0a0a] group-hover:to-[#151515] transition-all duration-300">
                  <MdEvent className="text-5xl text-[#D4AF37] opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-[#E6D28C] font-semibold text-lg mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-[#E6D28C]/70 text-sm mb-2">
                    <span className="mr-2">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-[#E6D28C]/70 text-sm mb-3">
                    <span className="mr-2">📍</span>
                    <span>{event.location}</span>
                  </div>
                  <p className="text-[#E6D28C]/80 text-sm border-t border-[#E6D28C]/10 pt-3">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
