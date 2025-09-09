import React, { useState } from "react";

const faqItems = [
  {
    question: "What age groups do you teach?",
    answer:
      "We welcome students of all ages! Our programs are designed for children as young as 5 years old through adults of any age. We have specialized teaching approaches for different age groups to ensure everyone learns effectively.",
  },
  {
    question: "Do I need to own an instrument to enroll?",
    answer:
      "While having your own instrument is beneficial for practice, it's not required to start. We have instruments available for use during lessons, and we can provide guidance on renting or purchasing instruments as you progress.",
  },
  {
    question: "How long are the lessons?",
    answer:
      "Our standard private lessons are 30, 45, or 60 minutes long, depending on the student's age, skill level, and goals. Group classes typically run for 60 minutes. We can recommend the appropriate lesson length during your initial consultation.",
  },
  {
    question: "How do I receive my certificate?",
    answer:
      "Upon successful completion of your program, you'll receive a digital certificate via email. Physical certificates can also be arranged for pickup at our school or mailed to your address upon request.",
  },
  {
    question: "Can I switch instructors if needed?",
    answer:
      "Yes, we understand the importance of a good student-teacher relationship. If you feel you'd benefit from a different teaching style, simply contact our administration, and we'll arrange a suitable alternative with no questions asked.",
  },
];

export default function FAQ_Section() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="mt-16">
        <div className="scroll-animate opacity-0 translate-y-10">
          <div className="bg-gradient-to-b from-[#1A2151] via-[#1A2151] to-[#141937] rounded-3xl p-5 sm:p-8 border border-[#E6D28C]/20 shadow-[0_0_10px_rgba(230,210,140,0.15)] transition-all duration-500">
            <div className="border-t-2 border-[#E6D28C] pt-5 sm:pt-8">
              {/* Title */}
              <div className="text-center mb-6 sm:mb-8 md:mb-10">
                <p className="text-[#E6D28C] font-jetbrains text-sm sm:text-base tracking-wider drop-shadow-md">
                  FREQUENTLY ASKED QUESTIONS
                </p>
                <h1 className="text-white text-2xl sm:text-3xl pt-1 sm:pt-2 font-jetbrains font-bold bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent drop-shadow-lg">
                  Everything you need to know
                </h1>
              </div>

              {/* FAQ Items */}
              <div className="max-w-5xl mx-auto space-y-3 sm:space-y-4">
                {faqItems.length > 0 &&
                  faqItems.map((faqItem, index) => (
                    <div
                      key={index}
                      className="bg-[#1A2151] p-4 sm:p-5 rounded-lg sm:rounded-xl border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 transition-all duration-300"
                    >
                      <div
                        onClick={() => toggleFAQ(index)}
                        className="flex justify-between items-center cursor-pointer"
                      >
                        <h3 className="text-lg sm:text-xl font-jetbrains font-medium text-[#E6D28C] select-none pr-4">
                          {faqItem.question}
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
                        <p className="text-gray-300 font-jetbrains text-sm sm:text-base pt-2">
                          {faqItem.answer}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="text-center mt-8 sm:mt-10">
                <p className="text-gray-300 font-jetbrains text-sm sm:text-base mb-3 sm:mb-4">
                  Still have questions? We're here to help!
                </p>
                <button className="bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] text-[#1A2151] rounded-full px-5 sm:px-6 py-2 font-jetbrains font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-[#E6D28C]/20 hover:translate-y-[-2px] transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
