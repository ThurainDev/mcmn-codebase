import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, time } from "framer-motion";

export default function PrivateLessons() {
  const [openChapter, setOpenChapter] = useState();
  const [isVisible, setIsVisible] = useState({});

  // Initialize visibility states for staggered animations
  useEffect(() => {
    const sections = [
      "header",
      "info",
      "about",
      "highlights",
      "outline",
      "features",
      "learning",
      "eligibility",
    ];

    const timers = sections.map((section, index) => {
      return setTimeout(() => {
        setIsVisible((prev) => ({ ...prev, [section]: true }));
      }, 300 + index * 150);
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  const toggleChapter = (chapterNum) => {
    setOpenChapter(openChapter === chapterNum ? null : chapterNum);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#1A2151] to-[#141937] px-4 sm:px-6 md:padding pt-[140px] sm:pt-[140px] md:pt-[130px] pb-[30px]">
        {/* Header Section - Enhanced with better responsive design */}
        <motion.div
          initial="hidden"
          animate={isVisible.header ? "visible" : "hidden"}
          variants={fadeIn}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0"
        >
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-jetbrains bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent animate-gradient">
              Private Lessons
            </h1>
            <p className="text-[#E6D28C]/80 mt-2 max-w-xl">
              One-on-one instruction tailored to your musical goals and learning
              pace
            </p>
          </div>
          {/* Return Button */}
          <NavLink to={"/music-school"}>
            <button className="bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] text-[#1A2151] rounded-full px-5 sm:px-6 py-2 font-jetbrains font-semibold hover:shadow-lg hover:shadow-[#E6D28C]/20 hover:translate-y-[-2px] transition-all duration-300">
              Return
            </button>
          </NavLink>
        </motion.div>

        {/* Info Section - Enhanced with better responsive design and animations */}
        <motion.div
          initial="hidden"
          animate={isVisible.info ? "visible" : "hidden"}
          variants={fadeIn}
          className="bg-gradient-to-b from-[#1A2151] to-[#141937] rounded-xl sm:rounded-2xl mt-6 p-6 sm:p-8 md:p-10 border border-[#E6D28C]/20 hover:shadow-[0_10px_30px_rgba(230,210,140,0.15)] transition-all duration-500"
        >
          {/* Instructor - Enhanced with animation */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-[#E6D28C]/20 pb-5">
            <div className="shrink-0 bg-gradient-to-br from-[#E6D28C]/20 to-[#E6D28C]/5 p-4 rounded-full transform hover:scale-105 transition-all duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 14 14"
                className="text-[#E6D28C] animate-float"
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
            <div className="font-jetbrains">
              <h1 className="text-gray-300 text-sm">Instructor</h1>
              <p className="text-white text-xl sm:text-2xl bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent animate-gradient">
                Saya David Paul
              </p>
              <p className="text-[#E6D28C]/70 text-sm mt-1">
                Professional Pianist & Music Educator with 10+ years of
                experience
              </p>
            </div>
          </div>

          {/* Info Cards - Enhanced with better responsive design and hover effects */}
          <div className="font-jetbrains mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-[#E6D28C]/20 pb-6">
            <motion.div
              variants={slideIn}
              className="bg-[#1A2151] p-5 rounded-lg border border-[#E6D28C]/10 hover:border-[#E6D28C]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#E6D28C]/10 transform hover:-translate-y-1"
            >
              <p className="text-[#E6D28C] text-sm font-medium">
                Training Period
              </p>
              <h1 className="text-white text-lg mt-1">3 months</h1>
              <p className="text-gray-400 text-xs mt-2">12 weekly sessions</p>
            </motion.div>
            <motion.div
              variants={slideIn}
              className="bg-[#1A2151] p-5 rounded-lg border border-[#E6D28C]/10 hover:border-[#E6D28C]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#E6D28C]/10 transform hover:-translate-y-1"
              style={{ transitionDelay: "100ms" }}
            >
              <p className="text-[#E6D28C] text-sm font-medium">
                Learning Students
              </p>
              <h1 className="text-white text-lg mt-1">26+</h1>
              <p className="text-gray-400 text-xs mt-2">Active enrollments</p>
            </motion.div>
            <motion.div
              variants={slideIn}
              className="bg-[#1A2151] p-5 rounded-lg border border-[#E6D28C]/10 hover:border-[#E6D28C]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#E6D28C]/10 transform hover:-translate-y-1"
              style={{ transitionDelay: "200ms" }}
            >
              <p className="text-[#E6D28C] text-sm font-medium">
                Certified Students
              </p>
              <h1 className="text-white text-lg mt-1">20+</h1>
              <p className="text-gray-400 text-xs mt-2">
                Completed with certification
              </p>
            </motion.div>
          </div>

          {/* Course Fee - Enhanced with better styling */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div className="font-jetbrains">
              <p className="text-gray-300 text-sm">Course Fee</p>
              <h1 className="text-white text-xl sm:text-2xl bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent animate-gradient">
                300,000 MMK
              </h1>
              <p className="text-[#E6D28C]/70 text-xs mt-1">
                Includes all learning materials and certification
              </p>
            </div>

            {/* Enroll Now - Enhanced with pulse animation */}
            <NavLink to={"/music-school/private-lessons/checkout"}>
              <button className="relative bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] text-[#1A2151] rounded-full px-6 py-3 font-jetbrains font-semibold hover:shadow-lg hover:shadow-[#E6D28C]/30 hover:translate-y-[-2px] transition-all duration-300 group overflow-hidden">
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span className="relative">Enroll Now</span>
              </button>
            </NavLink>
          </div>
        </motion.div>

        {/* About Course - Enhanced with better typography and content */}
        <motion.div
          initial="hidden"
          animate={isVisible.about ? "visible" : "hidden"}
          variants={fadeIn}
          className="bg-gradient-to-b from-[#1A2151] to-[#141937] rounded-xl sm:rounded-2xl mt-6 p-6 sm:p-8 md:p-10 border border-[#E6D28C]/20 hover:shadow-[0_10px_30px_rgba(230,210,140,0.15)] transition-all duration-500"
        >
          <div className="text-white font-jetbrains">
            <h1 className="text-xl sm:text-2xl bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent animate-gradient">
              About Course
            </h1>
            <div className="pt-4 text-gray-300 leading-relaxed space-y-4">
              <p>
                Our Private Lessons program offers personalized one-on-one
                instruction tailored to your unique musical goals and learning
                style. Whether you're a complete beginner or an advanced
                musician looking to refine your skills, our experienced
                instructors will create a customized curriculum just for you.
              </p>
              <p>
                Each lesson is structured to provide a balance of technical
                skill development, music theory, and repertoire building. You'll
                receive immediate feedback and guidance, allowing for rapid
                progress and deeper musical understanding.
              </p>
              <p>
                With flexible scheduling options and a supportive learning
                environment, our private lessons provide the ideal setting for
                musical growth at any age or skill level.
              </p>
            </div>
          </div>
        </motion.div>

        {/* SECTION: Course Highlights */}
        <motion.div
          initial="hidden"
          animate={isVisible.highlights ? "visible" : "hidden"}
          variants={fadeIn}
          className="bg-gradient-to-b from-[#1A2151] to-[#141937] rounded-xl sm:rounded-2xl mt-6 p-6 sm:p-8 md:p-10 border border-[#E6D28C]/20 hover:shadow-[0_10px_30px_rgba(230,210,140,0.15)] transition-all duration-500"
        >
          <div className="text-white font-jetbrains">
            <h1 className="text-xl sm:text-2xl bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent animate-gradient">
              Course Highlights
            </h1>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: 1,
                  title: "Course Highlights",
                },
                {
                  id: 2,
                  title: "No prior experience needed",
                },
                {
                  id: 3,
                  title: "Learn to read music",
                },
                {
                  id: 4,
                  title: "Play songs from day one",
                },
                {
                  id: 5,
                  title: "Develop strong fundamentals",
                },
                {
                  id: 6,
                  title: "Enjoy personal or group sessions",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={slideIn}
                  custom={index}
                  className="flex items-center gap-3 group"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#E6D28C]/20 flex items-center justify-center text-[#E6D28C] group-hover:bg-[#E6D28C]/40 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-gray-300 group-hover:text-[#E6D28C] transition-colors duration-300">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SECTION: What You'll Learn */}
        <motion.div
          initial="hidden"
          animate={isVisible.learning ? "visible" : "hidden"}
          variants={fadeIn}
          className="bg-gradient-to-b from-[#1A2151] to-[#141937] rounded-xl sm:rounded-2xl mt-6 p-6 sm:p-8 md:p-10 border border-[#E6D28C]/20 hover:shadow-[0_10px_30px_rgba(230,210,140,0.15)] transition-all duration-500"
        >
          <div className="text-white font-jetbrains">
            <h1 className="text-xl sm:text-2xl bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent animate-gradient">
              What You'll Learn
            </h1>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: 1,
                  title: "Piano Basics",
                },
                {
                  id: 2,
                  title: "Reading Music",
                },
                {
                  id: 3,
                  title: "Scales & Chords",
                },
                {
                  id: 4,
                  title: "Expressive Playing",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={slideIn}
                  custom={index}
                  className="flex items-center gap-3 group"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#E6D28C]/20 flex items-center justify-center text-[#E6D28C] group-hover:bg-[#E6D28C]/40 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-gray-300 group-hover:text-[#E6D28C] transition-colors duration-300">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SECTION: Course Features */}
        <motion.div
          initial="hidden"
          animate={isVisible.features ? "visible" : "hidden"}
          variants={fadeIn}
          className="bg-gradient-to-b from-[#1A2151] to-[#141937] rounded-xl sm:rounded-2xl mt-6 p-6 sm:p-8 md:p-10 border border-[#E6D28C]/20 hover:shadow-[0_10px_30px_rgba(230,210,140,0.15)] transition-all duration-500"
        >
          <div className="text-white font-jetbrains">
            <h1 className="text-xl sm:text-2xl bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent animate-gradient">
              Course Features
            </h1>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: 1,
                  title: "Personalized feedback",
                },
                {
                  id: 2,
                  title: "Practice tracks & materials",
                },
                {
                  id: 3,
                  title: "Flexible scheduling",
                },
                {
                  id: 4,
                  title: "Performance opportunities",
                },
                {
                  id: 5,
                  title: "In-person, Groups & online options available",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={slideIn}
                  custom={index}
                  className="flex items-center gap-3 group"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#E6D28C]/20 flex items-center justify-center text-[#E6D28C] group-hover:bg-[#E6D28C]/40 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-gray-300 group-hover:text-[#E6D28C] transition-colors duration-300">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* NEW: Who Can Join Section */}
        <motion.div
          initial="hidden"
          animate={isVisible.eligibility ? "visible" : "hidden"}
          variants={fadeIn}
          className="bg-gradient-to-b from-[#1A2151] to-[#141937] rounded-xl sm:rounded-2xl mt-6 p-6 sm:p-8 md:p-10 border border-[#E6D28C]/20 hover:shadow-[0_10px_30px_rgba(230,210,140,0.15)] transition-all duration-500"
        >
          <div className="text-white font-jetbrains">
            <h1 className="text-xl sm:text-2xl bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent animate-gradient">
              Who Can Join
            </h1>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: 1,
                  title: "Kids (Ages 6+)",
                },
                {
                  id: 2,
                  title: "Teens & Adults",
                },
                {
                  id: 3,
                  title: "Seniors welcome!",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={slideIn}
                  custom={index}
                  className="flex items-center gap-3 group"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#E6D28C]/20 flex items-center justify-center text-[#E6D28C] group-hover:bg-[#E6D28C]/40 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-gray-300 group-hover:text-[#E6D28C] transition-colors duration-300">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Course Outline - Enhanced with better animations and styling */}
        <motion.div
          initial="hidden"
          animate={isVisible.outline ? "visible" : "hidden"}
          variants={fadeIn}
          className="bg-gradient-to-b from-[#1A2151] to-[#141937] rounded-xl sm:rounded-2xl mt-6 p-6 sm:p-8 md:p-10 border border-[#E6D28C]/20 hover:shadow-[0_10px_30px_rgba(230,210,140,0.15)] transition-all duration-500"
        >
          <div className="font-jetbrains text-xl sm:text-2xl bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent">
            <h1>Course Outline</h1>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-6 flex flex-col gap-4 font-jetbrains"
          >
            {/* Chapter - 1 */}
            <div className="border border-[#E6D28C]/20 rounded-xl overflow-hidden shadow-md hover:shadow-[0_5px_15px_rgba(230,210,140,0.15)] transition-all duration-300">
              <motion.div
                variants={fadeIn}
                className="cursor-pointer"
                onClick={() => toggleChapter(1)}
              >
                <div
                  className={`bg-gradient-to-r from-[#1A2151] to-[#1A2151]/90 text-lg text-[#E6D28C] rounded-t-xl px-6 py-4 select-none hover:from-[#1A2151]/90 hover:to-[#1A2151]/70 transition-all flex justify-between items-center ${
                    openChapter === 1 ? "border-b border-[#E6D28C]/20" : ""
                  }`}
                >
                  <span className="font-medium">Chapter 1: Fundamentals</span>
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
                    className={`transition-transform duration-300 ${
                      openChapter === 1 ? "transform rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </motion.div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openChapter === 1
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="px-6 py-4 flex flex-col gap-3 bg-gradient-to-b from-[#1A2151]/70 to-[#141937]/70">
                  {[
                    "Introduction to instrument and proper posture",
                    "Basic music notation and rhythm",
                    "First scales and finger exercises",
                    "Simple melodies and practice techniques",
                    "Music theory foundations",
                  ].map((lesson, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      className="flex items-center gap-3 hover:text-[#E6D28C] transition-colors duration-300 text-gray-300 group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 14 14"
                        className="text-[#E6D28C] group-hover:text-[#F0E6B8] transition-colors duration-300"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="7" cy="7" r="6.5" />
                          <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                        </g>
                      </svg>
                      <li>{lesson}</li>
                    </motion.div>
                  ))}
                </ul>
              </div>
            </div>

            {/* Chapter - 2 */}
            <div className="border border-[#E6D28C]/20 rounded-xl overflow-hidden shadow-md hover:shadow-[0_5px_15px_rgba(230,210,140,0.15)] transition-all duration-300">
              <motion.div
                variants={fadeIn}
                className="cursor-pointer"
                onClick={() => toggleChapter(2)}
              >
                <div
                  className={`bg-gradient-to-r from-[#1A2151] to-[#1A2151]/90 text-lg text-[#E6D28C] rounded-t-xl px-6 py-4 select-none hover:from-[#1A2151]/90 hover:to-[#1A2151]/70 transition-all flex justify-between items-center ${
                    openChapter === 2 ? "border-b border-[#E6D28C]/20" : ""
                  }`}
                >
                  <span className="font-medium">
                    Chapter 2: Intermediate Skills
                  </span>
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
                    className={`transition-transform duration-300 ${
                      openChapter === 2 ? "transform rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </motion.div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openChapter === 2
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="px-6 py-4 flex flex-col gap-3 bg-gradient-to-b from-[#1A2151]/70 to-[#141937]/70">
                  {[
                    "Advanced scales and arpeggios",
                    "Sight-reading practice and techniques",
                    "Intermediate repertoire development",
                    "Music theory and harmony",
                    "Performance preparation and techniques",
                  ].map((lesson, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      className="flex items-center gap-3 hover:text-[#E6D28C] transition-colors duration-300 text-gray-300 group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 14 14"
                        className="text-[#E6D28C] group-hover:text-[#F0E6B8] transition-colors duration-300"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="7" cy="7" r="6.5" />
                          <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                        </g>
                      </svg>
                      <li>{lesson}</li>
                    </motion.div>
                  ))}
                </ul>
              </div>
            </div>

            {/* Chapter - 3 (New) */}
            <div className="border border-[#E6D28C]/20 rounded-xl overflow-hidden shadow-md hover:shadow-[0_5px_15px_rgba(230,210,140,0.15)] transition-all duration-300">
              <motion.div
                variants={fadeIn}
                className="cursor-pointer"
                onClick={() => toggleChapter(3)}
              >
                <div
                  className={`bg-gradient-to-r from-[#1A2151] to-[#1A2151]/90 text-lg text-[#E6D28C] rounded-t-xl px-6 py-4 select-none hover:from-[#1A2151]/90 hover:to-[#1A2151]/70 transition-all flex justify-between items-center ${
                    openChapter === 3 ? "border-b border-[#E6D28C]/20" : ""
                  }`}
                >
                  <span className="font-medium">
                    Chapter 3: Advanced Techniques
                  </span>
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
                    className={`transition-transform duration-300 ${
                      openChapter === 3 ? "transform rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </motion.div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openChapter === 3
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="px-6 py-4 flex flex-col gap-3 bg-gradient-to-b from-[#1A2151]/70 to-[#141937]/70">
                  {[
                    "Advanced performance techniques",
                    "Improvisation and creative expression",
                    "Complex repertoire mastery",
                    "Recording and production basics",
                    "Final recital preparation",
                  ].map((lesson, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      className="flex items-center gap-3 hover:text-[#E6D28C] transition-colors duration-300 text-gray-300 group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 14 14"
                        className="text-[#E6D28C] group-hover:text-[#F0E6B8] transition-colors duration-300"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="7" cy="7" r="6.5" />
                          <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                        </g>
                      </svg>
                      <li>{lesson}</li>
                    </motion.div>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
