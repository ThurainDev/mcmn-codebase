import React, { useState } from "react";

const FaqItems = [
  {
    id: 1,
    question: "What is a cover song license?",
    answer:
      "A cover song license gives you legal permission to record and distribute your version of a song that was written and previously recorded by someone else. This ensures the original songwriters receive proper compensation.",
  },
  {
    id: 2,
    question: "Do I need a license for every cover song?",
    answer:
      "Yes, you need a separate license for each cover song you want to record and distribute. Our packages allow you to license multiple songs at discounted rates.",
  },
  {
    id: 3,
    question: "How long does the licensing process take?",
    answer:
      "Typically, the process takes 2-3 weeks, but it can vary depending on the complexity of the rights and the responsiveness of the original publishers.",
  },
];

export default function FAQ_Section() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="padding mt-8 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-[#111] rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] p-8 md:p-12">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* FAQ Items */}
            {FaqItems.length &&
              FaqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-black/50 rounded-xl p-4 sm:p-5 border border-[#E6D28C]/20"
                >
                  <div
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-[#E6D28C] font-jetbrains select-none">
                      {item.question}
                    </h3>
                    <span
                      className="text-[#E6D28C] transition-transform duration-300 transform"
                      style={{
                        transform:
                          openIndex === index
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "max-h-96 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[#E6D28C]/70 font-jetbrains text-sm sm:text-base pt-2">
                      {item.answer}
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
