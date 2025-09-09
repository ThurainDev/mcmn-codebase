import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function PrivateLessonsCheckout() {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  return (
    <div className="bg-gradient-to-b from-[#1A2151] to-[#141937] min-h-screen text-white">
      <div className="padding pt-[130px] pb-[40px] flex flex-col lg:flex-row gap-8">
        {/* Left Side */}
        <div className="w-full lg:w-[35%] order-1 lg:order-1">
          {/* Return */}
          <div className="border-b-2 border-[#E6D28C]/30 pb-3 mb-6 transition-all duration-300 hover:border-[#E6D28C]">
            <NavLink to={"/music-school"}>
              <div className="flex flex-col">
                <button className="bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] text-[#1A2151] rounded-xl px-6 py-2 font-jetbrains font-semibold hover:shadow-lg hover:shadow-[#E6D28C]/20 hover:translate-y-[-2px] transition-all duration-300">
                  Return to Music School
                </button>
              </div>
            </NavLink>
          </div>

          {/* Lesson */}
          <div className="mt-5 border-b-2 border-[#E6D28C]/30 pb-4 group hover:border-[#E6D28C] transition-all duration-300">
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                className="text-[#E6D28C] group-hover:scale-110 transition-all duration-300"
              >
                <path
                  fill="currentColor"
                  d="M13.75 2a.75.75 0 0 0-1.5 0v12.536A4.75 4.75 0 1 0 13.75 18V6.243A6.74 6.74 0 0 0 19 8.75a.75.75 0 0 0 0-1.5A5.25 5.25 0 0 1 13.75 2"
                />
              </svg>
              <h1 className="text-3xl font-bold font-jetbrains pt-3 bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent animate-gradient">
                Private Lessons
              </h1>
            </div>
          </div>

          {/* Total Amount */}
          <div className="mt-6 mb-6">
            <h1 className="text-xl font-jetbrains border-b-2 border-[#E6D28C]/30 pb-3 group hover:border-[#E6D28C] transition-all duration-300">
              <span className="text-[#E6D28C]">Total Amount:</span> 300,000 MMK
            </h1>
          </div>

          {/* Lessons */}
          {/* <div className="mt-5 border-b-2 border-[#E6D28C]/30 pb-4 hover:border-[#E6D28C] transition-all duration-300">
            <div className="bg-[#1A2151]/50 rounded-xl p-4 border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#E6D28C]/10">
              <div className="accordion-content space-y-4 mt-4">
                {[1, 2, 3, 4, 5, 6].map((chapter) => (
                  <details key={chapter} className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none font-jetbrains text-xl text-[#E6D28C]">
                      <span>Chapter - {chapter}</span>
                      <span className="transition-transform duration-300 group-open:rotate-180">
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
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </summary>
                    <ul className="list-disc list-inside pt-1 pl-2 text-gray-300 mt-2">
                      <li className="hover:text-white transition-colors duration-200">
                        Lesson - 1
                      </li>
                      <li className="hover:text-white transition-colors duration-200">
                        Lesson - 2
                      </li>
                      <li className="hover:text-white transition-colors duration-200">
                        Lesson - 3
                      </li>
                      <li className="hover:text-white transition-colors duration-200">
                        Lesson - 4
                      </li>
                      <li className="hover:text-white transition-colors duration-200">
                        Lesson - 5
                      </li>
                    </ul>
                  </details>
                ))}
              </div>
            </div>
          </div> */}

          {/* Lifetime Provided Services */}
          <div className="mt-6 border-b-2 border-[#E6D28C]/30 pb-4 hover:border-[#E6D28C] transition-all duration-300">
            <h1 className="text-xl font-jetbrains text-[#E6D28C]">
              Lifetime Provided Services
            </h1>
            <div className="flex items-center gap-3 mt-3 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-[#E6D28C] group-hover:scale-110 transition-all duration-300"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zm4.135 6.434l-4.598 4.598l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l5.234-5.235a1 1 0 1 0-1.414-1.414"
                  />
                </g>
              </svg>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                Lifetime Update Access
              </p>
            </div>
            <div className="flex items-center gap-3 mt-2 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-[#E6D28C] group-hover:scale-110 transition-all duration-300"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                />
              </svg>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                24/7 Support
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[65%] order-2 lg:order-2 bg-gradient-to-b from-[#1A2151] to-[#141937] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E6D28C]/20 hover:shadow-[0_10px_30px_rgba(230,210,140,0.15)] transition-all duration-500">
          <h1 className="text-2xl md:text-3xl text-white font-bold font-jetbrains bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent animate-gradient">
            Complete Your Purchase
          </h1>

          {/* Form */}
          <form className="mt-6 md:mt-8">
            {/* Info */}
            <div className="border-b-2 border-[#E6D28C]/30 pb-6 md:pb-8">
              <div className="flex flex-col md:flex-row gap-5">
                {/* Email */}
                <div className="flex flex-col w-full md:w-[50%]">
                  <label
                    htmlFor="email"
                    className="text-[#E6D28C] pb-2 font-jetbrains"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Your Email"
                    className="bg-[#1A1A1A] text-[#D9D9D9] rounded-xl p-3 font-jetbrains border border-transparent focus:border-[#E6D28C]/50 focus:outline-none transition-all duration-300"
                  />
                </div>
                {/* Name */}
                <div className="flex flex-col w-full md:w-[50%]">
                  <label
                    htmlFor="name"
                    className="text-[#E6D28C] pb-2 font-jetbrains"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Your Name"
                    className="bg-[#1A1A1A] text-[#D9D9D9] rounded-xl p-3 font-jetbrains border border-transparent focus:border-[#E6D28C]/50 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>
              <div className="mt-5">
                {/* Phone Number */}
                <div className="flex flex-col w-full md:w-[50%]">
                  <label
                    htmlFor="phone"
                    className="text-[#E6D28C] pb-2 font-jetbrains"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter Your Phone Number"
                    className="bg-[#1A1A1A] text-[#D9D9D9] rounded-xl p-3 font-jetbrains border border-transparent focus:border-[#E6D28C]/50 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Choose Payment Method */}
            <div className="mt-8 md:mt-10 border-b-2 border-[#E6D28C]/30 pb-6 md:pb-8">
              <h1 className="text-2xl text-white font-bold font-jetbrains bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent">
                Choose Payment Method
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 font-jetbrains pt-5">
                {["KBZ", "AYA", "CB", "WavePay"].map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => handlePaymentSelect(method)}
                    className={`bg-[#1A1A1A] text-lg rounded-xl px-6 py-3 font-jetbrains font-semibold transition-all duration-300 ${
                      selectedPayment === method
                        ? "ring-2 ring-[#E6D28C] text-[#E6D28C]"
                        : "text-[#D9D9D9] hover:ring-1 hover:ring-[#E6D28C]/50 hover:text-[#E6D28C]"
                    }`}
                  >
                    Pay With {method}
                  </button>
                ))}
              </div>
            </div>

            {/* Purchase Now */}
            <div className="mt-8 md:mt-10 flex flex-col">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] text-lg text-[#1A2151] rounded-3xl px-6 py-3 font-jetbrains font-semibold hover:shadow-lg hover:shadow-[#E6D28C]/20 hover:translate-y-[-2px] transition-all duration-300 transform"
              >
                Purchase Now - 300,000 MMK
              </button>
              <p className="text-center text-gray-400 mt-4 text-sm">
                By purchasing, you agree to our Terms of Service
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
