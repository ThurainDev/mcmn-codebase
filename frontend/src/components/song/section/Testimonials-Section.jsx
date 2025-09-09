import React from "react";

// Sample testimonials data
const testimonials = [
  {
    quote: "These songs have transformed our worship services completely!",
    author: "Pastor Aung, Yangon Baptist Church",
  },
  {
    quote:
      "The music quality and spiritual depth of these songs are exceptional.",
    author: "Daw Mya, Worship Leader",
  },
  {
    quote: "I use these songs daily in my personal devotion time.",
    author: "U Thein, Church Elder",
  },
];

export default function Testimonials_Section({ activeTab }) {
  return (
    <>
      {activeTab === "testimonials" && (
        <div className="mt-16 scroll-animate opacity-0 translate-y-10">
          <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-black/50 p-6 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)] flex flex-col"
                >
                  <div className="text-3xl text-[#D4AF37] mb-4">❝</div>
                  <p className="text-[#E6D28C]/80 italic flex-grow">
                    {testimonial.quote}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#E6D28C]/10 text-[#E6D28C]/70 text-sm">
                    {testimonial.author}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
