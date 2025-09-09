import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    id: 1,
    question: "MCMN မှတဆင့် သီချင်းဖြန့်ဖြူးရန် မည်သည့်အရာများ လိုအပ်ပါသလဲ?",
    answer:
      "သင့်သီချင်း MP3/WAV ဖိုင်၊ သီချင်းဓာတ်ပုံ၊ သီချင်းအကြောင်း အချက်အလက်များနှင့် သင့်ဆက်သွယ်ရန် အချက်အလက်များ လိုအပ်ပါသည်။",
  },
  {
    id: 2,
    question: "မည်သည့် platforms များပေါ်တွင် ဖြန့်ဖြူးပေးနိုင်ပါသလဲ?",
    answer:
      "Spotify, Apple Music, YouTube, YouTube Music, Deezer, Tidal, Amazon Music, Tik Tok, Facebook, Instagram စသည့် နိုင်ငံတကာ platforms ၁၀ ခုတွင် ဖြန့်ဖြူးပေးနိုင်ပါသည်။",
  },
  {
    id: 3,
    question: "သီချင်းဖြန့်ဖြူးခြင်းအတွက် ကုန်ကျစရိတ် မည်မျှရှိပါသလဲ?",
    answer:
      "သီချင်းဖြန့်ဖြူးခြင်းအတွက် ကုန်ကျစရိတ်များကို သင့်လိုအပ်ချက်နှင့် ဝန်ဆောင်မှုအပေါ် မူတည်၍ ကွဲပြားနိုင်ပါသည်။ အသေးစိတ်သိရှိလိုပါက ကျွန်ုပ်တို့ထံ ဆက်သွယ်မေးမြန်းနိုင်ပါသည်။",
  },
  {
    id: 4,
    question: "သီချင်းဖြန့်ဖြူးပြီးနောက် ဝင်ငွေကို မည်သို့ရရှိနိုင်ပါသလဲ?",
    answer:
      "သင့်သီချင်းများမှ ရရှိသော ဝင်ငွေများကို လစဉ် သို့မဟုတ် သုံးလတစ်ကြိမ် စုစည်း၍ သင့်ထံသို့ ပေးပို့ပါမည်။ ငွေပေးချေမှုနည်းလမ်းများကို သင့်နှင့် တိုင်ပင်ဆွေးနွေးပြီး အဆင်ပြေသည့်နည်းလမ်းဖြင့် ဆောင်ရွက်ပေးပါမည်။",
  },
  {
    id: 5,
    question: "သီချင်းဖြန့်ဖြူးရန် မည်မျှကြာမြင့်ပါသလဲ?",
    answer:
      "သင့်သီချင်းများကို platforms အားလုံးပေါ်တွင် ဖြန့်ဖြူးရန် ပုံမှန်အားဖြင့် ၂-၄ ပတ်ခန့် ကြာမြင့်နိုင်ပါသည်။ အချို့ platforms များတွင် ပိုမိုမြန်ဆန်စွာ ရရှိနိုင်ပါသည်။",
  },
  {
    id: 6,
    question: "မူပိုင်ခွင့်နှင့် ပတ်သက်၍ မည်သို့ကာကွယ်ပေးပါသလဲ?",
    answer:
      "သင့်သီချင်းများကို Content ID စနစ်ဖြင့် မှတ်ပုံတင်ပေးခြင်း၊ တရားမဝင်အသုံးပြုမှုများကို စောင့်ကြည့်ခြင်းနှင့် မူပိုင်ခွင့်ချိုးဖောက်မှုများကို တားဆီးခြင်းတို့ကို ဆောင်ရွက်ပေးပါသည်။",
  },
];

export default function FAQ_Section() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-xl md:rounded-2xl lg:rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_20px_rgba(230,210,140,0.1)] overflow-hidden p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="text-center mb-6 md:mb-8 lg:mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[#E6D28C] via-[#D4AF37] to-[#E6D28C] bg-clip-text text-transparent animate-gradient px-4 md:px-0">
              မေးလေ့ရှိသော မေးခွန်းများ
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="group bg-gradient-to-r from-black/80 to-black/60 rounded-lg md:rounded-xl border border-[#E6D28C]/20"
              >
                <button
                  className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-left flex justify-between items-start gap-3"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-[#E6D28C] font-medium text-sm sm:text-base md:text-lg leading-relaxed flex-1 pr-2">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 sm:h-5 sm:w-5 text-[#E6D28C] transition-transform duration-300 ${
                        activeIndex === index ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`px-4 sm:px-5 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? "py-3 sm:py-4 max-h-96 opacity-100"
                      : "max-h-0 py-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-[#E6D28C]/10 pt-3 sm:pt-4">
                    <p className="text-[#E6D28C]/80 text-xs sm:text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-8 md:mt-10 lg:mt-12">
            <div className="bg-gradient-to-r from-[#E6D28C]/5 to-[#D4AF37]/5 rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 border border-[#E6D28C]/10 text-center">
              <div className="mb-4 md:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-[#E6D28C]/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-8 sm:w-8 text-[#E6D28C]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#E6D28C] mb-2 md:mb-3">
                  နောက်ထပ် မေးခွန်းများ ရှိပါသလား?
                </h3>
                <p className="text-[#E6D28C]/80 text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                  အခြားမေးခွန်းများရှိပါက ကျွန်ုပ်တို့ထံ
                  ဆက်သွယ်မေးမြန်းနိုင်ပါသည်။ ကျွန်ုပ်တို့သည် သင့်အား အကောင်းဆုံး
                  ဝန်ဆောင်မှုပေးရန် အသင့်ရှိပါသည်။
                </p>
              </div>
              <Link
                to={"/contact"}
                className="inline-flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-transparent border-2 border-[#E6D28C] text-[#E6D28C] font-medium text-sm sm:text-base rounded-full hover:bg-[#E6D28C] hover:text-black hover:shadow-[0_0_20px_rgba(230,210,140,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
