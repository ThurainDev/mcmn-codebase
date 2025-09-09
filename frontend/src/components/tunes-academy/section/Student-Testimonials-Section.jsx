import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Aung Kyaw",
    position: "Piano Student",
    rating: [1, 2, 3, 4, 5],
    review:
      "The piano lessons at Tunes Academy have been transformative. My instructor is patient and knowledgeable, and I've progressed faster than I ever expected. The personalized approach makes all the difference.",
  },
  {
    id: 2,
    name: "May Thet",
    position: "Vocal Student",
    rating: [1, 2, 3, 4],
    review:
      "I've always wanted to improve my singing, and the vocal coaches here are incredible. They've helped me expand my range and develop proper technique. The supportive environment makes it easy to grow as a performer.",
  },
  {
    id: 3,
    name: "Kyaw Min",
    position: "Guitar Student",
    rating: [1, 2, 3, 4],
    review:
      "Learning guitar at Tunes Academy has been an amazing journey. The instructors break down complex techniques into manageable steps, and the curriculum is well-structured. I'm now confident performing in front of others.",
  },
];

export default function Student_Testimonials_Section() {
  return (
    <>
      <div className="scroll-animate opacity-0 translate-y-10">
        <div className="bg-gradient-to-b from-[#1A2151] via-[#1A2151] to-[#141937] rounded-3xl p-5 sm:p-8 border border-[#E6D28C]/20 shadow-[0_0_10px_rgba(230,210,140,0.15)] transition-all duration-500">
          <div className="border-[#E6D28C] border-t-2">
            {/* Hero Section */}
            <div className="m-5 flex flex-col items-center text-center">
              <p className="text-[#E6D28C] font-jetbrains tracking-wider drop-shadow-md">
                STUDENT TESTIMONIALS
              </p>
              <h1 className="text-white text-2xl sm:text-3xl pt-2 font-jetbrains font-bold bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent drop-shadow-lg">
                What our students say about us
              </h1>
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {testimonials.length &&
                testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-b from-[#1A2151] to-[#141937] rounded-3xl p-6 border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-lg hover:shadow-[#E6D28C]/10 transition-all duration-300 group hover:translate-y-[-5px]"
                  >
                    <div className="flex items-center mb-4">
                      {/* Profile Picture */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] p-0.5">
                        <div className="w-full h-full rounded-full bg-[#1A2151] flex items-center justify-center overflow-hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-[#E6D28C]"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" />
                          </svg>
                        </div>
                      </div>
                      {/* Name and Position */}
                      <div className="ml-4">
                        <h3 className="text-white font-jetbrains font-semibold group-hover:text-[#E6D28C] transition-colors duration-300">
                          {testimonial.name}
                        </h3>
                        <p className="text-[#E6D28C] text-sm font-jetbrains">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    {/* Rating */}
                    <div className="mb-3 flex">
                      {testimonial.rating.map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-[#E6D28C]"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    {/* Review */}
                    <p className="text-gray-300 font-jetbrains text-sm group-hover:text-white transition-colors duration-300">
                      {testimonial.review}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
