import React, { useState } from "react";
import { contactAPI } from "../../../services/api";

export default function Contact_Form_Section() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    contactType: "general"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await contactAPI.submitContact(formData);
      
      if (response.success) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
          contactType: "general"
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="w-full lg:w-2/3 p-6 md:p-8 bg-[#111] rounded-lg shadow-[0_0_15px_rgba(230,210,140,0.15)] border border-[#E6D28C]/20 hover:shadow-[0_0_20px_rgba(230,210,140,0.3)] transition-all duration-500 transform hover:-translate-y-1">
        <h3 className="text-xl font-semibold mb-6 text-[#E6D28C] border-b border-[#E6D28C]/30 pb-2">
          Send Us a Message
        </h3>
        
        {submitStatus === "success" && (
          <div className="mb-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
            Thank you! Your message has been sent successfully. We'll get back to you soon.
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="mb-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
            Sorry! There was an error sending your message. Please try again.
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-[#E6D28C]/80 mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/50 border border-[#E6D28C]/30 rounded-lg text-[#E6D28C] focus:outline-none focus:border-[#E6D28C] transition-colors"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#E6D28C]/80 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/50 border border-[#E6D28C]/30 rounded-lg text-[#E6D28C] focus:outline-none focus:border-[#E6D28C] transition-colors"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#E6D28C]/80 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-black/50 border border-[#E6D28C]/30 rounded-lg text-[#E6D28C] focus:outline-none focus:border-[#E6D28C] transition-colors"
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#E6D28C]/80 mb-2">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-black/50 border border-[#E6D28C]/30 rounded-lg text-[#E6D28C] focus:outline-none focus:border-[#E6D28C] transition-colors"
              placeholder="Enter subject"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#E6D28C]/80 mb-2">
              Contact Type
            </label>
            <select
              name="contactType"
              value={formData.contactType}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black/50 border border-[#E6D28C]/30 rounded-lg text-[#E6D28C] focus:outline-none focus:border-[#E6D28C] transition-colors"
            >
              <option value="general">General Inquiry</option>
              <option value="song_request">Song Request</option>
              <option value="academy">Music Academy</option>
              <option value="licensing">Licensing</option>
              <option value="distribution">Music Distribution</option>
              <option value="support">Technical Support</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-[#E6D28C]/80 mb-2">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-black/50 border border-[#E6D28C]/30 rounded-lg text-[#E6D28C] focus:outline-none focus:border-[#E6D28C] transition-colors resize-none"
              placeholder="Enter your message"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black font-semibold rounded-lg hover:shadow-[0_0_15px_rgba(230,210,140,0.3)] transition-all duration-300 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </>
  );
}
