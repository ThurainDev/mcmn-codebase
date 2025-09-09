import React, { useEffect, useState } from "react";
import { FaGraduationCap, FaMusic, FaClock, FaStar } from "react-icons/fa";

export default function Instructors_Modal({ selectedInstructor, closeModal }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("bio");

  useEffect(() => {
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 50);

    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";

    // Cleanup function that will run when component unmounts
    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timer);
    };
  }, []);

  // Handle backdrop click with proper event handling
  const handleBackdropClick = (e) => {
    // Only close if the click is directly on the backdrop
    if (e.target === e.currentTarget) {
      // First set visibility to false to trigger exit animation
      setIsVisible(false);

      // Delay the actual closing to allow animation to complete
      setTimeout(() => {
        closeModal();
      }, 400); // Extended animation duration
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsVisible(false);
    setTimeout(() => closeModal(), 400);
  };

  if (!selectedInstructor) return null;

  const tabs = [
    { id: "bio", label: "Biography", icon: FaGraduationCap },
    { id: "classes", label: "Classes", icon: FaMusic },
    { id: "experience", label: "Experience", icon: FaStar },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 bg-gradient-to-br from-black/80 via-[#1A2151]/60 to-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 transition-all duration-500 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      onClick={handleBackdropClick}
    >
      {/* Enhanced floating elements with different colors */}
      <div className="absolute top-10 left-[5%] w-20 h-20 bg-gradient-to-r from-[#E6D28C]/20 to-[#D4AF37]/20 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute top-1/4 right-[8%] w-16 h-16 bg-gradient-to-r from-[#4A90E2]/20 to-[#357ABD]/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-[15%] w-24 h-24 bg-gradient-to-r from-[#E6D28C]/15 to-[#F0E6B8]/15 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/3 right-[20%] w-18 h-18 bg-gradient-to-r from-[#8B5CF6]/20 to-[#A78BFA]/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "0.5s" }}
      ></div>

      {/* Modal container with enhanced animations */}
      <div
        className={`bg-gradient-to-br from-[#0F1629] via-[#1A2151] to-[#0F1629] rounded-3xl shadow-[0_0_60px_rgba(230,210,140,0.3),0_0_120px_rgba(74,144,226,0.1)] border border-[#E6D28C]/30 max-w-5xl w-full max-h-[95vh] overflow-hidden transform transition-all duration-700 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100 rotate-0"
            : "translate-y-12 opacity-0 scale-95 rotate-1"
        }`}
        style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated gradient borders */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#E6D28C] via-[#4A90E2] to-[#E6D28C] p-[2px] animate-gradient">
          <div className="w-full h-full bg-gradient-to-br from-[#0F1629] via-[#1A2151] to-[#0F1629] rounded-3xl"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-4 sm:p-6 border-b border-[#E6D28C]/20">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#E6D28C] rounded-full animate-pulse"></div>
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#E6D28C] to-[#4A90E2] bg-clip-text text-transparent">
                Instructor Profile
              </h1>
            </div>

            <button
              onClick={handleClose}
              className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#E6D28C]/10 to-[#4A90E2]/10 border border-[#E6D28C]/30 hover:border-[#E6D28C] transition-all duration-300 hover:scale-110 hover:rotate-90"
              aria-label="Close modal"
            >
              <span className="text-[#E6D28C] text-xl group-hover:text-white transition-colors duration-300">
                ×
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E6D28C] to-[#4A90E2] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>

          <div className="overflow-y-auto max-h-[calc(95vh-80px)] custom-scrollbar">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                {/* Left Column - Instructor Image and Basic Info */}
                <div className="lg:w-1/3 flex flex-col items-center">
                  {/* Enhanced profile image */}
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#E6D28C] via-[#4A90E2] to-[#E6D28C] rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-gradient"></div>
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-[#1A2151] to-[#0F1629] p-2 border-2 border-[#E6D28C]/40 overflow-hidden transition-all duration-500 group-hover:border-[#4A90E2]/60 group-hover:scale-105">
                      {selectedInstructor.image ? (
                        <img
                          src={selectedInstructor.image}
                          alt={selectedInstructor.name}
                          className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#E6D28C]/20 to-[#4A90E2]/20 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="100"
                            viewBox="0 0 14 14"
                            className="text-[#E6D28C] transition-all duration-500 group-hover:scale-110 group-hover:text-[#4A90E2]"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="7" cy="5.5" r="2.5" />
                              <path d="M2.73 11.9a5 5 0 0 1 8.54 0" />
                              <circle cx="7" cy="7" r="6.5" />
                            </g>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Name and title with enhanced styling */}
                  <div className="text-center mt-6 space-y-2">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#E6D28C] via-[#F0E6B8] to-[#4A90E2] bg-clip-text text-transparent animate-gradient">
                      {selectedInstructor.name || "Instructor Name"}
                    </h2>
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-[#E6D28C]/90 text-lg font-medium">
                        {selectedInstructor.title || "Music Instructor"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Detailed Information with Tabs */}
                <div className="lg:w-2/3">
                  {/* Tab Navigation */}
                  <div className="flex overflow-x-auto hide-scrollbar gap-1 sm:gap-2 mb-6 p-1 bg-[#0F1629]/50 rounded-xl border border-[#E6D28C]/20">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                            activeTab === tab.id
                              ? "bg-gradient-to-r from-[#E6D28C] to-[#4A90E2] text-black shadow-lg"
                              : "text-[#E6D28C]/70 hover:text-[#E6D28C] hover:bg-[#E6D28C]/10"
                          }`}
                        >
                          <Icon size={16} />
                          <span className="text-sm">{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Tab Content */}
                  <div className="space-y-6">
                    {/* Biography Tab */}
                    {activeTab === "bio" && (
                      <div className="space-y-6 animate-fadeIn">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-[#0F1629]/80 to-[#1A2151]/80 border border-[#E6D28C]/20">
                          <h3 className="text-xl font-semibold mb-4 text-[#E6D28C] flex items-center gap-2">
                            <FaGraduationCap className="text-[#4A90E2]" />
                            Biography
                          </h3>
                          <p className="text-[#E6D28C]/80 leading-relaxed text-base">
                            {selectedInstructor.bio ||
                              `" 𝐓𝐮𝐧𝐞𝐬 𝐀𝐜𝐚𝐝𝐞𝐦𝐲 ဂီတသင်တန်းကျောင်း " မှာ 𝐏𝐢𝐚𝐧𝐨, 𝐊𝐞𝐲𝐛𝐨𝐚𝐫𝐝 နဲ့ 𝐌𝐮𝐬𝐢𝐜 𝐓𝐡𝐞𝐨𝐫𝐲 သင်ခန်းစာများကို သင်ကြားပေးမယ့် ဆရာမကတော့ " 𝐓𝐞𝐚𝐜𝐡𝐞𝐫 𝐘𝐚𝐧𝐠 𝐌𝐚𝐧 𝐌𝐚𝐧 " ဖြစ်ပါတယ်။ ဆရာမက 𝐌𝐮𝐬𝐢𝐜 𝐓𝐡𝐞𝐨𝐫𝐲 ကို 𝐀𝐁𝐑𝐒𝐌 (𝐀𝐬𝐬𝐨𝐜𝐢𝐚𝐭𝐞𝐝 𝐁𝐨𝐚𝐫𝐝 𝐨𝐟 𝐭𝐡𝐞 𝐑𝐨𝐲𝐚𝐥 𝐒𝐜𝐡𝐨𝐨𝐥𝐬 𝐨𝐟 𝐌𝐮𝐬𝐢𝐜) တွင် နောက်ဆုံး 𝐆𝐫𝐚𝐝𝐞-𝟖 အထိ သင်ယူတတ်မြောက်ခဲ့သူဖြစ်ပြီး 𝐏𝐢𝐚𝐧𝐨 ကိုတော့ 𝐀𝐁𝐒𝐑𝐌 𝐆𝐫𝐚𝐝𝐞-𝟓 အထိ 𝐃𝐢𝐬𝐭𝐢𝐧𝐜𝐭𝐢𝐨𝐧𝐬 များဖြင့် ပြီးမြောက်အောင်မြင်ထားသူလည်းဖြစ်ပါတယ်။`}
                          </p>
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-[#1A2151]/80 to-[#0F1629]/80 border border-[#4A90E2]/20">
                          <h3 className="text-xl font-semibold mb-4 text-[#4A90E2] flex items-center gap-2">
                            <FaStar className="text-[#E6D28C]" />
                            Teaching Philosophy
                          </h3>
                          <blockquote className="border-l-4 border-[#E6D28C]/40 pl-6 italic text-[#E6D28C]/80 text-base">
                            {selectedInstructor.philosophy ||
                              "Music is a journey of self-discovery and expression. I believe in creating a supportive environment where students can explore their creativity while building a strong technical foundation. Every student is unique, and I tailor my approach to match their individual learning style and goals."}
                          </blockquote>
                        </div>
                      </div>
                    )}

                    {/* Classes Tab */}
                    {activeTab === "classes" && (
                      <div className="animate-fadeIn">
                        <div>
                          {selectedInstructor.classes &&
                          selectedInstructor.classes.length > 0
                            ? selectedInstructor.classes.map((cls, index) => (
                                <div
                                  key={index}
                                  className="group p-5 mb-5 rounded-xl bg-gradient-to-br from-[#0F1629]/80 to-[#1A2151]/80 border border-[#E6D28C]/20"
                                  style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                  <div className="flex items-start gap-2 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#E6D28C]/20 to-[#4A90E2]/20 flex items-center justify-center">
                                      <FaMusic className="text-[#E6D28C]" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 text-[#E6D28C] text-2xl font-semibold ">
                                        {cls.name}
                                        <h4 className="text-[#4A90E2] border border-[#E6D28C]/20 p-1 rounded-full text-xs font-semibold">
                                          {cls.class}
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Phyo Titus */}
                                  {selectedInstructor.name === "Phyo Titus" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {Array.isArray(cls.schedule) ? (
                                        cls.schedule.map(
                                          (scheduleItem, scheduleIndex) => (
                                            <div
                                              key={scheduleIndex}
                                              className="flex flex-col gap-1"
                                            >
                                              <span className="flex text-[#E6D28C]/80 items-center gap-1 text-lg">
                                                <FaClock size={12} />
                                                {scheduleItem.day}
                                              </span>
                                              <span className="text-[#E6D28C]/60">
                                                {/* Handle both string and array time formats */}
                                                {typeof scheduleItem.time ===
                                                "string"
                                                  ? scheduleItem.time
                                                  : Array.isArray(
                                                      scheduleItem.time
                                                    )
                                                  ? scheduleItem.time.map(
                                                      (timeObj, timeIndex) => (
                                                        <div key={timeIndex}>
                                                          {timeObj.time_1 && (
                                                            <div>
                                                              {timeObj.time_1}
                                                            </div>
                                                          )}
                                                          {timeObj.time_2 && (
                                                            <div>
                                                              {timeObj.time_2}
                                                            </div>
                                                          )}
                                                          {timeObj.time && (
                                                            <div>
                                                              {timeObj.time}
                                                            </div>
                                                          )}
                                                        </div>
                                                      )
                                                    )
                                                  : "Time TBA"}
                                              </span>
                                            </div>
                                          )
                                        )
                                      ) : (
                                        <span>{cls.schedule}</span>
                                      )}
                                    </div>
                                  )}
                                  {/* Simon Wah */}
                                  {selectedInstructor.name === "Simon Wah" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {Array.isArray(cls.schedule) ? (
                                        cls.schedule.map(
                                          (scheduleItem, scheduleIndex) => (
                                            <div
                                              key={scheduleIndex}
                                              className="flex flex-col gap-1"
                                            >
                                              <span className="flex text-[#E6D28C]/80 items-center gap-1 text-lg">
                                                <FaClock size={12} />
                                                {scheduleItem.day}
                                              </span>
                                              <span className="text-[#E6D28C]/60">
                                                {/* Handle both string and array time formats */}
                                                {typeof scheduleItem.time ===
                                                "string"
                                                  ? scheduleItem.time
                                                  : Array.isArray(
                                                      scheduleItem.time
                                                    )
                                                  ? scheduleItem.time.map(
                                                      (timeObj, timeIndex) => (
                                                        <div key={timeIndex}>
                                                          {timeObj.time_1 && (
                                                            <div>
                                                              {timeObj.time_1}
                                                            </div>
                                                          )}
                                                          {timeObj.time_2 && (
                                                            <div>
                                                              {timeObj.time_2}
                                                            </div>
                                                          )}
                                                          {timeObj.time && (
                                                            <div>
                                                              {timeObj.time}
                                                            </div>
                                                          )}
                                                        </div>
                                                      )
                                                    )
                                                  : "Time TBA"}
                                              </span>
                                            </div>
                                          )
                                        )
                                      ) : (
                                        <span>{cls.schedule}</span>
                                      )}
                                    </div>
                                  )}
                                  {/* Shalom */}
                                  {selectedInstructor.name === "Shalom" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {Array.isArray(cls.schedule) ? (
                                        cls.schedule.map(
                                          (scheduleItem, scheduleIndex) => (
                                            <div
                                              key={scheduleIndex}
                                              className="flex flex-col gap-1"
                                            >
                                              <span className="flex text-[#E6D28C]/80 items-center gap-1 text-lg">
                                                <FaClock size={12} />
                                                {scheduleItem.day}
                                              </span>
                                              <span className="text-[#E6D28C]/60">
                                                {/* Handle both string and array time formats */}
                                                {typeof scheduleItem.time ===
                                                "string"
                                                  ? scheduleItem.time
                                                  : Array.isArray(
                                                      scheduleItem.time
                                                    )
                                                  ? scheduleItem.time.map(
                                                      (timeObj, timeIndex) => (
                                                        <div key={timeIndex}>
                                                          {timeObj.time_1 && (
                                                            <div>
                                                              {timeObj.time_1}
                                                            </div>
                                                          )}
                                                          {timeObj.time_2 && (
                                                            <div>
                                                              {timeObj.time_2}
                                                            </div>
                                                          )}
                                                          {timeObj.time && (
                                                            <div>
                                                              {timeObj.time}
                                                            </div>
                                                          )}
                                                        </div>
                                                      )
                                                    )
                                                  : "Time TBA"}
                                              </span>
                                            </div>
                                          )
                                        )
                                      ) : (
                                        <span>{cls.schedule}</span>
                                      )}
                                    </div>
                                  )}
                                  {/* M Zaw Rain */}
                                  {selectedInstructor.name === "M Zaw Rain" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {Array.isArray(cls.schedule) ? (
                                        cls.schedule.map(
                                          (scheduleItem, scheduleIndex) => (
                                            <div
                                              key={scheduleIndex}
                                              className="flex flex-col gap-1"
                                            >
                                              <span className="flex text-[#E6D28C]/80 items-center gap-1 text-lg">
                                                <FaClock size={12} />
                                                {scheduleItem.day}
                                              </span>
                                              <span className="text-[#E6D28C]/60">
                                                {/* Handle both string and array time formats */}
                                                {typeof scheduleItem.time ===
                                                "string"
                                                  ? scheduleItem.time
                                                  : Array.isArray(
                                                      scheduleItem.time
                                                    )
                                                  ? scheduleItem.time.map(
                                                      (timeObj, timeIndex) => (
                                                        <div key={timeIndex}>
                                                          {timeObj.time_1 && (
                                                            <div>
                                                              {timeObj.time_1}
                                                            </div>
                                                          )}
                                                          {timeObj.time_2 && (
                                                            <div>
                                                              {timeObj.time_2}
                                                            </div>
                                                          )}
                                                          {timeObj.time_3 && (
                                                            <div>
                                                              {timeObj.time_3}
                                                            </div>
                                                          )}
                                                          {timeObj.time_4 && (
                                                            <div>
                                                              {timeObj.time_4}
                                                            </div>
                                                          )}
                                                          {timeObj.time && (
                                                            <div>
                                                              {timeObj.time}
                                                            </div>
                                                          )}
                                                        </div>
                                                      )
                                                    )
                                                  : "Time TBA"}
                                              </span>
                                            </div>
                                          )
                                        )
                                      ) : (
                                        <span>{cls.schedule}</span>
                                      )}
                                    </div>
                                  )}
                                  {/* Htoo Lay */}
                                  {selectedInstructor.name === "Htoo Lay" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {Array.isArray(cls.schedule) ? (
                                        cls.schedule.map(
                                          (scheduleItem, scheduleIndex) => (
                                            <div
                                              key={scheduleIndex}
                                              className="flex flex-col gap-1"
                                            >
                                              <span className="flex text-[#E6D28C]/80 items-center gap-1 text-lg">
                                                <FaClock size={12} />
                                                {scheduleItem.day}
                                              </span>
                                              <span className="text-[#E6D28C]/60">
                                                {/* Handle both string and array time formats */}
                                                {typeof scheduleItem.time ===
                                                "string"
                                                  ? scheduleItem.time
                                                  : Array.isArray(
                                                      scheduleItem.time
                                                    )
                                                  ? scheduleItem.time.map(
                                                      (timeObj, timeIndex) => (
                                                        <div key={timeIndex}>
                                                          {timeObj.time_1 && (
                                                            <div>
                                                              {timeObj.time_1}
                                                            </div>
                                                          )}
                                                          {timeObj.time_2 && (
                                                            <div>
                                                              {timeObj.time_2}
                                                            </div>
                                                          )}
                                                          {timeObj.time && (
                                                            <div>
                                                              {timeObj.time}
                                                            </div>
                                                          )}
                                                        </div>
                                                      )
                                                    )
                                                  : "Time TBA"}
                                              </span>
                                            </div>
                                          )
                                        )
                                      ) : (
                                        <span>{cls.schedule}</span>
                                      )}
                                    </div>
                                  )}
                                  {/* Phillip */}
                                  {selectedInstructor.name === "Phillip" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {Array.isArray(cls.schedule) ? (
                                        cls.schedule.map(
                                          (scheduleItem, scheduleIndex) => (
                                            <div
                                              key={scheduleIndex}
                                              className="flex flex-col gap-1"
                                            >
                                              <span className="flex text-[#E6D28C]/80 items-center gap-1 text-lg">
                                                <FaClock size={12} />
                                                {scheduleItem.day}
                                              </span>
                                              <span className="text-[#E6D28C]/60">
                                                {/* Handle both string and array time formats */}
                                                {typeof scheduleItem.time ===
                                                "string"
                                                  ? scheduleItem.time
                                                  : Array.isArray(
                                                      scheduleItem.time
                                                    )
                                                  ? scheduleItem.time.map(
                                                      (timeObj, timeIndex) => (
                                                        <div key={timeIndex}>
                                                          {timeObj.time_1 && (
                                                            <div>
                                                              {timeObj.time_1}
                                                            </div>
                                                          )}
                                                          {timeObj.time_2 && (
                                                            <div>
                                                              {timeObj.time_2}
                                                            </div>
                                                          )}
                                                          {timeObj.time && (
                                                            <div>
                                                              {timeObj.time}
                                                            </div>
                                                          )}
                                                        </div>
                                                      )
                                                    )
                                                  : "Time TBA"}
                                              </span>
                                            </div>
                                          )
                                        )
                                      ) : (
                                        <span>{cls.schedule}</span>
                                      )}
                                    </div>
                                  )}
                                  {/* Yang Man Man */}
                                  {selectedInstructor.name ===
                                    "Yang Man Man" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {Array.isArray(cls.schedule) ? (
                                        cls.schedule.map(
                                          (scheduleItem, scheduleIndex) => (
                                            <div
                                              key={scheduleIndex}
                                              className="flex flex-col gap-1"
                                            >
                                              <span className="flex text-[#E6D28C]/80 items-center gap-1 text-lg">
                                                <FaClock size={12} />
                                                {scheduleItem.day}
                                              </span>
                                              <span className="text-[#E6D28C]/60">
                                                {/* Handle both string and array time formats */}
                                                {typeof scheduleItem.time ===
                                                "string"
                                                  ? scheduleItem.time
                                                  : Array.isArray(
                                                      scheduleItem.time
                                                    )
                                                  ? scheduleItem.time.map(
                                                      (timeObj, timeIndex) => (
                                                        <div key={timeIndex}>
                                                          {timeObj.time_1 && (
                                                            <div>
                                                              {timeObj.time_1}
                                                            </div>
                                                          )}
                                                          {timeObj.time_2 && (
                                                            <div>
                                                              {timeObj.time_2}
                                                            </div>
                                                          )}
                                                          {timeObj.time && (
                                                            <div>
                                                              {timeObj.time}
                                                            </div>
                                                          )}
                                                        </div>
                                                      )
                                                    )
                                                  : "Time TBA"}
                                              </span>
                                            </div>
                                          )
                                        )
                                      ) : (
                                        <span>{cls.schedule}</span>
                                      )}
                                    </div>
                                  )}
                                  {/* June Nine */}
                                  {selectedInstructor.name === "June Nine" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {Array.isArray(cls.schedule) ? (
                                        cls.schedule.map(
                                          (scheduleItem, scheduleIndex) => (
                                            <div
                                              key={scheduleIndex}
                                              className="flex flex-col gap-1"
                                            >
                                              <span className="flex text-[#E6D28C]/80 items-center gap-1 text-lg">
                                                <FaClock size={12} />
                                                {scheduleItem.day}
                                              </span>
                                              <span className="text-[#E6D28C]/60">
                                                {/* Handle both string and array time formats */}
                                                {typeof scheduleItem.time ===
                                                "string"
                                                  ? scheduleItem.time
                                                  : Array.isArray(
                                                      scheduleItem.time
                                                    )
                                                  ? scheduleItem.time.map(
                                                      (timeObj, timeIndex) => (
                                                        <div key={timeIndex}>
                                                          {timeObj.time_1 && (
                                                            <div>
                                                              {timeObj.time_1}
                                                            </div>
                                                          )}
                                                          {timeObj.time_2 && (
                                                            <div>
                                                              {timeObj.time_2}
                                                            </div>
                                                          )}
                                                          {timeObj.time && (
                                                            <div>
                                                              {timeObj.time}
                                                            </div>
                                                          )}
                                                        </div>
                                                      )
                                                    )
                                                  : "Time TBA"}
                                              </span>
                                            </div>
                                          )
                                        )
                                      ) : (
                                        <span>{cls.schedule}</span>
                                      )}
                                    </div>
                                  )}
                                  {/* Purity */}
                                  {selectedInstructor.name === "Purity" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {Array.isArray(cls.schedule) ? (
                                        cls.schedule.map(
                                          (scheduleItem, scheduleIndex) => (
                                            <div
                                              key={scheduleIndex}
                                              className="flex flex-col gap-1"
                                            >
                                              <span className="flex text-[#E6D28C]/80 items-center gap-1 text-lg">
                                                <FaClock size={12} />
                                                {scheduleItem.day}
                                              </span>
                                              <span className="text-[#E6D28C]/60">
                                                {/* Handle both string and array time formats */}
                                                {typeof scheduleItem.time ===
                                                "string"
                                                  ? scheduleItem.time
                                                  : Array.isArray(
                                                      scheduleItem.time
                                                    )
                                                  ? scheduleItem.time.map(
                                                      (timeObj, timeIndex) => (
                                                        <div key={timeIndex}>
                                                          {timeObj.time_1 && (
                                                            <div>
                                                              {timeObj.time_1}
                                                            </div>
                                                          )}
                                                          {timeObj.time_2 && (
                                                            <div>
                                                              {timeObj.time_2}
                                                            </div>
                                                          )}
                                                          {timeObj.time && (
                                                            <div>
                                                              {timeObj.time}
                                                            </div>
                                                          )}
                                                        </div>
                                                      )
                                                    )
                                                  : "Time TBA"}
                                              </span>
                                            </div>
                                          )
                                        )
                                      ) : (
                                        <span>{cls.schedule}</span>
                                      )}
                                    </div>
                                  )}
                                  {/* Samson */}
                                  {selectedInstructor.name === "Samson" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {Array.isArray(cls.schedule) ? (
                                        cls.schedule.map(
                                          (scheduleItem, scheduleIndex) => (
                                            <div
                                              key={scheduleIndex}
                                              className="flex flex-col gap-1"
                                            >
                                              <span className="flex text-[#E6D28C]/80 items-center gap-1 text-lg">
                                                <FaClock size={12} />
                                                {scheduleItem.day}
                                              </span>
                                              <span className="text-[#E6D28C]/60">
                                                {/* Handle both string and array time formats */}
                                                {typeof scheduleItem.time ===
                                                "string"
                                                  ? scheduleItem.time
                                                  : Array.isArray(
                                                      scheduleItem.time
                                                    )
                                                  ? scheduleItem.time.map(
                                                      (timeObj, timeIndex) => (
                                                        <div key={timeIndex}>
                                                          {timeObj.time_1 && (
                                                            <div>
                                                              {timeObj.time_1}
                                                            </div>
                                                          )}
                                                          {timeObj.time_2 && (
                                                            <div>
                                                              {timeObj.time_2}
                                                            </div>
                                                          )}
                                                          {timeObj.time && (
                                                            <div>
                                                              {timeObj.time}
                                                            </div>
                                                          )}
                                                        </div>
                                                      )
                                                    )
                                                  : "Time TBA"}
                                              </span>
                                            </div>
                                          )
                                        )
                                      ) : (
                                        <span>{cls.schedule}</span>
                                      )}
                                    </div>
                                  )}
                                  {/* John Thang Lian */}
                                  {selectedInstructor.name ===
                                    "John Thang Lian" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {Array.isArray(cls.schedule) ? (
                                        cls.schedule.map(
                                          (scheduleItem, scheduleIndex) => (
                                            <div
                                              key={scheduleIndex}
                                              className="flex flex-col gap-1"
                                            >
                                              <span className="flex text-[#E6D28C]/80 items-center gap-1 text-lg">
                                                <FaClock size={12} />
                                                {scheduleItem.day}
                                              </span>
                                              <span className="text-[#E6D28C]/60">
                                                {/* Handle both string and array time formats */}
                                                {typeof scheduleItem.time ===
                                                "string"
                                                  ? scheduleItem.time
                                                  : Array.isArray(
                                                      scheduleItem.time
                                                    )
                                                  ? scheduleItem.time.map(
                                                      (timeObj, timeIndex) => (
                                                        <div key={timeIndex}>
                                                          {timeObj.time_1 && (
                                                            <div>
                                                              {timeObj.time_1}
                                                            </div>
                                                          )}
                                                          {timeObj.time_2 && (
                                                            <div>
                                                              {timeObj.time_2}
                                                            </div>
                                                          )}
                                                          {timeObj.time && (
                                                            <div>
                                                              {timeObj.time}
                                                            </div>
                                                          )}
                                                        </div>
                                                      )
                                                    )
                                                  : "Time TBA"}
                                              </span>
                                            </div>
                                          )
                                        )
                                      ) : (
                                        <span>{cls.schedule}</span>
                                      )}
                                    </div>
                                  )}
                                  {/* Patrick's Classes */}
                                  {selectedInstructor.name === "Patrick" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {Array.isArray(cls.schedule) ? (
                                        cls.schedule.map(
                                          (scheduleItem, scheduleIndex) => (
                                            <div
                                              key={scheduleIndex}
                                              className="flex flex-col gap-1"
                                            >
                                              <span className="flex text-[#E6D28C]/80 items-center gap-1 text-lg">
                                                <FaClock size={12} />
                                                {scheduleItem.day}
                                              </span>
                                              <span className="text-[#E6D28C]/60">
                                                {/* Handle both string and array time formats */}
                                                {typeof scheduleItem.time ===
                                                "string"
                                                  ? scheduleItem.time
                                                  : Array.isArray(
                                                      scheduleItem.time
                                                    )
                                                  ? scheduleItem.time.map(
                                                      (timeObj, timeIndex) => (
                                                        <div key={timeIndex}>
                                                          {timeObj.time_1 && (
                                                            <div>
                                                              {timeObj.time_1}
                                                            </div>
                                                          )}
                                                          {timeObj.time_2 && (
                                                            <div>
                                                              {timeObj.time_2}
                                                            </div>
                                                          )}
                                                          {timeObj.time && (
                                                            <div>
                                                              {timeObj.time}
                                                            </div>
                                                          )}
                                                        </div>
                                                      )
                                                    )
                                                  : "Time TBA"}
                                              </span>
                                            </div>
                                          )
                                        )
                                      ) : (
                                        <span>{cls.schedule}</span>
                                      )}
                                    </div>
                                  )}
                                  {/* Victor & Eh Nyaw */}
                                  {selectedInstructor.name ===
                                    "Victor & Eh Nyaw" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {Array.isArray(cls.schedule) ? (
                                        cls.schedule.map(
                                          (scheduleItem, scheduleIndex) => (
                                            <div
                                              key={scheduleIndex}
                                              className="flex flex-col gap-1"
                                            >
                                              <span className="flex text-[#E6D28C]/80 items-center gap-1 text-lg">
                                                <FaClock size={12} />
                                                {scheduleItem.day}
                                              </span>
                                              <span className="text-[#E6D28C]/60">
                                                {/* Handle both string and array time formats */}
                                                {typeof scheduleItem.time ===
                                                "string"
                                                  ? scheduleItem.time
                                                  : Array.isArray(
                                                      scheduleItem.time
                                                    )
                                                  ? scheduleItem.time.map(
                                                      (timeObj, timeIndex) => (
                                                        <div key={timeIndex}>
                                                          {timeObj.time_1 && (
                                                            <div>
                                                              {timeObj.time_1}
                                                            </div>
                                                          )}
                                                          {timeObj.time_2 && (
                                                            <div>
                                                              {timeObj.time_2}
                                                            </div>
                                                          )}
                                                          {timeObj.time_3 && (
                                                            <div>
                                                              {timeObj.time_3}
                                                            </div>
                                                          )}
                                                          {timeObj.time_4 && (
                                                            <div>
                                                              {timeObj.time_4}
                                                            </div>
                                                          )}
                                                          {timeObj.time && (
                                                            <div>
                                                              {timeObj.time}
                                                            </div>
                                                          )}
                                                        </div>
                                                      )
                                                    )
                                                  : "Time TBA"}
                                              </span>
                                            </div>
                                          )
                                        )
                                      ) : (
                                        <span>{cls.schedule}</span>
                                      )}
                                    </div>
                                  )}
                                </div>
                              ))
                            : [
                                {
                                  name: "Private Piano Lessons",
                                  schedule: "Mon-Fri, 2-6 PM",
                                  level: "All Levels",
                                },
                                {
                                  name: "Music Theory",
                                  schedule: "Tue & Thu, 7-8 PM",
                                  level: "Intermediate",
                                },
                                {
                                  name: "Composition Workshop",
                                  schedule: "Saturdays, 10 AM-12 PM",
                                  level: "Advanced",
                                },
                                {
                                  name: "Ensemble Coaching",
                                  schedule: "Sundays, 2-4 PM",
                                  level: "All Levels",
                                },
                              ].map((cls, index) => (
                                <div
                                  key={index}
                                  className="group p-5 rounded-xl bg-gradient-to-br from-[#0F1629]/80 to-[#1A2151]/80 border border-[#E6D28C]/20 hover:border-[#4A90E2]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,144,226,0.2)] transform hover:translate-y-[-4px]"
                                  style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#E6D28C]/20 to-[#4A90E2]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                      <FaMusic className="text-[#E6D28C] group-hover:text-[#4A90E2] transition-colors duration-300" />
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="text-[#E6D28C] font-semibold group-hover:text-[#4A90E2] transition-colors duration-300 mb-1">
                                        {cls.name}
                                      </h4>
                                      <div className="flex items-center gap-2 text-[#E6D28C]/60 text-sm group-hover:text-[#E6D28C]/80 transition-colors duration-300">
                                        <FaClock size={12} />
                                        <span>{cls.schedule}</span>
                                      </div>
                                      <div className="mt-2">
                                        <span className="px-2 py-1 text-xs rounded-full bg-[#E6D28C]/20 text-[#E6D28C] border border-[#E6D28C]/30">
                                          {cls.level}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                        </div>
                      </div>
                    )}

                    {/* Experience Tab */}
                    {activeTab === "experience" && (
                      <div className="space-y-6 animate-fadeIn">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-[#0F1629]/80 to-[#1A2151]/80 border border-[#E6D28C]/20">
                          <h3 className="text-xl font-semibold mb-4 text-[#E6D28C] flex items-center gap-2">
                            <FaStar className="text-[#4A90E2]" />
                            Professional Experience
                          </h3>
                          <div className="space-y-4">
                            {selectedInstructor.experience_details ? (
                              selectedInstructor.experience_details.map(
                                (exp, index) => (
                                  <>
                                    {exp.id === 1 && (
                                      <div
                                        key={index}
                                        className="border-l-2 border-[#E6D28C]/30 pl-4"
                                      >
                                        <h4 className="font-semibold text-[#E6D28C]">
                                          {exp.position}
                                        </h4>
                                        <p className="text-[#E6D28C]/60 text-sm">
                                          {exp.duration}
                                        </p>
                                      </div>
                                    )}
                                    {exp.id === 2 && (
                                      <div
                                        key={index}
                                        className="border-l-2 border-[#4A90E2]/30 pl-4"
                                      >
                                        <h4 className="font-semibold text-[#4A90E2]">
                                          {exp.position}
                                        </h4>
                                        <p className="text-[#E6D28C]/60 text-sm">
                                          {exp.duration}
                                        </p>
                                      </div>
                                    )}
                                  </>
                                )
                              )
                            ) : (
                              <div className="space-y-4">
                                <div className="border-l-2 border-[#E6D28C]/30 pl-4">
                                  <h4 className="font-semibold text-[#E6D28C]">
                                    Senior Music Instructor
                                  </h4>
                                  <p className="text-[#4A90E2] text-sm">
                                    MCMN Music Academy
                                  </p>
                                  <p className="text-[#E6D28C]/60 text-sm">
                                    2018 - Present
                                  </p>
                                </div>
                                <div className="border-l-2 border-[#4A90E2]/30 pl-4">
                                  <h4 className="font-semibold text-[#4A90E2]">
                                    Performance Artist
                                  </h4>
                                  <p className="text-[#E6D28C] text-sm">
                                    Various Venues
                                  </p>
                                  <p className="text-[#E6D28C]/60 text-sm">
                                    2015 - 2020
                                  </p>
                                </div>
                                <div className="border-l-2 border-[#E6D28C]/30 pl-4">
                                  <h4 className="font-semibold text-[#E6D28C]">
                                    Music Degree
                                  </h4>
                                  <p className="text-[#4A90E2] text-sm">
                                    Berklee College of Music
                                  </p>
                                  <p className="text-[#E6D28C]/60 text-sm">
                                    2011 - 2015
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-[#1A2151]/80 to-[#0F1629]/80 border border-[#4A90E2]/20">
                          <h3 className="text-xl font-semibold mb-4 text-[#4A90E2] flex items-center gap-2">
                            <FaGraduationCap className="text-[#E6D28C]" />
                            Certifications & Awards
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              "Certified Music Educator",
                              "Piano Performance Certificate",
                              "Music Theory Specialist",
                              "Outstanding Teacher Award 2023",
                            ].map((cert, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 p-3 rounded-lg bg-[#E6D28C]/10 border border-[#E6D28C]/20"
                              >
                                <FaStar className="text-[#E6D28C] text-sm" />
                                <span className="text-[#E6D28C]/80 text-sm">
                                  {cert}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
