import React from "react";
// logo
import KBZ_Bank_Logo from "../../../assets/KBZ_Bank_Logo.png";
import AYA_Bank_Logo from "../../../assets/AYA_Bank_Logo.png";
import UAB_Bank_Logo from "../../../assets/UAB_Bank_Logo.png";

const banks = [
  {
    id: 1,
    title: "KBZ BANK",
    accountNumber: "12651199931090601",
    accountName: "Ye Htut Kyaw",
    logo: KBZ_Bank_Logo,
  },
  {
    id: 2,
    title: "AYA BANK",
    accountNumber: "40029984879",
    accountName: "Ye Htut Kyaw",
    logo: AYA_Bank_Logo,
  },
  {
    id: 3,
    title: "UAB BANK",
    accountNumber: "023330100022055",
    accountName: "Ye Htut Kyaw",
    logo: UAB_Bank_Logo,
  },
];

export default function Direct_Transfer_Section() {
  return (
    <>
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#000] to-[#111] p-6 md:p-8 rounded-xl shadow-[0_0_15px_rgba(230,210,140,0.15)] border border-[#E6D28C]/20">
        <h3 className="text-xl font-semibold mb-6 text-[#E6D28C] border-b border-[#E6D28C]/30 pb-2">
          Direct Transfer
        </h3>
        <div className="space-y-6">
          {banks.length &&
            banks.map((bank, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-black/30 hover:bg-black/50 transition-all duration-300 border border-[#E6D28C]/10"
              >
                {/* Title */}
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={bank.logo}
                    alt={bank.title}
                    width={20}
                    className="rounded-md"
                  />
                  <h4 className="font-semibold text-lg text-[#E6D28C]">
                    {bank.title}
                  </h4>
                </div>
                {/* Account Number */}
                {bank.title === "KBZ BANK" || bank.title === "AYA BANK" ? (
                  <p className="text-[#E6D28C]/70 text-sm md:text-base">
                    Special Account Number: {bank.accountNumber}
                  </p>
                ) : (
                  <p className="text-[#E6D28C]/70 text-sm md:text-base">
                    Account Number: {bank.accountNumber}
                  </p>
                )}
                {/* Account Name */}
                <p className="text-[#E6D28C]/70 text-sm md:text-base">
                  Account Name: {bank.accountName}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
