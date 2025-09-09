import React from "react";

const contactInfo = [
  {
    label: "Address",
    value:
      "Building A2, Room 804, Bo Ba Htoo Housing Complex I, Ward 48, North Dagon Township, Yangon",
  },
  {
    label: "Phone",
    value: "+959 799901085",
  },
  {
    label: "Email",
    value: "myanmarchristianmusicnetwork@gmail.com",
  },
];

export function contactInfoIcons(label) {
  switch (label) {
    // Address
    case "Address":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="text-[#E6D28C] flex-shrink-0"
        >
          <path
            fill="currentColor"
            d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
          />
        </svg>
      );
    // Phone
    case "Phone":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="text-[#E6D28C] flex-shrink-0"
        >
          <path
            fill="currentColor"
            d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98"
          />
        </svg>
      );
    // Email
    case "Email":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="text-[#E6D28C] flex-shrink-0"
        >
          <path
            fill="currentColor"
            d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"
          />
        </svg>
      );
  }
}

export default function Contact_Information_Section() {
  return (
    <>
      <div className="w-full p-4 md:p-6 bg-[#111] rounded-lg shadow-[0_0_15px_rgba(230,210,140,0.15)] border border-[#E6D28C]/20">
        <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-[#E6D28C] border-b border-[#E6D28C]/30 pb-2">
          Contact Information
        </h3>
        <div className="space-y-4 md:space-y-6">
          {contactInfo.length &&
            contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start md:items-center group"
              >
                <span className="mr-3 w-8 h-8 flex items-center justify-center text-[#E6D28C] mt-1 md:mt-0">
                  {contactInfoIcons(item.label)}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="text-sm md:text-base text-[#E6D28C] break-words leading-relaxed">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
