import React from "react";
import { FaHandshake, FaChurch } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const benefits = [
  {
    id: 1,
    title: "Access to our extensive library of worship resources",
  },
  {
    id: 2,
    title: "Opportunities to collaborate with other churches",
  },
  {
    id: 3,
    title: "Training workshops for your worship team",
  },
  {
    id: 4,
    title: "Participation in network-wide events",
  },
  {
    id: 5,
    title: "Promotion of your church events to our network",
  },
];

const lists = [
  {
    id: 1,
    title: "Churches of all denominations",
  },
  {
    id: 2,
    title: "Christian music ministries",
  },
  {
    id: 3,
    title: "Worship training organizations",
  },
  {
    id: 4,
    title: "Christian music publishers",
  },
  {
    id: 5,
    title: "Faith-based community organizations",
  },
];

const processes = [
  {
    id: 1,
    title: "Submit Application",
    description:
      "Complete our online application form with details about your organization",
  },
  {
    id: 2,
    title: "Interview",
    description:
      "Schedule a meeting with our partnership team to discuss collaboration opportunities",
  },
  {
    id: 3,
    title: "Welcome Aboard",
    description:
      "Upon approval, receive your welcome package and begin accessing network benefits",
  },
];

export default function Join_Us_Section() {
  return (
    <>
      <div className="scroll-animate opacity-0 translate-y-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
              Join Our Network
            </h2>
            <p className="text-[#E6D28C]/90 mt-4 font-jetbrains text-sm sm:text-base leading-relaxed">
              Is your church or organization interested in partnering with
              Myanmar Christian Music Network? Learn about the benefits of
              joining our community and how to apply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Partnership Benefits */}
            <div className="bg-[#111] rounded-xl p-6 border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#0a0a0a] flex items-center justify-center mr-4 border border-[#E6D28C]/20">
                  <FaHandshake className="text-[#D4AF37] text-2xl" />
                </div>
                <h3 className="text-[#E6D28C] text-xl font-semibold">
                  Partnership Benefits
                </h3>
              </div>
              <ul className="space-y-3 text-[#E6D28C]/80">
                {benefits.length &&
                  benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <MdVerified className="text-[#D4AF37] mt-1 mr-2" />
                      <span>{benefit.title}</span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Who Can Join */}
            <div className="bg-[#111] rounded-xl p-6 border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#0a0a0a] flex items-center justify-center mr-4 border border-[#E6D28C]/20">
                  <FaChurch className="text-[#D4AF37] text-2xl" />
                </div>
                <h3 className="text-[#E6D28C] text-xl font-semibold">
                  Who Can Join
                </h3>
              </div>
              <p className="text-[#E6D28C]/80 mb-4">
                We welcome partnerships with:
              </p>
              <ul className="space-y-3 text-[#E6D28C]/80">
                {lists.length &&
                  lists.map((list, index) => (
                    <li key={index} className="flex items-start">
                      <MdVerified className="text-[#D4AF37] mt-1 mr-2" />
                      <span>{list.title}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-gradient-to-r from-[#0a0a0a] to-[#111] rounded-xl p-8 border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
            <h3 className="text-[#E6D28C] text-xl font-semibold mb-6 text-center">
              Application Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {processes.length &&
                processes.map((process, index) => (
                  <div
                    key={index}
                    className="bg-[#0a0a0a] p-5 rounded-lg border border-[#E6D28C]/10 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center mx-auto mb-4 border border-[#E6D28C]/20">
                      <span className="text-[#D4AF37] font-bold">
                        {process.id}
                      </span>
                    </div>
                    <h4 className="text-[#E6D28C] font-semibold mb-2">
                      {process.title}
                    </h4>
                    <p className="text-[#E6D28C]/70 text-sm">
                      {process.description}
                    </p>
                  </div>
                ))}
            </div>

            {/* Apply Button */}
            <div className="mt-8 text-center">
              <button className="bg-gradient-to-r from-[#D4AF37] to-[#E6D28C] text-black font-semibold py-3 px-8 rounded-full hover:from-[#E6D28C] hover:to-[#D4AF37] transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(230,210,140,0.3)]">
                Apply for Partnership
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
