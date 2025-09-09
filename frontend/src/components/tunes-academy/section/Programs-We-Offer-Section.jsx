import { useState } from "react";
import { NavLink } from "react-router-dom";
// modal
import Courses_Modal from "../modal/Courses_Modal";

const courses = [
  // Acoutstic Guitar Course
  {
    id: 1,
    title: "Acoustic Guitar Course",
    classes: [
      {
        id: 1,
        name: "On-site Group Class",
        description: "In-person learning with peers",
        duration: "3 months",
        price: "100,000 MMK",
      },
      {
        id: 2,
        name: "Online Group Class",
        description: "Virtual learning with peers",
        duration: "3 months",
        price: "70,000 MMK",
      },
      {
        id: 3,
        name: "On-site Individual Class",
        description: "One-on-one personalized instruction",
        duration: "3 months",
        price: "220,000 MMK",
      },
      {
        id: 4,
        name: "Online Individual Class",
        description: "Virtual one-on-one personalized instruction",
        duration: "3 months",
        price: "200,000 MMK",
      },
    ],
  },
  // Electric Guitar Course
  {
    id: 2,
    title: "Electric Guitar Course",
    classes: [
      {
        id: 1,
        name: "On-site Group Class",
        description: "In-person learning with peers",
        duration: "3 months",
        price: "110,000 MMK",
      },
      {
        id: 2,
        name: "Online Group Class",
        description: "Virtual learning with peers",
        duration: "3 months",
        price: "73,000 MMK",
      },
      {
        id: 3,
        name: "On-site Individual Class",
        description: "One-on-one personalized instruction",
        duration: "3 months",
        price: "280,000 MMK",
      },
    ],
  },
  // Bass Guitar Course
  {
    id: 3,
    title: "Bass Guitar Course",
    classes: [
      {
        id: 1,
        name: "On-site Group Class",
        description: "In-person learning with peers",
        duration: "3 months",
        price: "100,000 MMK",
      },
      {
        id: 2,
        name: "Online Group Class",
        description: "Virtual learning with peers",
        duration: "3 months",
        price: "80,000 MMK",
      },
      {
        id: 3,
        name: "On-site Individual Class",
        description: "One-on-one personalized instruction",
        duration: "3 months",
        price: "250,000 MMK",
      },
      {
        id: 4,
        name: "Online Individual Class",
        description: "Virtual one-on-one personalized instruction",
        duration: "3 months",
        price: "200,000 MMK",
      },
    ],
  },
  // Ukulele Course
  {
    id: 4,
    title: "Ukulele Course",
    classes: [
      {
        id: 1,
        name: "On-site Group Class",
        description: "In-person learning with peers",
        duration: "3 months",
        price: "80,000 MMK",
      },
      {
        id: 2,
        name: "Online Group Class",
        description: "Virtual learning with peers",
        duration: "3 months",
        price: "60,000 MMK",
      },
      {
        id: 3,
        name: "On-site Individual Class",
        description: "One-on-one personalized instruction",
        duration: "3 months",
        price: "200,000 MMK",
      },
      {
        id: 4,
        name: "Online Individual Class",
        description: "Virtual one-on-one personalized instruction",
        duration: "3 months",
        price: "200,000 MMK",
      },
    ],
  },
  // Piano Course
  {
    id: 5,
    title: "Piano Course",
    chapters: 6,
    lessons: 30,
    fees: 300000,
    students: 20,
    checkout: "/music-school/private-lessons/checkout",
    description:
      "Master the art of piano with comprehensive lessons covering classical and contemporary styles.",
    duration: "3 months",
    level: "Beginner to Advanced",
    instructor: "Sarah Johnson",
    rating: 4.8,
    image: "/images/piano-course.jpg",
    classes: [
      {
        id: 1,
        name: "On-site Group Class",
        description: "In-person learning with peers",
        duration: "3 months",
        price: "110,000 MMK",
      },
      {
        id: 2,
        name: "Online Group Class",
        description: "Virtual learning with peers",
        duration: "3 months",
        price: "80,000 MMK",
      },

      {
        id: 3,
        name: "On-site Individual Class",
        description: "One-on-one personalized instruction",
        duration: "3 months",
        price: "250,000",
      },
      {
        id: 4,
        name: "Online Individual Class",
        description: "Virtual one-on-one personalized instruction",
        duration: "3 months",
        price: "250,000",
      },
    ],
  },
  // Violin Course
  {
    id: 6,
    title: "Violin Course",
    chapters: 5,
    lessons: 25,
    fees: 250000,
    students: 15,
    checkout: "/music-school/group-classes/checkout",
    description:
      "Learn acoustic and electric guitar techniques from basic chords to advanced solos.",
    duration: "3 months",
    level: "Beginner to Intermediate",
    instructor: "Mike Rodriguez",
    rating: 4.7,
    image: "/images/guitar-course.jpg",
    classes: [
      {
        id: 1,
        name: "On-site Group Class",
        description: "In-person learning with peers",
        duration: "3 months",
        price: "80,000 MMK",
      },
      {
        id: 2,
        name: "Online Group Class",
        description: "Virtual learning with peers",
        duration: "3 months",
        price: "80,000 MMK",
      },
      {
        id: 3,
        name: "On-site Individual Class",
        description: "One-on-one personalized instruction",
        duration: "3 months",
        price: "200,000 MMK",
      },
      {
        id: 4,
        name: "Online Individual Class",
        description: "Virtual one-on-one personalized instruction",
        duration: "3 months",
        price: "200,000 MMK",
      },
    ],
  },
  // Drum Course
  {
    id: 7,
    title: "Drum Course",
    chapters: 4,
    lessons: 20,
    fees: 200000,
    students: 10,
    checkout: "/music-school/online-classes/checkout",
    description:
      "Develop rhythm and coordination with comprehensive drumming techniques.",
    duration: "4 months",
    level: "Beginner to Intermediate",
    instructor: "David Chen",
    rating: 4.6,
    image: "/images/drum-course.jpg",
    classes: [
      {
        id: 1,
        name: "On-site Group Class",
        description: "In-person learning with peers",
        duration: "4 months",
        price: "110,000 MMK",
      },
      {
        id: 3,
        name: "On-site Individual Class",
        description: "One-on-one personalized instruction",
        duration: "4 months",
        price: "250,000 MMK",
      },
    ],
  },
  // Vocal Course
  {
    id: 8,
    title: "Vocal Course",
    chapters: 3,
    lessons: 15,
    fees: 150000,
    students: 5,
    checkout: "/music-school/summer-camps/checkout",
    description:
      "Explore the beautiful world of violin with classical and modern techniques.",
    duration: "3 months",
    level: "Beginner",
    instructor: "Emily Watson",
    rating: 4.9,
    image: "/images/violin-course.jpg",
    classes: [
      {
        id: 1,
        name: "On-site Group Class",
        description: "In-person learning with peers",
        duration: "2 months",
        price: "200,000 MMK",
      },
      {
        id: 2,
        name: "Online Group Class",
        description: "Virtual learning with peers",
        duration: "2 months",
        price: "240,000 MMK",
      },
      {
        id: 3,
        name: "On-site Individual Class",
        description: "One-on-one personalized instruction",
        duration: "2 months",
        price: "250,000 MMK",
      },
      {
        id: 4,
        name: "Online Individual Class",
        description: "Virtual one-on-one personalized instruction",
        duration: "3 months",
        price: "400,000 MMK",
      },
    ],
  },
  // Music Theory Course
  {
    id: 9,
    title: "Music Theory Course",
    chapters: 4,
    lessons: 20,
    fees: 180000,
    students: 25,
    checkout: "/music-school/vocal-classes/checkout",
    description:
      "Develop your voice with professional vocal training and breathing techniques.",
    duration: "4 months",
    level: "All Levels",
    instructor: "Lisa Thompson",
    rating: 4.8,
    image: "/images/vocal-course.jpg",
    classes: [
      {
        id: 1,
        name: "On-site Group Class",
        description: "In-person learning with peers",
        duration: "3 months",
        price: "120,000 MMK",
      },
      {
        id: 2,
        name: "Online Group Class",
        description: "Virtual learning with peers",
        duration: "3 months",
        price: "100,000 MMK",
      },
    ],
  },
  // ABRSM Preparation Course
  {
    id: 10,
    title: "ABRSM Preparation Course",
    chapters: 5,
    lessons: 25,
    fees: 120000,
    students: 30,
    checkout: "/music-school/theory-classes/checkout",
    description:
      "Understand the fundamentals of music theory, harmony, and composition.",
    duration: "5 months",
    level: "All Levels",
    instructor: "Robert Kim",
    rating: 4.7,
    image: "/images/theory-course.jpg",
    classes: [
      {
        id: 1,
        name: "On-site Group Class",
        description: "In-person learning with peers",
        duration: "1 Hour",
        price: "60,000 MMK",
      },
      {
        id: 2,
        name: "Online Group Class",
        description: "Virtual learning with peers",
        duration: "1 Hour",
        price: "60,000 MMK",
      },
      {
        id: 3,
        name: "On-site Individual Class",
        description: "One-on-one personalized instruction",
        duration: "3 months",
        price: "60,000 MMK (Per hour)",
      },
      {
        id: 4,
        name: "Online Individual Class",
        description: "Virtual one-on-one personalized instruction",
        duration: "3 months",
        price: "60,000 MMK (Per hour)",
      },
    ],
  },
];

export default function Programs_We_Offer_Section() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };
  return (
    <>
      <div className="scroll-animate opacity-0 translate-y-10">
        <div className="bg-gradient-to-b from-[#1A2151] via-[#1A2151] to-[#141937] rounded-3xl p-5 sm:p-8 border border-[#E6D28C]/20 shadow-[0_0_10px_rgba(230,210,140,0.15)] transition-all duration-500">
          <div className="border-[#E6D28C] border-t-2">
            {/* Hero Section */}
            <div className="m-3 md:m-5 flex flex-col items-center text-center">
              <p className="text-[#E6D28C] text-sm md:text-base tracking-wider drop-shadow-md">
                COURSES WE OFFER
              </p>
              <h1 className="text-white text-2xl md:text-3xl pt-2 font-bold bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent drop-shadow-lg">
                Advance your skills at our music school
              </h1>
            </div>
            {/* Programs */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {courses.length &&
                courses.map((course, index) => (
                  <div
                    key={index}
                    onClick={() => handleCourseClick(course)}
                    className="bg-[#1A2151] rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 flex flex-col items-center text-center group hover:scale-105 transition-all duration-300 border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-lg hover:shadow-[#E6D28C]/10 cursor-pointer"
                  >
                    <div className="text-[#E6D28C] group-hover:scale-110 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="sm:w-10 sm:h-10"
                      >
                        <path d="M13.75 2a.75.75 0 0 0-1.5 0v12.536A4.75 4.75 0 1 0 13.75 18V6.243A6.74 6.74 0 0 0 19 8.75a.75.75 0 0 0 0-1.5A5.25 5.25 0 0 1 13.75 2" />
                      </svg>
                    </div>
                    {/* Title */}
                    <h1 className="text-white text-sm sm:text-xl md:text-2xl mt-2 sm:mt-3 font-semibold group-hover:text-[#E6D28C] transition-colors duration-300 leading-tight">
                      {course.title}
                    </h1>
                    {/* Chapters */}
                    {/* <p className="text-gray-300 mt-1 sm:mt-3 text-xs sm:text-sm md:text-base">
                      Chapters - {course.chapters}
                    </p> */}
                    {/* Lessons */}
                    {/* <p className="text-gray-300 mt-1 sm:mt-3 text-xs sm:text-sm md:text-base">
                      Lessons - {course.lessons}
                    </p> */}
                    {/* Fees */}
                    {/* <p className="text-gray-300 mt-1 sm:mt-3 text-xs sm:text-sm md:text-base">
                      Fees: {course.fees} MMK
                    </p> */}
                    {/* Students */}
                    {/* <div className="flex justify-center items-center space-x-1 sm:space-x-2 mt-2 sm:mt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 512 512"
                        className="text-[#E6D28C] sm:w-5 sm:h-5"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="m283.735 52.918l31.295 26.614a42.7 42.7 0 0 0 24.213 10.03l40.947 3.309c20.86 1.686 37.42 18.246 39.106 39.106l3.31 40.947a42.7 42.7 0 0 0 10.029 24.213l26.614 31.294c13.557 15.942 13.557 39.362 0 55.304l-26.614 31.295a42.7 42.7 0 0 0-10.03 24.213l-3.31 40.947c-1.685 20.86-18.246 37.42-39.105 39.106l-40.947 3.31a42.7 42.7 0 0 0-24.213 10.029l-31.295 26.614c-15.942 13.557-39.362 13.557-55.304 0l-31.294-26.614a42.7 42.7 0 0 0-24.213-10.03l-40.947-3.31c-20.86-1.685-37.42-18.246-39.106-39.105l-3.31-40.947a42.7 42.7 0 0 0-10.03-24.213l-26.613-31.295c-13.557-15.942-13.557-39.362 0-55.304l26.614-31.294a42.7 42.7 0 0 0 10.03-24.213l3.309-40.947c1.686-20.86 18.246-37.42 39.106-39.106l40.947-3.31a42.7 42.7 0 0 0 24.213-10.03l31.294-26.613c15.942-13.557 39.362-13.557 55.304 0m52.6 126.863L234.667 282.002l-48.916-48.916l-30.167 30.166l79.083 79.084l131.836-132.388z"
                        />
                      </svg>
                      <p className="text-gray-300 text-xs sm:text-sm md:text-sm">
                        {course.students} students certified
                      </p>
                    </div> */}
                    {/* Enroll Now */}
                    {/* <div className="mt-5">
                        <NavLink to={course.checkout}>
                          <button className="bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] text-[#1A2151] rounded-full px-4 md:px-6 py-2 font-jetbrains font-semibold text-sm md:text-base hover:shadow-lg hover:shadow-[#E6D28C]/20 hover:translate-y-[-2px] transition-all duration-300">
                            Enroll Now
                          </button>
                        </NavLink>
                      </div> */}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Courses Modal */}
      {selectedCourse && (
        <Courses_Modal
          selectedCourse={selectedCourse}
          closeModal={() => setSelectedCourse(null)}
        />
      )}
    </>
  );
}
