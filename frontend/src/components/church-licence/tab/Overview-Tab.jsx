import React from "react";
import { Award, Users, BookOpen, FileText } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Overview_Tab({ activeTab }) {
  return (
    <>
      {activeTab === "overview" && (
        <div className="scroll-animate opacity-0 translate-y-10">
          <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4">
              About Our Church Licensing
            </h2>
            <p className="text-[#E6D28C]/90 mb-6 text-sm sm:text-base leading-relaxed">
              Our Church Copyright License provides legal coverage for churches
              to reproduce and use copyrighted worship songs in their services
              and activities. With access to over 200,000 songs from major
              Christian publishers, your church can legally project lyrics,
              print songs in bulletins, create custom arrangements, and more.
            </p>
            <p className="text-[#E6D28C]/90 mb-6 text-sm sm:text-base leading-relaxed">
              We understand the importance of worship in church life, and our
              mission is to make copyright compliance simple and affordable for
              churches of all sizes. Our licenses are designed to give you peace
              of mind while supporting the songwriters and publishers who create
              the worship music your congregation loves.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-[#E6D28C] mb-4">
                Why Choose Our License?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)]">
                  <div className="text-[#D4AF37] mb-3">
                    <Award size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-[#E6D28C] mb-2">
                    Comprehensive Coverage
                  </h4>
                  <p className="text-[#E6D28C]/80 text-sm">
                    Our licenses provide broad coverage for all your church's
                    worship needs in one simple solution.
                  </p>
                </div>
                <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)]">
                  <div className="text-[#D4AF37] mb-3">
                    <Users size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-[#E6D28C] mb-2">
                    Affordable for All Churches
                  </h4>
                  <p className="text-[#E6D28C]/80 text-sm">
                    Tiered pricing based on church size ensures even small
                    churches can afford proper licensing.
                  </p>
                </div>
                <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)]">
                  <div className="text-[#D4AF37] mb-3">
                    <BookOpen size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-[#E6D28C] mb-2">
                    Extensive Song Catalog
                  </h4>
                  <p className="text-[#E6D28C]/80 text-sm">
                    Access to over 200,000 worship songs from all major
                    Christian music publishers.
                  </p>
                </div>
                <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)]">
                  <div className="text-[#D4AF37] mb-3">
                    <FileText size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-[#E6D28C] mb-2">
                    Easy Compliance
                  </h4>
                  <p className="text-[#E6D28C]/80 text-sm">
                    Simple reporting and management tools make copyright
                    compliance straightforward.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-[#E6D28C]/90 mb-4">
                For full details about our license terms and conditions:
              </p>
              <NavLink
                to={"/church-copyright-licence-terms-of-agreement"}
                className={
                  "inline-block bg-transparent border border-[#E6D28C] text-[#E6D28C] px-6 py-3 rounded-full text-base font-bold hover:bg-[#E6D28C]/10 transition-all duration-300"
                }
              >
                View License Agreement
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
