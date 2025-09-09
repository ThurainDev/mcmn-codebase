import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const desktopNavBarItems = [
  {
    label: "Mail",
    to: "mailto:myanmarchristianmusicnetwork@gmail.com",
  },
  {
    label: "Phone",
    to: "tel:+959799901085",
  },
];

export default function NavBar_1_Section({ scrolled, setShowSignUpBox }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`transition-all duration-300 flex items-center justify-between lg:justify-end gap-2 lg:gap-6 padding py-2 font-jetbrains
    ${
      scrolled
        ? "bg-black/90 backdrop-blur-sm text-[#E6D28C]"
        : "bg-black text-[#E6D28C]"
    }`}
      >
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1 p-2 hover:text-[#D4AF37] transition-colors duration-300 z-50 relative"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-current transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-5 h-0.5 bg-current transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-5 h-0.5 bg-current transition-transform duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Navigation Bar */}
        <ul className="hidden lg:flex items-center gap-3 md:gap-6">
          {/* {desktopNavBarItems.length && desktopNavBarItems.map((item, index) => ())} */}
          {/* Mail */}
          <Link to="mailto:myanmarchristianmusicnetwork@gmail.com">
            <div className="flex items-center gap-1 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="transition-transform duration-300 group-hover:scale-110 group-hover:text-[#D4AF37]"
              >
                <path
                  fill="currentColor"
                  d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM20 6.885l-7.552 4.944q-.106.055-.214.093q-.109.037-.234.037t-.234-.037t-.214-.093L4 6.884v10.5q0 .27.173.443t.443.173h14.769q.269 0 .442-.173t.173-.443zM12 11l7.692-5H4.308zM4 6.885v.211v-.811v.034V6v.32v-.052v.828.zV18z"
                />
              </svg>
              <li className="text-sm xl:text-base hover:text-[#D4AF37] transition-colors duration-300 truncate max-w-[200px] xl:max-w-none">
                myanmarchristianmusicnetwork@gmail.com
              </li>
            </div>
          </Link>

          {/* Phone */}
          <div className="flex items-center gap-1 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="transition-transform duration-300 group-hover:scale-110 group-hover:text-[#D4AF37]"
            >
              <path
                fill="currentColor"
                d="M18.93 20q-2.528 0-5.184-1.266t-4.935-3.555t-3.545-4.935T4 5.07q0-.458.3-.763T5.05 4h2.473q.408 0 .712.257t.411.659L9.142 7.3q.07.42-.025.733t-.333.513L6.59 10.592q.616 1.117 1.361 2.076t1.59 1.817q.87.87 1.874 1.62q1.004.749 2.204 1.414l2.139-2.177q.244-.263.549-.347q.304-.083.674-.033l2.103.43q.408.1.662.411t.254.712v2.435q0 .45-.306.75t-.763.3M6.12 9.654l1.92-1.765q.095-.077.124-.212q.03-.135-.01-.25l-.443-2.12q-.039-.153-.135-.23T7.327 5H5.275q-.115 0-.192.077t-.077.192q.029 1.025.321 2.14t.794 2.245m8.45 8.334q1.014.502 2.16.743q1.148.24 2 .257q.115 0 .192-.077T19 18.72v-2.008q0-.153-.077-.25q-.077-.096-.23-.134l-1.85-.379q-.116-.039-.203-.01q-.086.03-.182.125zm0 0"
              />
            </svg>
            <li className="text-sm xl:text-base hover:text-[#D4AF37] transition-colors duration-300">
              +959 799901085
            </li>
          </div>

          {/* Admin Link */}
          {/* <div className="flex items-center gap-1 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="transition-transform duration-300 group-hover:scale-110 group-hover:text-[#D4AF37]"
            >
              <path
                fill="currentColor"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
            <li className="text-sm xl:text-base hover:text-[#D4AF37] transition-colors duration-300">
              <NavLink to="/admin">Admin</NavLink>
            </li>
          </div> */}

          {/* Sign Up */}
          {/* <button
            onClick={() => setShowSignUpBox(true)}
            className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black px-3 py-1.5 lg:px-4 lg:py-2 
            rounded-lg text-sm lg:text-base font-medium lg:font-semibold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105 
            focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-black"
          >
            Sign Up
          </button> */}
        </ul>

        {/* Mobile/Tablet Quick Actions */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Contact Icons Only */}
          <a
            href="mailto:myanmarchristianmusicnetwork@gmail.com"
            className="p-2 hover:text-[#D4AF37] transition-colors duration-300"
            title="Email us"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM20 6.885l-7.552 4.944q-.106.055-.214.093q-.109.037-.234.037t-.234-.037t-.214-.093L4 6.884v10.5q0 .27.173.443t.443.173h14.769q.269 0 .442-.173t.173-.443zM12 11l7.692-5H4.308zM4 6.885v.211v-.811v.034V6v.32v-.052v.828.zV18z"
              />
            </svg>
          </a>

          <a
            href="tel:+959799901085"
            className="p-2 hover:text-[#D4AF37] transition-colors duration-300"
            title="Call us"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.93 20q-2.528 0-5.184-1.266t-4.935-3.555t-3.545-4.935T4 5.07q0-.458.3-.763T5.05 4h2.473q.408 0 .712.257t.411.659L9.142 7.3q.07.42-.025.733t-.333.513L6.59 10.592q.616 1.117 1.361 2.076t1.59 1.817q.87.87 1.874 1.62q1.004.749 2.204 1.414l2.139-2.177q.244-.263.549-.347q.304-.083.674-.033l2.103.43q.408.1.662.411t.254.712v2.435q0 .45-.306.75t-.763.3M6.12 9.654l1.92-1.765q.095-.077.124-.212q.03-.135-.01-.25l-.443-2.12q-.039-.153-.135-.23T7.327 5H5.275q-.115 0-.192.077t-.077.192q.029 1.025.321 2.14t.794 2.245m8.45 8.334q1.014.502 2.16.743q1.148.24 2 .257q.115 0 .192-.077T19 18.72v-2.008q0-.153-.077-.25q-.077-.096-.23-.134l-1.85-.379q-.116-.039-.203-.01q-.086.03-.182.125zm0 0"
              />
            </svg>
          </a>

          {/* Mobile Sign Up Button */}
          {/* <button
            onClick={() => setShowSignUpBox(true)}
            className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black px-3 py-1.5 
            rounded-lg text-sm font-medium hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105 
            focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-black"
          >
            Sign Up
          </button> */}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[52px] z-40 transition-all duration-500 ease-in-out transform ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`relative bg-[#111] border-b-2 border-[#E6D28C]/30 shadow-2xl ${
            scrolled ? "backdrop-blur-md" : ""
          }`}
        >
          {/* Decorative top border */}
          <div className="h-1 bg-gradient-to-r from-[#E6D28C] via-[#D4AF37] to-[#E6D28C]"></div>

          <div className="padding py-6 space-y-6">
            {/* Welcome Section */}
            <div className="text-center pb-4 border-b border-[#E6D28C]/20">
              <h3 className="text-lg font-semibold text-[#E6D28C] mb-1">
                Myanmar Christian Music Network
              </h3>
              <p className="text-sm text-[#E6D28C]/70">Connect with us</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-[#D4AF37] uppercase tracking-wider">
                Contact Information
              </h4>

              {/* Email Card */}
              <Link
                to="mailto:myanmarchristianmusicnetwork@gmail.com"
                className="flex items-center gap-4 p-4 bg-black rounded-xl border border-[#E6D28C]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
              >
                <div className="p-2 bg-[#E6D28C]/20 rounded-lg group-hover:bg-[#D4AF37]/30 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    <path
                      fill="currentColor"
                      d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM20 6.885l-7.552 4.944q-.106.055-.214.093q-.109.037-.234.037t-.234-.037t-.214-.093L4 6.884v10.5q0 .27.173.443t.443.173h14.769q.269 0 .442-.173t.173-.443zM12 11l7.692-5H4.308zM4 6.885v.211v-.811v.034V6v.32v-.052v.828.zV18z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#E6D28C]/70 mb-1">Email us</p>
                  <p className="text-sm text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors duration-300 break-all">
                    myanmarchristianmusicnetwork@gmail.com
                  </p>
                </div>
              </Link>

              {/* Phone Card */}
              <Link
                to="tel:+959799901085"
                className="flex items-center gap-4 p-4 bg-black rounded-xl border border-[#E6D28C]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
              >
                <div className="p-2 bg-[#E6D28C]/20 rounded-lg group-hover:bg-[#D4AF37]/30 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    <path
                      fill="currentColor"
                      d="M18.93 20q-2.528 0-5.184-1.266t-4.935-3.555t-3.545-4.935T4 5.07q0-.458.3-.763T5.05 4h2.473q.408 0 .712.257t.411.659L9.142 7.3q.07.42-.025.733t-.333.513L6.59 10.592q.616 1.117 1.361 2.076t1.59 1.817q.87.87 1.874 1.62q1.004.749 2.204 1.414l2.139-2.177q.244-.263.549-.347q.304-.083.674-.033l2.103.43q.408.1.662.411t.254.712v2.435q0 .45-.306.75t-.763.3M6.12 9.654l1.92-1.765q.095-.077.124-.212q.03-.135-.01-.25l-.443-2.12q-.039-.153-.135-.23T7.327 5H5.275q-.115 0-.192.077t-.077.192q.029 1.025.321 2.14t.794 2.245m8.45 8.334q1.014.502 2.16.743q1.148.24 2 .257q.115 0 .192-.077T19 18.72v-2.008q0-.153-.077-.25q-.077-.096-.23-.134l-1.85-.379q-.116-.039-.203-.01q-.086.03-.182.125zm0 0"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#E6D28C]/70 mb-1">Call us</p>
                  <p className="text-sm text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors duration-300">
                    +959 799901085
                  </p>
                </div>
              </Link>
            </div>

            {/* Admin Link */}
            {/* <div className="pt-2">
              <h4 className="text-sm font-medium text-[#D4AF37] uppercase tracking-wider mb-3">
                Quick Access
              </h4>
              <NavLink
                to="/admin"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#D4AF37]/10 to-[#E6D28C]/10 rounded-xl border border-[#D4AF37]/20 hover:border-[#E6D28C]/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="p-2 bg-[#D4AF37]/20 rounded-lg group-hover:bg-[#E6D28C]/30 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-[#D4AF37] group-hover:text-[#E6D28C] transition-colors duration-300"
                  >
                    <path
                      fill="currentColor"
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#D4AF37] group-hover:text-[#E6D28C] transition-colors duration-300 font-medium">
                    Admin Panel
                  </p>
                  <p className="text-xs text-[#D4AF37]/70 group-hover:text-[#E6D28C]/70 transition-colors duration-300">
                    Manage content
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="text-[#D4AF37]/50 group-hover:text-[#E6D28C] group-hover:translate-x-1 transition-all duration-300"
                >
                  <path
                    fill="currentColor"
                    d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"
                  />
                </svg>
              </NavLink>
            </div> */}

            {/* Close Button */}
            <div className="pt-4 border-t border-[#E6D28C]/20">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 text-sm text-[#E6D28C]/70 hover:text-[#D4AF37] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
                  />
                </svg>
                Close Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
