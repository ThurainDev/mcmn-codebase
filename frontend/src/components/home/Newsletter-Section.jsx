import React from "react";

export default function Newsletter_Section() {
  return (
    <>
      <div className="mt-12 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-gradient-to-r from-[#111] via-black to-[#111] rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
              Stay Connected
            </h2>
            <p className="text-[#E6D28C]/70 text-base md:text-lg mb-8">
              Subscribe to our newsletter for the latest updates on new music
              releases, events, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-full bg-black border border-[#E6D28C]/30 text-[#E6D28C] placeholder-[#E6D28C]/50 focus:outline-none focus:border-[#E6D28C] transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black rounded-full text-base font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>

            <p className="text-[#E6D28C]/50 text-xs mt-4">
              By subscribing, you agree to receive emails from MCMN. You can
              unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
