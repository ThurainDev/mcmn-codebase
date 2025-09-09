import React, { useState } from "react";
import NavigationBar from "../navigationBar/NavigationBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Tunes_Academy_Footer from "../footer/Tunes_Academy_Footer";
import SignUpBox from "../components/SignUpBox";
import SignUpForm from "../components/SignUpForm";

export default function Layout() {
  const [showSignUpBox, setShowSignUpBox] = useState(false);
  const location = useLocation();

  // Check if current route is music school related
  const isMusicSchoolRoute = location.pathname.startsWith("/tunes-academy");

  return (
    <>
      <NavigationBar setShowSignUpBox={setShowSignUpBox} />
      {showSignUpBox && (
        <SignUpBox>
          <SignUpForm setShowSignUpBox={setShowSignUpBox} />
        </SignUpBox>
      )}
      <Outlet />

      {/* Conditionally render footer based on route */}
      {isMusicSchoolRoute ? <Tunes_Academy_Footer /> : <Footer />}
    </>
  );
}
