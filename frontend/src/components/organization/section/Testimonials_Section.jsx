import React from "react";
// images
import the_city from "../../../assets/images/thecity.JPG";
import bless_myanmar from "../../../assets/images/blessmyanmar.JPG";
import cmcc from "../../../assets/images/cmcc.JPG";

// Testimonials from partner organizations
const testimonials = [
  {
    name: "Pastor John",
    organization: "The City Yangon",
    quote:
      "Partnering with MCMN has transformed our worship experience and connected us with incredible resources.",
    image: the_city,
  },
  {
    name: "Sarah Kim",
    organization: "Bless Myanmar",
    quote:
      "The network has helped us discover new worship songs and connect with other churches across the country.",
    image: bless_myanmar,
  },
  {
    name: "Pastor Michael",
    organization: "Cornerstone Myanmar",
    quote:
      "MCMN provides invaluable support for churches looking to enhance their music ministry and worship experience.",
    image: cmcc,
  },
];

export default function Testimonials_Section() {
  return (
    <>
      <div className="scroll-animate opacity-0 translate-y-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
              Partner Testimonials
            </h2>
            <p className="text-[#E6D28C]/90 mt-4 font-jetbrains text-sm sm:text-base leading-relaxed">
              Hear from our partners about their experiences working with
              Myanmar Christian Music Network and the impact of our
              collaboration on their music ministries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#111] rounded-xl p-6 border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(230,210,140,0.2)] hover:border-[#E6D28C]/20"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#E6D28C] font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#E6D28C]/70 text-sm">
                      {testimonial.organization}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="text-[#D4AF37] text-4xl absolute -top-2 -left-1 opacity-30">
                    ❝
                  </div>
                  <p className="text-[#E6D28C]/80 italic pl-8 pr-2">
                    {testimonial.quote}
                  </p>
                  <div className="text-[#D4AF37] text-4xl absolute -bottom-5 -right-1 opacity-30">
                    ❞
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
