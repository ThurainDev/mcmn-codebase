import React, { useState } from "react";
import { X } from "lucide-react";

export default function SignUpForm({ setShowSignUpBox }) {
  const [formType, setFormType] = useState("signin"); // "signin" or "signup"
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Close the modal after submission (or you might want to show a success message)
    // setShowSignUpBox(false);
  };

  return (
    <div className="p-6 md:p-8">
      {/* Header with close button */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
            {formType === "signin" ? "Welcome Back" : "Join MCMN"}
          </h1>
          <p className="text-[#E6D28C]/70 text-sm mt-1">
            {formType === "signin"
              ? "Sign in to access your account"
              : "Create your account to get started"}
          </p>
        </div>
        <button
          onClick={() => setShowSignUpBox(false)}
          className="rounded-full p-1.5 bg-black/30 text-[#E6D28C] hover:bg-[#E6D28C]/10 transition-colors duration-300"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name field - only for signup */}
        {formType === "signup" && (
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#E6D28C]"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-2.5 bg-black/50 border border-[#E6D28C]/30 rounded-xl text-[#E6D28C] placeholder-[#E6D28C]/40 focus:outline-none focus:ring-2 focus:ring-[#E6D28C]/50 focus:border-transparent transition-all duration-300"
            />
          </div>
        )}

        {/* Email field */}
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#E6D28C]"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2.5 bg-black/50 border border-[#E6D28C]/30 rounded-xl text-[#E6D28C] placeholder-[#E6D28C]/40 focus:outline-none focus:ring-2 focus:ring-[#E6D28C]/50 focus:border-transparent transition-all duration-300"
          />
        </div>

        {/* Password field */}
        <div className="space-y-1.5">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[#E6D28C]"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
            className="w-full px-4 py-2.5 bg-black/50 border border-[#E6D28C]/30 rounded-xl text-[#E6D28C] placeholder-[#E6D28C]/40 focus:outline-none focus:ring-2 focus:ring-[#E6D28C]/50 focus:border-transparent transition-all duration-300"
          />
        </div>

        {/* Confirm Password field - only for signup */}
        {formType === "signup" && (
          <div className="space-y-1.5">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-[#E6D28C]"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
              className="w-full px-4 py-2.5 bg-black/50 border border-[#E6D28C]/30 rounded-xl text-[#E6D28C] placeholder-[#E6D28C]/40 focus:outline-none focus:ring-2 focus:ring-[#E6D28C]/50 focus:border-transparent transition-all duration-300"
            />
          </div>
        )}

        {/* Terms checkbox - only for signup */}
        {formType === "signup" && (
          <div className="flex items-start mt-4">
            <div className="flex items-center h-5">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="w-4 h-4 border border-[#E6D28C]/30 rounded bg-black/50 focus:ring-[#E6D28C]/50 focus:ring-2"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="agreeToTerms" className="text-[#E6D28C]/70">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-[#E6D28C] hover:text-[#D4AF37] underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-[#E6D28C] hover:text-[#D4AF37] underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>
        )}

        {/* Forgot password link - only for signin */}
        {formType === "signin" && (
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-[#E6D28C]/70 hover:text-[#E6D28C] transition-colors duration-300"
            >
              Forgot password?
            </a>
          </div>
        )}

        {/* Submit button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black rounded-xl text-base font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-[1.02]"
          >
            {formType === "signin" ? "Sign In" : "Create Account"}
          </button>
        </div>

        {/* Social login section */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E6D28C]/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#111] text-[#E6D28C]/60">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2.5 px-4 border border-[#E6D28C]/20 rounded-xl bg-black/30 text-sm font-medium text-[#E6D28C] hover:bg-[#E6D28C]/10 transition-all duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#E6D28C"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#E6D28C"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#E6D28C"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#E6D28C"
                />
              </svg>
              Google
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center py-2.5 px-4 border border-[#E6D28C]/20 rounded-xl bg-black/30 text-sm font-medium text-[#E6D28C] hover:bg-[#E6D28C]/10 transition-all duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
                  fill="#E6D28C"
                />
              </svg>
              Facebook
            </button>
          </div>
        </div>

        {/* Toggle between signin and signup */}
        <div className="text-center mt-6">
          <p className="text-sm text-[#E6D28C]/70">
            {formType === "signin"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() =>
                setFormType(formType === "signin" ? "signup" : "signin")
              }
              className="text-[#E6D28C] hover:text-[#D4AF37] font-medium transition-colors duration-300"
            >
              {formType === "signin" ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
