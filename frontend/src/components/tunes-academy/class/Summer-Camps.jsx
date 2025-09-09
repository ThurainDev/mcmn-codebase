import React from "react";
import { NavLink } from "react-router-dom";

export default function SummerCamps() {
  return (
    <>
      <div className="padding pt-[120px]">
        <div className="text-3xl font-bold font-jetbrains">
          <h1>Summer Camps</h1>
        </div>

        {/* Info */}
        <div className="bg-black rounded-2xl mt-5 p-10">
          {/* Instructor */}
          <div className="flex items-center gap-3">
            <div className="shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 14 14"
                color="white"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="7" cy="5.5" r="2.5" />
                  <path d="M2.73 11.9a5 5 0 0 1 8.54 0" />
                  <circle cx="7" cy="7" r="6.5" />
                </g>
              </svg>
            </div>
            <div className="font-jetbrains">
              <h1 className="text-[#8C8C8C]">Instructor</h1>
              <p className="text-white text-2xl">Saya David Paul</p>
            </div>
          </div>

          {/* Info */}
          <div className="font-jetbrains mt-8 flex gap-10">
            <div>
              <p className="text-[#8C8C8C]">Training Period</p>
              <h1 className="text-white">3 months</h1>
            </div>
            <div>
              <p className="text-[#8C8C8C]">Learning Students</p>
              <h1 className="text-white">15+</h1>
            </div>
            <div>
              <p className="text-[#8C8C8C]">Certified Students</p>
              <h1 className="text-white">0+</h1>
            </div>
          </div>

          {/* Course Fee */}
          <div className="mt-5">
            <div className="font-jetbrains">
              <p className="text-[#8C8C8C]">Course Fee</p>
              <h1 className="text-white">500,000 MMK</h1>
            </div>
          </div>

          {/* Enroll Now */}
          <NavLink to={"/music-school/summer-camps/checkout"}>
            <div className="mt-5 flex flex-col">
              <button className="bg-[#D9D9D9] text-xl text-[#1A1A1A] rounded-3xl px-6 py-2 font-jetbrains font-semibold">
                Enroll Now
              </button>
            </div>
          </NavLink>
        </div>

        {/* About Course */}
        <div className="bg-black rounded-2xl mt-5 p-10">
          <div className="text-white font-jetbrains">
            <h1 className="text-2xl">About Course</h1>
            <p className="pt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem modi voluptatibus aut necessitatibus cupiditate, vero
              quod dicta rerum facere non culpa error, nam id laboriosam sunt
              officia hic et. Ducimus sequi maiores quod repellendus quam magnam
              nemo amet ut blanditiis nihil, impedit, natus eveniet eaque est
              labore quaerat expedita nesciunt fugiat perferendis magni placeat,
              minus consectetur tempora temporibus! Est vero laudantium quasi
              consectetur aliquam explicabo maiores, molestiae facilis esse ut
              fuga at corrupti nam libero harum sunt odit beatae, pariatur
              laboriosam fugiat praesentium saepe! Aperiam, beatae! Qui, quo
              incidunt esse eum repellendus omnis nulla at fuga, quaerat
              pariatur repudiandae ex sequi quis nam, aut aspernatur voluptas
              quam. Perspiciatis ullam modi similique quas harum asperiores
              inventore reprehenderit quibusdam, doloremque cupiditate numquam
              sit amet et ex suscipit nobis reiciendis soluta ad dolorem
              doloribus a magnam quis tempore rerum. Quos minima vel nam ratione
              fugit, velit delectus quas, ab quia necessitatibus, ipsa dicta!
            </p>
          </div>
        </div>

        {/* Course Outline */}
        <div className="bg-black rounded-2xl mt-5 p-10">
          <div className="font-jetbrains text-2xl text-white">
            <h1>Course Outline</h1>
          </div>

          <div className="mt-3 flex flex-col gap-3 font-jetbrains">
            {/* Chapter - 1 */}
            <details>
              <summary className="bg-[#1A1A1A] text-lg text-[#D9D9D9] rounded-xl px-6 py-2 select-none hover:ring-1 ring-[#D9D9D9] transition-all">
                Chapter - 1
              </summary>
              <div
                className="open:bg-[#1A1A1A] text-[#D9D9D9] rounded-xl mt-2"
                open
              >
                <ul className="px-6 py-2 flex flex-col gap-3">
                  {/* Lesson - 1 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 1</li>
                  </div>

                  {/* Lesson - 2 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 2</li>
                  </div>

                  {/* Lesson - 3 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 3</li>
                  </div>

                  {/* Lesson - 4 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 4</li>
                  </div>

                  {/* Lesson - 5 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 5</li>
                  </div>
                </ul>
              </div>
            </details>

            {/* Chapter - 2 */}
            <details>
              <summary className="bg-[#1A1A1A] text-lg text-[#D9D9D9] rounded-xl px-6 py-2 select-none hover:ring-1 ring-[#D9D9D9] transition-all">
                Chapter - 2
              </summary>
              <div
                className="open:bg-[#1A1A1A] text-[#D9D9D9] rounded-xl mt-2"
                open
              >
                <ul className="px-6 py-2 flex flex-col gap-3">
                  {/* Lesson - 1 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 1</li>
                  </div>

                  {/* Lesson - 2 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 2</li>
                  </div>

                  {/* Lesson - 3 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 3</li>
                  </div>

                  {/* Lesson - 4 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 4</li>
                  </div>

                  {/* Lesson - 5 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 5</li>
                  </div>
                </ul>
              </div>
            </details>

            {/* Chapter - 3 */}
            <details>
              <summary className="bg-[#1A1A1A] text-lg text-[#D9D9D9] rounded-xl px-6 py-2 select-none hover:ring-1 ring-[#D9D9D9] transition-all">
                Chapter - 3
              </summary>
              <div
                className="open:bg-[#1A1A1A] text-[#D9D9D9] rounded-xl mt-2"
                open
              >
                <ul className="px-6 py-2 flex flex-col gap-3">
                  {/* Lesson - 1 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 1</li>
                  </div>

                  {/* Lesson - 2 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 2</li>
                  </div>

                  {/* Lesson - 3 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 3</li>
                  </div>

                  {/* Lesson - 4 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 4</li>
                  </div>

                  {/* Lesson - 5 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 5</li>
                  </div>
                </ul>
              </div>
            </details>

            {/* Chapter - 4 */}
            <details>
              <summary className="bg-[#1A1A1A] text-lg text-[#D9D9D9] rounded-xl px-6 py-2 select-none hover:ring-1 ring-[#D9D9D9] transition-all">
                Chapter - 4
              </summary>
              <div
                className="open:bg-[#1A1A1A] text-[#D9D9D9] rounded-xl mt-2"
                open
              >
                <ul className="px-6 py-2 flex flex-col gap-3">
                  {/* Lesson - 1 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 1</li>
                  </div>

                  {/* Lesson - 2 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 2</li>
                  </div>

                  {/* Lesson - 3 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 3</li>
                  </div>

                  {/* Lesson - 4 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 4</li>
                  </div>

                  {/* Lesson - 5 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 5</li>
                  </div>
                </ul>
              </div>
            </details>

            {/* Chapter - 5 */}
            <details>
              <summary className="bg-[#1A1A1A] text-lg text-[#D9D9D9] rounded-xl px-6 py-2 select-none hover:ring-1 ring-[#D9D9D9] transition-all">
                Chapter - 5
              </summary>
              <div
                className="open:bg-[#1A1A1A] text-[#D9D9D9] rounded-xl mt-2"
                open
              >
                <ul className="px-6 py-2 flex flex-col gap-3">
                  {/* Lesson - 1 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 1</li>
                  </div>

                  {/* Lesson - 2 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 2</li>
                  </div>

                  {/* Lesson - 3 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 3</li>
                  </div>

                  {/* Lesson - 4 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 4</li>
                  </div>

                  {/* Lesson - 5 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 5</li>
                  </div>
                </ul>
              </div>
            </details>

            {/* Chapter - 6 */}
            <details>
              <summary className="bg-[#1A1A1A] text-lg text-[#D9D9D9] rounded-xl px-6 py-2 select-none hover:ring-1 ring-[#D9D9D9] transition-all">
                Chapter - 6
              </summary>
              <div
                className="open:bg-[#1A1A1A] text-[#D9D9D9] rounded-xl mt-2"
                open
              >
                <ul className="px-6 py-2 flex flex-col gap-3">
                  {/* Lesson - 1 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 1</li>
                  </div>

                  {/* Lesson - 2 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 2</li>
                  </div>

                  {/* Lesson - 3 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 3</li>
                  </div>

                  {/* Lesson - 4 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 4</li>
                  </div>

                  {/* Lesson - 5 */}
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      color="white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="7" cy="7" r="6.5" />
                        <path d="m5.5 4.5l4 2.5l-4 2.5v-5z" />
                      </g>
                    </svg>
                    <li>Lesson - 5</li>
                  </div>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}
