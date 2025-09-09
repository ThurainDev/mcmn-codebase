import React from "react";
import CertificatePhoto from "../../../assets/music-certificate.jpg";

export default function Digital_Certificate_Section() {
  return (
    <>
      <div className="scroll-animate opacity-0 translate-y-10">
        <div className="bg-gradient-to-b from-[#1A2151] via-[#1A2151] to-[#141937] rounded-3xl p-5 sm:p-8 border border-[#E6D28C]/20 shadow-[0_0_10px_rgba(230,210,140,0.15)] transition-all duration-500">
          <div className="flex flex-col md:flex-row border-t-2 border-[#E6D28C] pt-8 gap-8">
            {/* Left Side */}
            <div className="w-full md:w-[40%] flex flex-col">
              <div className="text-white font-jetbrains space-y-3">
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent animate-gradient">
                    Certificate Of Completion
                  </h1>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Digital Certificates for All Students Enrolled at Myanmar
                  Christian Music Network's Music School. Showcase your
                  achievements and musical expertise with our professionally
                  designed certificates.
                </p>
                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] text-[#1A2151] rounded-full px-6 py-2 font-jetbrains font-semibold hover:shadow-lg hover:shadow-[#E6D28C]/20 hover:translate-y-[-2px] transition-all duration-300">
                    View Sample
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-[60%] relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex justify-end overflow-hidden rounded-xl">
                <img
                  src={CertificatePhoto}
                  alt="Certificate Photo"
                  className="rounded-xl shadow-lg transform group-hover:scale-105 transition duration-500 object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#E6D28C] text-[#1A2151] rounded-full p-2 shadow-lg animate-twinkle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
