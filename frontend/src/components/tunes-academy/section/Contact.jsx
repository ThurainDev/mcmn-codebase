import React, { useState, useEffect } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instrument: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        instrument: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus(""), 3000);
    }, 2000);
  };

  const instruments = [
    "Piano",
    "Guitar",
    "Violin",
    "Drums",
    "Vocal",
    "Bass",
    "Saxophone",
    "Flute",
    "Other",
  ];

  const contactInfo = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="text-[#E6D28C] sm:w-6 sm:h-6"
        >
          <path
            fill="currentColor"
            d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
          />
        </svg>
      ),
      title: "Address",
      content:
        "No.1126(A), Kantharyar 1st street, 35 Quarter, North Dagon Township, Yangon",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="text-[#E6D28C] sm:w-6 sm:h-6"
        >
          <path
            fill="currentColor"
            d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.32.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
          />
        </svg>
      ),
      title: "Phone",
      content: "+959 675917807, +959 428801606",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="text-[#E6D28C] sm:w-6 sm:h-6"
        >
          <path
            fill="currentColor"
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
          />
        </svg>
      ),
      title: "Email",
      content: "tunesacademy.info@gmail.com",
    },
    // {
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="20"
    //       height="20"
    //       viewBox="0 0 24 24"
    //       className="text-[#E6D28C] sm:w-6 sm:h-6"
    //     >
    //       <path
    //         fill="currentColor"
    //         d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"
    //       />
    //     </svg>
    //   ),
    //   title: "Office Hours",
    //   content:
    //     "Monday - Saturday: 9:00 AM - 8:00 PM\nSunday: 2:00 PM - 6:00 PM",
    // },
  ];

  return (
    <div className="scroll-animate opacity-0 translate-y-10">
      <div className="bg-gradient-to-b from-[#1A2151] via-[#1A2151] to-[#141937] rounded-2xl sm:rounded-3xl p-3 sm:p-5 lg:p-8 border border-[#E6D28C]/20 shadow-[0_0_10px_rgba(230,210,140,0.15)] transition-all duration-500">
        <div className="border-[#E6D28C] border-t-2">
          {/* Hero Section */}
          <div className="text-center py-6 sm:py-8 lg:py-10 px-3 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#E6D28C] via-[#F4E4A6] to-[#E6D28C] bg-clip-text text-transparent animate-gradient-x leading-tight">
                Contact Tunes Academy
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
                Ready to start your musical journey? Get in touch with us today
                and discover the joy of music education.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
            <div className="grid grid-cols-1 gap-6 sm:gap-8">
              {/* Contact Information */}
              <div className="w-full">
                <div className="bg-gradient-to-br from-[#1A2151]/80 to-[#141937]/80 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-[#E6D28C]/20 shadow-2xl">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#E6D28C] mb-4 sm:mb-6 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="mr-2 sm:mr-3 animate-pulse w-6 h-6 sm:w-8 sm:h-8"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m3.5 6L12 10.5L8.5 8L12 5.5zm1.5 5.5c0 2.76-2.24 5-5 5s-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5"
                      />
                    </svg>
                    Get in Touch
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-[#0F1429]/30 min-h-[80px] sm:min-h-[100px]"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex-shrink-0 p-2 sm:p-2.5 bg-gradient-to-r from-[#E6D28C]/20 to-[#D4AF37]/20 rounded-lg mt-1">
                          {info.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-semibold text-[#E6D28C] mb-1">
                            {info.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-300 leading-relaxed whitespace-pre-line break-words">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
