import React, { useState } from "react";
// modal
import Instructors_Modal from "../modal/Instructors_Modal";
// images
import Phyo_Titus from "../../../assets/music-school/instructors/Phyo_Titus.jpg";
import Simon_Wah from "../../../assets/music-school/instructors/Simon_Wah.jpg";
import Shalom from "../../../assets/music-school/instructors/Shalom.jpg";
import M_Zaw_Rain from "../../../assets/music-school/instructors/M_Zaw_Rain.jpg";
import Htoo_Lay from "../../../assets/music-school/instructors/Htoo_Lay.jpg";
import Phillip from "../../../assets/music-school/instructors/Phillip.jpg";
import Yang_Man_Man from "../../../assets/music-school/instructors/Yang_Man_Man.jpg";
import June_Nine from "../../../assets/music-school/instructors/June_Nine.jpg";
import Purity from "../../../assets/music-school/instructors/Purity.jpg";
import Samson from "../../../assets/music-school/instructors/Samson.jpg";
import John_Thang_Lian from "../../../assets/music-school/instructors/John_Thang_Lian.jpg";
import Patrick from "../../../assets/music-school/instructors/Patrick.jpg";
import Victor_and_Eh_Nyaw from "../../../assets/music-school/instructors/Victor_&_Eh_Nyaw.jpg";

const instructors = [
  // Phyo Titus
  {
    id: 1,
    name: "Phyo Titus",
    title: "Bass Instructor",
    bio: "15+ years of experience teaching classical and contemporary piano techniques.",
    classes: [
      {
        id: 1,
        name: "Bass Class",
        class: "On-Site Class",
        schedule: [
          {
            day: "Monday",
            time: "5:00 PM - 6:00 PM",
          },
          {
            day: "Tuesday",
            time: "5:00 PM - 6:00 PM",
          },
          {
            day: "Thursday",
            time: "5:00 PM - 6:00 PM",
          },
          {
            day: "Friday",
            time: "5:00 PM - 6:00 PM",
          },
        ],
      },
    ],
    image: Phyo_Titus,
  },
  // Simon Wah
  {
    id: 2,
    name: "Simon Wah",
    title: "Drum Instructor",
    bio: "Professional vocalist with expertise in multiple genres and vocal techniques.",
    classes: [
      {
        id: 1,
        name: "Drum Class",
        class: "On-Site Class",
        schedule: [
          {
            day: "Tuesday",
            time: [
              {
                time_1: "1:00 PM - 2:00 PM",
              },
              {
                time_2: "2:00 PM - 3:00 PM",
              },
            ],
          },
          {
            day: "Saturday",
            time: [
              {
                time_1: "11:00 AM - 12:00 PM",
              },
              {
                time_2: "12:00 PM - 1:00 PM",
              },
            ],
          },
        ],
      },
    ],
    image: Simon_Wah,
  },
  // Shalom
  {
    id: 3,
    name: "Shalom",
    title: "Piano Instructor",
    classes: [
      {
        id: 1,
        name: "Piano Class",
        class: "On-Site Class",
        schedule: [
          {
            day: "Tuesday",
            time: [
              {
                time_1: "5:00 PM - 6:00 PM",
              },
              {
                time_2: "6:00 PM - 7:00 PM",
              },
            ],
          },
          {
            day: "Wednesday",
            time: [
              {
                time_1: "5:00 PM - 6:00 PM",
              },
              {
                time_2: "6:00 PM - 7:00 PM",
              },
            ],
          },
          {
            day: "Friday",
            time: [
              {
                time_1: "5:00 PM - 6:00 PM",
              },
              {
                time_2: "6:00 PM - 7:00 PM",
              },
            ],
          },
          {
            day: "Saturday",
            time: [
              {
                time_1: "9:00 AM - 10:00 AM",
              },
              {
                time_2: "10:00 AM - 11:00 AM",
              },
            ],
          },
        ],
      },
    ],
    image: Shalom,
  },
  // M Zaw Rain
  {
    id: 4,
    name: "M Zaw Rain",
    title: "Vocal Instructor",
    bio: "Versatile guitarist specializing in acoustic, electric, and bass guitar instruction.",
    classes: [
      {
        id: 1,
        name: "Vocal Class",
        class: "On-Site Class",
        schedule: [
          {
            day: "Monday",
            time: [
              {
                time_1: "9:00 AM - 10:00 AM",
              },
              {
                time_2: "10:00 AM - 11:00 AM",
              },
              {
                time_3: "1:00 PM - 2:00 PM",
              },
              {
                time_4: "2:00 PM - 3:00 PM",
              },
            ],
          },
          {
            day: "Friday",
            time: [
              {
                time_1: "9:00 AM - 10:00 AM",
              },
              {
                time_2: "10:00 AM - 11:00 AM",
              },
            ],
          },
          {
            day: "Saturday",
            time: [
              {
                time_1: "9:00 AM - 10:00 AM",
              },
              {
                time_2: "10:00 AM - 11:00 AM",
              },
            ],
          },
        ],
      },
    ],
    image: M_Zaw_Rain,
  },
  // Htoo Lay
  {
    id: 5,
    name: "Htoo Lay",
    title: "Violin Instructor",
    bio: "Classically trained violinist with experience teaching students of all ages and levels.",
    classes: [
      {
        id: 1,
        name: "Violin Class",
        class: "On-Site Class",
        schedule: [
          {
            day: "Monday",
            time: [
              {
                time_1: "11:00 AM - 12:00 PM",
              },
              {
                time_2: "1:00 PM - 2:00 PM",
              },
            ],
          },
          {
            day: "Wednesday",
            time: [
              {
                time_1: "11:00 AM - 12:00 PM",
              },
              {
                time_2: "1:00 PM - 2:00 PM",
              },
            ],
          },
        ],
      },
    ],
    image: Htoo_Lay,
  },
  // Phillip
  {
    id: 6,
    name: "Phillip",
    title: "Acoustic Guitar & Electric Guitar & Ukulele Instructor",
    classes: [
      {
        id: 1,
        name: "Acoustic Guitar",
        class: "On-Site Class",
        schedule: [
          {
            day: "Monday",
            time: "9:00 AM - 10:00 AM",
          },
          {
            day: "Wednesday",
            time: "9:00 AM - 10:00 AM",
          },
        ],
      },
      {
        id: 2,
        name: "Ukulele",
        class: "On-Site Class",
        schedule: [
          {
            day: "Monday",
            time: "11:00 AM - 12:00 PM",
          },
          {
            day: "Wednesday",
            time: "11:00 AM - 12:00 PM",
          },
        ],
      },
      {
        id: 3,
        name: "Electric Guitar",
        class: "On-Site Class",
        schedule: [
          {
            day: "Monday",
            time: "1:00 PM - 2:00 PM",
          },
          {
            day: "Wednesday",
            time: "1:00 PM - 2:00 PM",
          },
        ],
      },
    ],
    image: Phillip,
  },
  // Yang Man Man
  {
    id: 7,
    name: "Yang Man Man",
    title: "Piano & Music Theory Instructor",
    classes: [
      {
        id: 1,
        name: "Piano Class",
        class: "On-Site Class",
        schedule: [
          {
            day: "Monday",
            time: "4:00 PM - 5:00 PM",
          },
          {
            day: "Tuesday",
            time: "10:00 AM - 11:00 AM",
          },
          {
            day: "Wednesday",
            time: [
              {
                time_1: "10:00 AM - 11:00 AM",
              },
              {
                time_2: "4:00 PM - 5:00 PM",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Music Theory",
        class: "On-Site Class",
        schedule: [
          {
            day: "Thursday",
            time: "10:00 AM - 11:00 AM",
          },
          {
            day: "Friday",
            time: "10:00 AM - 11:00 AM",
          },
        ],
      },
      {
        id: 3,
        name: "Music Theory",
        class: "Online Class",
        schedule: [
          {
            day: "Monday",
            time: "11:00 AM - 12:00 PM",
          },
          {
            day: "Wednesday",
            time: "8:00 PM - 9:00 PM",
          },
        ],
      },
    ],
    image: Yang_Man_Man,
  },
  // June Nine
  {
    id: 8,
    name: "June Nine",
    title: "Violin Instructor",
    classes: [
      {
        id: 1,
        name: "Violin Class",
        class: "Online Class",
        schedule: [
          {
            day: "Monday",
            time: [
              {
                time_1: "9:30 AM - 10:30 AM",
              },
              {
                time_2: "4:30 PM - 5:30 PM",
              },
            ],
          },
          {
            day: "Thursday",
            time: [
              {
                time_1: "9:30 AM - 10:30 AM",
              },
              {
                time_2: "4:30 PM - 5:30 PM",
              },
            ],
          },
        ],
      },
    ],
    image: June_Nine,
  },
  // Purity
  {
    id: 9,
    name: "Purity",
    title: "Vocal Instructor",
    classes: [
      {
        id: 1,
        name: "Vocal Class",
        class: "Online Class",
        schedule: [
          {
            day: "Tuesday ( Vocal Basic )",
            time: [
              {
                time_1: "10:00 AM - 12:00 PM",
              },
              {
                time_2: "6:00 PM - 8:00 PM",
              },
            ],
          },
          {
            day: "Thursday ( Vocal Basic )",
            time: [
              {
                time_1: "10:00 AM - 12:00 PM",
              },
              {
                time_2: "6:00 PM - 8:00 PM",
              },
            ],
          },
          {
            day: "Friday ( Vocal Harmony )",
            time: "6:00 PM - 8:00 PM",
          },
        ],
      },
    ],
    image: Purity,
  },
  // Samson
  {
    id: 10,
    name: "Samson",
    title: "Acoustic Guitar Instructor",
    classes: [
      {
        id: 1,
        name: "Acoustic Guitar",
        class: "Online Class",
        schedule: [
          {
            day: "Tuesday",
            time: [
              {
                time_1: "9:00 AM - 10:00 AM",
              },
              {
                time_2: "5:00 PM - 6:00 PM",
              },
            ],
          },
          {
            day: "Wednesday",
            time: "9:00 AM - 10:00 AM",
          },
          {
            day: "Thursday",
            time: "5:00 PM - 6:00 PM",
          },
        ],
      },
    ],
    image: Samson,
  },
  // John Thang Lian
  {
    id: 11,
    name: "John Thang Lian",
    title: "Ukulele Instructor",
    classes: [
      {
        id: 1,
        name: "Ukulele Class",
        class: "Online Class",
        schedule: [
          {
            day: "Monday",
            time: "7:00 PM - 8:00 PM",
          },
          {
            day: "Thursday",
            time: "7:00 PM - 8:00 PM",
          },
        ],
      },
    ],
    image: John_Thang_Lian,
  },
  // Patrick
  {
    id: 12,
    name: "Patrick",
    title: "Bass Instructor",
    bio: "Bassist & Music Director at The City Bangkok, Thailand. Actively playing bass guitar since 2019 with a strong foundation in music theory. Currently pursuing a Bachelor’s degree in Music Production at Assumption University (ABAC), under the Faculty of Music Entrepreneurship at the Louis Nobiron School of Music.",
    philosophy:
      "As a bass guitar teacher, my philosophy is rooted in fostering both musical excellence and personal growth. I believe that every student has a unique voice and learning style, and it’s my role to guide them in discovering and developing their identity as a bassist. The bass is not just a supporting instrument—it’s the backbone of rhythm, harmony, and groove. I aim to help students understand this crucial role while also encouraging creativity, musicality, and expression. My approach combines a strong foundation in technique, music theory, and ear training, balanced with practical applications through performance, and improvisation.",
    classes: [
      {
        id: 1,
        name: "Bass Class",
        class: "Online Class",
        schedule: [
          {
            day: "Monday",
            time: "7:00 PM - 8:00 PM",
          },
          {
            day: "Wednesday",
            time: "7:00 PM - 8:00 PM",
          },
        ],
      },
    ],
    image: Patrick,
    experience_details: [
      {
        id: 1,
        position: "Church Bassist",
        duration: "2021 - 2025 (Continue)",
      },
      {
        id: 2,
        position: "Music Director",
        duration: "2024 - 2025 (Continue)",
      },
    ],
  },
  // Victor & Eh Nyaw
  {
    id: 13,
    name: "Victor & Eh Nyaw",
    title: "Piano Instructor",
    classes: [
      {
        id: 1,
        name: "Piano Class",
        class: "Online Class",
        schedule: [
          {
            day: "Tuesday",
            time: [
              {
                time_1: "5:00 PM - 6:00 PM",
              },
              {
                time_2: "6:00 PM - 7:00 PM",
              },
            ],
          },
          {
            day: "Wednesday",
            time: [
              {
                time_1: "7:00 AM - 8:00 AM",
              },
              {
                time_2: "9:00 AM - 10:00 AM",
              },
              {
                time_3: "5:00 PM - 6:00 PM",
              },
              {
                time_4: "6:00 PM - 7:00 PM",
              },
            ],
          },
          {
            day: "Friday",
            time: [
              {
                time_1: "7:00 AM - 8:00 AM",
              },
              {
                time_2: "9:00 AM - 10:00 AM",
              },
            ],
          },
        ],
      },
    ],
    image: Victor_and_Eh_Nyaw,
  },
];

export default function Our_Instructors_Section() {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor);
  };

  return (
    <>
      <div className="scroll-animate opacity-0 translate-y-10">
        <div className="bg-gradient-to-b from-[#1A2151] via-[#1A2151] to-[#141937] rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#E6D28C]/20 shadow-[0_0_10px_rgba(230,210,140,0.15)] transition-all duration-500">
          <div className="border-[#E6D28C] border-t-2">
            {/* Hero Section */}
            <div className="m-4 sm:m-5 lg:m-6 flex flex-col items-center text-center">
              <p className="text-[#E6D28C] font-jetbrains tracking-wider drop-shadow-md text-sm sm:text-base">
                MEET OUR TEAM
              </p>
              <h1 className="text-white text-xl sm:text-2xl lg:text-3xl pt-2 font-jetbrains font-bold bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent drop-shadow-lg">
                Learn from the best musicians in Myanmar
              </h1>
              <p className="text-gray-300 mt-3 max-w-3xl font-jetbrains text-sm sm:text-base leading-relaxed">
                Our instructors are accomplished musicians with years of
                performance and teaching experience. They are passionate about
                sharing their knowledge and helping students achieve their
                musical goals.
              </p>
            </div>

            {/* Instructors Grid - 2 columns on mobile, 3 on tablet, 4 on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mt-6 sm:mt-8">
              {instructors.length &&
                instructors.map((instructor, index) => (
                  <div
                    key={index}
                    onClick={() => handleInstructorClick(instructor)}
                    className="bg-gradient-to-b from-[#1A2151] to-[#141937] rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 flex flex-col items-center text-center group hover:scale-105 transition-all duration-300 border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-lg hover:shadow-[#E6D28C]/10 cursor-pointer"
                  >
                    {/* Profile Picture */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] p-1 mb-3 sm:mb-4">
                      <div className="w-full h-full rounded-full bg-[#1A2151] flex items-center justify-center overflow-hidden">
                        {instructor.image ? (
                          <img
                            src={instructor.image}
                            alt={instructor.name || "Instructor"}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-[#E6D28C]"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" />
                          </svg>
                        )}
                      </div>
                    </div>
                    {/* Name */}
                    <h1 className="text-white text-sm sm:text-base lg:text-xl font-jetbrains font-semibold group-hover:text-[#E6D28C] transition-colors duration-300 leading-tight">
                      {instructor.name}
                    </h1>
                    {/* Title */}
                    <p className="text-[#E6D28C] mt-1 font-jetbrains text-xs sm:text-sm leading-tight">
                      {instructor.title}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Instructors Modal - only render when an instructor is selected */}
      {selectedInstructor && (
        <Instructors_Modal
          selectedInstructor={selectedInstructor}
          closeModal={() => setSelectedInstructor(null)}
        />
      )}
    </>
  );
}
