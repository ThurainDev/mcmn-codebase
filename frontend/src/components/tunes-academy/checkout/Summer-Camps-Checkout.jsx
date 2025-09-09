import React from "react";
import { NavLink } from "react-router-dom";

export default function SummerCampsCheckout() {
  return (
    <>
      <div className="padding pt-[120px] flex gap-5">
        {/* Left Side */}
        <div className="w-[35%]">
          {/* Return */}
          <div className="border-b-2 border-black pb-2">
            <NavLink to={"/music-school"}>
              <div className="flex flex-col">
                <button className="bg-black text-lg text-white rounded-xl px-6 py-2 font-jetbrains font-semibold">
                  Return
                </button>
              </div>
            </NavLink>
          </div>
          {/* Lesson */}
          <div className="mt-5 border-b-2 border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13.75 2a.75.75 0 0 0-1.5 0v12.536A4.75 4.75 0 1 0 13.75 18V6.243A6.74 6.74 0 0 0 19 8.75a.75.75 0 0 0 0-1.5A5.25 5.25 0 0 1 13.75 2"
              />
            </svg>
            <h1 className="text-3xl font-bold font-jetbrains pt-3">
              Summer Camps
            </h1>
          </div>
          {/* Total Amount */}
          <div>
            <h1 className="text-xl font-jetbrains border-b-2 border-black mt-5">
              Total Amout : 500,000 MMK
            </h1>
          </div>
          {/* Lessons */}
          <div className="mt-5 border-b-2 border-black">
            <div className="font-jetbrains">
              <h1 className="text-xl">Chapter - 1</h1>
              <ul className="list-disc list-inside pt-1">
                <li>Lesson - 1</li>
                <li>Lesson - 2</li>
                <li>Lesson - 3</li>
                <li>Lesson - 4</li>
                <li>Lesson - 5</li>
              </ul>
            </div>
            <div className="font-jetbrains mt-2">
              <h1 className="text-xl">Chapter - 2</h1>
              <ul className="list-disc list-inside pt-1">
                <li>Lesson - 1</li>
                <li>Lesson - 2</li>
                <li>Lesson - 3</li>
                <li>Lesson - 4</li>
                <li>Lesson - 5</li>
              </ul>
            </div>
            <div className="font-jetbrains mt-2">
              <h1 className="text-xl">Chapter - 3</h1>
              <ul className="list-disc list-inside pt-1">
                <li>Lesson - 1</li>
                <li>Lesson - 2</li>
                <li>Lesson - 3</li>
                <li>Lesson - 4</li>
                <li>Lesson - 5</li>
              </ul>
            </div>
            <div className="font-jetbrains mt-2">
              <h1 className="text-xl">Chapter - 4</h1>
              <ul className="list-disc list-inside pt-1">
                <li>Lesson - 1</li>
                <li>Lesson - 2</li>
                <li>Lesson - 3</li>
                <li>Lesson - 4</li>
                <li>Lesson - 5</li>
              </ul>
            </div>
            <div className="font-jetbrains mt-2">
              <h1 className="text-xl">Chapter - 5</h1>
              <ul className="list-disc list-inside pt-1">
                <li>Lesson - 1</li>
                <li>Lesson - 2</li>
                <li>Lesson - 3</li>
                <li>Lesson - 4</li>
                <li>Lesson - 5</li>
              </ul>
            </div>
            <div className="font-jetbrains mt-2">
              <h1 className="text-xl">Chapter - 6</h1>
              <ul className="list-disc list-inside pt-1">
                <li>Lesson - 1</li>
                <li>Lesson - 2</li>
                <li>Lesson - 3</li>
                <li>Lesson - 4</li>
                <li>Lesson - 5</li>
              </ul>
            </div>
          </div>
          {/* Lifetime Provided Services */}
          <div className="mt-5 border-b-2 border-black">
            <h1 className="text-xl font-jetbrains">
              Lifetime Provided Services
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zm4.135 6.434l-4.598 4.598l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l5.234-5.235a1 1 0 1 0-1.414-1.414"
                  />
                </g>
              </svg>
              <p>Lifetime Update Access</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[65%] bg-black rounded-3xl p-10">
          <h1 className="text-2xl text-white font-bold font-jetbrains">
            Pay Directly
          </h1>
          {/* Form */}
          <form action="" className="mt-5">
            {/* Info */}
            <div className="border-b-2 border-white pb-5">
              <div className="flex gap-5">
                {/* Email */}
                <div className="flex flex-col w-[50%]">
                  <label htmlFor="" className="text-white pb-2 font-jetbrains">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="bg-[#1A1A1A] text-[#D9D9D9] rounded-xl p-2 font-jetbrains"
                  />
                </div>
                {/* Name */}
                <div className="flex flex-col w-[50%]">
                  <label htmlFor="" className="text-white pb-2 font-jetbrains">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="bg-[#1A1A1A] text-[#D9D9D9] rounded-xl p-2 font-jetbrains"
                  />
                </div>
              </div>
              <div className="mt-5">
                {/* Phone Number */}
                <div className="flex flex-col w-[50%]">
                  <label htmlFor="" className="text-white pb-2 font-jetbrains">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Your Phone Number"
                    className="bg-[#1A1A1A] text-[#D9D9D9] rounded-xl p-2 font-jetbrains"
                  />
                </div>
              </div>
            </div>
            {/* Choose Payment Method */}
            <div className="mt-10 border-b-2 border-white pb-5">
              <h1 className="text-2xl text-white font-bold font-jetbrains">
                Choose Payment Method
              </h1>
              <div className="grid grid-cols-2 gap-5 font-jetbrains pt-5">
                <button className="bg-[#1A1A1A] text-lg text-[#D9D9D9] rounded-xl px-6 py-2 font-jetbrains font-semibold hover:ring-1 ring-[#D9D9D9] transition-all">
                  Pay with KBZ
                </button>
                <button className="bg-[#1A1A1A] text-lg text-[#D9D9D9] rounded-xl px-6 py-2 font-jetbrains font-semibold hover:ring-1 ring-[#D9D9D9] transition-all">
                  Pay with AYA
                </button>
                <button className="bg-[#1A1A1A] text-lg text-[#D9D9D9] rounded-xl px-6 py-2 font-jetbrains font-semibold hover:ring-1 ring-[#D9D9D9] transition-all">
                  Pay with CB
                </button>
                <button className="bg-[#1A1A1A] text-lg text-[#D9D9D9] rounded-xl px-6 py-2 font-jetbrains font-semibold hover:ring-1 ring-[#D9D9D9] transition-all">
                  Pay with WavePay
                </button>
              </div>
            </div>
            {/* Purchase Now */}
            <div className="mt-10 flex flex-col">
              <button className="bg-[#D9D9D9] text-xl text-[#1A1A1A] rounded-3xl px-6 py-2 font-jetbrains font-semibold">
                Purchase Now - 500,000 MMK
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
