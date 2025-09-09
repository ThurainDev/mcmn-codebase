import React, { useState, useEffect } from "react";
// components | sections
import NavBar_1_Section from "../components/navigation-bar/section/NavBar_1_Section";
import NavBar_2_Section from "../components/navigation-bar/section/NavBar_2_Section";

export default function NavigationBar({ setShowSignUpBox }) {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      // Add scrolled class when page is scrolled
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* SECTION: NavBar-1 */}
      <NavBar_1_Section
        scrolled={scrolled}
        setShowSignUpBox={setShowSignUpBox}
      />

      {/* SECTION: NavBar-2 */}
      <NavBar_2_Section scrolled={scrolled} isVisible={isVisible} />
    </div>
  );
}
