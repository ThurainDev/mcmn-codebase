import React from "react";

// Upcoming events featuring artists
const upcomingEvents = [
  {
    title: "Worship Night",
    date: "June 15, 2024",
    location: "Central Church, Yangon",
    artists: ["Artist 1", "Artist 3", "Artist 5"],
  },
  {
    title: "Christian Music Festival",
    date: "July 22-24, 2024",
    location: "Community Center, Mandalay",
    artists: ["Artist 2", "Artist 4", "Artist 7"],
  },
  {
    title: "Album Launch Concert",
    date: "August 10, 2024",
    location: "Faith Auditorium, Yangon",
    artists: ["Artist 6", "Artist 8"],
  },
];

export default function Upcoming_Events_Section({ activeTab }) {
  return (
    <>
      {activeTab === "events" && (
        <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
          <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
              Upcoming Events
            </h2>

            <div className="space-y-6 mt-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="scroll-animate opacity-0 translate-y-10"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-black/50 p-6 rounded-xl border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-1/4">
                        <div className="bg-[#E6D28C]/10 p-4 rounded-lg text-center">
                          <div className="text-[#E6D28C] text-xl font-bold">
                            {event.date}
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-3/4">
                        <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                          {event.title}
                        </h3>
                        <p className="text-[#E6D28C]/70 mb-3">
                          Location: {event.location}
                        </p>
                        <div>
                          <h4 className="text-[#E6D28C] font-bold mb-2">
                            Featured Artists:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {event.artists.map((artist, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-[#E6D28C]/10 text-[#E6D28C] rounded-full text-sm"
                              >
                                {artist}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button className="mt-4 px-4 py-2 bg-[#111] text-[#E6D28C] rounded-full text-sm border border-[#E6D28C]/30 hover:bg-[#E6D28C] hover:text-black transition-all duration-300">
                          Event Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center scroll-animate opacity-0 translate-y-10">
              <button className="px-6 py-3 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black rounded-full font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.3)] transition-all duration-300">
                View All Events
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
