import React from "react";
import { NavLink } from "react-router-dom";

export default function Introduction_Section() {
  return (
    <>
      <div className="mt-12 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-[#111] rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden p-8 md:p-12">
          <div className="max-w-4xl text-center mx-auto space-y-6">
            <p className="text-lg leading-8 text-[#E6D28C]/80">
              A cover song license gives you legal permission to record and
              distribute someone else's song. When you create a cover version of
              a song, you need to obtain proper licensing to ensure the original
              songwriters and publishers receive compensation for their work.
            </p>
            <p className="text-lg leading-8 text-[#E6D28C]/80">
              Our Cover Song Copyright License service makes this process simple
              and affordable, allowing you to focus on your creative work while
              we handle the legal requirements.
            </p>
            <p className="mt-5 font-jetbrains text-[#E6D28C]/80">
              Full details:{" "}
              <NavLink
                to={"/cover-song-copyright-licence-terms-of-agreement"}
                className={
                  "text-[#D4AF37] hover:text-[#E6D28C] underline transition-colors duration-300"
                }
              >
                Cover Song Copyright Licence Terms of Agreement
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
