import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
// images
import the_city from "../../../assets/images/thecity.JPG";
import bless_myanmar from "../../../assets/images/blessmyanmar.JPG";
import the_heir from "../../../assets/images/theheir.JPG";
import cmcc from "../../../assets/images/cmcc.JPG";
import hwc from "../../../assets/images/hwc.JPG";
import arrow from "../../../assets/images/arrow.JPG";
// modal
import Modal from "../modal/Modal";

const partners = [
  {
    name: "The City Yangon",
    logo: the_city,
    address: "Bawga St, North Okkalapa, Yangon",
    phone: "+959 111 222 333",
    email: "thecityyangon@gmail.com",
    times: ["9 AM", "12 PM", "3 PM"],
    links: {
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
    },
    description:
      "A vibrant community church focused on urban ministry and youth engagement in Yangon.",
    founded: "2015",
    members: "500+",
    events: ["Sunday Worship", "Youth Fellowship", "Community Outreach"],
  },
  {
    name: "Bless Myanmar",
    logo: bless_myanmar,
    address: "Downtown Yangon",
    phone: "+959 987 654 321",
    email: "blessmyanmar@gmail.com",
    times: ["10 AM"],
    links: {
      facebook: "https://facebook.com",
    },
    description:
      "Dedicated to blessing Myanmar through worship, prayer and community service initiatives.",
    founded: "2010",
    members: "300+",
    events: ["Sunday Service", "Prayer Meetings", "Charity Drives"],
  },
  {
    name: "The Heir Children Church",
    logo: the_heir,
    address: "Downtown Yangon",
    phone: "+959 987 654 321",
    email: "theheirchildren@gmail.com",
    times: ["10 AM"],
    links: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
    description:
      "Focused on children's ministry and raising the next generation of believers in Myanmar.",
    founded: "2018",
    members: "200+",
    events: ["Children's Service", "Family Worship", "Youth Programs"],
  },
  {
    name: "Cornerstone Myanmar Christian Church",
    logo: cmcc,
    address: "Downtown Yangon",
    phone: "+959 987 654 321",
    email: "blessmyanmar@gmail.com",
    times: ["10 AM"],
    links: {
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
    },
    description:
      "Building a strong foundation of faith through biblical teaching and community engagement.",
    founded: "2008",
    members: "450+",
    events: ["Sunday Worship", "Bible Study", "Community Service"],
  },
  {
    name: "The Arrow ",
    logo: arrow,
    address: "Downtown Yangon",
    phone: "+959 987 654 321",
    email: "blessmyanmar@gmail.com",
    times: ["10 AM"],
    links: {
      facebook: "https://facebook.com",
    },
    description:
      "Pointing the way to Christ through innovative ministry approaches and contemporary worship.",
    founded: "2019",
    members: "150+",
    events: ["Contemporary Worship", "Youth Nights", "Evangelism Programs"],
  },
  {
    name: "Hallahlujah Worship Center",
    logo: hwc,
    address: "Downtown Yangon",
    phone: "+959 987 654 321",
    email: "blessmyanmar@gmail.com",
    times: ["10 AM"],
    links: {
      facebook: "https://facebook.com",
    },
    description:
      "Centered on worship excellence and creating an atmosphere of praise in the heart of Myanmar.",
    founded: "2012",
    members: "350+",
    events: ["Worship Services", "Praise Nights", "Worship Training"],
  },
  // Add more partners as needed
];

export default function Partner_Organizations_Section({
  activeTab,
  selectedPartner,
  setSelectedPartner,
  handleCardClick,
}) {
  return (
    <>
      {activeTab === "partners" && (
        <div className="scroll-animate opacity-0 translate-y-10">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
                Our Partner Organizations
              </h2>
              <p className="text-[#E6D28C]/90 mt-4 font-jetbrains text-sm sm:text-base leading-relaxed">
                Myanmar Christian Music Network collaborates with churches and
                organizations across the country to promote excellence in
                worship and music ministry. Our partners share our vision of
                using music to glorify God and build communities of faith.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {partners.length &&
                partners.map((partner, index) => (
                  <div
                    key={index}
                    className="bg-[#111] rounded-xl overflow-hidden flex flex-col cursor-pointer transition duration-300 transform hover:shadow-[0_0_15px_rgba(230,210,140,0.15)] hover:scale-105 border border-[#E6D28C]/10"
                    style={{ width: "280px", height: "330px" }}
                    onClick={() => handleCardClick(partner)}
                  >
                    <div className="flex-1 flex items-center justify-center p-6 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="object-contain max-h-full max-w-full rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                      />
                    </div>
                    <div className="bg-gradient-to-r from-[#0a0a0a] to-[#111] text-center py-4 px-3 border-t border-[#E6D28C]/10">
                      <h3 className="text-[#E6D28C] text-lg font-semibold mb-1">
                        {partner.name}
                      </h3>
                      <p className="text-[#E6D28C]/70 text-sm">
                        {partner.address}
                      </p>
                      <div className="flex justify-center gap-3 mt-3 text-[#E6D28C]/60">
                        {partner.links?.facebook && (
                          <FaFacebook className="hover:text-[#E6D28C] transition-colors duration-300" />
                        )}
                        {partner.links?.youtube && (
                          <FaYoutube className="hover:text-[#E6D28C] transition-colors duration-300" />
                        )}
                        {partner.links?.instagram && (
                          <FaInstagram className="hover:text-[#E6D28C] transition-colors duration-300" />
                        )}
                        {partner.links?.tiktok && (
                          <FaTiktok className="hover:text-[#E6D28C] transition-colors duration-300" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      <Modal
        selectedPartner={selectedPartner}
        setSelectedPartner={setSelectedPartner}
      />
    </>
  );
}
