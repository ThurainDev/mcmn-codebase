import React, { useEffect, useState } from "react";

export default function SignUpBox({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);

    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {/* Animated backdrop with blur effect */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-md z-50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-modal="true"
        role="dialog"
      >
        {/* Modal container with animation */}
        <div className="flex items-center justify-center min-h-screen padding">
          <div
            className={`relative w-full max-w-md transform transition-all duration-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Modal content with gold gradient border */}
            <div className="bg-[#111] rounded-2xl shadow-[0_0_25px_rgba(230,210,140,0.2)] overflow-hidden border border-[#E6D28C]/20 relative">
              {/* Gradient overlay at the top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37]"></div>

              {/* Content */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
