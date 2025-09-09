import React from "react";
// logo
import KBZ_Pay_Logo from "../../../assets/KBZ_Pay_Logo.png";
import AYA_Pay_Logo from "../../../assets/AYA_Pay_Logo.jpeg";
import UAB_Pay_Logo from "../../../assets/UAB_Pay_Logo.jpeg";
import Wave_Pay_Logo from "../../../assets/Wave_Pay_Logo.png";

const methods = [
  {
    id: 1,
    title: "KBZ Pay",
    name: "Ye Htut Kyaw",
    phone: "09799901085",
    logo: KBZ_Pay_Logo,
  },
  {
    id: 2,
    title: "AYA Pay",
    name: "Ye Htut Kyaw",
    phone: "09799901085",
    logo: AYA_Pay_Logo,
  },
  {
    id: 3,
    title: "UAB Pay",
    name: "Ye Htut Kyaw",
    phone: "09799901085",
    logo: UAB_Pay_Logo,
  },
  {
    id: 4,
    title: "WAVE Pay",
    name: "Ye Htut Kyaw",
    phone: "09799901085",
    logo: Wave_Pay_Logo,
  },
];

export default function Payment_Method_Section() {
  return (
    <>
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#000] to-[#111] text-[#E6D28C] p-6 md:p-8 rounded-xl shadow-[0_0_15px_rgba(230,210,140,0.15)] border border-[#E6D28C]/20">
        <h3 className="text-xl font-semibold mb-6 text-[#E6D28C] border-b border-[#E6D28C]/30 pb-2">
          Choose Payment Method
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {methods.length &&
            methods.map((method, index) => (
              <div
                key={index}
                className="p-3 md:p-4 rounded-lg bg-black/30 hover:bg-black/50 transition-all duration-300 border border-[#E6D28C]/10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={method.logo}
                    alt={`${method.title} Logo`}
                    width={20}
                    className="rounded-md"
                  />
                  <h3 className="font-semibold text-sm md:text-lg text-[#E6D28C]">
                    {method.title}
                  </h3>
                </div>
                <p className="text-[#E6D28C]/70 text-sm md:text-base">
                  Name: {method.name}
                </p>
                <p className="text-[#E6D28C]/70 text-sm md:text-base">
                  Phone No: {method.phone}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
