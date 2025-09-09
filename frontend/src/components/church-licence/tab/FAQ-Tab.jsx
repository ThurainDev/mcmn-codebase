import React from "react";
import { HelpCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

// FAQ data
const faqItems = [
  {
    question: "What is a Church Copyright License?",
    answer:
      "A Church Copyright License provides legal permission to reproduce and use copyrighted worship songs in your church services and activities. It ensures your church is compliant with copyright laws while using worship music.",
  },
  {
    question: "What does the license cover?",
    answer:
      "Our license covers projecting lyrics, printing songs in bulletins, recording services for shut-ins, creating custom arrangements, and accessing our database of over 200,000 worship songs from major publishers.",
  },
  {
    question: "How is the license fee calculated?",
    answer:
      "License fees are based on your church's average weekly attendance. We offer tiered pricing to ensure churches of all sizes can afford proper licensing.",
  },
  {
    question: "How long is the license valid?",
    answer:
      "Our standard licenses are valid for one year from the date of purchase, with options for automatic renewal to ensure continuous coverage.",
  },
  {
    question: "Can we use the license for online streaming?",
    answer:
      "Yes, our Premium and Enterprise licenses include coverage for live streaming and posting recorded services online. Basic licenses can be upgraded to include this feature.",
  },
];

export default function FAQ_Tab({ activeTab }) {
  return (
    <>
      {activeTab === "faq" && (
        <div className="scroll-animate opacity-0 translate-y-10">
          <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#E6D28C]/90 mb-8 text-sm sm:text-base leading-relaxed">
              Find answers to common questions about our Church Copyright
              License.
            </p>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-black/50 rounded-xl p-5 hover:shadow-[0_0_15px_rgba(230,210,140,0.15)] transition-all duration-300 border border-[#E6D28C]/10 hover:border-[#E6D28C]/30"
                >
                  <div className="flex items-start">
                    <div className="text-[#D4AF37] mr-3 mt-1">
                      <HelpCircle size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#E6D28C] mb-2">
                        {item.question}
                      </h3>
                      <p className="text-[#E6D28C]/80 text-sm">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-[#E6D28C]/90 mb-4">
                Have more questions? We're here to help!
              </p>
              <NavLink
                to={"/contact"}
                className={
                  "inline-block bg-transparent border border-[#E6D28C] text-[#E6D28C] px-6 py-3 rounded-full text-base font-bold hover:bg-[#E6D28C]/10 transition-all duration-300"
                }
              >
                Contact Our Support Team
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
