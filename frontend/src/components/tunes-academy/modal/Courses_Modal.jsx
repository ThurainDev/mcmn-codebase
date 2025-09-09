import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBook,
  FaGraduationCap,
  FaUsers,
  FaStar,
  FaClock,
  FaMusic,
  FaPlay,
  FaCheckCircle,
  FaAward,
  FaChalkboardTeacher,
  FaUserFriends,
  FaUser,
  FaLaptop,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Courses_Modal({ selectedCourse, closeModal }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [isEnrolled, setIsEnrolled] = useState(false);

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

  const handleEnroll = () => {
    setIsEnrolled(true);
    setTimeout(() => {
      if (selectedCourse.checkout) {
        window.location.href = selectedCourse.checkout;
      }
    }, 1000);
  };

  if (!selectedCourse) return null;

  const tabs = [
    { id: "overview", label: "Overview", icon: FaBook },
    // { id: "curriculum", label: "Curriculum", icon: FaGraduationCap },
    { id: "classes", label: "Classes", icon: FaChalkboardTeacher },
    { id: "reviews", label: "Reviews", icon: FaStar },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`text-sm ${
          index < Math.floor(rating || 4.8)
            ? "text-[#E6D28C]"
            : "text-[#E6D28C]/30"
        } transition-colors duration-300`}
      />
    ));
  };

  const getCourseIcon = (title) => {
    switch (title?.toLowerCase()) {
      case "piano courses":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 20H4V4h3v16zm2-8h2v8H9v-8zm4-4h2v12h-2V8zm4-2h2v14h-2V6z" />
          </svg>
        );
      case "guitar courses":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        );
      case "drum courses":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        );
      default:
        return <FaMusic size={60} />;
    }
  };

  const courseTitle = (title) => {
    const validCourses = [
      "Acoustic Guitar Course",
      "Electric Guitar Course",
      "Bass Guitar Course",
      "Ukulele Course",
      "Piano Course",
      "Violin Course",
      "Drum Course",
      "Vocal Course",
      "Music Theory Course",
      "ABRSM Preparation Course",
    ];

    return validCourses.includes(title);
  };

  const tabContent = {
    // SECTION: Overview
    overview: (
      <div className="space-y-6 animate-fadeIn">
        <div className="p-6 rounded-xl bg-gradient-to-br from-[#0F1629]/80 to-[#1A2151]/80 border border-[#E6D28C]/20">
          <h3 className="text-xl font-semibold mb-4 text-[#E6D28C] flex items-center gap-2">
            <FaBook className="text-[#4A90E2]" />
            Course Description
          </h3>
          <p className="text-[#E6D28C]/80 leading-relaxed text-base">
            {selectedCourse.description ||
              "Comprehensive music course designed to enhance your skills and knowledge in this instrument. Our structured approach combines theory with practical application to ensure you develop both technical proficiency and musical expression."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-[#E6D28C]/10 to-[#4A90E2]/10 border border-[#E6D28C]/20">
              <div className="w-10 h-10 bg-[#E6D28C]/20 rounded-full flex items-center justify-center">
                <FaClock className="text-[#E6D28C]" />
              </div>
              <div>
                <p className="text-[#E6D28C] font-medium">Duration</p>
                <p className="text-[#E6D28C]/70 text-sm">
                  {selectedCourse.duration || "6 months"}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-[#4A90E2]/10 to-[#E6D28C]/10 border border-[#4A90E2]/20">
              <div className="w-10 h-10 bg-[#4A90E2]/20 rounded-full flex items-center justify-center">
                <FaUsers className="text-[#4A90E2]" />
              </div>
              <div>
                <p className="text-[#4A90E2] font-medium">Level</p>
                <p className="text-[#4A90E2]/70 text-sm">
                  {selectedCourse.level || "All Levels"}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-[#E6D28C]/10 to-[#4A90E2]/10 border border-[#E6D28C]/20">
              <div className="w-10 h-10 bg-[#E6D28C]/20 rounded-full flex items-center justify-center">
                <FaBook className="text-[#E6D28C]" />
              </div>
              <div>
                <p className="text-[#E6D28C] font-medium">Lessons</p>
                <p className="text-[#E6D28C]/70 text-sm">
                  {selectedCourse.lessons} lessons
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-[#4A90E2]/10 to-[#E6D28C]/10 border border-[#4A90E2]/20">
              <div className="w-10 h-10 bg-[#4A90E2]/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#4A90E2]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[#4A90E2] font-medium">Price</p>
                <p className="text-[#E6D28C] text-sm font-semibold">
                  {selectedCourse.fees?.toLocaleString()} MMK
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    // SECTION: Curriculum
    curriculum: (
      <div className="space-y-6 animate-fadeIn">
        <div className="p-6 rounded-xl bg-gradient-to-br from-[#1A2151]/80 to-[#0F1629]/80 border border-[#4A90E2]/20">
          <h3 className="text-xl font-semibold mb-4 text-[#4A90E2] flex items-center gap-2">
            <FaGraduationCap className="text-[#E6D28C]" />
            Course Curriculum
          </h3>
          <div className="space-y-4">
            {Array.from(
              { length: selectedCourse.chapters || 6 },
              (_, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-lg bg-gradient-to-r from-[#0F1629]/80 to-[#1A2151]/80 border border-[#E6D28C]/20 hover:border-[#4A90E2]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,144,226,0.2)] transform hover:translate-y-[-2px]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#E6D28C]/20 to-[#4A90E2]/20 rounded-full flex items-center justify-center text-[#E6D28C] font-semibold text-sm group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-[#E6D28C] font-medium group-hover:text-[#4A90E2] transition-colors duration-300">
                          Chapter {index + 1}
                        </h4>
                        <p className="text-[#E6D28C]/60 text-sm">
                          Fundamentals and Techniques
                        </p>
                      </div>
                    </div>
                    <div className="text-[#E6D28C]/60 text-sm flex items-center gap-1">
                      <FaPlay size={10} />
                      {Math.floor(
                        (selectedCourse.lessons || 30) /
                          (selectedCourse.chapters || 6)
                      )}{" "}
                      lessons
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    // SECTION: Classes
    classes: (
      <div className="space-y-6 animate-fadeIn">
        <div className="p-6 rounded-xl bg-gradient-to-br from-[#0F1629]/80 to-[#1A2151]/80 border border-[#E6D28C]/20">
          <h3 className="text-xl font-semibold mb-6 text-[#E6D28C] flex items-center gap-2">
            <FaChalkboardTeacher className="text-[#4A90E2]" />
            Available Classes
          </h3>

          {/* SECTION: Group Classes */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-[#4A90E2] mb-4 flex items-center gap-2">
              <FaUserFriends className="text-[#E6D28C]" />
              Group Classes
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courseTitle(selectedCourse.title) &&
                selectedCourse.classes?.length > 0 &&
                selectedCourse.classes.map((classItem, index) => (
                  <>
                    {/* Group On-site */}
                    {classItem.id === 1 && (
                      <div className="p-4 rounded-lg bg-gradient-to-r from-[#E6D28C]/10 to-[#4A90E2]/10 border border-[#E6D28C]/20 hover:border-[#4A90E2]/40 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#E6D28C]/20 rounded-full flex items-center justify-center">
                            <FaMapMarkerAlt className="text-[#E6D28C]" />
                          </div>
                          <div>
                            <h5 className="text-[#E6D28C] font-medium">
                              {classItem.name}
                            </h5>
                            <p className="text-[#E6D28C]/70 text-xs">
                              {classItem.description}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[#E6D28C]/80">Duration:</span>
                            <span className="text-[#4A90E2] font-medium">
                              {classItem.duration}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#E6D28C]/80">
                              Frequency:
                            </span>
                            <span className="text-[#4A90E2] font-medium">
                              2 sessions/week
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#E6D28C]/80">
                              Group Size:
                            </span>
                            <span className="text-[#4A90E2] font-medium">
                              4-6 students
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#E6D28C]/80">Price:</span>
                            <span className="text-[#E6D28C] font-semibold">
                              {classItem.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Group Online */}
                    {classItem.id === 2 && (
                      <div className="p-4 rounded-lg bg-gradient-to-r from-[#4A90E2]/10 to-[#E6D28C]/10 border border-[#4A90E2]/20 hover:border-[#E6D28C]/40 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#4A90E2]/20 rounded-full flex items-center justify-center">
                            <FaLaptop className="text-[#4A90E2]" />
                          </div>
                          <div>
                            <h5 className="text-[#4A90E2] font-medium">
                              {classItem.name}
                            </h5>
                            <p className="text-[#4A90E2]/70 text-xs">
                              {classItem.description}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[#E6D28C]/80">Duration:</span>
                            <span className="text-[#E6D28C] font-medium">
                              {classItem.duration}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#E6D28C]/80">
                              Frequency:
                            </span>
                            <span className="text-[#E6D28C] font-medium">
                              3 sessions/week
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#E6D28C]/80">
                              Group Size:
                            </span>
                            <span className="text-[#E6D28C] font-medium">
                              6-8 students
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#E6D28C]/80">Price:</span>
                            <span className="text-[#4A90E2] font-semibold">
                              {classItem.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ))}
            </div>
          </div>

          {/* SECTION: Individual Classes */}
          <div>
            <h4 className="text-lg font-semibold text-[#4A90E2] mb-4 flex items-center gap-2">
              <FaUser className="text-[#E6D28C]" />
              Individual Classes
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courseTitle(selectedCourse.title) &&
                selectedCourse.classes?.length > 0 &&
                selectedCourse.classes.map((classItem, index) => (
                  <>
                    {/* Individual On-site */}
                    {classItem.id === 3 && (
                      <div className="p-4 rounded-lg bg-gradient-to-r from-[#E6D28C]/10 to-[#4A90E2]/10 border border-[#E6D28C]/20 hover:border-[#4A90E2]/40 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#E6D28C]/20 rounded-full flex items-center justify-center">
                            <FaMapMarkerAlt className="text-[#E6D28C]" />
                          </div>
                          <div>
                            <h5 className="text-[#E6D28C] font-medium">
                              {classItem.name}
                            </h5>
                            <p className="text-[#E6D28C]/70 text-xs">
                              {classItem.description}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[#E6D28C]/80">Duration:</span>
                            <span className="text-[#4A90E2] font-medium">
                              {classItem.duration}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#E6D28C]/80">
                              Frequency:
                            </span>
                            <span className="text-[#4A90E2] font-medium">
                              2 sessions/week
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#E6D28C]/80">
                              Instructor:
                            </span>
                            <span className="text-[#4A90E2] font-medium">
                              Dedicated teacher
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#E6D28C]/80">Price:</span>
                            <span className="text-[#E6D28C] font-semibold">
                              {classItem.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Individual Online */}
                    {classItem.id === 4 && (
                      <div className="p-4 rounded-lg bg-gradient-to-r from-[#4A90E2]/10 to-[#E6D28C]/10 border border-[#4A90E2]/20 hover:border-[#E6D28C]/40 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#4A90E2]/20 rounded-full flex items-center justify-center">
                            <FaLaptop className="text-[#4A90E2]" />
                          </div>
                          <div>
                            <h5 className="text-[#4A90E2] font-medium">
                              {classItem.name}
                            </h5>
                            <p className="text-[#4A90E2]/70 text-xs">
                              {classItem.description}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[#E6D28C]/80">Duration:</span>
                            <span className="text-[#E6D28C] font-medium">
                              {classItem.duration}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#E6D28C]/80">
                              Frequency:
                            </span>
                            <span className="text-[#E6D28C] font-medium">
                              2-3 sessions/week
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#E6D28C]/80">
                              Instructor:
                            </span>
                            <span className="text-[#E6D28C] font-medium">
                              Dedicated teacher
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#E6D28C]/80">Price:</span>
                            <span className="text-[#4A90E2] font-semibold">
                              {classItem.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ))}
            </div>
          </div>

          {/* Additional Information */}
          {/* <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-[#1A2151]/80 to-[#0F1629]/80 border border-[#4A90E2]/20">
            <h5 className="text-[#4A90E2] font-medium mb-3 flex items-center gap-2">
              <FaClock className="text-[#E6D28C]" />
              Additional Information
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-[#E6D28C]/80 mb-1">
                  • Free trial lesson available
                </p>
                <p className="text-[#E6D28C]/80 mb-1">
                  • Flexible scheduling options
                </p>
                <p className="text-[#E6D28C]/80">• All skill levels welcome</p>
              </div>
              <div>
                <p className="text-[#E6D28C]/80 mb-1">
                  • Instruments provided for on-site classes
                </p>
                <p className="text-[#E6D28C]/80 mb-1">
                  • Recording sessions available
                </p>
                <p className="text-[#E6D28C]/80">• Performance opportunities</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    ),
    // SECTION: Review
    reviews: (
      <div className="space-y-6 animate-fadeIn">
        <div className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-br from-[#0F1629]/80 to-[#1A2151]/80 border border-[#E6D28C]/20">
          <h3 className="text-xl font-semibold text-[#E6D28C] flex items-center gap-2">
            <FaStar className="text-[#4A90E2]" />
            Student Reviews
          </h3>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {renderStars(selectedCourse.rating || 4.8)}
            </div>
            <span className="text-[#E6D28C] font-semibold">
              {selectedCourse.rating || 4.8}
            </span>
            <span className="text-[#E6D28C]/60">
              ({selectedCourse.students} reviews)
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {[1, 2, 3].map((review) => (
            <div
              key={review}
              className="group p-5 rounded-xl bg-gradient-to-br from-[#1A2151]/80 to-[#0F1629]/80 border border-[#E6D28C]/20 hover:border-[#4A90E2]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,144,226,0.2)] transform hover:translate-y-[-2px]"
              style={{ animationDelay: `${review * 0.1}s` }}
            >
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E6D28C] to-[#4A90E2] rounded-full flex items-center justify-center text-black font-semibold group-hover:scale-110 transition-transform duration-300">
                  {String.fromCharCode(64 + review)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[#E6D28C] font-medium group-hover:text-[#4A90E2] transition-colors duration-300">
                      Student {review}
                    </h4>
                    <div className="flex">{renderStars(5)}</div>
                  </div>
                  <p className="text-[#E6D28C]/70 text-sm leading-relaxed">
                    "Excellent course! The instructor is very knowledgeable and
                    the lessons are well-structured. I've learned so much in
                    just a few weeks. The teaching methodology is outstanding."
                  </p>
                  <p className="text-[#E6D28C]/50 text-xs mt-2">2 weeks ago</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  };

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
                Course Details
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
                {/* Left Column - Course Image and Basic Info */}
                <div className="lg:w-1/3 flex flex-col items-center">
                  {/* Enhanced course icon */}
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#E6D28C] via-[#4A90E2] to-[#E6D28C] rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-gradient"></div>
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-[#1A2151] to-[#0F1629] p-8 border-2 border-[#E6D28C]/40 overflow-hidden transition-all duration-500 group-hover:border-[#4A90E2]/60 group-hover:scale-105 flex items-center justify-center">
                      <div className="text-[#E6D28C] group-hover:text-[#4A90E2] transition-all duration-500 group-hover:scale-110">
                        {getCourseIcon(selectedCourse.title)}
                      </div>
                    </div>
                  </div>

                  {/* Course name and details with enhanced styling */}
                  <div className="text-center mt-6 space-y-2">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#E6D28C] via-[#F0E6B8] to-[#4A90E2] bg-clip-text text-transparent animate-gradient">
                      {selectedCourse.title || "Course Name"}
                    </h2>
                    {/* <div className="flex items-center justify-center gap-2">
                      <p className="text-[#E6D28C]/90 text-lg font-medium">
                        {selectedCourse.instructor || "Professional Instructor"}
                      </p>
                    </div> */}

                    {/* Rating display */}
                    {/* <div className="flex items-center justify-center gap-1 mt-3">
                      {renderStars(selectedCourse.rating || 4.8)}
                      <span className="text-[#E6D28C]/70 text-sm ml-2">
                        ({selectedCourse.rating || "4.8"})
                      </span>
                    </div> */}
                  </div>

                  {/* Quick stats */}
                  {/* <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-sm">
                    <div className="text-center p-3 rounded-xl bg-gradient-to-br from-[#E6D28C]/10 to-[#4A90E2]/10 border border-[#E6D28C]/20">
                      <div className="text-2xl font-bold text-[#E6D28C]">
                        {selectedCourse.chapters || "6"}
                      </div>
                      <div className="text-xs text-[#E6D28C]/70">Chapters</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-gradient-to-br from-[#4A90E2]/10 to-[#E6D28C]/10 border border-[#4A90E2]/20">
                      <div className="text-2xl font-bold text-[#4A90E2]">
                        {selectedCourse.students || "150+"}
                      </div>
                      <div className="text-xs text-[#4A90E2]/70">
                        Students Enrolled
                      </div>
                    </div>
                  </div> */}
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
                  <div className="space-y-6">{tabContent[activeTab]}</div>

                  {/* Action Buttons */}
                  {/* <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-[#E6D28C]/20">
                    <button
                      onClick={handleEnroll}
                      disabled={isEnrolled}
                      className={`flex-1 group relative px-6 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                        isEnrolled
                          ? "bg-green-600 text-white cursor-not-allowed"
                          : "bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black hover:shadow-[0_0_30px_rgba(230,210,140,0.4)]"
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isEnrolled ? (
                          <>
                            <FaCheckCircle />
                            Enrolled Successfully!
                          </>
                        ) : (
                          <>
                            <FaGraduationCap />
                            Enroll Now
                          </>
                        )}
                      </span>
                      {!isEnrolled && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#E6D28C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )}
                    </button>

                    {selectedCourse.link && (
                      <NavLink
                        to={selectedCourse.link}
                        className="flex-1 group relative px-6 py-4 bg-transparent border-2 border-[#4A90E2] text-[#4A90E2] rounded-xl font-bold transition-all duration-300 hover:bg-[#4A90E2] hover:text-white transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <FaBook />
                        Learn More
                      </NavLink>
                    )}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(230, 210, 140, 0.3) transparent;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(230, 210, 140, 0.3);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(230, 210, 140, 0.5);
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
