import React, { useState } from "react";
import ProfileSection from "./ProfileSection";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";
import { IoLocationSharp } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./Sidebar.css";

const Sidebar = ({ activeNav, setActiveNav }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (nav) => {
    setActiveNav(nav);
    setIsMobileMenuOpen(false); // Close menu after selecting
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={toggleMobileMenu}></div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <ProfileSection />
        <Navigation activeNav={activeNav} setActiveNav={handleNavClick} />
        <SocialLinks />

        {/* Footer logic */}
        <div className="location-footer">
          <div className="location-badge">
            <IoLocationSharp size={12} />
            <span>DUBAI, UAE</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
