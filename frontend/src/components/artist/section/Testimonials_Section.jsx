import React from "react";

// Testimonials about artists
const testimonials = [
  {
    quote:
      "The artists from Myanmar Christian Music Network have transformed our worship experience with their authentic and powerful music.",
    author: "Pastor John, Grace Community Church",
  },
  {
    quote:
      "Working with these talented artists has been a blessing for our ministry. Their dedication to excellence and spiritual depth is evident in every note.",
    author: "Ministry Director, Light of Hope",
  },
  {
    quote:
      "The musical talent and spiritual maturity of these artists have made a significant impact on the Christian music scene in Myanmar.",
    author: "Music Producer, Faithful Records",
  },
];

export default function Testimonials_Section({ activeTab }) {
  return (
    <>
      {activeTab === "testimonials" && (
        <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
          <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
              Testimonials
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="scroll-animate opacity-0 translate-y-10"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-black/50 p-6 rounded-xl border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 transition-all duration-300 h-full flex flex-col">
                    <div className="text-4xl text-[#E6D28C]/30 mb-4">❝</div>
                    <p className="text-[#E6D28C]/90 italic mb-6 flex-grow">
                      {testimonial.quote}
                    </p>
                    <div className="text-[#E6D28C] font-bold">
                      {testimonial.author}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center scroll-animate opacity-0 translate-y-10">
              <h3 className="text-xl font-bold text-[#E6D28C] mb-4">
                Would you like to share your experience?
              </h3>
              <button className="px-6 py-3 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black rounded-full font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.3)] transition-all duration-300">
                Submit a Testimonial
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
